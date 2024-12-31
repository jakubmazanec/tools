[**@jakubmazanec/ts-utils**](../README.md)

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

[packages/ts-utils/source/types/TupleToUnion.ts:10](https://github.com/jakubmazanec/tools/blob/92d3fc1374d1ad6d45198d05d061e0f856a89434/packages/ts-utils/source/types/TupleToUnion.ts#L10)
