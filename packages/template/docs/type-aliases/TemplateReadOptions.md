[**@jakubmazanec/template**](../README.md)

---

# Type Alias: TemplateReadOptions\<A, D\>

> **TemplateReadOptions**\<`A`, `D`\> = `object`

Defined in:
[template/source/Template.ts:38](https://github.com/jakubmazanec/tools/blob/66efa054b871c783405ec2cb1e4ebd507a77039a/packages/template/source/Template.ts#L38)

## Type Parameters

### A

`A` _extends_ `ZodObject` \| `undefined` = `undefined`

### D

`D` _extends_ `ZodObject` \| `undefined` = `undefined`

## Properties

### attributesSchema?

> `optional` **attributesSchema?**: `A`

Defined in:
[template/source/Template.ts:43](https://github.com/jakubmazanec/tools/blob/66efa054b871c783405ec2cb1e4ebd507a77039a/packages/template/source/Template.ts#L43)

Zod schema for custom template attributes.

---

### dataSchema?

> `optional` **dataSchema?**: `D`

Defined in:
[template/source/Template.ts:46](https://github.com/jakubmazanec/tools/blob/66efa054b871c783405ec2cb1e4ebd507a77039a/packages/template/source/Template.ts#L46)

Zod schema for template data.
