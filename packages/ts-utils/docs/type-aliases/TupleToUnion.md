[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: TupleToUnion\<T\>

> **TupleToUnion**\<`T`\> = `T`\[`number`\]

Defined in:
[packages/ts-utils/source/types/TupleToUnion.ts:10](https://github.com/jakubmazanec/tools/blob/e3906ac2943abeadc19b5add1f3702fecb8f15db/packages/ts-utils/source/types/TupleToUnion.ts#L10)

Converts tuple type to union type:

```TypeScript
type Result = TupleToUnion<['foo', 'bar']>; // `typeof Result` is `"foo" | "bar"`
```

## Type Parameters

### T

`T` _extends_ `unknown`[] \| readonly `unknown`[]

Base for the new type.
