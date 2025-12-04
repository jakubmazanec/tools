[**@jakubmazanec/fs-utils**](../README.md)

---

# Function: findExistingDirectory()

> **findExistingDirectory**(`searchPath`): `Promise`\<`string`\>

Defined in:
[findExistingDirectory.ts:15](https://github.com/jakubmazanec/tools/blob/0d1758bcb42c893a94f97bc67b33fc22961e7001/packages/fs-utils/source/findExistingDirectory.ts#L15)

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
