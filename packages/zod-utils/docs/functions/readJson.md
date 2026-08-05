[**@jakubmazanec/zod-utils**](../README.md)

---

# Function: readJson()

> **readJson**\<`S`, `O`>\>(`path`, `schema`, `options?`): `Promise`\<`O` _extends_ `undefined` ?
> `output`\<`S`> \> \| `ZodError`\<`output`\<`S`>> \>\> :
> `If`\<`NonNullable`\<`O`>\>\[`"throwOnZodError"`\], `true`, `output`\<`S`>\>, `output`\<`S`> \> \|
> `ZodError`\<`output`\<`S`>>>>\>\>\>\>

Defined in:
[utils/readJson.ts:12](https://github.com/jakubmazanec/tools/blob/58225e9d3ad6348b685d0f2999c8be0390339cd4/packages/zod-utils/source/utils/readJson.ts#L12)

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
