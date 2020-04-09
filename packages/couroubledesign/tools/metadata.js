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
const creator = 'Frederick Corouble'
const copyright_default = '(c) 2020 Courouble Design & Engineering (http://www.couroubledesign.com/) - Rights reserved'
const location = {
  address: '3744 Industrial Avenue, #404',
  city: 'Lakewood',
  state: 'CA',
  zip: '90712',
  GPSLatitude: '33 49 32.1',
  GPSLatitudeRef: 'N',
  GPSLongitude: '118 9 53.4',
  GPSLongitudeRef: 'W'
}
const today = new Date().toISOString().slice(0, 10)


function getTags(description, title, copyright) {
  const authorTags = {
    Artist: creator,
    Copyright: copyright || copyright_default,
    CopyrightNotice: copyright || copyright_default,
    CopyrightFlag: 'true',
    // URL_List: ['http://www.dmgdesignsf.com/'],
    // WebStatement: 'TBD', // 'http://creativecommons.org/licenses/by-nc-sa/3.0/at/',
    Credit: creator,
    // City: 'San Francisco',
    // Country: 'United States',
    // CountryCode: 'US',
    Creator: [creator],
    Rights: copyright || copyright_default
    // UsageTerms: 'TBD' // Creative Commons - by-nc-sa/3.0/at/
    // CreatorContactInfo: {
    //   CiAdrCity: 'San Francisco',
    //   CiAdrCtry: 'United States (US)',
    //   CiEmailWork: 'maxime@dmgdesignsf.com',
    //   CiUrlWork: 'www.dmgdesignsf.com'
    // }
  },
  return {
    ...authorTags,
    Title: title,
    ImageDescription: title,
    // Caption: caption,
    // Subtitle: caption,
    City: location.city,
    City2: location.city,
    Country: 'United States',
    CountryCode: 'US',
    'Province-State': location.state,
    LocationName: location.address,
    ContentLocationName: location.address,
    GPSLatitude:location.GPSLatitude,
    GPSLatitudeRef:location.GPSLatitudeRef,
    GPSLongitude:location.GPSLongitude,
    GPSLongitudeRef:location.GPSLongitudeRef,
    DateCreated: `${today}`
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
    const {title, copyright, images} = imageInfoDict[category]
    //   .split('/')
    // const paths = [__dirname, '..', 'content', ...subdir]
    // fs.mkdirSync(paths.join('/'), { recursive: true })
    const tags = getTags(images[fname], title, copyright)
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
