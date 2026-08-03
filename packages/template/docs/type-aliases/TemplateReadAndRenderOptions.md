[**@jakubmazanec/template**](../README.md)

---

# Type Alias: TemplateReadAndRenderOptions\<A, D\>

> **TemplateReadAndRenderOptions**\<`A`, `D`> \> = `object`

Defined in:
[template/source/Template.ts:49](https://github.com/jakubmazanec/tools/blob/4bb4454daaaf702c93958b48b20a6e9559a0e2b9/packages/template/source/Template.ts#L49)

## Type Parameters

### A

`A` _extends_ `ZodObject` \| `undefined` = `undefined`

### D

`D` _extends_ `ZodObject` \| `undefined` = `undefined`

## Properties

### attributesSchema?

> `optional` **attributesSchema?**: `A`

Defined in:
[template/source/Template.ts:60](https://github.com/jakubmazanec/tools/blob/4bb4454daaaf702c93958b48b20a6e9559a0e2b9/packages/template/source/Template.ts#L60)

Zod schema for custom template attributes.

---

### dataSchema?

> `optional` **dataSchema?**: `D`

Defined in:
[template/source/Template.ts:63](https://github.com/jakubmazanec/tools/blob/4bb4454daaaf702c93958b48b20a6e9559a0e2b9/packages/template/source/Template.ts#L63)

Zod schema for template data.

---

### disablePrettier?

> `optional` **disablePrettier?**: `boolean`

Defined in:
[template/source/Template.ts:57](https://github.com/jakubmazanec/tools/blob/4bb4454daaaf702c93958b48b20a6e9559a0e2b9/packages/template/source/Template.ts#L57)

Disable formatting the rendered template using Prettier.

---

### prettierOptions?

> `optional` **prettierOptions?**: `prettier.Options`

Defined in:
[template/source/Template.ts:54](https://github.com/jakubmazanec/tools/blob/4bb4454daaaf702c93958b48b20a6e9559a0e2b9/packages/template/source/Template.ts#L54)

Prettier options.
