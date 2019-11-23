/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

const fs = require('fs')
const slash = require('slash')
const matter = require('gray-matter')
const sgf = require('staged-git-files')

// Get files given by lint-staged (*.md files into staged)

await sgf((err, results) => {
  if (err) {
    console.log(err)
    return
  }
  results.forEach(dirtyPath => {
    // Make sure it will works on windows
    const path = slash(dirtyPath.filename)

    // Only parse blog posts
    if (!path.includes('.md')) {
      return
    }
    if (!path.includes('/content/stories/')) {
      return
    }

    // Get file from file system and parse it with gray-matter
    const orig = fs.readFileSync(path, 'utf-8')
    const parsedFile = matter(orig)

    // Get current date and update `updatedDate` data
    const updatedDate = new Date().toISOString().split('T')[0]
    const updatedData = { ...parsedFile.data, updatedDate }

    // Recompose content and updated data
    const updatedContent = matter.stringify(parsedFile.content, updatedData)

    // Update file
    fs.writeFileSync(path, updatedContent, { encoding: 'utf-8' })
  })
})
