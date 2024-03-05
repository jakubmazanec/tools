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

## Type parameters

| Name | Type                                                | Description                                                           |
| :--- | :-------------------------------------------------- | :-------------------------------------------------------------------- |
| `A`  | extends `AnyZodObject` \| `undefined` = `undefined` | A Zod schema type used to define the custom template attributes type. |
| `D`  | extends `AnyZodObject` \| `undefined` = `undefined` | A Zod schema type used to define the template datatype.               |

## Table of contents

### Constructors

- [constructor](Template.md#constructor)

### Properties

- [attributes](Template.md#attributes)
- [attributesSchema](Template.md#attributesschema)
- [content](Template.md#content)
- [dataSchema](Template.md#dataschema)
- [fn](Template.md#fn)
- [path](Template.md#path)

### Methods

- [render](Template.md#render)
- [read](Template.md#read)
- [readAndRender](Template.md#readandrender)

## Constructors

### constructor

• **new Template**\<`A`, `D`\>(`«destructured»`): [`Template`](Template.md)\<`A`, `D`\>

#### Type parameters

| Name | Type                                                |
| :--- | :-------------------------------------------------- |
| `A`  | extends `undefined` \| `AnyZodObject` = `undefined` |
| `D`  | extends `undefined` \| `AnyZodObject` = `undefined` |

#### Parameters

| Name             | Type                                                          |
| :--------------- | :------------------------------------------------------------ |
| `«destructured»` | [`TemplateOptions`](../README.md#templateoptions)\<`A`, `D`\> |

#### Returns

[`Template`](Template.md)\<`A`, `D`\>

#### Defined in

[packages/template/source/Template.ts:116](https://github.com/jakubmazanec/js-tools/blob/9d3fb6e/packages/template/source/Template.ts#L116)

## Properties

### attributes

• `Readonly` **attributes**: `A` extends `undefined` ? \{ `extends?`: `string` ; `if?`: `string` ;
`to`: `string` ; `variables?`: `Record`\<`string`, `unknown`\> \| `Record`\<`string`, `unknown`\>[]
} : \{ `extends?`: `string` ; `if?`: `string` ; `to`: `string` ; `variables?`: `Record`\<`string`,
`unknown`\> \| `Record`\<`string`, `unknown`\>[] } & `TypeOf`\<`NonNullable`\<`A`\>\>

Template attributes. These control how the template is rendered. Some attributes can be written in
[EJS](https://ejs.co/) and are rendered before the template content is rendered. It is expected that
attribute `if` renders to a string that can be parsed as YAML value; if that value is `false`, the
rendering is cancelled. Attribute `to` is also rendered and it represents the path of file the
resulting template render is supposed to be written into (by the user). Attribute `variables` is an
object that is merged with the data object before rendering. If attribute `variables` is an array of
objects, that leads to multiple renders, each with different variables object merged with the data.
Each variable that is a string is also rendered.

#### Defined in

[packages/template/source/Template.ts:104](https://github.com/jakubmazanec/js-tools/blob/9d3fb6e/packages/template/source/Template.ts#L104)

---

### attributesSchema

• `Readonly` **attributesSchema**: `A` extends `AnyZodObject` ? `A` : `null`

Zod schema for custom template attributes.

#### Defined in

[packages/template/source/Template.ts:111](https://github.com/jakubmazanec/js-tools/blob/9d3fb6e/packages/template/source/Template.ts#L111)

---

### content

• `Readonly` **content**: `string`

Template content. Templates are written in [EJS](https://ejs.co/).

#### Defined in

[packages/template/source/Template.ts:101](https://github.com/jakubmazanec/js-tools/blob/9d3fb6e/packages/template/source/Template.ts#L101)

---

### dataSchema

• `Readonly` **dataSchema**: `D` extends `AnyZodObject` ? `D` : `null`

Zod schema for template data.

#### Defined in

[packages/template/source/Template.ts:114](https://github.com/jakubmazanec/js-tools/blob/9d3fb6e/packages/template/source/Template.ts#L114)

---

### fn

• `Private` `Readonly` **fn**: [`TemplateFunction`](../README.md#templatefunction)

Template function.

#### Defined in

[packages/template/source/Template.ts:108](https://github.com/jakubmazanec/js-tools/blob/9d3fb6e/packages/template/source/Template.ts#L108)

---

### path

• `Optional` **path**: `string`

Template path.

#### Defined in

[packages/template/source/Template.ts:98](https://github.com/jakubmazanec/js-tools/blob/9d3fb6e/packages/template/source/Template.ts#L98)

## Methods

### render

▸ **render**(`data`, `options?`): `Promise`\<[`TemplateRenders`](../README.md#templaterenders)\<`A`,
`D`\>\>

Renders the template using data.

#### Parameters

| Name       | Type                                                                | Description                           |
| :--------- | :------------------------------------------------------------------ | :------------------------------------ |
| `data`     | `D` extends `undefined` ? `null` : `TypeOf`\<`NonNullable`\<`D`\>\> | Data used for rendering the template. |
| `options?` | [`TemplateRenderOptions`](../README.md#templaterenderoptions)       | Options object.                       |

#### Returns

`Promise`\<[`TemplateRenders`](../README.md#templaterenders)\<`A`, `D`\>\>

Template renders.

#### Defined in

[packages/template/source/Template.ts:232](https://github.com/jakubmazanec/js-tools/blob/9d3fb6e/packages/template/source/Template.ts#L232)

---

### read

▸ **read**\<`A`, `D`\>(`templatePath`, `options?`): `Promise`\<[`Template`](Template.md)\<`A`,
`D`\>\>

Reads a template from a file.

#### Type parameters

| Name | Type                                                |
| :--- | :-------------------------------------------------- |
| `A`  | extends `undefined` \| `AnyZodObject` = `undefined` |
| `D`  | extends `undefined` \| `AnyZodObject` = `undefined` |

#### Parameters

| Name           | Type                                                                  | Description                |
| :------------- | :-------------------------------------------------------------------- | :------------------------- |
| `templatePath` | `string`                                                              | Path to the template file. |
| `options?`     | [`TemplateReadOptions`](../README.md#templatereadoptions)\<`A`, `D`\> | -                          |

#### Returns

`Promise`\<[`Template`](Template.md)\<`A`, `D`\>\>

#### Defined in

[packages/template/source/Template.ts:149](https://github.com/jakubmazanec/js-tools/blob/9d3fb6e/packages/template/source/Template.ts#L149)

---

### readAndRender

▸ **readAndRender**\<`A`, `D`\>(`templatePath`, `data`, `options?`):
`Promise`\<[`TemplateRenders`](../README.md#templaterenders)\<`A`, `D`\>\>

Reads a template from a file and then renders it.

#### Type parameters

| Name | Type                                                |
| :--- | :-------------------------------------------------- |
| `A`  | extends `undefined` \| `AnyZodObject` = `undefined` |
| `D`  | extends `undefined` \| `AnyZodObject` = `undefined` |

#### Parameters

| Name           | Type                                                                                    | Description                           |
| :------------- | :-------------------------------------------------------------------------------------- | :------------------------------------ |
| `templatePath` | `string`                                                                                | Path to the template file.            |
| `data`         | `D` extends `undefined` ? `null` : `TypeOf`\<`NonNullable`\<`D`\>\>                     | Data used for rendering the template. |
| `options?`     | [`TemplateReadAndRenderOptions`](../README.md#templatereadandrenderoptions)\<`A`, `D`\> | Options object.                       |

#### Returns

`Promise`\<[`TemplateRenders`](../README.md#templaterenders)\<`A`, `D`\>\>

Template renders.

#### Defined in

[packages/template/source/Template.ts:206](https://github.com/jakubmazanec/js-tools/blob/9d3fb6e/packages/template/source/Template.ts#L206)
