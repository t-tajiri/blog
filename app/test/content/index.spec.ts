import { writeBlog, getFiles } from '../../../app/content/index2'

const fs = require('fs')
const parseMarkdown = require('front-matter-markdown')

jest.mock('fs')
jest.mock('front-matter-markdown')

describe('content/index.js', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('writeBlog', () => {
    it('writes json content', () => {
      writeBlog()

      /* eslint-disable indent */
      expect(fs.writeFile).toHaveBeenCalledWith('app/content/blogs.json',
        expect.any(String),
        expect.any(Function))
      /* eslint-enable indent */
    })
  })

  describe('getFiles', () => {
    it('reads all file', () => {
      const fileList = ['file1', 'file2', 'file3']

      fs.readdirSync.mockReturnValue(fileList)
      parseMarkdown.mockReturnValue(new Date())

      getFiles(fileList)

      expect(fs.readFileSync).toHaveBeenCalledTimes(3)
    })

    it('parses all markdown file', () => {
      const markdownFiles = ['file1.md', 'file2.md', 'file3.md']

      fs.readdirSync.mockReturnValue(markdownFiles)
      /* eslint-disable indent */
      fs.readFileSync.mockReturnValueOnce(markdownFiles[0])
                     .mockReturnValueOnce(markdownFiles[1])
                     .mockReturnValueOnce(markdownFiles[2])
      /* eslint-enable indent */
      parseMarkdown.mockReturnValue(new Date())

      getFiles(markdownFiles)

      // check parsed all markdown files
      markdownFiles.forEach((file, index) => {
        expect(parseMarkdown).toHaveBeenNthCalledWith(index + 1, file)
      })
    })

    it('returns array of all markdown titles and date', () => {
      const markdownFiles = ['file1.md', 'file2.md', 'file3.md']
      const contentDate = new Date()

      // eslint-disable-next-line prefer-const
      let value: Array<any> = []
      markdownFiles.forEach((file) => {
        const slug = file.split('.')[0].toString()
        value.push({ date: contentDate, slug: slug })
      })

      fs.readdirSync.mockReturnValue(markdownFiles)
      /* eslint-disable indent */
      fs.readFileSync.mockReturnValueOnce(markdownFiles[0])
        .mockReturnValueOnce(markdownFiles[1])
        .mockReturnValueOnce(markdownFiles[2])
      /* eslint-enable indent */
      parseMarkdown.mockReturnValue({ date: contentDate })

      const result = getFiles(markdownFiles)

      expect(result).toStrictEqual(value)
    })
  })
})
