# @jakubmazanec/fs-utils

## Table of contents

### Type Aliases

- [EnsureEmptyDirectoryOptions](README.md#ensureemptydirectoryoptions)

### Functions

- [createTempDirectory](README.md#createtempdirectory)
- [ensureEmptyDirectory](README.md#ensureemptydirectory)
- [findDirectories](README.md#finddirectories)
- [findExistingDirectory](README.md#findexistingdirectory)
- [isDirectory](README.md#isdirectory)
- [isEmptyDirectory](README.md#isemptydirectory)
- [isRootPath](README.md#isrootpath)
- [pathToPosixPath](README.md#pathtoposixpath)

## Type Aliases

### EnsureEmptyDirectoryOptions

Ƭ **EnsureEmptyDirectoryOptions**: `Object`

[ensureEmptyDirectory](README.md#ensureemptydirectory) options parameter.

#### Type declaration

| Name        | Type      | Description                           |
| :---------- | :-------- | :------------------------------------ |
| `allowGit?` | `boolean` | Allows presence of a `.git` directory |

#### Defined in

[ensureEmptyDirectory.ts:9](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/fs-utils/source/ensureEmptyDirectory.ts#L9)

## Functions

### createTempDirectory

▸ **createTempDirectory**(`prefix?`): `Promise`\<`string`\>

Creates a unique temporary directory in the operating system's default directory for temporary
files. The name of the directory is random, but can be prefixed with a custom string.

#### Parameters

| Name      | Type     | Description                    |
| :-------- | :------- | :----------------------------- |
| `prefix?` | `string` | The new directory name prefix. |

#### Returns

`Promise`\<`string`\>

The new directory name.

#### Defined in

[createTempDirectory.ts:11](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/fs-utils/source/createTempDirectory.ts#L11)

---

### ensureEmptyDirectory

▸ **ensureEmptyDirectory**(`targetPath`, `«destructured»?`): `Promise`\<`void`\>

Ensures that a path is actually an empty directory. If the path doesn't exist, the directory is
created; if the path exists but isn't an ampty directory, error is thrown.

#### Parameters

| Name             | Type                                                                   |
| :--------------- | :--------------------------------------------------------------------- |
| `targetPath`     | `string`                                                               |
| `«destructured»` | [`EnsureEmptyDirectoryOptions`](README.md#ensureemptydirectoryoptions) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[ensureEmptyDirectory.ts:19](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/fs-utils/source/ensureEmptyDirectory.ts#L19)

---

### findDirectories

▸ **findDirectories**(`searchPath`): `Promise`\<`string`[]\>

Finds all directories that are direct sub-directories of a path.

#### Parameters

| Name         | Type     | Description  |
| :----------- | :------- | :----------- |
| `searchPath` | `string` | Search path. |

#### Returns

`Promise`\<`string`[]\>

The list of directory names.

#### Defined in

[findDirectories.ts:9](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/fs-utils/source/findDirectories.ts#L9)

---

### findExistingDirectory

▸ **findExistingDirectory**(`searchPath`): `Promise`\<`string`\>

Travels up the file system tree from a starting path and returns path of the first existing
directory.

```TypeScript
let result = findExistingDirectory('/foo/bar/baz'); // if there is no `bar` directory, `result` is `'/foo'`
```

#### Parameters

| Name         | Type     | Description  |
| :----------- | :------- | :----------- |
| `searchPath` | `string` | Search path. |

#### Returns

`Promise`\<`string`\>

#### Defined in

[findExistingDirectory.ts:15](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/fs-utils/source/findExistingDirectory.ts#L15)

---

### isDirectory

▸ **isDirectory**(`path`): `Promise`\<`boolean`\>

Checks if a path is a directory.

#### Parameters

| Name   | Type     | Description        |
| :----- | :------- | :----------------- |
| `path` | `string` | The path to check. |

#### Returns

`Promise`\<`boolean`\>

`true` if path is a directory, `false` otherwise.

#### Defined in

[isDirectory.ts:9](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/fs-utils/source/isDirectory.ts#L9)

---

### isEmptyDirectory

▸ **isEmptyDirectory**(`path`): `Promise`\<`boolean`\>

Checks if a path is an empty directory.

#### Parameters

| Name   | Type     | Description        |
| :----- | :------- | :----------------- |
| `path` | `string` | The path to check. |

#### Returns

`Promise`\<`boolean`\>

`true` if path is an empty directory, `false` otherwise.

#### Defined in

[isEmptyDirectory.ts:9](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/fs-utils/source/isEmptyDirectory.ts#L9)

---

### isRootPath

▸ **isRootPath**(`value`): `boolean`

Checks if a path is a file system root path.

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `string` |

#### Returns

`boolean`

`true` if path is the root, `false` otherwise.

#### Defined in

[isRootPath.ts:9](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/fs-utils/source/isRootPath.ts#L9)

---

### pathToPosixPath

▸ **pathToPosixPath**(`value`): `string`

Converts path to POSIX path.

#### Parameters

| Name    | Type     | Description          |
| :------ | :------- | :------------------- |
| `value` | `string` | The path to convert. |

#### Returns

`string`

The converted path.

#### Defined in

[pathToPosixPath.ts:9](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/fs-utils/source/pathToPosixPath.ts#L9)
