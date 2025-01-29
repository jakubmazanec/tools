[**@jakubmazanec/template**](../README.md)

---

# Type Alias: TemplateReadOptions\<A, D\>

> **TemplateReadOptions**\<`A`, `D`\>: `object`

Defined in:
[packages/template/source/Template.ts:39](https://github.com/jakubmazanec/tools/blob/d8ee2855cc8c253cbcc5c4d49e7356ff8450cbde/packages/template/source/Template.ts#L39)

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
