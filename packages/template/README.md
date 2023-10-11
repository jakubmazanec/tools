<!-- header -->
<div align="center">

# @jakubmazanec/template

TypeScript-first library for working with templates using EJS and Zod.

</div>
<!-- header -->

## Installation

```sh
npm install @jakubmazanec/template
```

⚠️ This is an [ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) package!
It cannot be required from a CommonJS module.

#### Prerequisites

- Node.js 20 or later
- TypeScript 5 or later

## Usage

Write templates using [EJS](https://ejs.co/) with YAML front matter:

```
---
extends: './base.ejs'
to: <%- attributes.variables.path %>
if: <%- attributes.variables.enabled %>
variables:
  - path: foo-<%- value %>.json
    enabled: true
  - name: bar-<%- value %>.json
    enabled: false
---
{
    "value": <%- value %>
}
```

The front matter is used for specifying template attributes that control how is the template
rendered. The default attributes can be written in EJS too and are rendered before the template
content is rendered.

It is expected that attribute `if` renders to a string that can be parsed as YAML value; if that
value is `false`, the rendering of the whole template is cancelled.

Attribute `to` is also rendered and it represents the path of file the resulting template render is
supposed to be written into. The extension is also used for file format detection by Prettier.

Attribute `variables` is an object that is merged with the data object before rendering. If
attribute `variables` is an array of objects, that leads to multiple renders, each with different
variables object merged with the data. Each variable that is a string is also rendered.

The JavaScript variable `value` (used in EJS tags `<% %>`) is not defined, so it must be passed as a
data during the template rendering:

```TypeScript
let template = await Template.read('template.ejs', {
  dataSchema: z.object({value: z.number()}) // we have to specify the schema that represents the template data type
});

console.log(await template.render({value: 1}));
// ->
// [{
//   attributes: {
//     to: 'foo-1.json',
//     variables: { path: 'foo-1.json', enabled: true }
//   },
//   data: { value: 1 },
//   content: '{\n  "value": 1\n}\n'
// }]

console.log(await template.render({value: 2}));
// ->
// [{
//   attributes: {
//     to: 'foo-2.json',
//     variables: { path: 'foo-2.json', enabled: true }
//   },
//   data: { value: 2 },
//   content: '{\n  "value": 2\n}\n'
// }]
```

Because `variables` is an array, we can expect two renders; but because one of the variables,
`enabled` is used for rendering the value of `if` attribute and is set to `false` in the second
case, only one render is actually returned.

You can extend another template using `extends` attribute that represents path to the template to
extend, relative to the current template. The extended template is read using the same options
object. The current template attributes are recursively merged with the extended template
attributes. If the current template has no content, the content from the extended template is used.

## Documentation

See [API reference](./docs) for auto-generated documentation.

## Contributing

If you want to contribute, see [CONTRIBUTING](./CONTRIBUTING.md) for details.

## License

This package is licensed under the GNU Lesser General Public License v3. See [LICENSE](./LICENSE.md)
for details.
