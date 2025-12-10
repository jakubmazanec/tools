[**@jakubmazanec/template**](../README.md)

---

# Type Alias: TemplateReadOptions\<A, D\>

> **TemplateReadOptions**\<`A`, `D`\> = `object`

Defined in:
[packages/template/source/Template.ts:38](https://github.com/jakubmazanec/tools/blob/c44e406c009b539e4c3453159f89e12e639a9c18/packages/template/source/Template.ts#L38)

## Type Parameters

### A

`A` _extends_ `ZodObject` \| `undefined` = `undefined`

### D

`D` _extends_ `ZodObject` \| `undefined` = `undefined`

## Properties

### attributesSchema?

> `optional` **attributesSchema**: `A`

Defined in:
[packages/template/source/Template.ts:43](https://github.com/jakubmazanec/tools/blob/c44e406c009b539e4c3453159f89e12e639a9c18/packages/template/source/Template.ts#L43)

Zod schema for custom template attributes.

---

### dataSchema?

> `optional` **dataSchema**: `D`

Defined in:
[packages/template/source/Template.ts:46](https://github.com/jakubmazanec/tools/blob/c44e406c009b539e4c3453159f89e12e639a9c18/packages/template/source/Template.ts#L46)

Zod schema for template data.
