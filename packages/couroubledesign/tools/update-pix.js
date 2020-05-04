/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('fs-extra')
// const slash = require('slash')
const { forEach } = require('p-iteration') // awesome library for promise iteration with async/await!
const { services, projects } = require('../src/assets/image-list/image-list')

const src = 'pix_new/raw'
const dst = 'pix'

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
async function updatePixDirectory() {
  const rootDir = path.join(__dirname, '..', 'content', src)
  const dstRootDir = path.join(__dirname, '..', 'content', dst)
  // console.log(rootDir)
  await iterateDir(rootDir, async (dir, f) => {
    // console.log(dir, f)
    const fname = f.split('.')[0]
    const matches = services.concat(projects).filter(s => s.images.includes(fname))
    if (matches.length === 0) {
      // console.log(`[WARNING]\t${dir}/${f} is not associated to a service or a project, ignoring it...`)
      return
    }
    matches.forEach(p => {
      if (!p.folder) {
        console.error(`${p.project} does not have a folder name`)
      }
      const dstDir = `${dstRootDir}/${p.folder}`
      const fixedExt = f.replace('jpeg', 'jpg').replace('JPG', 'jpg')
      try {
        fs.ensureDirSync(dstDir)
        fs.copySync(`${dir}/${f}`, `${dstDir}/${fixedExt}`)
        // console.log(`[INFO]\tcopied ${dir}/${f} to ${dstDir}/${fixedExt}`)
      } catch (err) {
        console.error(err)
      }
    })
  })
}

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
async function checkProjects() {
  const dstRootDir = path.join(__dirname, '..', 'content', dst)
  projects.concat(services).forEach(async p => {
    const storedRaw = await getFiles(`${dstRootDir}/${p.folder}`)
    const stored = storedRaw.map(img => img.split('.')[0])
    const missing = p.images.filter(e => !stored.includes(e))
    if (missing.length > 0) {
      console.error(`[ERROR]\tmissing images for ${p.folder}:\n\t${JSON.stringify(missing, null, 2)}`)
    }
    const notused = stored.filter(e => !p.images.includes(e))
    if (notused.length > 0) {
      console.error(`[WARNING]\tnot-used images for ${p.folder}:\n\t${JSON.stringify(notused, null, 2)}`)
    }
  })
}
async function updatePixDirectoryTop() {
  try {
    await updatePixDirectory()
    await checkProjects()
  } catch (e) {
    console.error(e)
  }
  return null
}
if (require.main === module) {
  updatePixDirectoryTop()
}
