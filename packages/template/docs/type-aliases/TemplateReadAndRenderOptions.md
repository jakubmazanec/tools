[**@jakubmazanec/template**](../README.md) • **Docs**

---

# Type Alias: TemplateReadAndRenderOptions\<A, D\>

> **TemplateReadAndRenderOptions**\<`A`, `D`\>: `object`

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

### disablePrettier?

> `optional` **disablePrettier**: `boolean`

Disable formatting the rendered template using Prettier.

### prettierOptions?

> `optional` **prettierOptions**: `prettier.Options`

Prettier options.

## Defined in

[packages/template/source/Template.ts:50](https://github.com/jakubmazanec/tools/blob/053e1fea9cfce27a70a78b00a30cdd281cb0a72b/packages/template/source/Template.ts#L50)
