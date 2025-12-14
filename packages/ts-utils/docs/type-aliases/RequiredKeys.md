[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: RequiredKeys\<T\>

> **RequiredKeys**\<`T`\> =
> `Exclude`\<`{ [K in keyof T]: T extends Record<K, T[K]> ? K : never }`\[keyof `T`\], `undefined`\>

Defined in:
[packages/ts-utils/source/types/RequiredKeys.ts:10](https://github.com/jakubmazanec/tools/blob/aa41f4b8a503830bb6198ebf70de9e7844bc2c44/packages/ts-utils/source/types/RequiredKeys.ts#L10)

Extracts the non-optional keys of type `T`:

```TypeScript
type Result = RequiredKeys<{ foo: number; bar: string; baz?: boolean; }>; // `typeof Result` is `'foo' | 'bar`
```

## Type Parameters

### T

`T` _extends_ `object`

Base for the new type
