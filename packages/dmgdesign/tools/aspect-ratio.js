/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const fs = require('fs-extra')
const slash = require('slash')
const sharp = require('sharp')

const src = 'pix'
const dest = 'pix'
async function iterateDir(dir, callback) {
  const items = fs.readdirSync(dir)
  await items.forEach(async f => {
    const dirPath = path.join(dir, f)
    const isDirectory = fs.statSync(dirPath).isDirectory()
    // console.log(dirPath)
    if (!isDirectory) {
      await callback(dir, f)
    } else {
      await iterateDir(dirPath, callback)
    }
  })
}
async function transformImages() {
  const rootDir = path.join(__dirname, '..', 'content', src)
  // console.log(rootDir)
  await iterateDir(rootDir, async (dir, f) => {
    // console.log(dir, f)
    const fname = f.split('.')[0]
    const subdir = slash(dir)
      .split('/')
      .reduce((_path, curr) => {
        let newPath = _path
        if (_path === '') {
          if (curr === src) {
            newPath = `${dest}_landscape`
          }
        } else {
          newPath = `${_path}/${curr}`
        }
        return newPath
      }, '')
      .split('/')
    const source = await sharp(path.join(dir, f))
    const paths = [__dirname, '..', 'content', ...subdir]
    const landscape = paths.join('/')
    const portrait = landscape.replace(`${dest}_landscape`, `${dest}_portrait`)
    fs.mkdirSync(landscape, { recursive: true })
    fs.mkdirSync(portrait, { recursive: true })
    const { width, height } = await source.metadata()
    console.log(width, height)
    if (width > height) {
      // landscape - crop to 3:2
      if (height > (width * 2) / 3) {
        await source
          .resize(width, Math.floor((width * 2) / 3), {
            withoutEnlargement: true,
            fit: 'cover'
          })
          .jpeg()
          .withMetadata()
          .toFile(path.join(landscape, `${fname}.jpg`))
        await source
          .resize(width, Math.floor((width * 2) / 3), {
            withoutEnlargement: true,
            fit: 'cover'
          })
          .resize(Math.floor((height * 5) / 7), height, {
            withoutEnlargement: true,
            fit: 'contain',
            background: '#2d2d2d'
          })
          .jpeg()
          .withMetadata()
          .toFile(path.join(portrait, `${fname}.jpg`))
      } else {
        // height < (width * 2) / 3) - very wide pix
        const widened = await source.resize(width * 2, height * 2, {
          fit: 'fill'
        })
        // await widened.jpeg().toFile(path.join(landscape, `${fname}_3x2_widened.jpg`))
        const buffer = await widened.jpeg().toBuffer()
        const widened2 = await sharp(buffer)
        // const widened3 = await sharp(path.join(landscape, `${fname}_3x2_widened.jpg`))
        const { width: width2, height: height2 } = await widened2.metadata()

        const resized = await widened2.resize(Math.floor((height2 * 3) / 2), height2, {
          withoutEnlargement: true,
          fit: 'contain',
          background: '#2d2d2d'
        })
        // const { widthW, heightW } = await widened.toFormat('jpeg').metadata()
        console.log(`widened ${fname} to ${width2}x${height2}`)
        resized
          .jpeg()
          .withMetadata()
          .toFile(path.join(landscape, `${fname}.jpg`))
        await resized
          .resize(Math.floor((height * 5) / 7), height, {
            withoutEnlargement: true,
            fit: 'contain',
            background: '#2d2d2d'
          })
          .jpeg()
          .withMetadata()
          .toFile(path.join(portrait, `${fname}.jpg`))
      }
    } else {
      paths.push(`${fname}.jpg`)
      // portrait - crop to 5:7
      await source
        .resize(width, Math.floor((width * 7) / 5), {
          withoutEnlargement: true,
          fit: 'cover'
        })
        .jpeg()
        .withMetadata()
        .toFile(path.join(portrait, `${fname}.jpg`))
      await source
        .resize(width, Math.floor((width * 7) / 5), {
          withoutEnlargement: true,
          fit: 'cover'
        })
        .resize(width, Math.floor((width * 2) / 3), {
          withoutEnlargement: true,
          fit: 'contain',
          background: '#2d2d2d'
        })
        .jpeg()
        .withMetadata()
        .toFile(path.join(landscape, `${fname}.jpg`))
    }
  })
}
if (require.main === module) {
  transformImages()
}
