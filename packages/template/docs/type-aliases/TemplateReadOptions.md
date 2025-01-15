[**@jakubmazanec/template**](../README.md)

---

# Type Alias: TemplateReadOptions\<A, D\>

> **TemplateReadOptions**\<`A`, `D`\>: `object`

Defined in:
[packages/template/source/Template.ts:39](https://github.com/jakubmazanec/tools/blob/dd3219e5c9e39fb2c6c2fa06c4f20acd2118ac84/packages/template/source/Template.ts#L39)

## Type Parameters

• **A** _extends_ `AnyZodObject` \| `undefined` = `undefined`

• **D** _extends_ `AnyZodObject` \| `undefined` = `undefined`

## Type declaration

### attributesSchema?

> `optional` **attributesSchema**: `A`

Zod schema for custom template attributes.

### dataSchema?

> `optional` **dataSchema**: `D`

Zod schema for template data.
