[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: TupleToUnion\<T\>

> **TupleToUnion**\<`T`\>: `T`\[`number`\]

Defined in:
[packages/ts-utils/source/types/TupleToUnion.ts:10](https://github.com/jakubmazanec/tools/blob/f779e75b9ef98389e12e52575295bd1ef364daca/packages/ts-utils/source/types/TupleToUnion.ts#L10)

Converts tuple type to union type:

```TypeScript
type Result = TupleToUnion<['foo', 'bar']>; // `typeof Result` is `"foo" | "bar"`
```

## Type Parameters

• **T** _extends_ `unknown`[] \| readonly `unknown`[]

Base for the new type.
