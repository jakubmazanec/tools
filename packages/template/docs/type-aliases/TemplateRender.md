[**@jakubmazanec/template**](../README.md)

---

# Type Alias: TemplateRender\<A, D\>

> **TemplateRender**\<`A`, `D`\> = `object`

Defined in:
[template/source/TemplateRender.ts:11](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/template/source/TemplateRender.ts#L11)

An object type representing the result of a template render.

## Type Parameters

### A

`A` _extends_ `z.ZodObject` \| `undefined` = `undefined`

Type of Zod schema used to validate the custom template attributes.

### D

`D` _extends_ `z.ZodObject` \| `undefined` = `undefined`

Type of Zod schema used to define the type of template data.

## Properties

### attributes

> **attributes**: `A` _extends_ `undefined` ? `Omit`\<[`TemplateAttributes`](TemplateAttributes.md),
> `"if"`\> : `Omit`\<[`TemplateAttributes`](TemplateAttributes.md), `"if"`\> &
> `z.infer`\<`NonNullable`\<`A`\>\>

Defined in:
[template/source/TemplateRender.ts:19](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/template/source/TemplateRender.ts#L19)

Rendered template attributes. They created from the `to` and `variables` attributes, and from all of
the custom template attributes.

---

### content

> **content**: `string`

Defined in:
[template/source/TemplateRender.ts:26](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/template/source/TemplateRender.ts#L26)

Rendered template content.

---

### data

> **data**: `D` _extends_ `undefined` ? `null` : `z.infer`\<`NonNullable`\<`D`\>\>

Defined in:
[template/source/TemplateRender.ts:23](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/template/source/TemplateRender.ts#L23)

Data used to render the template.
