import { promises as fs } from 'fs'

import { getAbsolutePath } from '..'

describe(`getAbsolutePath()`, () => {
  describe(`with the stub file`, () => {
    test(`should return a well-fomatted absolute path`, async () => {
      const result = getAbsolutePath(import.meta.url, './stubs/directory/file.txt')

      if (process.platform === 'win32') {
        expect(result).toMatch(/^[A-Z]:/)
        expect(result).toMatch(/\\src\\__tests__\\stubs\\directory\\file.txt$/)
      } else {
        expect(result).toMatch(/^\//)
        expect(result).toMatch(/\/src\/__tests__\/stubs\/directory\/file.txt$/)
      }
    })

    test(`should be an existing file`, async () => {
      const result = getAbsolutePath(import.meta.url, './stubs/directory/file.txt')

      const stats = await fs.lstat(result)

      expect(stats.isFile()).toStrictEqual(true)
    })

    test(`should return the same path when splitted or unndotted`, async () => {
      const originalResult = getAbsolutePath(import.meta.url, './stubs/directory/file.txt')

      const noDotSplittedResult = getAbsolutePath(import.meta.url, 'stubs', 'directory', 'file.txt')
      const dottedSplittedResult = getAbsolutePath(import.meta.url, '..', '__tests__', 'stubs', 'directory', 'file.txt')

      expect(noDotSplittedResult).toStrictEqual(originalResult)
      expect(dottedSplittedResult).toStrictEqual(originalResult)
    })
  })

  describe(`with the stub directory`, () => {
    test(`should return a well-fomatted absolute path`, async () => {
      const result = getAbsolutePath(import.meta.url, './stubs/directory')

      if (process.platform === 'win32') {
        expect(result).toMatch(/^[A-Z]:/)
        expect(result).toMatch(/\\src\\__tests__\\stubs\\directory$/)
      } else {
        expect(result).toMatch(/^\//)
        expect(result).toMatch(/\/src\/__tests__\/stubs\/directory$/)
      }
    })

    test(`should be an existing directory`, async () => {
      const result = getAbsolutePath(import.meta.url, './stubs/directory')

      const stats = await fs.lstat(result)

      expect(stats.isDirectory()).toStrictEqual(true)
    })
  })

  describe(`with the current directory`, () => {
    test(`should return a well-fomatted absolute path`, async () => {
      const result = getAbsolutePath(import.meta.url)

      if (process.platform === 'win32') {
        expect(result).toMatch(/^[A-Z]:/)
        expect(result).toMatch(/\\src\\__tests__$/)
      } else {
        expect(result).toMatch(/^\//)
        expect(result).toMatch(/\/src\/__tests__$/)
      }
    })

    test(`should be an existing directory`, async () => {
      const result = getAbsolutePath(import.meta.url)

      const stats = await fs.lstat(result)

      expect(stats.isDirectory()).toStrictEqual(true)
    })
  })

  describe(`with the parent directory`, () => {
    test(`should return a well-fomatted absolute path`, async () => {
      const result = getAbsolutePath(import.meta.url, '..')

      if (process.platform === 'win32') {
        expect(result).toMatch(/^[A-Z]:/)
        expect(result).toMatch(/\\src$/)
      } else {
        expect(result).toMatch(/^\//)
        expect(result).toMatch(/\/src$/)
      }
    })

    test(`should be an existing directory`, async () => {
      const result = getAbsolutePath(import.meta.url, '..')

      const stats = await fs.lstat(result)

      expect(stats.isDirectory()).toStrictEqual(true)
    })
  })
})
