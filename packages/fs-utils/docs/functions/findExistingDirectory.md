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

[findExistingDirectory.ts:15](https://github.com/jakubmazanec/tools/blob/28bd44b020b25cf8f9b96b5a385bb7c918cf32ab/packages/fs-utils/source/findExistingDirectory.ts#L15)
