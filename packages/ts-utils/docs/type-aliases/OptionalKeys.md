[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: OptionalKeys\<T\>

> **OptionalKeys**\<`T`\>:
> `Exclude`\<`{ [K in keyof T]: T extends Record<K, T[K]> ? never : K }`\[keyof `T`\], `undefined`\>

Defined in:
[packages/ts-utils/source/types/OptionalKeys.ts:10](https://github.com/jakubmazanec/tools/blob/d8ee2855cc8c253cbcc5c4d49e7356ff8450cbde/packages/ts-utils/source/types/OptionalKeys.ts#L10)

Extracts the optional keys of type `T`:

```TypeScript
type Result = OptionalKeys<{ foo?: number; bar?: string; baz: boolean; }>; // `typeof Result` is `'foo' | 'bar`
```

## Type Parameters

• **T** _extends_ `object`

Base for the new type
