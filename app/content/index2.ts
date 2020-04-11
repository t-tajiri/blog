import * as fs from 'fs'
const parseMarkdown = require('front-matter-markdown')

export interface files {
  date: string,
  slug: string
}

export function getFiles(dir) {
  // eslint-disable-next-line prefer-const
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

export function writeBlog() {
  // const files = getFiles('app/content/blog/')
  /* eslint-disable indent */
  const files: Array<files> = [{ date: '2020-04-05T13:20:15.881Z', slug: 'test1' },
                               { date: '2020-04-01T13:50:00.193Z', slug: 'test2' }]
  /* eslint-enable indent */

  files.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
  })

  files.reverse()

  const jsonContent = JSON.stringify(files)
  fs.writeFile('app/content/blogs.json', jsonContent, (err) => {
    if (err) {
      throw new Error(err.message)
    }
  })
}

writeBlog()
