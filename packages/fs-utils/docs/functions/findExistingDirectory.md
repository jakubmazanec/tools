[**@jakubmazanec/fs-utils**](../README.md) • **Docs**

---

# Function: findExistingDirectory()

> **findExistingDirectory**(`searchPath`): `Promise`\<`string`\>

Travels up the file system tree from a starting path and returns path of the first existing
directory.

```TypeScript
let result = findExistingDirectory('/foo/bar/baz'); // if there is no `bar` directory, `result` is `'/foo'`
```

## Parameters

• **searchPath**: `string`

Search path.

## Returns

`Promise`\<`string`\>

## Defined in

[findExistingDirectory.ts:15](https://github.com/jakubmazanec/tools/blob/053e1fea9cfce27a70a78b00a30cdd281cb0a72b/packages/fs-utils/source/findExistingDirectory.ts#L15)
