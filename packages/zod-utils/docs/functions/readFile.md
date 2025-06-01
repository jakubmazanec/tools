[**@jakubmazanec/zod-utils**](../README.md)

---

# Function: readFile()

> **readFile**\<`S`, `O`\>(`path`, `schema`, `options?`): `Promise`\<`O` _extends_ `undefined` ?
> `TypeOf`\<`S`\> \| `ZodError`\<`TypeOf`\<`S`\>\> :
> `If`\<`NonNullable`\<`O`\>\[`"throwOnZodError"`\], `true`, `TypeOf`\<`S`\>, `TypeOf`\<`S`\> \|
> `ZodError`\<`TypeOf`\<`S`\>\>\>\>

Defined in:
[packages/zod-utils/source/utils/readFile.ts:11](https://github.com/jakubmazanec/tools/blob/a9ba87d349a220bbed24d161794f90a6ba6009e5/packages/zod-utils/source/utils/readFile.ts#L11)

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
