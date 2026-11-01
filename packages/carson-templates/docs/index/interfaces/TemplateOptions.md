[**@jakubmazanec/carson-templates**](../../README.md)

---

# Interface: TemplateOptions

Defined in: node\_modules/@types/lodash/common/string.d.ts:474

By default, the template delimiters used by Lo-Dash are similar to those in embedded Ruby (ERB).
Change the following template settings to use alternative delimiters.

## Extends

- [`TemplateSettings`](TemplateSettings.md)

## Properties

### escape?

> `optional` **escape?**: `RegExp` \| `null`

Defined in: node\_modules/@types/lodash/common/common.d.ts:120

The "escape" delimiter.

#### Inherited from

[`TemplateSettings`](TemplateSettings.md).[`escape`](TemplateSettings.md#escape)

---

### evaluate?

> `optional` **evaluate?**: `RegExp` \| `null`

Defined in: node\_modules/@types/lodash/common/common.d.ts:124

The "evaluate" delimiter.

#### Inherited from

[`TemplateSettings`](TemplateSettings.md).[`evaluate`](TemplateSettings.md#evaluate)

---

### imports?

> `optional` **imports?**: [`Dictionary`](Dictionary.md)\<`any`\>

Defined in: node\_modules/@types/lodash/common/common.d.ts:128

An object to import into the template as local variables.

#### Inherited from

[`TemplateSettings`](TemplateSettings.md).[`imports`](TemplateSettings.md#imports)

---

### interpolate?

> `optional` **interpolate?**: `RegExp` \| `null`

Defined in: node\_modules/@types/lodash/common/common.d.ts:132

The "interpolate" delimiter.

#### Inherited from

[`TemplateSettings`](TemplateSettings.md).[`interpolate`](TemplateSettings.md#interpolate)

---

### sourceURL?

> `optional` **sourceURL?**: `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:478

#### See

_.sourceURL

---

### variable?

> `optional` **variable?**: `string`

Defined in: node\_modules/@types/lodash/common/common.d.ts:136

Used to reference the data object in the template text.

#### Inherited from

[`TemplateSettings`](TemplateSettings.md).[`variable`](TemplateSettings.md#variable)
