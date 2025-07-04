[**@jakubmazanec/template**](../README.md)

---

# Type Alias: TemplateOptions\<A, D\>

> **TemplateOptions**\<`A`, `D`\> = `object`

Defined in:
[packages/template/source/Template.ts:18](https://github.com/jakubmazanec/tools/blob/6fe16df773d5da14c29261ea934e72b3f99fabb7/packages/template/source/Template.ts#L18)

## Type Parameters

### A

`A` _extends_ `AnyZodObject` \| `undefined` = `undefined`

### D

`D` _extends_ `AnyZodObject` \| `undefined` = `undefined`

## Properties

### attributes

> **attributes**: `A` _extends_ `undefined` ? [`TemplateAttributes`](TemplateAttributes.md) :
> [`TemplateAttributes`](TemplateAttributes.md) & `z.infer`\<`NonNullable`\<`A`\>\>

Defined in:
[packages/template/source/Template.ts:29](https://github.com/jakubmazanec/tools/blob/6fe16df773d5da14c29261ea934e72b3f99fabb7/packages/template/source/Template.ts#L29)

Template attributes.

---

### attributesSchema?

> `optional` **attributesSchema**: `A`

Defined in:
[packages/template/source/Template.ts:33](https://github.com/jakubmazanec/tools/blob/6fe16df773d5da14c29261ea934e72b3f99fabb7/packages/template/source/Template.ts#L33)

Zod schema for custom template attributes.

---

### content

> **content**: `string`

Defined in:
[packages/template/source/Template.ts:26](https://github.com/jakubmazanec/tools/blob/6fe16df773d5da14c29261ea934e72b3f99fabb7/packages/template/source/Template.ts#L26)

Template content.

---

### dataSchema?

> `optional` **dataSchema**: `D`

Defined in:
[packages/template/source/Template.ts:36](https://github.com/jakubmazanec/tools/blob/6fe16df773d5da14c29261ea934e72b3f99fabb7/packages/template/source/Template.ts#L36)

Zod schema for template data.

---

### path?

> `optional` **path**: `string`

Defined in:
[packages/template/source/Template.ts:23](https://github.com/jakubmazanec/tools/blob/6fe16df773d5da14c29261ea934e72b3f99fabb7/packages/template/source/Template.ts#L23)

Template path.
