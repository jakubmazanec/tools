[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type alias: OptionalKeys\<T\>

> **OptionalKeys**\<`T`\>:
> `Exclude`\<`{ [K in keyof T]: T extends Record<K, T[K]> ? never : K }`\[keyof `T`\], `undefined`\>

Extracts the optional keys of type `T`:

```TypeScript
type Result = OptionalKeys<{ foo?: number; bar?: string; baz: boolean; }>; // `typeof Result` is `'foo' | 'bar`
```

## Type parameters

• **T** _extends_ `object`

Base for the new type

## Source

[packages/ts-utils/source/types/OptionalKeys.ts:10](https://github.com/jakubmazanec/js-tools/blob/d8fb2f4f9576baa170e480eea0b247af3afdcd86/packages/ts-utils/source/types/OptionalKeys.ts#L10)
