[**@jakubmazanec/template**](../README.md) • **Docs**

---

# Type Alias: TemplateRender\<A, D\>

> **TemplateRender**\<`A`, `D`\>: `object`

An object type representing the result of a template render.

## Type Parameters

• **A** _extends_ `z.AnyZodObject` \| `undefined` = `undefined`

Type of Zod schema used to validate the custom template attributes.

• **D** _extends_ `z.AnyZodObject` \| `undefined` = `undefined`

Type of Zod schema used to define the type of template data.

## Type declaration

### attributes

> **attributes**: `A` _extends_ `undefined` ? `Omit`\<[`TemplateAttributes`](TemplateAttributes.md),
> `"if"`\> : `Omit`\<[`TemplateAttributes`](TemplateAttributes.md), `"if"`\> &
> `z.infer`\<`NonNullable`\<`A`\>\>

Rendered template attributes. They created from the `to` and `variables` attributes, and from all of
the custom template attributes.

### content

> **content**: `string`

Rendered template content.

### data

> **data**: `D` _extends_ `undefined` ? `null` : `z.infer`\<`NonNullable`\<`D`\>\>

Data used to render the template.

## Defined in

[packages/template/source/TemplateRender.ts:11](https://github.com/jakubmazanec/tools/blob/4809b04453aafb35a917917e0b4964a9ec0cd132/packages/template/source/TemplateRender.ts#L11)
