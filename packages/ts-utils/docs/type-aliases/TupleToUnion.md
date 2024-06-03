[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type alias: TupleToUnion\<T\>

> **TupleToUnion**\<`T`\>: `T`\[`number`\]

Converts tuple type to union type:

```TypeScript
type Result = TupleToUnion<['foo', 'bar']>; // `typeof Result` is `"foo" | "bar"`
```

## Type parameters

• **T** _extends_ `unknown`[] \| readonly `unknown`[]

Base for the new type.

## Source

[packages/ts-utils/source/types/TupleToUnion.ts:10](https://github.com/jakubmazanec/js-tools/blob/7be96c9bc335915647cfe729050b17fe2580309a/packages/ts-utils/source/types/TupleToUnion.ts#L10)
