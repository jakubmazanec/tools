[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: RequiredKeys\<T\>

> **RequiredKeys**\<`T`\>:
> `Exclude`\<`{ [K in keyof T]: T extends Record<K, T[K]> ? K : never }`\[keyof `T`\], `undefined`\>

Defined in:
[packages/ts-utils/source/types/RequiredKeys.ts:10](https://github.com/jakubmazanec/tools/blob/b189bd808f93a39eacbf7e401a82a754c5ce3b63/packages/ts-utils/source/types/RequiredKeys.ts#L10)

Extracts the non-optional keys of type `T`:

```TypeScript
type Result = RequiredKeys<{ foo: number; bar: string; baz?: boolean; }>; // `typeof Result` is `'foo' | 'bar`
```

## Type Parameters

• **T** _extends_ `object`

Base for the new type
