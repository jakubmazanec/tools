[**@jakubmazanec/template**](../README.md)

---

# Type Alias: TemplateReadAndRenderOptions\<A, D\>

> **TemplateReadAndRenderOptions**\<`A`, `D`\> = `object`

Defined in:
[packages/template/source/Template.ts:50](https://github.com/jakubmazanec/tools/blob/dccfe8e5cee218e88ff4db59e4bf460975897c58/packages/template/source/Template.ts#L50)

## Type Parameters

### A

`A` _extends_ `ZodObject` \| `undefined` = `undefined`

### D

`D` _extends_ `ZodObject` \| `undefined` = `undefined`

## Properties

### attributesSchema?

> `optional` **attributesSchema**: `A`

Defined in:
[packages/template/source/Template.ts:61](https://github.com/jakubmazanec/tools/blob/dccfe8e5cee218e88ff4db59e4bf460975897c58/packages/template/source/Template.ts#L61)

Zod schema for custom template attributes.

---

### dataSchema?

> `optional` **dataSchema**: `D`

Defined in:
[packages/template/source/Template.ts:64](https://github.com/jakubmazanec/tools/blob/dccfe8e5cee218e88ff4db59e4bf460975897c58/packages/template/source/Template.ts#L64)

Zod schema for template data.

---

### disablePrettier?

> `optional` **disablePrettier**: `boolean`

Defined in:
[packages/template/source/Template.ts:58](https://github.com/jakubmazanec/tools/blob/dccfe8e5cee218e88ff4db59e4bf460975897c58/packages/template/source/Template.ts#L58)

Disable formatting the rendered template using Prettier.

---

### prettierOptions?

> `optional` **prettierOptions**: `prettier.Options`

Defined in:
[packages/template/source/Template.ts:55](https://github.com/jakubmazanec/tools/blob/dccfe8e5cee218e88ff4db59e4bf460975897c58/packages/template/source/Template.ts#L55)

Prettier options.
