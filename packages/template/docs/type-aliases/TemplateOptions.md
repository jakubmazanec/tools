[**@jakubmazanec/template**](../README.md) • **Docs**

---

# Type Alias: TemplateOptions\<A, D\>

> **TemplateOptions**\<`A`, `D`\>: `object`

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

## Defined in

[packages/template/source/Template.ts:18](https://github.com/jakubmazanec/tools/blob/a5f92f7f2969c6804808173bd093f7dbafca1b9f/packages/template/source/Template.ts#L18)
