[**@jakubmazanec/template**](../README.md)

---

# Type Alias: TemplateOptions\<A, D\>

> **TemplateOptions**\<`A`, `D`> \> = `object`

Defined in:
[template/source/Template.ts:17](https://github.com/jakubmazanec/tools/blob/58225e9d3ad6348b685d0f2999c8be0390339cd4/packages/template/source/Template.ts#L17)

## Type Parameters

### A

`A` _extends_ `ZodObject` \| `undefined` = `undefined`

### D

`D` _extends_ `ZodObject` \| `undefined` = `undefined`

## Properties

### attributes

> **attributes**: `A` _extends_ `undefined` ? [`TemplateAttributes`](TemplateAttributes.md) :
> [`TemplateAttributes`](TemplateAttributes.md) & `z.infer`\<`NonNullable`\<`A`>>\>\>

Defined in:
[template/source/Template.ts:28](https://github.com/jakubmazanec/tools/blob/58225e9d3ad6348b685d0f2999c8be0390339cd4/packages/template/source/Template.ts#L28)

Template attributes.

---

### attributesSchema?

> `optional` **attributesSchema?**: `A`

Defined in:
[template/source/Template.ts:32](https://github.com/jakubmazanec/tools/blob/58225e9d3ad6348b685d0f2999c8be0390339cd4/packages/template/source/Template.ts#L32)

Zod schema for custom template attributes.

---

### content

> **content**: `string`

Defined in:
[template/source/Template.ts:25](https://github.com/jakubmazanec/tools/blob/58225e9d3ad6348b685d0f2999c8be0390339cd4/packages/template/source/Template.ts#L25)

Template content.

---

### dataSchema?

> `optional` **dataSchema?**: `D`

Defined in:
[template/source/Template.ts:35](https://github.com/jakubmazanec/tools/blob/58225e9d3ad6348b685d0f2999c8be0390339cd4/packages/template/source/Template.ts#L35)

Zod schema for template data.

---

### path?

> `optional` **path?**: `string`

Defined in:
[template/source/Template.ts:22](https://github.com/jakubmazanec/tools/blob/58225e9d3ad6348b685d0f2999c8be0390339cd4/packages/template/source/Template.ts#L22)

Template path.
