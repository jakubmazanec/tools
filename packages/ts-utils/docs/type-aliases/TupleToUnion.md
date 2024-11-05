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

[packages/ts-utils/source/types/TupleToUnion.ts:10](https://github.com/jakubmazanec/tools/blob/bb20df5276ddb119762948adc2cda520aef09f0f/packages/ts-utils/source/types/TupleToUnion.ts#L10)
