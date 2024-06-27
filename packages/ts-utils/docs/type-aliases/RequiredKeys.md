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

[packages/ts-utils/source/types/RequiredKeys.ts:10](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/ts-utils/source/types/RequiredKeys.ts#L10)
