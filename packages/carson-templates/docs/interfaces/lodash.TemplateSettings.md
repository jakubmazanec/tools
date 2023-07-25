# Interface: TemplateSettings

[lodash](../modules/lodash.md).TemplateSettings

By default, the template delimiters used by Lo-Dash are similar to those in embedded Ruby (ERB).
Change the following template settings to use alternative delimiters.

## Hierarchy

- **`TemplateSettings`**

  ↳ [`TemplateOptions`](lodash.TemplateOptions.md)

## Table of contents

### Properties

- [escape](lodash.TemplateSettings.md#escape)
- [evaluate](lodash.TemplateSettings.md#evaluate)
- [imports](lodash.TemplateSettings.md#imports)
- [interpolate](lodash.TemplateSettings.md#interpolate)
- [variable](lodash.TemplateSettings.md#variable)

## Properties

### escape

• `Optional` **escape**: `RegExp`

The "escape" delimiter.

#### Defined in

node_modules/@types/lodash/common/common.d.ts:119

---

### evaluate

• `Optional` **evaluate**: `RegExp`

The "evaluate" delimiter.

#### Defined in

node_modules/@types/lodash/common/common.d.ts:123

---

### imports

• `Optional` **imports**: [`Dictionary`](lodash.Dictionary.md)<`any`\>

An object to import into the template as local variables.

#### Defined in

node_modules/@types/lodash/common/common.d.ts:127

---

### interpolate

• `Optional` **interpolate**: `RegExp`

The "interpolate" delimiter.

#### Defined in

node_modules/@types/lodash/common/common.d.ts:131

---

### variable

• `Optional` **variable**: `string`

Used to reference the data object in the template text.

#### Defined in

node_modules/@types/lodash/common/common.d.ts:135
