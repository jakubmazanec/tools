[**@jakubmazanec/zod-utils**](../README.md)

---

# Function: readJson()

> **readJson**\<`S`, `O`>\>(`path`, `schema`, `options?`): `Promise`\<`O` _extends_ `undefined` ?
> `output`\<`S`> \> \| `ZodError`\<`output`\<`S`>> \>\> :
> `If`\<`NonNullable`\<`O`>\>\[`"throwOnZodError"`\], `true`, `output`\<`S`>\>, `output`\<`S`> \> \|
> `ZodError`\<`output`\<`S`>>>>\>\>\>\>

Defined in:
[utils/readJson.ts:12](https://github.com/jakubmazanec/tools/blob/36b99004a93b06a721cdb2d08a00e55c653d227d/packages/zod-utils/source/utils/readJson.ts#L12)

## Type Parameters

### S

`S` _extends_ `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>

### O

`O` _extends_ [`ReadJsonOptions`](../interfaces/ReadJsonOptions.md) \| `undefined` = `undefined`

## Parameters

### path

`FileHandle` \| `PathLike`

### schema

`S`

### options?

`O`

## Returns

`Promise`\<`O` _extends_ `undefined` ? `output`\<`S`\> \| `ZodError`\<`output`\<`S`\>\> :
`If`\<`NonNullable`\<`O`\>\[`"throwOnZodError"`\], `true`, `output`\<`S`\>, `output`\<`S`\> \|
`ZodError`\<`output`\<`S`\>\>\>\>
