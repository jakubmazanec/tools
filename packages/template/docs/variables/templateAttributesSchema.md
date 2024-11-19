[**@jakubmazanec/template**](../README.md) • **Docs**

---

# Variable: templateAttributesSchema

> `const` **templateAttributesSchema**: `ZodObject`\<`object`, `"strict"`, `ZodTypeAny`, `object`,
> `object`\>

Zod schema for [TemplateAttributes](../type-aliases/TemplateAttributes.md).

## Type declaration

### extends

> **extends**: `ZodOptional`\<`ZodString`\>

### if

> **if**: `ZodOptional`\<`ZodString`\>

### to

> **to**: `ZodString`

### variables

> **variables**: `ZodOptional`\<`ZodUnion`\<[`ZodRecord`\<`ZodString`,
> `ZodUnknown`\>, `ZodArray`\<`ZodRecord`\<`ZodString`, `ZodUnknown`\>, `"many"`\>]\>\>

## Defined in

[packages/template/source/TemplateAttributes.ts:8](https://github.com/jakubmazanec/tools/blob/39892a8d22e72fc5aa2b2aedf9320ac8bb26fd5d/packages/template/source/TemplateAttributes.ts#L8)
