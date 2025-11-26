[**@jakubmazanec/zod-utils**](../README.md)

---

# Function: readJson()

> **readJson**\<`S`, `O`\>(`path`, `schema`, `options?`): `Promise`\<`O` _extends_ `undefined` ?
> `output`\<`S`\> \| `ZodError`\<`output`\<`S`\>\> :
> `If`\<`NonNullable`\<`O`\>\[`"throwOnZodError"`\], `true`, `output`\<`S`\>, `output`\<`S`\> \|
> `ZodError`\<`output`\<`S`\>\>\>\>

Defined in:
[packages/zod-utils/source/utils/readJson.ts:12](https://github.com/jakubmazanec/tools/blob/a079c38394d5df8b5048ba81c0c9138a6876bff6/packages/zod-utils/source/utils/readJson.ts#L12)

## Type Parameters

### S

`S` _extends_ `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>

### O

`O` _extends_ `undefined` \| [`ReadJsonOptions`](../interfaces/ReadJsonOptions.md) = `undefined`

## Parameters

### path

`FileHandle` | `PathLike`

### schema

`S`

### options?

`O`

## Returns

`Promise`\<`O` _extends_ `undefined` ? `output`\<`S`\> \| `ZodError`\<`output`\<`S`\>\> :
`If`\<`NonNullable`\<`O`\>\[`"throwOnZodError"`\], `true`, `output`\<`S`\>, `output`\<`S`\> \|
`ZodError`\<`output`\<`S`\>\>\>\>
