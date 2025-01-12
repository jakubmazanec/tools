[**@jakubmazanec/template**](../README.md)

---

# Type Alias: TemplateReadAndRenderOptions\<A, D\>

> **TemplateReadAndRenderOptions**\<`A`, `D`\>: `object`

Defined in:
[packages/template/source/Template.ts:50](https://github.com/jakubmazanec/tools/blob/b189bd808f93a39eacbf7e401a82a754c5ce3b63/packages/template/source/Template.ts#L50)

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
