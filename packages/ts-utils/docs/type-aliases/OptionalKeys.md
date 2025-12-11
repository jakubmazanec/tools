[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: OptionalKeys\<T\>

> **OptionalKeys**\<`T`\> =
> `Exclude`\<`{ [K in keyof T]: T extends Record<K, T[K]> ? never : K }`\[keyof `T`\], `undefined`\>

Defined in:
[packages/ts-utils/source/types/OptionalKeys.ts:10](https://github.com/jakubmazanec/tools/blob/9041b493988a4f48f72a1cda839ea48fba933ec4/packages/ts-utils/source/types/OptionalKeys.ts#L10)

Extracts the optional keys of type `T`:

```TypeScript
type Result = OptionalKeys<{ foo?: number; bar?: string; baz: boolean; }>; // `typeof Result` is `'foo' | 'bar`
```

## Type Parameters

### T

`T` _extends_ `object`

Base for the new type
