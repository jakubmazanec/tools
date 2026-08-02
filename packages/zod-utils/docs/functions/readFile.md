[**@jakubmazanec/zod-utils**](../README.md)

---

# Function: readFile()

> **readFile**\<`S`, `O`>\>(`path`, `schema`, `options?`): `Promise`\<`O` _extends_ `undefined` ?
> `output`\<`S`> \> \| `ZodError`\<`output`\<`S`>> \>\> :
> `If`\<`NonNullable`\<`O`>\>\[`"throwOnZodError"`\], `true`, `output`\<`S`>\>, `output`\<`S`> \> \|
> `ZodError`\<`output`\<`S`>>>>\>\>\>\>

Defined in:
[utils/readFile.ts:11](https://github.com/jakubmazanec/tools/blob/2c78f29cf23098fa3ebc299e5eb40d65134b033e/packages/zod-utils/source/utils/readFile.ts#L11)

## Type Parameters

### S

`S` _extends_ `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>

### O

`O` _extends_ [`ReadFileOptions`](../interfaces/ReadFileOptions.md) \| `undefined` = `undefined`

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
