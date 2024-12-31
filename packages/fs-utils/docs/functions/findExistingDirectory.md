[**@jakubmazanec/fs-utils**](../README.md)

---

# Function: findExistingDirectory()

> **findExistingDirectory**(`searchPath`): `Promise`\<`string`\>

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

## Defined in

[findExistingDirectory.ts:15](https://github.com/jakubmazanec/tools/blob/a4967209f10f2b04ade958bd873ac46f1290cee7/packages/fs-utils/source/findExistingDirectory.ts#L15)
