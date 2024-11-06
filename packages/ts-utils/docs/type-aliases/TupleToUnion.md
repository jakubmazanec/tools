[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type Alias: TupleToUnion\<T\>

> **TupleToUnion**\<`T`\>: `T`\[`number`\]

Converts tuple type to union type:

```TypeScript
type Result = TupleToUnion<['foo', 'bar']>; // `typeof Result` is `"foo" | "bar"`
```

## Type Parameters

• **T** _extends_ `unknown`[] \| readonly `unknown`[]

Base for the new type.

## Defined in

[packages/ts-utils/source/types/TupleToUnion.ts:10](https://github.com/jakubmazanec/tools/blob/4ad59c6b8eb7868ab1902d25f4c1aae28b28a6e4/packages/ts-utils/source/types/TupleToUnion.ts#L10)
