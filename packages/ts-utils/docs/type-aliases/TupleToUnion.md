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

[packages/ts-utils/source/types/TupleToUnion.ts:10](https://github.com/jakubmazanec/js-tools/blob/4653f1571319b3537b5a901a19e171562b7727e5/packages/ts-utils/source/types/TupleToUnion.ts#L10)
