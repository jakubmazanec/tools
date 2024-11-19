[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type Alias: DeepReadonly\<T\>

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

## Type Parameters

• **T**

Base for the new type

## Defined in

[packages/ts-utils/source/types/DeepReadonly.ts:22](https://github.com/jakubmazanec/tools/blob/a5f92f7f2969c6804808173bd093f7dbafca1b9f/packages/ts-utils/source/types/DeepReadonly.ts#L22)
