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

[packages/template/source/TemplateAttributes.ts:8](https://github.com/jakubmazanec/tools/blob/4809b04453aafb35a917917e0b4964a9ec0cd132/packages/template/source/TemplateAttributes.ts#L8)
