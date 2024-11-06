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

#### Defined in

node_modules/@types/lodash/common/common.d.ts:120

---

### evaluate?

> `optional` **evaluate**: `RegExp`

The "evaluate" delimiter.

#### Defined in

node_modules/@types/lodash/common/common.d.ts:124

---

### imports?

> `optional` **imports**: [`Dictionary`](Dictionary.md)\<`any`\>

An object to import into the template as local variables.

#### Defined in

node_modules/@types/lodash/common/common.d.ts:128

---

### interpolate?

> `optional` **interpolate**: `RegExp`

The "interpolate" delimiter.

#### Defined in

node_modules/@types/lodash/common/common.d.ts:132

---

### variable?

> `optional` **variable**: `string`

Used to reference the data object in the template text.

#### Defined in

node_modules/@types/lodash/common/common.d.ts:136
