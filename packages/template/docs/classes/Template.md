[**@jakubmazanec/template**](../README.md) • **Docs**

---

# Class: Template\<A, D\>

The `Template` object stores all information about a template and has methods for reading and
rendering.

```TypeScript
let template = new Template({
  content: '<%- value %>',
  attributes: {
    to: 'value.txt',
  },
  dataSchema: z.object({value: z.number()}),
});

console.log(await template.render({value: 42})); // ->  [{attributes: {to: 'value.txt'}, data: {value: 42}, content: '42'}]
```

## Type Parameters

• **A** _extends_ `AnyZodObject` \| `undefined` = `undefined`

A Zod schema type used to define the custom template attributes type.

• **D** _extends_ `AnyZodObject` \| `undefined` = `undefined`

A Zod schema type used to define the template datatype.

## Constructors

### new Template()

> **new Template**\<`A`, `D`\>(`__namedParameters`): [`Template`](Template.md)\<`A`, `D`\>

#### Parameters

• **\_\_namedParameters**: [`TemplateOptions`](../type-aliases/TemplateOptions.md)\<`A`, `D`\>

#### Returns

[`Template`](Template.md)\<`A`, `D`\>

#### Defined in

[packages/template/source/Template.ts:116](https://github.com/jakubmazanec/tools/blob/863f04cbbb9368fd023f0309084819aa9247d808/packages/template/source/Template.ts#L116)

## Properties

### attributes

> `readonly` **attributes**: `A` _extends_ `undefined` ? `object` : `object` &
> `TypeOf`\<`NonNullable`\<`A`\>\>

Template attributes. These control how the template is rendered. Some attributes can be written in
[EJS](https://ejs.co/) and are rendered before the template content is rendered. It is expected that
attribute `if` renders to a string that can be parsed as YAML value; if that value is `false`, the
rendering is cancelled. Attribute `to` is also rendered and it represents the path of file the
resulting template render is supposed to be written into (by the user). Attribute `variables` is an
object that is merged with the data object before rendering. If attribute `variables` is an array of
objects, that leads to multiple renders, each with different variables object merged with the data.
Each variable that is a string is also rendered.

#### Defined in

[packages/template/source/Template.ts:104](https://github.com/jakubmazanec/tools/blob/863f04cbbb9368fd023f0309084819aa9247d808/packages/template/source/Template.ts#L104)

---

### attributesSchema

> `readonly` **attributesSchema**: `A` _extends_ `AnyZodObject` ? `A`\<`A`\> : `null`

Zod schema for custom template attributes.

#### Defined in

[packages/template/source/Template.ts:111](https://github.com/jakubmazanec/tools/blob/863f04cbbb9368fd023f0309084819aa9247d808/packages/template/source/Template.ts#L111)

---

### content

> `readonly` **content**: `string`

Template content. Templates are written in [EJS](https://ejs.co/).

#### Defined in

[packages/template/source/Template.ts:101](https://github.com/jakubmazanec/tools/blob/863f04cbbb9368fd023f0309084819aa9247d808/packages/template/source/Template.ts#L101)

---

### dataSchema

> `readonly` **dataSchema**: `D` _extends_ `AnyZodObject` ? `D`\<`D`\> : `null`

Zod schema for template data.

#### Defined in

[packages/template/source/Template.ts:114](https://github.com/jakubmazanec/tools/blob/863f04cbbb9368fd023f0309084819aa9247d808/packages/template/source/Template.ts#L114)

---

### path?

> `optional` **path**: `string`

Template path.

#### Defined in

[packages/template/source/Template.ts:98](https://github.com/jakubmazanec/tools/blob/863f04cbbb9368fd023f0309084819aa9247d808/packages/template/source/Template.ts#L98)

## Methods

### render()

> **render**(`data`, `options`?):
> `Promise`\<[`TemplateRenders`](../type-aliases/TemplateRenders.md)\<`A`, `D`\>\>

Renders the template using data.

#### Parameters

• **data**: `D` _extends_ `undefined` ? `null` : `TypeOf`\<`NonNullable`\<`D`\>\>

Data used for rendering the template.

• **options?**: [`TemplateRenderOptions`](../type-aliases/TemplateRenderOptions.md)

Options object.

#### Returns

`Promise`\<[`TemplateRenders`](../type-aliases/TemplateRenders.md)\<`A`, `D`\>\>

Template renders.

#### Defined in

[packages/template/source/Template.ts:232](https://github.com/jakubmazanec/tools/blob/863f04cbbb9368fd023f0309084819aa9247d808/packages/template/source/Template.ts#L232)

---

### read()

> `static` **read**\<`A`, `D`\>(`templatePath`, `options`?):
> `Promise`\<[`Template`](Template.md)\<`A`, `D`\>\>

Reads a template from a file.

#### Type Parameters

• **A** _extends_ `undefined` \| `AnyZodObject` = `undefined`

• **D** _extends_ `undefined` \| `AnyZodObject` = `undefined`

#### Parameters

• **templatePath**: `string`

Path to the template file.

• **options?**: [`TemplateReadOptions`](../type-aliases/TemplateReadOptions.md)\<`A`, `D`\>

#### Returns

`Promise`\<[`Template`](Template.md)\<`A`, `D`\>\>

#### Defined in

[packages/template/source/Template.ts:149](https://github.com/jakubmazanec/tools/blob/863f04cbbb9368fd023f0309084819aa9247d808/packages/template/source/Template.ts#L149)

---

### readAndRender()

> `static` **readAndRender**\<`A`, `D`\>(`templatePath`, `data`, `options`?):
> `Promise`\<[`TemplateRenders`](../type-aliases/TemplateRenders.md)\<`A`, `D`\>\>

Reads a template from a file and then renders it.

#### Type Parameters

• **A** _extends_ `undefined` \| `AnyZodObject` = `undefined`

• **D** _extends_ `undefined` \| `AnyZodObject` = `undefined`

#### Parameters

• **templatePath**: `string`

Path to the template file.

• **data**: `D` _extends_ `undefined` ? `null` : `TypeOf`\<`NonNullable`\<`D`\>\>

Data used for rendering the template.

• **options?**:
[`TemplateReadAndRenderOptions`](../type-aliases/TemplateReadAndRenderOptions.md)\<`A`, `D`\>

Options object.

#### Returns

`Promise`\<[`TemplateRenders`](../type-aliases/TemplateRenders.md)\<`A`, `D`\>\>

Template renders.

#### Defined in

[packages/template/source/Template.ts:206](https://github.com/jakubmazanec/tools/blob/863f04cbbb9368fd023f0309084819aa9247d808/packages/template/source/Template.ts#L206)
