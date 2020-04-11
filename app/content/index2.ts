import * as fs from 'fs'

export function getFiles(dir) {
  const files = fs.readdirSync(dir)
  files.forEach((file) => {
    // eslint-disable-next-line no-unused-vars
    const markdownFile = fs.readFileSync(`app/content/blog/${file}`, 'utf-8')
  })
  return files
}

export function writeBlog() {
  const jsonContent = JSON.stringify('test')
  fs.writeFile('app/content/blogs.json', jsonContent, (err) => {
    if (err) {
      console.error(err)
    }
  })
}

writeBlog()
