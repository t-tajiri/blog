import * as fs from 'fs'
const parseMarkdown = require('front-matter-markdown')

export interface files {
  date: Date,
  slug: string
}

export function getFiles(dir) {
  // eslint-disable-next-line prefer-const
  let files: Array<files> = []

  const f = fs.readdirSync(dir)

  f.forEach((file) => {
    const markdownFile = fs.readFileSync(`app/content/blog/${file}`, 'utf-8')
    const fileContents = parseMarkdown(markdownFile)

    const date = fileContents.date
    const slug = file.split('.')[0].toString()

    const obj = { date, slug }

    files.push(obj)
  })

  return files
}

export function writeBlog() {
  const jsonContent = JSON.stringify('test')
  fs.writeFile('app/content/blogs.json', jsonContent, (err) => {
    if (err) {
      console.error(err.message)
    }
  })
}

writeBlog()
