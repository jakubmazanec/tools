[**@jakubmazanec/fs-utils**](../README.md)

---

# Function: findExistingDirectory()

> **findExistingDirectory**(`searchPath`): `Promise`\<`string`\>

Defined in:
[findExistingDirectory.ts:15](https://github.com/jakubmazanec/tools/blob/77af8fc6f94d0ddce4ffb0d7fbfc7006c5b3d620/packages/fs-utils/source/findExistingDirectory.ts#L15)

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
