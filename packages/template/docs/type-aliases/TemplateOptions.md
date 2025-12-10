[**@jakubmazanec/template**](../README.md)

---

# Type Alias: TemplateOptions\<A, D\>

> **TemplateOptions**\<`A`, `D`\> = `object`

Defined in:
[packages/template/source/Template.ts:17](https://github.com/jakubmazanec/tools/blob/cedf3fa4c7fbc7289e929b659f60d71a93d3854d/packages/template/source/Template.ts#L17)

## Type Parameters

### A

`A` _extends_ `ZodObject` \| `undefined` = `undefined`

### D

`D` _extends_ `ZodObject` \| `undefined` = `undefined`

## Properties

### attributes

> **attributes**: `A` _extends_ `undefined` ? [`TemplateAttributes`](TemplateAttributes.md) :
> [`TemplateAttributes`](TemplateAttributes.md) & `z.infer`\<`NonNullable`\<`A`\>\>

Defined in:
[packages/template/source/Template.ts:28](https://github.com/jakubmazanec/tools/blob/cedf3fa4c7fbc7289e929b659f60d71a93d3854d/packages/template/source/Template.ts#L28)

Template attributes.

---

### attributesSchema?

> `optional` **attributesSchema**: `A`

Defined in:
[packages/template/source/Template.ts:32](https://github.com/jakubmazanec/tools/blob/cedf3fa4c7fbc7289e929b659f60d71a93d3854d/packages/template/source/Template.ts#L32)

Zod schema for custom template attributes.

---

### content

> **content**: `string`

Defined in:
[packages/template/source/Template.ts:25](https://github.com/jakubmazanec/tools/blob/cedf3fa4c7fbc7289e929b659f60d71a93d3854d/packages/template/source/Template.ts#L25)

Template content.

---

### dataSchema?

> `optional` **dataSchema**: `D`

Defined in:
[packages/template/source/Template.ts:35](https://github.com/jakubmazanec/tools/blob/cedf3fa4c7fbc7289e929b659f60d71a93d3854d/packages/template/source/Template.ts#L35)

Zod schema for template data.

---

### path?

> `optional` **path**: `string`

Defined in:
[packages/template/source/Template.ts:22](https://github.com/jakubmazanec/tools/blob/cedf3fa4c7fbc7289e929b659f60d71a93d3854d/packages/template/source/Template.ts#L22)

Template path.
