[**@jakubmazanec/fs-utils**](../README.md)

---

# Function: findExistingDirectory()

> **findExistingDirectory**(`searchPath`): `Promise`\<`string`\>

Defined in:
[findExistingDirectory.ts:15](https://github.com/jakubmazanec/tools/blob/c44e406c009b539e4c3453159f89e12e639a9c18/packages/fs-utils/source/findExistingDirectory.ts#L15)

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
