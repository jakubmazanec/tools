[**@jakubmazanec/carson-templates**](../../README.md)

---

# Interface: TemplateSettings

Defined in: node\_modules/@types/lodash/common/common.d.ts:116

By default, the template delimiters used by Lo-Dash are similar to those in embedded Ruby (ERB).
Change the following template settings to use alternative delimiters.

## Extended by

- [`TemplateOptions`](TemplateOptions.md)

## Properties

### escape?

> `optional` **escape?**: `RegExp` \| `null`

Defined in: node\_modules/@types/lodash/common/common.d.ts:120

The "escape" delimiter.

---

### evaluate?

> `optional` **evaluate?**: `RegExp` \| `null`

Defined in: node\_modules/@types/lodash/common/common.d.ts:124

The "evaluate" delimiter.

---

### imports?

> `optional` **imports?**: [`Dictionary`](Dictionary.md)\<`any`\>

Defined in: node\_modules/@types/lodash/common/common.d.ts:128

An object to import into the template as local variables.

---

### interpolate?

> `optional` **interpolate?**: `RegExp` \| `null`

Defined in: node\_modules/@types/lodash/common/common.d.ts:132

The "interpolate" delimiter.

---

### variable?

> `optional` **variable?**: `string`

Defined in: node\_modules/@types/lodash/common/common.d.ts:136

Used to reference the data object in the template text.
