/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/camelcase */
const _ = require('lodash')
const { forEach } = require('p-iteration') // awesome library for promise iteration with async/await!
const path = require('path')
const fs = require('fs-extra')
const { services, projects, images } = require('../src/assets/image-list/image-list')

const src = 'pix'

// async function getFiles(dir) {
//   const items = fs.readdirSync(dir)
//   const files = []
//   await forEach(items, async f => {
//     const dirPath = path.join(dir, f)
//     const isDirectory = fs.statSync(dirPath).isDirectory()
//     // console.log(dirPath)
//     if (!isDirectory) {
//       files.push(f)
//     }
//   })
//   return files
// }

// async function fixImageList() {
//   const rootDir = path.join(__dirname, '..', 'content', src)
//   // console.log(rootDir)
//   const allprojects = projects.concat(services)
//   const fixedImageList = []
//   let needFix = false
//   await forEach(allprojects, async p => {
//     const dir = `${rootDir}/${p.folder}`
//     const stored = await getFiles(dir)
//     // console.log(dir, f)
//     await forEach(stored, async f => {
//       const [fname, ext] = f.split('.')
//       const imgProps = images.filter(img => img.name === fname)
//       if (imgProps.length === 0) {
//         console.error(`[ERROR]\t${p.folder}/${fname} is not part of the images list`)
//       }
//       if (imgProps.length > 1) {
//         console.error(
//           `[WARNING] ${p.folder}/${fname} defined multiple times in images list:\n${JSON.stringify(imgProps, null, 3)}`
//         )
//       }
//       if (ext !== 'jpg') {
//         if (!imgProps.ext) {
//           needFix = true
//         } else if (imgProps.ext !== ext) {
//           needFix = true
//         }
//         fixedImageList.push({ ...imgProps[0], ext })
//       } else {
//         fixedImageList.push(imgProps[0])
//       }
//     })
//   })
//   if (needFix) {
//     console.log(`****************images need fix - see below*********************`)
//     console.log(JSON.stringify(_.sortBy(fixedImageList, ['name']), null, 2))
//   }
// }

// async function doit() {
//   await fixImageList()
// }

if (require.main === module) {
  console.log(JSON.stringify(_.sortBy(images, ['name']), null, 2))
}
