<!-- header -->
<div align="center">

# @jakubmazanec/args

TypeScript-first library for parsing command line arguments.

</div>
<!-- header -->

## Installation

```sh
npm install @jakubmazanec/args
```

⚠️ This is an [ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) package!
It cannot be required from a CommonJS module.

<!-- prerequisites -->

#### Prerequisites

- Node.js 22 or later
- TypeScript 5 or later
<!-- prerequisites -->

## Usage

Main purpose of this library is to parse command line arguments. Such command line can look like
this:

```
┌─ 1 ─┐ ┌─ 2 ──┐ ┌─── 3 ───┐ ┌─── 4 ───┐ ┌─ 5 ─┐ ┌ 6 ┐ ┌─── 7 ───┐    ┌─────── 8 ──────┐
binname do stuff --key value --key=value -key -K -aBCd foo bar baz -- --key value bar -B
└───────────────────────────────────────── 9 ──────────────────────────────────────────┘
```

1. Binary name. This is never passed to the parser.
2. Command name.
3. Option with a value. Option name can be in camel case or kebab case.
4. Another way to specify an option with a value.
5. Boolean options don't have to specify value to be true. Options can also be defined using a short
   option form.
6. Short options group; usually used for boolean options.
7. Parameters.
8. Rest arguments appear after the `--`; they are not parsed, but still included in the result.
9. The whole command line.

The parser is strict and returns fully typed result. You can use it by calling `parseArguments`
function with the list of arguments and parser configuration:

```TypeScript
import {parseArguments} from '@jakubmazanec/args';

let {command, parameters, options} = parseArguments(process.argv.slice(2), {
  commands: ['run', 'build'],
  parameters: [{
    description: 'File name',
    type: 'string',
    required: true,
  }],
  options: {
    help: {
      type: 'boolean'
    }
  }
});

console.log(command); // type of `command` is `'run' | 'build' | undefined`
console.log(parameters); // type of `parameters` is `[string | undefined]`
console.log(options); // type of `options` is `{help: boolean | undefined}`
```

See [`ParserConfig`](./docs/README.md#parserconfig) for more information about how to configure the
parser.

## Documentation

See [API reference](./docs) for auto-generated documentation.

## Contributing

If you want to contribute, see [CONTRIBUTING](./CONTRIBUTING.md) for details.

## License

This package is licensed under the GNU Lesser General Public License v3. See [LICENSE](./LICENSE.md)
for details.
