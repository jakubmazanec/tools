<div align="center">

# @jakubmazanec/error

Collection of utilities for creating and handling errors.

</div>

## Installation

```sh
npm install @jakubmazanec/error
```

⚠️ This is an [ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) package!
It cannot be required from a CommonJS module.

#### Prerequisites

- Node.js 16 or later
- TypeScript 5 or later

## Usage

Create custom error classes to distinguish between errors and to ensure consistent error messages:

```TypeScript
import {createCustomError} from '@jakubmazanec/error';

let FoobarError = createCustomError('FoobarError', {
  FOOBAR_NOT_FOUND: 'Foobar was not found!',
});

try {
  throw new FoobarError('FOOBAR_NOT_FOUND');
} catch (error: unknown) {
  console.log(error instanceof FoobarError); // -> true
  console.log(error.message); // -> 'Foobar was not found!'
  console.log(error.code); // -> 'FOOBAR_NOT_FOUND'
}
```

You can also have arbitrary data attached:

```TypeScript
import {createCustomErrorWithData} from '@jakubmazanec/error';
import {z} from 'zod';

let FoobarError = createCustomErrorWithData(
  'FoobarError',
  {FOOBAR_FAILED: 'Foobar failed with exit code "{0}" and message "{1}"!'},
  z.object({
    cwd: z.string(),
  })
);

function runFoobar() {
  let foobarOptions = {
    cwd: '/foobar',
  };

  try {
    foobar(foobarOptions);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new FoobarError('FOOBAR_FAILED', {
        messageParameters: [42, 'Oops :('],
        data: foobarOptions,
        cause: error,
      });
    }
  }
}

try {
  runFoobar();
} catch (error: unknown) {
  console.log(error instanceof FoobarError); // -> true
  console.log(error.message); // -> 'Foobar failed with exit code "42" and message "Oops :("!'
  console.log(error.code); // -> 'FOOBAR_FAILED'
  console.log(error.data); // -> { cwd: '/foobar' }
  console.log(error.cause); // -> Error
}
```

## Documentation

See [API reference](./docs) for auto-generated documentation.

## Contributing

If you want to contribute, see [CONTRIBUTING](./CONTRIBUTING.md) for details.

## License

This package is licensed under the GNU Lesser General Public License v3. See [LICENSE](./LICENSE.md)
for details.
