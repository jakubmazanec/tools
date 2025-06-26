[**@jakubmazanec/template**](../README.md)

---

# Type Alias: TemplateReadAndRenderOptions\<A, D\>

> **TemplateReadAndRenderOptions**\<`A`, `D`\> = `object`

Defined in:
[packages/template/source/Template.ts:50](https://github.com/jakubmazanec/tools/blob/6fe16df773d5da14c29261ea934e72b3f99fabb7/packages/template/source/Template.ts#L50)

## Type Parameters

### A

`A` _extends_ `AnyZodObject` \| `undefined` = `undefined`

### D

`D` _extends_ `AnyZodObject` \| `undefined` = `undefined`

## Properties

### attributesSchema?

> `optional` **attributesSchema**: `A`

Defined in:
[packages/template/source/Template.ts:61](https://github.com/jakubmazanec/tools/blob/6fe16df773d5da14c29261ea934e72b3f99fabb7/packages/template/source/Template.ts#L61)

Zod schema for custom template attributes.

---

### dataSchema?

> `optional` **dataSchema**: `D`

Defined in:
[packages/template/source/Template.ts:64](https://github.com/jakubmazanec/tools/blob/6fe16df773d5da14c29261ea934e72b3f99fabb7/packages/template/source/Template.ts#L64)

Zod schema for template data.

---

### disablePrettier?

> `optional` **disablePrettier**: `boolean`

Defined in:
[packages/template/source/Template.ts:58](https://github.com/jakubmazanec/tools/blob/6fe16df773d5da14c29261ea934e72b3f99fabb7/packages/template/source/Template.ts#L58)

Disable formatting the rendered template using Prettier.

---

### prettierOptions?

> `optional` **prettierOptions**: `prettier.Options`

Defined in:
[packages/template/source/Template.ts:55](https://github.com/jakubmazanec/tools/blob/6fe16df773d5da14c29261ea934e72b3f99fabb7/packages/template/source/Template.ts#L55)

Prettier options.
