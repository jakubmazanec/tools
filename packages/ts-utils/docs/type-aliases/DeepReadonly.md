[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type alias: DeepReadonly\<T\>

> **DeepReadonly**\<`T`\>: `T` _extends_ [`Primitive`](Primitive.md) \| (...`args`) => `unknown` ?
> `T` : `T` _extends_ `ReadonlyMap`\<infer K, infer V\> ? `DeepReadonlyMap`\<`K`, `V`\> : `T`
> _extends_ `ReadonlySet`\<infer I\> ? `DeepReadonlySet`\<`I`\> : `T` _extends_ `object` ?
> `DeepReadonlyObject`\<`T`\> : `unknown`

Same as built-in `Readonly`, but works recursively:

```TypeScript
import { DeepReadonly } from '@ori/ts-utils';

const rawData = {
  foo: ['bar'],
};

const data: DeepReadonly<typeof rawData> = rawData;

data.foo.push('bar'); // error TS2339: Property 'push' does not exist on type 'readonly string[]'
```

## Type parameters

• **T**

Base for the new type

## Source

[packages/ts-utils/source/types/DeepReadonly.ts:22](https://github.com/jakubmazanec/js-tools/blob/d8fb2f4f9576baa170e480eea0b247af3afdcd86/packages/ts-utils/source/types/DeepReadonly.ts#L22)
