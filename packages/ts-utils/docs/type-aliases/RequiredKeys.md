[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type alias: RequiredKeys\<T\>

> **RequiredKeys**\<`T`\>:
> `Exclude`\<`{ [K in keyof T]: T extends Record<K, T[K]> ? K : never }`\[keyof `T`\], `undefined`\>

Extracts the non-optional keys of type `T`:

```TypeScript
type Result = RequiredKeys<{ foo: number; bar: string; baz?: boolean; }>; // `typeof Result` is `'foo' | 'bar`
```

## Type parameters

• **T** _extends_ `object`

Base for the new type

## Source

[packages/ts-utils/source/types/RequiredKeys.ts:10](https://github.com/jakubmazanec/tools/blob/bb20df5276ddb119762948adc2cda520aef09f0f/packages/ts-utils/source/types/RequiredKeys.ts#L10)
