[**@jakubmazanec/template**](../README.md)

---

# Type Alias: TemplateReadOptions\<A, D\>

> **TemplateReadOptions**\<`A`, `D`\> = `object`

Defined in:
[packages/template/source/Template.ts:39](https://github.com/jakubmazanec/tools/blob/a079c38394d5df8b5048ba81c0c9138a6876bff6/packages/template/source/Template.ts#L39)

## Type Parameters

### A

`A` _extends_ `ZodObject` \| `undefined` = `undefined`

### D

`D` _extends_ `ZodObject` \| `undefined` = `undefined`

## Properties

### attributesSchema?

> `optional` **attributesSchema**: `A`

Defined in:
[packages/template/source/Template.ts:44](https://github.com/jakubmazanec/tools/blob/a079c38394d5df8b5048ba81c0c9138a6876bff6/packages/template/source/Template.ts#L44)

Zod schema for custom template attributes.

---

### dataSchema?

> `optional` **dataSchema**: `D`

Defined in:
[packages/template/source/Template.ts:47](https://github.com/jakubmazanec/tools/blob/a079c38394d5df8b5048ba81c0c9138a6876bff6/packages/template/source/Template.ts#L47)

Zod schema for template data.
