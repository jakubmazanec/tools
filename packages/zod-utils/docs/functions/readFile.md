[**@jakubmazanec/zod-utils**](../README.md)

---

# Function: readFile()

> **readFile**\<`S`, `O`\>(`path`, `schema`, `options?`): `Promise`\<`O` _extends_ `undefined` ?
> `TypeOf`\<`S`\> \| `ZodError`\<`TypeOf`\<`S`\>\> :
> `If`\<`NonNullable`\<`O`\>\[`"throwOnZodError"`\], `true`, `TypeOf`\<`S`\>, `TypeOf`\<`S`\> \|
> `ZodError`\<`TypeOf`\<`S`\>\>\>\>

Defined in:
[packages/zod-utils/source/utils/readFile.ts:11](https://github.com/jakubmazanec/tools/blob/74fa88a6249b3d486436ae7655f4962bc4a86e11/packages/zod-utils/source/utils/readFile.ts#L11)

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
