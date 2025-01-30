[**@jakubmazanec/ui**](../README.md)

---

# Function: useForm()

> **useForm**\<`S`\>(`__namedParameters`): `object`

Defined in:
[packages/ui/source/components/useForm.ts:10](https://github.com/jakubmazanec/tools/blob/d8ee2855cc8c253cbcc5c4d49e7356ff8450cbde/packages/ui/source/components/useForm.ts#L10)

## Type Parameters

• **S** _extends_ `ZodTypeAny`

## Parameters

### \_\_namedParameters

[`UseFormOptions`](../type-aliases/UseFormOptions.md)\<`S`\>

## Returns

`object`

### fields

> **fields**: `Required`\<\{ \[Key in string \| number \| symbol\]:
> FieldMetadata\<Combine\<input\<S\>\>\[Key\], input\<S\>, string\[\]\> \}\>

### form

> **form**: `FormMetadata`\<`input`\<`S`\>, `string`[]\>
