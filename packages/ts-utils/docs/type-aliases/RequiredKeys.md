[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type Alias: RequiredKeys\<T\>

> **RequiredKeys**\<`T`\>:
> `Exclude`\<`{ [K in keyof T]: T extends Record<K, T[K]> ? K : never }`\[keyof `T`\], `undefined`\>

Extracts the non-optional keys of type `T`:

```TypeScript
type Result = RequiredKeys<{ foo: number; bar: string; baz?: boolean; }>; // `typeof Result` is `'foo' | 'bar`
```

## Type Parameters

• **T** _extends_ `object`

Base for the new type

## Defined in

[packages/ts-utils/source/types/RequiredKeys.ts:10](https://github.com/jakubmazanec/tools/blob/28bd44b020b25cf8f9b96b5a385bb7c918cf32ab/packages/ts-utils/source/types/RequiredKeys.ts#L10)
