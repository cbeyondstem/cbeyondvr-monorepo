/* eslint-disable @typescript-eslint/camelcase */
// References:
// https://iptc.org/standards/photo-metadata/quick-guide-to-iptc-photo-metadata-and-google-images/
// https://getpmd.iptc.org/getiptcpmd.html
// https://github.com/photostructure/exiftool-vendored.js

/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const fs = require('fs-extra')
const slash = require('slash')
const sharp = require('sharp')
const { forEach } = require('p-iteration') // awesome library for promise iteration with async/await!
const exiftoolVendored = require('exiftool-vendored')

const { exiftool } = exiftoolVendored
const imageList = require('./image-list')

const { imageInfoDict } = imageList
const creator = 'Sabrina Glazebrook'
const copyright = '(c) 2020 Blas Chocolate (http://www.blaschocolate.com/) - Rights reserved'

const authorTags = {
  Artist: creator,
  Copyright: copyright,
  CopyrightNotice: copyright,
  CopyrightFlag: 'true',
  // URL_List: ['http://www.dmgdesignsf.com/'],
  // WebStatement: 'TBD', // 'http://creativecommons.org/licenses/by-nc-sa/3.0/at/',
  Credit: creator,
  // City: 'San Francisco',
  // Country: 'United States',
  // CountryCode: 'US',
  Creator: [creator],
  Rights: copyright
  // UsageTerms: 'TBD' // Creative Commons - by-nc-sa/3.0/at/
  // CreatorContactInfo: {
  //   CiAdrCity: 'San Francisco',
  //   CiAdrCtry: 'United States (US)',
  //   CiEmailWork: 'maxime@dmgdesignsf.com',
  //   CiUrlWork: 'www.dmgdesignsf.com'
  // }
}

function getTags(propsImg) {
  const { title, location } = propsImg
  const { date, address, city, state, GPSLatitude, GPSLatitudeRef, GPSLongitude, GPSLongitudeRef } = location

  return {
    ...authorTags,
    Title: title,
    ImageDescription: title,
    // Caption: caption,
    // Subtitle: caption,
    City: city,
    City2: city,
    Country: 'United States',
    CountryCode: 'US',
    'Province-State': state,
    LocationName: address,
    ContentLocationName: address,
    GPSLatitude,
    GPSLatitudeRef,
    GPSLongitude,
    GPSLongitudeRef,
    DateCreated: `${date}-01-01`
    // CreateDate: `${date}-01-01`
  }
}

async function addMetadata0() {
  exiftool.version().then(version => console.log(`We're running ExifTool v${version}`))
  const file = path.join(__dirname, '_PP_5178.jpg')
  const source = await sharp(file)
  const metadata = await source.metadata()
  const tags = await exiftool.read(file)
  console.log(metadata)
  console.log(tags)
  await exiftool.end()
}

const src = 'pix'

async function iterateDir(dir, callback) {
  const items = fs.readdirSync(dir)
  await forEach(items, async f => {
    const dirPath = path.join(dir, f)
    const isDirectory = fs.statSync(dirPath).isDirectory()
    // console.log(dirPath)
    if (!isDirectory) {
      await callback(dir, f).catch(err => console.log(err.message))
    } else {
      await iterateDir(dirPath, callback)
    }
  })
}
async function addMetadata() {
  const rootDir = path.join(__dirname, '..', 'content', src)
  // console.log(rootDir)
  await iterateDir(rootDir, async (dir, f) => {
    // console.log(dir, f)
    const fname = f.split('.')[0]
    if (f.search('_original') > -1) {
      return
    }
    const category = slash(dir)
      .split('/')
      .reduce((_path, curr) => {
        let newPath = _path
        if (_path === '') {
          if (curr === src) {
            newPath = `${src}`
          }
        } else {
          newPath = `${_path}/${curr}`
        }
        return newPath
      }, '')
      .split('/')[1]
    if (!(category in imageInfoDict)) {
      throw TypeError(`${category} not part of imageInfoDict`)
    }
    if (!(fname in imageInfoDict[category])) {
      throw TypeError(`${category}/${fname} not part of imageInfoDict`)
    }
    const propsImg = imageInfoDict[category][fname]
    //   .split('/')
    // const paths = [__dirname, '..', 'content', ...subdir]
    // fs.mkdirSync(paths.join('/'), { recursive: true })
    const tags = getTags(propsImg)
    await exiftool.write(path.join(dir, f), tags).catch(err => console.log(`${path.join(dir, f)} error: ${err}`))
    console.log(`${category}/${fname} metadata update done!`)
    // const readtags = await exiftool.read(path.join(dir, f))
    // console.log(`tags = ${JSON.stringify(readtags, null, 2)}`)
  })
  await exiftool.end()
  // then clean the exiftool generated files
  await iterateDir(rootDir, async (dir, f) => {
    // console.log(dir, f)
    const fext = f.split('.')[1]
    if (fext.search('_original') > -1) {
      fs.removeSync(path.join(dir, f))
    }
  })
}
async function addMetadataTop() {
  try {
    return await addMetadata()
  } catch (e) {
    console.error(e)
  }
  return null
}
if (require.main === module) {
  addMetadataTop()
}
