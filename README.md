# cross-path

[![img-license]][lnk-license] [![img-npm-base]][lnk-npm-base] [![img-github]][lnk-github]

Cross-platform ESM path helpers.

## Why?

Because Node.js ESM path handling on Windows is messy with POSIX.

## Install

```sh
npm i add -E cross-path
```

or:

```sh
yarn add -E cross-path
```

## Usage

```ts
import { getAbsolutePath } from 'cross-path'

```

## API

### getAbsolutePath(importMetaUrl, ...relativePaths)

#### Definition

```ts
getAbsolutePath(importMetaUrl: string, ...relativePaths: string[]): string
```

#### Parameters

- `importMetaUrl`: must always be `import.meta.url`.
- `...relativePaths`: list of paths, relative to the directory or file from which this function is called.

#### Return

Return the absolute path of the targetted directory or file.

#### Example

```ts
import { getAbsolutePath } from 'cross-path'

const currentDirectoryPath = getAbsolutePath(import.meta.url)
console.log(currentDirectoryPath)

const parentDirectoryPath = getAbsolutePath(import.meta.url, '..')
console.log(parentDirectoryPath)

// Adapt the relative path to your case
const packageJsonFilePath = getAbsolutePath(import.meta.url, '../package.json')
console.log(packageJsonFilePath)

// Adapt the relative path to your case
const packageJsonFilePath = getAbsolutePath(import.meta.url, '..' , 'package.json')
console.log(packageJsonFilePath)
```

---

[img-github]: https://img.shields.io/github/workflow/status/ivangabriele/cross-path/Check/main?style=flat-square
[img-license]: https://img.shields.io/github/license/ivangabriele/cross-path?style=flat-square
[img-npm-base]: https://img.shields.io/npm/v/cross-path?style=flat-square
[lnk-github]: https://github.com/ivangabriele/cross-path/actions?query=branch%3Amain++
[lnk-license]: https://github.com/ivangabriele/cross-path/blob/main/LICENSE
[lnk-npm-base]: https://www.npmjs.com/package/cross-path
