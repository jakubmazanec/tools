[**@jakubmazanec/zod-utils**](../README.md)

---

# Function: readFile()

> **readFile**\<`S`, `O`\>(`path`, `schema`, `options?`): `Promise`\<`O` _extends_ `undefined` ?
> `TypeOf`\<`S`\> \| `ZodError`\<`TypeOf`\<`S`\>\> :
> `If`\<`NonNullable`\<`O`\>\[`"throwOnZodError"`\], `true`, `TypeOf`\<`S`\>, `TypeOf`\<`S`\> \|
> `ZodError`\<`TypeOf`\<`S`\>\>\>\>

Defined in:
[packages/zod-utils/source/utils/readFile.ts:11](https://github.com/jakubmazanec/tools/blob/6fe16df773d5da14c29261ea934e72b3f99fabb7/packages/zod-utils/source/utils/readFile.ts#L11)

## Type Parameters

### S

`S` _extends_ `ZodTypeAny`

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

`Promise`\<`O` _extends_ `undefined` ? `TypeOf`\<`S`\> \| `ZodError`\<`TypeOf`\<`S`\>\> :
`If`\<`NonNullable`\<`O`\>\[`"throwOnZodError"`\], `true`, `TypeOf`\<`S`\>, `TypeOf`\<`S`\> \|
`ZodError`\<`TypeOf`\<`S`\>\>\>\>
