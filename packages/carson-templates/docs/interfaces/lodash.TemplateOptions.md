# Interface: TemplateOptions

[lodash](../modules/lodash.md).TemplateOptions

By default, the template delimiters used by Lo-Dash are similar to those in embedded Ruby (ERB).
Change the following template settings to use alternative delimiters.

## Hierarchy

- [`TemplateSettings`](lodash.TemplateSettings.md)

  ↳ **`TemplateOptions`**

## Table of contents

### Properties

- [escape](lodash.TemplateOptions.md#escape)
- [evaluate](lodash.TemplateOptions.md#evaluate)
- [imports](lodash.TemplateOptions.md#imports)
- [interpolate](lodash.TemplateOptions.md#interpolate)
- [sourceURL](lodash.TemplateOptions.md#sourceurl)
- [variable](lodash.TemplateOptions.md#variable)

## Properties

### escape

• `Optional` **escape**: `RegExp`

The "escape" delimiter.

#### Inherited from

[TemplateSettings](lodash.TemplateSettings.md).[escape](lodash.TemplateSettings.md#escape)

#### Defined in

node_modules/@types/lodash/common/common.d.ts:119

---

### evaluate

• `Optional` **evaluate**: `RegExp`

The "evaluate" delimiter.

#### Inherited from

[TemplateSettings](lodash.TemplateSettings.md).[evaluate](lodash.TemplateSettings.md#evaluate)

#### Defined in

node_modules/@types/lodash/common/common.d.ts:123

---

### imports

• `Optional` **imports**: [`Dictionary`](lodash.Dictionary.md)<`any`\>

An object to import into the template as local variables.

#### Inherited from

[TemplateSettings](lodash.TemplateSettings.md).[imports](lodash.TemplateSettings.md#imports)

#### Defined in

node_modules/@types/lodash/common/common.d.ts:127

---

### interpolate

• `Optional` **interpolate**: `RegExp`

The "interpolate" delimiter.

#### Inherited from

[TemplateSettings](lodash.TemplateSettings.md).[interpolate](lodash.TemplateSettings.md#interpolate)

#### Defined in

node_modules/@types/lodash/common/common.d.ts:131

---

### sourceURL

• `Optional` **sourceURL**: `string`

**`See`**

\_.sourceURL

#### Defined in

node_modules/@types/lodash/common/string.d.ts:478

---

### variable

• `Optional` **variable**: `string`

Used to reference the data object in the template text.

#### Inherited from

[TemplateSettings](lodash.TemplateSettings.md).[variable](lodash.TemplateSettings.md#variable)

#### Defined in

node_modules/@types/lodash/common/common.d.ts:135
