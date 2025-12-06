[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: RequiredKeys\<T\>

> **RequiredKeys**\<`T`\> =
> `Exclude`\<`{ [K in keyof T]: T extends Record<K, T[K]> ? K : never }`\[keyof `T`\], `undefined`\>

Defined in:
[packages/ts-utils/source/types/RequiredKeys.ts:10](https://github.com/jakubmazanec/tools/blob/4b0540484b6010d133c2a5e92e51cdd4ed82edb4/packages/ts-utils/source/types/RequiredKeys.ts#L10)

Extracts the non-optional keys of type `T`:

```TypeScript
type Result = RequiredKeys<{ foo: number; bar: string; baz?: boolean; }>; // `typeof Result` is `'foo' | 'bar`
```

## Type Parameters

### T

`T` _extends_ `object`

Base for the new type
