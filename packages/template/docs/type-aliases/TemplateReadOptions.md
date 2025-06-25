[**@jakubmazanec/template**](../README.md)

---

# Type Alias: TemplateReadOptions\<A, D\>

> **TemplateReadOptions**\<`A`, `D`\> = `object`

Defined in:
[packages/template/source/Template.ts:39](https://github.com/jakubmazanec/tools/blob/5907d31a071e860d7db8b8a00f698d18fe23e18a/packages/template/source/Template.ts#L39)

## Type Parameters

### A

`A` _extends_ `AnyZodObject` \| `undefined` = `undefined`

### D

`D` _extends_ `AnyZodObject` \| `undefined` = `undefined`

## Properties

### attributesSchema?

> `optional` **attributesSchema**: `A`

Defined in:
[packages/template/source/Template.ts:44](https://github.com/jakubmazanec/tools/blob/5907d31a071e860d7db8b8a00f698d18fe23e18a/packages/template/source/Template.ts#L44)

Zod schema for custom template attributes.

---

### dataSchema?

> `optional` **dataSchema**: `D`

Defined in:
[packages/template/source/Template.ts:47](https://github.com/jakubmazanec/tools/blob/5907d31a071e860d7db8b8a00f698d18fe23e18a/packages/template/source/Template.ts#L47)

Zod schema for template data.
