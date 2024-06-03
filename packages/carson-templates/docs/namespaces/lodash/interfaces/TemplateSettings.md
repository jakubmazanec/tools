[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Interface: TemplateSettings

By default, the template delimiters used by Lo-Dash are similar to those in embedded Ruby (ERB).
Change the following template settings to use alternative delimiters.

## Extended by

- [`TemplateOptions`](TemplateOptions.md)

## Properties

### escape?

> `optional` **escape**: `RegExp`

The "escape" delimiter.

#### Source

node_modules/@types/lodash/common/common.d.ts:119

---

### evaluate?

> `optional` **evaluate**: `RegExp`

The "evaluate" delimiter.

#### Source

node_modules/@types/lodash/common/common.d.ts:123

---

### imports?

> `optional` **imports**: [`Dictionary`](Dictionary.md)\<`any`\>

An object to import into the template as local variables.

#### Source

node_modules/@types/lodash/common/common.d.ts:127

---

### interpolate?

> `optional` **interpolate**: `RegExp`

The "interpolate" delimiter.

#### Source

node_modules/@types/lodash/common/common.d.ts:131

---

### variable?

> `optional` **variable**: `string`

Used to reference the data object in the template text.

#### Source

node_modules/@types/lodash/common/common.d.ts:135
