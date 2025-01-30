[**@jakubmazanec/template**](../README.md)

---

# Type Alias: TemplateOptions\<A, D\>

> **TemplateOptions**\<`A`, `D`\>: `object`

Defined in:
[packages/template/source/Template.ts:18](https://github.com/jakubmazanec/tools/blob/d8ee2855cc8c253cbcc5c4d49e7356ff8450cbde/packages/template/source/Template.ts#L18)

## Type Parameters

• **A** _extends_ `AnyZodObject` \| `undefined` = `undefined`

• **D** _extends_ `AnyZodObject` \| `undefined` = `undefined`

## Type declaration

### attributes

> **attributes**: `A` _extends_ `undefined` ? [`TemplateAttributes`](TemplateAttributes.md) :
> [`TemplateAttributes`](TemplateAttributes.md) & `z.infer`\<`NonNullable`\<`A`\>\>

Template attributes.

### attributesSchema?

> `optional` **attributesSchema**: `A`

Zod schema for custom template attributes.

### content

> **content**: `string`

Template content.

### dataSchema?

> `optional` **dataSchema**: `D`

Zod schema for template data.

### path?

> `optional` **path**: `string`

Template path.
