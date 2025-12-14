[**@jakubmazanec/fs-utils**](../README.md)

---

# Function: findExistingDirectory()

> **findExistingDirectory**(`searchPath`): `Promise`\<`string`\>

Defined in:
[findExistingDirectory.ts:15](https://github.com/jakubmazanec/tools/blob/aa41f4b8a503830bb6198ebf70de9e7844bc2c44/packages/fs-utils/source/findExistingDirectory.ts#L15)

Travels up the file system tree from a starting path and returns path of the first existing
directory.

```TypeScript
let result = findExistingDirectory('/foo/bar/baz'); // if there is no `bar` directory, `result` is `'/foo'`
```

## Parameters

### searchPath

`string`

Search path.

## Returns

`Promise`\<`string`\>
