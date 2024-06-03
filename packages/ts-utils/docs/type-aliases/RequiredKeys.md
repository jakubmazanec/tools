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

[packages/ts-utils/source/types/RequiredKeys.ts:10](https://github.com/jakubmazanec/js-tools/blob/9580d5f68de35b95719fd49b679b2d5576d49582/packages/ts-utils/source/types/RequiredKeys.ts#L10)
