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

[packages/ts-utils/source/types/TupleToUnion.ts:10](https://github.com/jakubmazanec/tools/blob/28bd44b020b25cf8f9b96b5a385bb7c918cf32ab/packages/ts-utils/source/types/TupleToUnion.ts#L10)
