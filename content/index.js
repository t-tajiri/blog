const fs = require('fs')
const parseMarkdown = require('front-matter-markdown')

const getFiles = (dir) => {
  const files = fs.readdirSync(dir)
  let fileList = []

  files.forEach((file) => {
    if (fs.statSync(dir + file).isDirectory()) {
      fileList = getFiles(dir + file + '/')
    } else {
      const markdownFile = fs.readFileSync(`content/blog/${file}`, 'utf-8')
      const fileContents = parseMarkdown(markdownFile)
      const date = fileContents.date
      const slug = file
        .split('.')
        .slice(0, -1)
        .join('.')

      const obj = { date, slug }

      fileList.push(obj)
    }
  })

  return fileList
}

const writeBlogs = async () => {
  const fileArray = await getFiles('content/blog/')
  const sortedArray = await fileArray.sort((a, b) => {
    return a.date.getTime() - b.date.getTime()
  })

  const reversedArray = await sortedArray.reverse()
  const jsonContent = await JSON.stringify(reversedArray)

  fs.writeFile('content/blogs.json', jsonContent, (err) => {
    if (err) {
      throw new Error(err.toString())
    }
  })
}

writeBlogs()
