// References:
// https://iptc.org/standards/photo-metadata/quick-guide-to-iptc-photo-metadata-and-google-images/
// https://getpmd.iptc.org/getiptcpmd.html
// https://github.com/photostructure/exiftool-vendored.js

/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const fs = require('fs-extra')
const slash = require('slash')
const sharp = require('sharp')
const exiftoolVendored = require('exiftool-vendored')

const { exiftool } = exiftoolVendored

async function addMetadata() {
  const file = path.join(__dirname, 'demopic1.jpg')
  const source = await sharp(file)
  const metadata = await source.metadata()
  console.log(metadata)
}
if (require.main === module) {
  exiftool.version().then(version => console.log(`We're running ExifTool v${version}`))
  addMetadata()
}
