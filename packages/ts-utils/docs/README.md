# @jakubmazanec/ts-utils

## Table of contents

### Classes

- [AssertionError](classes/AssertionError.md)

### Type Aliases

- [AtLeastOneRequired](README.md#atleastonerequired)
- [DeepPartial](README.md#deeppartial)
- [DeepReadonly](README.md#deepreadonly)
- [If](README.md#if)
- [IsEqual](README.md#isequal)
- [LiteralUnion](README.md#literalunion)
- [NonArray](README.md#nonarray)
- [NonArrayLike](README.md#nonarraylike)
- [OptionalKeys](README.md#optionalkeys)
- [Parameters](README.md#parameters)
- [Primitive](README.md#primitive)
- [RequiredKeys](README.md#requiredkeys)
- [ReturnType](README.md#returntype)
- [Simplify](README.md#simplify)
- [TupleToUnion](README.md#tupletounion)
- [UnionToIntersection](README.md#uniontointersection)
- [Writable](README.md#writable)

### Functions

- [assert](README.md#assert)
- [is](README.md#is)
- [isNonNullable](README.md#isnonnullable)
- [tuple](README.md#tuple)

## Type Aliases

### AtLeastOneRequired

Ƭ **AtLeastOneRequired**\<`T`, `P`\>: \{ [K in P]-?: Partial\<Pick\<T, Exclude\<P, K\>\>\> &
Required\<Pick\<T, K\>\> }[`P`] & `Pick`\<`T`, `Exclude`\<keyof `T`, `P`\>\>

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

#### Type parameters

| Name | Type                          | Description                                                             |
| :--- | :---------------------------- | :---------------------------------------------------------------------- |
| `T`  | `T`                           | Base for the new type                                                   |
| `P`  | extends keyof `T` = keyof `T` | String literal or union of string literals specifying properties of `T` |

#### Defined in

[packages/ts-utils/source/types/AtLeastOneRequired.ts:34](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/ts-utils/source/types/AtLeastOneRequired.ts#L34)

---

### DeepPartial

Ƭ **DeepPartial**\<`T`\>: `T` extends `Date` \| [`Primitive`](README.md#primitive) \| `RegExp` ? `T`
: `T` extends `Map`\<infer KeyType, infer ValueType\> ? `DeepPartialMap`\<`KeyType`, `ValueType`\> :
`T` extends `Set`\<infer ItemType\> ? `DeepPartialSet`\<`ItemType`\> : `T` extends
`ReadonlyMap`\<infer KeyType, infer ValueType\> ? `DeepPartialReadonlyMap`\<`KeyType`, `ValueType`\>
: `T` extends `ReadonlySet`\<infer ItemType\> ? `DeepPartialReadonlySet`\<`ItemType`\> : `T` extends
(...`args`: `any`[]) => `unknown` ? `T` \| `undefined` : `T` extends `object` ? `T` extends infer
I[] ? `I`[] extends `T` ? [`DeepPartial`](README.md#deeppartial)\<`I` \| `undefined`\>[] :
`DeepPartialObject`\<`T`\> : `DeepPartialObject`\<`T`\> : `unknown`

Same as built-in `Partial`, but works recursively. Useful when 1) you have a config object to which
you need to merge another object, which would be a deep partial of a default object, or 2) you need
to test or mock complex object, but most of its keys would be redundant for this purpose.

```TypeScript
import { DeepPartial } from '@ori/ts-utils';
import { UiSettings } from './UiSettings';

let settings: UiSettings = {
  lineNumbers: true,
  scrollbar: {
    useShadows: false,
    vertical: 'visible',
    horizontal: 'auto',
  },
  minimap: {
    enabled: false,
  },
  folding: {
    enabled: true,
  },
};

function updateSettings(newSettings: DeepPartial<UiSettings>) {
  return { ...settings, ...newSettings };
}

settings = updateSettings({ minimap: { enabled: true } });
```

#### Type parameters

| Name | Description           |
| :--- | :-------------------- |
| `T`  | Base for the new type |

#### Defined in

[packages/ts-utils/source/types/DeepPartial.ts:36](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/ts-utils/source/types/DeepPartial.ts#L36)

---

### DeepReadonly

Ƭ **DeepReadonly**\<`T`\>: `T` extends [`Primitive`](README.md#primitive) \| (...`args`: `any`[]) =>
`unknown` ? `T` : `T` extends `ReadonlyMap`\<infer K, infer V\> ? `DeepReadonlyMap`\<`K`, `V`\> :
`T` extends `ReadonlySet`\<infer I\> ? `DeepReadonlySet`\<`I`\> : `T` extends `object` ?
`DeepReadonlyObject`\<`T`\> : `unknown`

Same as built-in `Readonly`, but works recursively:

```TypeScript
import { DeepReadonly } from '@ori/ts-utils';

const rawData = {
  foo: ['bar'],
};

const data: DeepReadonly<typeof rawData> = rawData;

data.foo.push('bar'); // error TS2339: Property 'push' does not exist on type 'readonly string[]'
```

#### Type parameters

| Name | Description           |
| :--- | :-------------------- |
| `T`  | Base for the new type |

#### Defined in

[packages/ts-utils/source/types/DeepReadonly.ts:22](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/ts-utils/source/types/DeepReadonly.ts#L22)

---

### If

Ƭ **If**\<`X`, `Y`, `T`, `F`\>: `X` extends `Y` ? `T` : `F`

`If<X, Y, T, F>` is shorthand for conditional type `X extends Y ? T : F`:

```TypeScript
// these two types are equivalent:
type NonNullable<T> = T extends null | undefined ? never : T;
type NonNullable<T> = If<T, null | undefined, never, T>;
```

#### Type parameters

| Name | Description                                    |
| :--- | :--------------------------------------------- |
| `X`  | Type on the left of the `extends`              |
| `Y`  | Type on the right of the `extends`             |
| `T`  | Type returned when `X` is assignable to `Y`    |
| `F`  | Type returned when `X` isn't assignable to `Y` |

#### Defined in

[packages/ts-utils/source/types/If.ts:15](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/ts-utils/source/types/If.ts#L15)

---

### IsEqual

Ƭ **IsEqual**\<`T`, `U`\>: \<G\>() => `G` extends `T` ? `1` : `2` extends \<G\>() => `G` extends `U`
? `1` : `2` ? `true` : `false`

Allows you to test if two types are the same:

```TypeScript
type Result = IsEqual<string, number> // `typeof Result` is `false`
```

```TypeScript
type Result = IsEqual<{foo: string}, {foo: string}> // `typeof Result` is `true`
```

#### Type parameters

| Name | Description            |
| :--- | :--------------------- |
| `T`  | First type to compare  |
| `U`  | Second type to compare |

#### Defined in

[packages/ts-utils/source/types/IsEqual.ts:15](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/ts-utils/source/types/IsEqual.ts#L15)

---

### LiteralUnion

Ƭ **LiteralUnion**\<`L`, `T`\>: `L` \| `Record`\<`never`, `never`\> & `T`

Creates union type by combining primitve types and literal types while allowing auto-completion in
IDEs. This type is a workaround for
[Microsoft/TypeScript#29729](https://github.com/Microsoft/TypeScript/issues/29729).

```TypeScript
type Animal = 'cat' | 'dog' | string;

const: animal: Animal = ''; // No auto-completion here...
```

```TypeScript
type Animal = LiteralUnion<'cat' | 'dog', string>;

const: animal: Animal = ''; // Auto-completion works: 'cat' and 'dog' is suggested!
```

#### Type parameters

| Name | Type                                       | Description            |
| :--- | :----------------------------------------- | :--------------------- |
| `L`  | `L`                                        | Union of literal types |
| `T`  | extends [`Primitive`](README.md#primitive) | Primitive type         |

#### Defined in

[packages/ts-utils/source/types/LiteralUnion.ts:22](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/ts-utils/source/types/LiteralUnion.ts#L22)

---

### NonArray

Ƭ **NonArray**\<`T`\>: `T` extends `any`[] ? `never` : `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[packages/ts-utils/source/types/NonArray.ts:3](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/ts-utils/source/types/NonArray.ts#L3)

---

### NonArrayLike

Ƭ **NonArrayLike**\<`T`\>: `T` extends `ArrayLike`\<`any`\> ? `never` : `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[packages/ts-utils/source/types/NonArrayLike.ts:3](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/ts-utils/source/types/NonArrayLike.ts#L3)

---

### OptionalKeys

Ƭ **OptionalKeys**\<`T`\>: `Exclude`\<\{ [K in keyof T]: T extends Record\<K, T[K]\> ? never : K
}[keyof `T`], `undefined`\>

Extracts the optional keys of type `T`:

```TypeScript
type Result = OptionalKeys<{ foo?: number; bar?: string; baz: boolean; }>; // `typeof Result` is `'foo' | 'bar`
```

#### Type parameters

| Name | Type             | Description           |
| :--- | :--------------- | :-------------------- |
| `T`  | extends `object` | Base for the new type |

#### Defined in

[packages/ts-utils/source/types/OptionalKeys.ts:10](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/ts-utils/source/types/OptionalKeys.ts#L10)

---

### Parameters

Ƭ **Parameters**\<`T`\>: `T` extends (...`args`: infer P) => `any` ? `P` : `never`

Constructs a tuple type from the types used in the parameters of a function type `T`. Similarly like
built-in `Parameters` utility type, but works also on nullable and other types.

```TypeScript
interface Foo {
  get?: (id: number) => string;
}

declare const foo: Foo;

type Result = Parameters<typeof foo.get>; // `typeof Result` is `[id: number]`
```

#### Type parameters

| Name | Type                                                                              | Description           |
| :--- | :-------------------------------------------------------------------------------- | :-------------------- |
| `T`  | extends `""` \| `false` \| (...`args`: `any`[]) => `any` \| `null` \| `undefined` | Base for the new type |

#### Defined in

[packages/ts-utils/source/types/Parameters.ts:19](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/ts-utils/source/types/Parameters.ts#L19)

---

### Primitive

Ƭ **Primitive**: `bigint` \| `boolean` \| `number` \| `string` \| `symbol` \| `null` \| `undefined`

Union of primitive types.

#### Defined in

[packages/ts-utils/source/types/Primitive.ts:4](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/ts-utils/source/types/Primitive.ts#L4)

---

### RequiredKeys

Ƭ **RequiredKeys**\<`T`\>: `Exclude`\<\{ [K in keyof T]: T extends Record\<K, T[K]\> ? K : never
}[keyof `T`], `undefined`\>

Extracts the non-optional keys of type `T`:

```TypeScript
type Result = RequiredKeys<{ foo: number; bar: string; baz?: boolean; }>; // `typeof Result` is `'foo' | 'bar`
```

#### Type parameters

| Name | Type             | Description           |
| :--- | :--------------- | :-------------------- |
| `T`  | extends `object` | Base for the new type |

#### Defined in

[packages/ts-utils/source/types/RequiredKeys.ts:10](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/ts-utils/source/types/RequiredKeys.ts#L10)

---

### ReturnType

Ƭ **ReturnType**\<`T`\>: `T` extends (...`args`: `any`[]) => infer R ? `R` extends
`PromiseLike`\<infer J\> ? `J` : `R` : `never`

Constructs a type consisting of the return type of function `T`. Similarly like built-in
`ReturnType` utility type, but works also on nullable and other types, and if you use it with async
function, it doesn't return the type as a `Promise`:

```TypeScript
interface Foo {
  get?: (id: number) => Promise<string>;
}

declare const foo: Foo;

type Result = ReturnType<typeof foo.get>; // `typeof Result` is `string`
```

#### Type parameters

| Name | Type                                                                              | Description           |
| :--- | :-------------------------------------------------------------------------------- | :-------------------- |
| `T`  | extends `""` \| `false` \| (...`args`: `any`[]) => `any` \| `null` \| `undefined` | Base for the new type |

#### Defined in

[packages/ts-utils/source/types/ReturnType.ts:20](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/ts-utils/source/types/ReturnType.ts#L20)

---

### Simplify

Ƭ **Simplify**\<`T`\>: \{ [KeyType in keyof T]: T[KeyType] }

Maps all keys of type `T` to a new object type. Useful for converting interfaces to types or showing
better hints from the language server.

#### Type parameters

| Name | Description            |
| :--- | :--------------------- |
| `T`  | Base for the new type. |

#### Defined in

[packages/ts-utils/source/types/Simplify.ts:6](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/ts-utils/source/types/Simplify.ts#L6)

---

### TupleToUnion

Ƭ **TupleToUnion**\<`T`\>: `T`[`number`]

Converts tuple type to union type:

```TypeScript
type Result = TupleToUnion<['foo', 'bar']>; // `typeof Result` is `"foo" | "bar"`
```

#### Type parameters

| Name | Type                                        | Description            |
| :--- | :------------------------------------------ | :--------------------- |
| `T`  | extends `unknown`[] \| readonly `unknown`[] | Base for the new type. |

#### Defined in

[packages/ts-utils/source/types/TupleToUnion.ts:10](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/ts-utils/source/types/TupleToUnion.ts#L10)

---

### UnionToIntersection

Ƭ **UnionToIntersection**\<`U`\>: `boolean` extends `U` ?
`UnionToIntersectionHelper`\<`Exclude`\<`U`, `boolean`\>\> & `boolean` :
`UnionToIntersectionHelper`\<`U`\>

Converts union type to intersection type:

```TypeScript
type Result = UnionToIntersection<{ foo: string } | { bar: string }>; // `typeof Result` is `{foo: string} & {bar: string}`
```

#### Type parameters

| Name | Description           |
| :--- | :-------------------- |
| `U`  | Base for the new type |

#### Defined in

[packages/ts-utils/source/types/UnionToIntersection.ts:10](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/ts-utils/source/types/UnionToIntersection.ts#L10)

---

### Writable

Ƭ **Writable**\<`T`\>: \{ -readonly [K in keyof T]: T[K] }

Create a new type that removes `readonly` from object types's keys. Inverse of Readonly<T>.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[packages/ts-utils/source/types/Writable.ts:4](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/ts-utils/source/types/Writable.ts#L4)

## Functions

### assert

▸ **assert**(`condition`, `errorMessage?`): asserts condition

A function that throws [AssertionError](classes/AssertionError.md) (with optional message defined
with `errorMessage`) if `condition` is falsy. You can use it to narrow types:

```TypeScript
interface Foo {
  kind: 'Foo';
}

interface Bar {
  kind: 'Bar';
}

declare const foobar: Foo | Bar;

assert(is<Foo>(foobar, foobar.kind === 'Foo'));

// `typeof foobar` is now `Foo`
```

#### Parameters

| Name            | Type      | Description                           |
| :-------------- | :-------- | :------------------------------------ |
| `condition`     | `unknown` | Condition we're asserting isn't falsy |
| `errorMessage?` | `string`  | Message for the `AssertionError`      |

#### Returns

asserts condition

#### Defined in

[packages/ts-utils/source/utils/assert.ts:39](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/ts-utils/source/utils/assert.ts#L39)

---

### is

▸ **is**\<`T`\>(`value`, `isMatched`): value is T

A generic type guard. If `isMatched` is `true`, TypeScript assumes `value` is of type `T`. You can
use it to narrow types:

```TypeScript
interface Foo {
  value: string;
}

interface Bar {
  value: number;
}

declare let foobar: Foo | Bar;

if (is<Foo>(foobar, typeof foobar.value === 'string')) {
  // `typeof foobar` is now `Foo`
} else {
  // `typeof foobar` is now `Bar`
}
```

#### Type parameters

| Name | Description               |
| :--- | :------------------------ |
| `T`  | Potential type of `value` |

#### Parameters

| Name        | Type      | Description                         |
| :---------- | :-------- | :---------------------------------- |
| `value`     | `unknown` | Value being checked                 |
| `isMatched` | `boolean` | Specifies if `value` is of type `T` |

#### Returns

value is T

Value of `isMatched`

#### Defined in

[packages/ts-utils/source/utils/is.ts:28](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/ts-utils/source/utils/is.ts#L28)

---

### isNonNullable

▸ **isNonNullable**\<`T`\>(`value`): value is NonNullable\<T\>

A type guard that checks whether variable is not `null` or `undefined`:

```TypeScript
declare let foobar: string | null;

if (isNonNullable(foobar)) {
  // `typeof foobar` is now `string`
} else {
  // `typeof foobar` is now `null`
}
```

#### Type parameters

| Name | Description     |
| :--- | :-------------- |
| `T`  | Type of `value` |

#### Parameters

| Name    | Type | Description         |
| :------ | :--- | :------------------ |
| `value` | `T`  | Value being checked |

#### Returns

value is NonNullable\<T\>

`true` if `value` is non-nullable

#### Defined in

[packages/ts-utils/source/utils/isNonNullable.ts:18](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/ts-utils/source/utils/isNonNullable.ts#L18)

---

### tuple

▸ **tuple**\<`T`\>(`...values`): `T`

#### Type parameters

| Name | Type                                                 |
| :--- | :--------------------------------------------------- |
| `T`  | extends ({} \| [`Primitive`](README.md#primitive))[] |

#### Parameters

| Name        | Type |
| :---------- | :--- |
| `...values` | `T`  |

#### Returns

`T`

#### Defined in

[packages/ts-utils/source/utils/tuple.ts:4](https://github.com/jakubmazanec/js-tools/blob/3b3672d/packages/ts-utils/source/utils/tuple.ts#L4)
