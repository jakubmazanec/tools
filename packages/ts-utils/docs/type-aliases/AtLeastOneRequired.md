[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: AtLeastOneRequired\<T, P\>

> **AtLeastOneRequired**\<`T`, `P`\> = `Pick`\<`T`, `Exclude`\<keyof `T`, `P`\>\> &
> `{ [K in P]-?: Partial<Pick<T, Exclude<P, K>>> & Required<Pick<T, K>> }`\[`P`\]

Defined in:
[packages/ts-utils/source/types/AtLeastOneRequired.ts:34](https://github.com/jakubmazanec/tools/blob/e3906ac2943abeadc19b5add1f3702fecb8f15db/packages/ts-utils/source/types/AtLeastOneRequired.ts#L34)

Constructs new type from `T` so that at least one property from the set of properties `P` is
required:

```TypeScript
import { AtLeastOneRequired } from '@ori/ts-utils';

type FooOrBar = AtLeastOneRequired<{foo: string; bar: string; qux: string}, 'foo' | 'bar'>;

const fooOrBar1: FooOrBar = {
  foo: 'this is required',
  qux: 'this always required',
};

const fooOrBar2: FooOrBar = {
  bar: 'or this is required',
  qux: 'this always required',
};

const fooOrBar3: FooOrBar = {
  foo: 'we can have foo',
  bar: 'and bar',
  qux: 'this always required',
};

const fooOrBar4: FooOrBar = {
  // no foo nor bar
  qux: 'this always required',
}; // error TS2322: Type '{ qux: string; }' is not assignable to type 'FooOrBar'
```

## Type Parameters

### T

`T`

Base for the new type

### P

`P` _extends_ keyof `T` = keyof `T`

String literal or union of string literals specifying properties of `T`
