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

## Source

[findExistingDirectory.ts:15](https://github.com/jakubmazanec/js-tools/blob/4653f1571319b3537b5a901a19e171562b7727e5/packages/fs-utils/source/findExistingDirectory.ts#L15)
