import { writeBlog, getFiles } from '../../../app/content/index2'

const fs = require('fs')
jest.mock('fs')

describe('content/index.js', () => {
  it('writes json content', () => {
    writeBlog()

    /* eslint-disable indent */
    expect(fs.writeFile).toHaveBeenCalledWith('app/content/blogs.json',
                                              expect.any(String),
                                              expect.any(Function))
    /* eslint-enable indent */
  })

  it('reads directory', () => {
    const path = 'test/path'
    fs.readdirSync.mockReturnValue(Array.of(path))

    getFiles(path)

    expect(fs.readdirSync).toHaveBeenCalledWith(path)
  })

  it('reads all file', () => {
    const fileList = ['file1', 'file2', 'file3']
    fs.readdirSync.mockReturnValue(fileList)

    getFiles(fileList)

    expect(fs.readFileSync).toHaveBeenCalledTimes(3)
  })
})
