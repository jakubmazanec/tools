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

[packages/template/source/TemplateAttributes.ts:8](https://github.com/jakubmazanec/tools/blob/eb8c22844f0a0aa0874efeab93afc2bd96c269e6/packages/template/source/TemplateAttributes.ts#L8)
