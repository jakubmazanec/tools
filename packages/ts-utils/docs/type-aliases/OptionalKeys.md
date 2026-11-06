[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: OptionalKeys\<T\>

> **OptionalKeys**\<`T`\> =
> `Exclude`\<`{ [K in keyof T]: T extends Record<K, T[K]> ? never : K }`\[keyof `T`\], `undefined`\>

Defined in:
[packages/ts-utils/source/types/OptionalKeys.ts:10](https://github.com/jakubmazanec/tools/blob/77af8fc6f94d0ddce4ffb0d7fbfc7006c5b3d620/packages/ts-utils/source/types/OptionalKeys.ts#L10)

Extracts the optional keys of type `T`:

```TypeScript
type Result = OptionalKeys<{ foo?: number; bar?: string; baz: boolean; }>; // `typeof Result` is `'foo' | 'bar`
```

## Type Parameters

### T

`T` _extends_ `object`

Base for the new type
