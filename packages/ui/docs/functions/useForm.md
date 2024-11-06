[**@jakubmazanec/ui**](../README.md) • **Docs**

---

# Function: useForm()

> **useForm**\<`S`\>(`__namedParameters`): `object`

## Type parameters

• **S** _extends_ `ZodTypeAny`

## Parameters

• **\_\_namedParameters**: [`UseFormOptions`](../type-aliases/UseFormOptions.md)\<`S`\>

## Returns

`object`

### fields

> **fields**: `Required`\<\{ \[Key in string \| number \| symbol\]:
> FieldMetadata\<Combine\<input\<S\>\>\[Key\], input\<S\>, string\[\]\> \}\>

### form

> **form**: `FormMetadata`\<`input`\<`S`\>, `string`[]\>

## Source

[packages/ui/source/components/useForm.ts:10](https://github.com/jakubmazanec/tools/blob/ff982fbbc1a4d22edeaae8b283ad7d8de4b15bd8/packages/ui/source/components/useForm.ts#L10)
