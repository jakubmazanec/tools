[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type alias: DeepPartial\<T\>

> **DeepPartial**\<`T`\>: `T` _extends_ `Date` \| [`Primitive`](Primitive.md) \| `RegExp` ? `T` :
> `T` _extends_ `Map`\<infer KeyType, infer ValueType\> ? `DeepPartialMap`\<`KeyType`, `ValueType`\>
> : `T` _extends_ `Set`\<infer ItemType\> ? `DeepPartialSet`\<`ItemType`\> : `T` _extends_
> `ReadonlyMap`\<infer KeyType, infer ValueType\> ? `DeepPartialReadonlyMap`\<`KeyType`,
> `ValueType`\> : `T` _extends_ `ReadonlySet`\<infer ItemType\> ?
> `DeepPartialReadonlySet`\<`ItemType`\> : `T` _extends_ (...`args`) => `unknown` ? `T` \|
> `undefined` : `T` _extends_ `object` ? `T` _extends_ infer I[] ? `I`[] _extends_ `T` ?
> [`DeepPartial`](DeepPartial.md)\<...\>[] : `DeepPartialObject`\<`T`\> : `DeepPartialObject`\<`T`\>
> : `unknown`

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

## Type parameters

• **T**

Base for the new type

## Source

[packages/ts-utils/source/types/DeepPartial.ts:36](https://github.com/jakubmazanec/tools/blob/bb20df5276ddb119762948adc2cda520aef09f0f/packages/ts-utils/source/types/DeepPartial.ts#L36)
