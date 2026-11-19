[**@jakubmazanec/template**](../README.md)

---

# Type Alias: TemplateReadOptions\<A, D\>

> **TemplateReadOptions**\<`A`, `D`\> = `object`

Defined in:
[template/source/Template.ts:38](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/template/source/Template.ts#L38)

## Type Parameters

### A

`A` _extends_ `ZodObject` \| `undefined` = `undefined`

### D

`D` _extends_ `ZodObject` \| `undefined` = `undefined`

## Properties

### attributesSchema?

> `optional` **attributesSchema?**: `A`

Defined in:
[template/source/Template.ts:43](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/template/source/Template.ts#L43)

Zod schema for custom template attributes.

---

### dataSchema?

> `optional` **dataSchema?**: `D`

Defined in:
[template/source/Template.ts:46](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/template/source/Template.ts#L46)

Zod schema for template data.
