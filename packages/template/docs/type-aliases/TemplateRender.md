[**@jakubmazanec/template**](../README.md) • **Docs**

---

# Type alias: TemplateRender\<A, D\>

> **TemplateRender**\<`A`, `D`\>: `object`

An object type representing the result of a template render.

## Type parameters

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

## Source

[packages/template/source/TemplateRender.ts:11](https://github.com/jakubmazanec/js-tools/blob/d8fb2f4f9576baa170e480eea0b247af3afdcd86/packages/template/source/TemplateRender.ts#L11)
