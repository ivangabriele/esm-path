import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

export const getAbsolutePath = (importMetaUrl: string, ...relativePaths: string[]): string => {
  const importMetaPath = fileURLToPath(importMetaUrl)
  const importMetaDirectoryPath = dirname(importMetaPath)
  const absolutePath = join(importMetaDirectoryPath, ...relativePaths)

  return absolutePath
}
