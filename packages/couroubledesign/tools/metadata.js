/* eslint-disable @typescript-eslint/camelcase */
// References:
// https://iptc.org/standards/photo-metadata/quick-guide-to-iptc-photo-metadata-and-google-images/
// https://getpmd.iptc.org/getiptcpmd.html
// https://github.com/photostructure/exiftool-vendored.js

/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const fs = require('fs-extra')
const sharp = require('sharp')
const { forEach } = require('p-iteration') // awesome library for promise iteration with async/await!
const exiftoolVendored = require('exiftool-vendored')

const { exiftool } = exiftoolVendored

const { services, projects, images } = require('../src/assets/image-list/image-list')

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

function getTags(projectProps, imgProps) {
  const authorTags = {
    Artist: creator,
    Copyright: projectProps.copyright || copyright_default,
    CopyrightNotice: projectProps.copyright || copyright_default,
    CopyrightFlag: 'true',
    // URL_List: ['http://www.dmgdesignsf.com/'],
    // WebStatement: 'TBD', // 'http://creativecommons.org/licenses/by-nc-sa/3.0/at/',
    Credit: projectProps.company || creator,
    // City: 'San Francisco',
    // Country: 'United States',
    // CountryCode: 'US',
    Creator: [projectProps.company || creator],
    Rights: projectProps.copyright || copyright_default
    // UsageTerms: 'TBD' // Creative Commons - by-nc-sa/3.0/at/
    // CreatorContactInfo: {
    //   CiAdrCity: 'San Francisco',
    //   CiAdrCtry: 'United States (US)',
    //   CiEmailWork: 'maxime@dmgdesignsf.com',
    //   CiUrlWork: 'www.dmgdesignsf.com'
    // }
  }
  return {
    ...authorTags,
    Title: imgProps.title || projectProps.project,
    ImageDescription: imgProps.title || projectProps.project,
    // Caption: imgProps.caption,
    // Subtitle: caption,
    City: location.city,
    City2: location.city,
    Country: 'United States',
    CountryCode: 'US',
    'Province-State': location.state,
    LocationName: location.address,
    ContentLocationName: location.address,
    GPSLatitude: location.GPSLatitude,
    GPSLatitudeRef: location.GPSLatitudeRef,
    GPSLongitude: location.GPSLongitude,
    GPSLongitudeRef: location.GPSLongitudeRef,
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

async function getFiles(dir) {
  const items = fs.readdirSync(dir)
  const files = []
  await forEach(items, async f => {
    const dirPath = path.join(dir, f)
    const isDirectory = fs.statSync(dirPath).isDirectory()
    // console.log(dirPath)
    if (!isDirectory) {
      files.push(f)
    }
  })
  return files
}

async function addMetadata() {
  const rootDir = path.join(__dirname, '..', 'content', src)
  // console.log(rootDir)
  const allprojects = projects.concat(services)
  await forEach(allprojects, async p => {
    const dir = `${rootDir}/${p.folder}`
    const stored = await getFiles(dir)
    // console.log(dir, f)
    await forEach(stored, async f => {
      const fname = f.split('.')[0]
      if (f.search('_original') > -1) {
        return
      }
      const imgProps = images.filter(img => img.name === fname)
      if (imgProps.length === 0) {
        console.error(`[ERROR]\t${p.folder}/${fname} is not part of the images list`)
        return
      }
      if (imgProps.length > 1) {
        console.error(`[WARNING]\t${p.folder}/${fname} defined multiple times in images list`)
      }
      const tags = getTags(p, imgProps[0])
      await exiftool.write(path.join(dir, f), tags).catch(err => console.log(`${path.join(dir, f)} error: ${err}`))
      console.log(`${p.folder}/${fname} metadata update done!`)
      // const readtags = await exiftool.read(path.join(dir, f))
      // console.log(`tags = ${JSON.stringify(readtags, null, 2)}`)
    })
  })
  await exiftool.end()
  await forEach(allprojects, async p => {
    const dir = `${rootDir}/${p.folder}`
    const stored = await getFiles(dir)
    // then clean the exiftool generated files
    await forEach(stored, async f => {
      // console.log(dir, f)
      const fext = f.split('.')[1]
      if (fext.search('_original') > -1) {
        fs.removeSync(path.join(dir, f))
      }
    })
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
