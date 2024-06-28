[**@jakubmazanec/template**](../README.md) • **Docs**

---

# Type alias: TemplateReadAndRenderOptions\<A, D\>

> **TemplateReadAndRenderOptions**\<`A`, `D`\>: `object`

## Type parameters

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

## Source

[packages/template/source/Template.ts:50](https://github.com/jakubmazanec/js-tools/blob/4653f1571319b3537b5a901a19e171562b7727e5/packages/template/source/Template.ts#L50)
