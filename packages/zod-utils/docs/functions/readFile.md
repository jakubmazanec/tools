[**@jakubmazanec/zod-utils**](../README.md)

---

# Function: readFile()

> **readFile**\<`S`, `O`\>(`path`, `schema`, `options?`): `Promise`\<`O` _extends_ `undefined` ?
> `output`\<`S`\> \| `ZodError`\<`output`\<`S`\>\> :
> `If`\<`NonNullable`\<`O`\>\[`"throwOnZodError"`\], `true`, `output`\<`S`\>, `output`\<`S`\> \|
> `ZodError`\<`output`\<`S`\>\>\>\>

Defined in:
[packages/zod-utils/source/utils/readFile.ts:11](https://github.com/jakubmazanec/tools/blob/696a64976703690d44032efe8c4d5be5f9236fc7/packages/zod-utils/source/utils/readFile.ts#L11)

## Type Parameters

### S

`S` _extends_ `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>

### O

`O` _extends_ `undefined` \| [`ReadFileOptions`](../interfaces/ReadFileOptions.md) = `undefined`

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
