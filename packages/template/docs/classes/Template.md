[**@jakubmazanec/template**](../README.md)

---

# Class: Template\<A, D\>

Defined in:
[packages/template/source/Template.ts:92](https://github.com/jakubmazanec/tools/blob/d5dfa457a1ee09ed9e5ceb4c7d1c5e6b457dfa51/packages/template/source/Template.ts#L92)

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

### A

`A` _extends_ `ZodObject` \| `undefined` = `undefined`

A Zod schema type used to define the custom template attributes type.

### D

`D` _extends_ `ZodObject` \| `undefined` = `undefined`

A Zod schema type used to define the template datatype.

## Constructors

### Constructor

> **new Template**\<`A`, `D`\>(`__namedParameters`): `Template`\<`A`, `D`\>

Defined in:
[packages/template/source/Template.ts:115](https://github.com/jakubmazanec/tools/blob/d5dfa457a1ee09ed9e5ceb4c7d1c5e6b457dfa51/packages/template/source/Template.ts#L115)

#### Parameters

##### \_\_namedParameters

[`TemplateOptions`](../type-aliases/TemplateOptions.md)\<`A`, `D`\>

#### Returns

`Template`\<`A`, `D`\>

## Properties

### attributes

> `readonly` **attributes**: `A` _extends_ `undefined` ? `object` : `object` &
> `output`\<`NonNullable`\<`A`\>\>

Defined in:
[packages/template/source/Template.ts:103](https://github.com/jakubmazanec/tools/blob/d5dfa457a1ee09ed9e5ceb4c7d1c5e6b457dfa51/packages/template/source/Template.ts#L103)

Template attributes. These control how the template is rendered. Some attributes can be written in
[EJS](https://ejs.co/) and are rendered before the template content is rendered. It is expected that
attribute `if` renders to a string that can be parsed as YAML value; if that value is `false`, the
rendering is cancelled. Attribute `to` is also rendered and it represents the path of file the
resulting template render is supposed to be written into (by the user). Attribute `variables` is an
object that is merged with the data object before rendering. If attribute `variables` is an array of
objects, that leads to multiple renders, each with different variables object merged with the data.
Each variable that is a string is also rendered.

---

### attributesSchema

> `readonly` **attributesSchema**: `A` _extends_ `ZodObject`\<`$ZodLooseShape`, `$strip`\> ?
> `A`\<`A`\> : `null`

Defined in:
[packages/template/source/Template.ts:110](https://github.com/jakubmazanec/tools/blob/d5dfa457a1ee09ed9e5ceb4c7d1c5e6b457dfa51/packages/template/source/Template.ts#L110)

Zod schema for custom template attributes.

---

### content

> `readonly` **content**: `string`

Defined in:
[packages/template/source/Template.ts:100](https://github.com/jakubmazanec/tools/blob/d5dfa457a1ee09ed9e5ceb4c7d1c5e6b457dfa51/packages/template/source/Template.ts#L100)

Template content. Templates are written in [EJS](https://ejs.co/).

---

### dataSchema

> `readonly` **dataSchema**: `D` _extends_ `ZodObject`\<`$ZodLooseShape`, `$strip`\> ? `D`\<`D`\> :
> `null`

Defined in:
[packages/template/source/Template.ts:113](https://github.com/jakubmazanec/tools/blob/d5dfa457a1ee09ed9e5ceb4c7d1c5e6b457dfa51/packages/template/source/Template.ts#L113)

Zod schema for template data.

---

### path?

> `optional` **path**: `string`

Defined in:
[packages/template/source/Template.ts:97](https://github.com/jakubmazanec/tools/blob/d5dfa457a1ee09ed9e5ceb4c7d1c5e6b457dfa51/packages/template/source/Template.ts#L97)

Template path.

## Methods

### render()

> **render**(`data`, `options?`):
> `Promise`\<[`TemplateRenders`](../type-aliases/TemplateRenders.md)\<`A`, `D`\>\>

Defined in:
[packages/template/source/Template.ts:231](https://github.com/jakubmazanec/tools/blob/d5dfa457a1ee09ed9e5ceb4c7d1c5e6b457dfa51/packages/template/source/Template.ts#L231)

Renders the template using data.

#### Parameters

##### data

`D` _extends_ `undefined` ? `null` : `output`\<`NonNullable`\<`D`\>\>

Data used for rendering the template.

##### options?

[`TemplateRenderOptions`](../type-aliases/TemplateRenderOptions.md)

Options object.

#### Returns

`Promise`\<[`TemplateRenders`](../type-aliases/TemplateRenders.md)\<`A`, `D`\>\>

Template renders.

---

### read()

> `static` **read**\<`A`, `D`\>(`templatePath`, `options?`): `Promise`\<`Template`\<`A`, `D`\>\>

Defined in:
[packages/template/source/Template.ts:148](https://github.com/jakubmazanec/tools/blob/d5dfa457a1ee09ed9e5ceb4c7d1c5e6b457dfa51/packages/template/source/Template.ts#L148)

Reads a template from a file.

#### Type Parameters

##### A

`A` _extends_ `ZodObject`\<`$ZodLooseShape`, `$strip`\> \| `undefined` = `undefined`

##### D

`D` _extends_ `ZodObject`\<`$ZodLooseShape`, `$strip`\> \| `undefined` = `undefined`

#### Parameters

##### templatePath

`string`

Path to the template file.

##### options?

[`TemplateReadOptions`](../type-aliases/TemplateReadOptions.md)\<`A`, `D`\>

#### Returns

`Promise`\<`Template`\<`A`, `D`\>\>

---

### readAndRender()

> `static` **readAndRender**\<`A`, `D`\>(`templatePath`, `data`, `options?`):
> `Promise`\<[`TemplateRenders`](../type-aliases/TemplateRenders.md)\<`A`, `D`\>\>

Defined in:
[packages/template/source/Template.ts:205](https://github.com/jakubmazanec/tools/blob/d5dfa457a1ee09ed9e5ceb4c7d1c5e6b457dfa51/packages/template/source/Template.ts#L205)

Reads a template from a file and then renders it.

#### Type Parameters

##### A

`A` _extends_ `ZodObject`\<`$ZodLooseShape`, `$strip`\> \| `undefined` = `undefined`

##### D

`D` _extends_ `ZodObject`\<`$ZodLooseShape`, `$strip`\> \| `undefined` = `undefined`

#### Parameters

##### templatePath

`string`

Path to the template file.

##### data

`D` _extends_ `undefined` ? `null` : `output`\<`NonNullable`\<`D`\>\>

Data used for rendering the template.

##### options?

[`TemplateReadAndRenderOptions`](../type-aliases/TemplateReadAndRenderOptions.md)\<`A`, `D`\>

Options object.

#### Returns

`Promise`\<[`TemplateRenders`](../type-aliases/TemplateRenders.md)\<`A`, `D`\>\>

Template renders.
