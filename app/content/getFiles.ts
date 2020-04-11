import * as fs from 'fs'
import { files } from '~/app/content/index2'
const parseMarkdown = require('front-matter-markdown')

export function getFiles(dir) {
  let files: Array<files> = []

  // synchronous i/o function is better at performance
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
