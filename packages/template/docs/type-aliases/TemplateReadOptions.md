[**@jakubmazanec/template**](../README.md)

---

# Type Alias: TemplateReadOptions\<A, D\>

> **TemplateReadOptions**\<`A`, `D`\>: `object`

Defined in:
[packages/template/source/Template.ts:39](https://github.com/jakubmazanec/tools/blob/b70ba93afff7f67760159378262d2c0b19cfed9e/packages/template/source/Template.ts#L39)

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
