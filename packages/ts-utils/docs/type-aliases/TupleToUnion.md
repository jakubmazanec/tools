[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: TupleToUnion\<T\>

> **TupleToUnion**\<`T`\> = `T`\[`number`\]

Defined in:
[packages/ts-utils/source/types/TupleToUnion.ts:10](https://github.com/jakubmazanec/tools/blob/026d472564678641afd0039e9c07d936f221ca46/packages/ts-utils/source/types/TupleToUnion.ts#L10)

Converts tuple type to union type:

```TypeScript
type Result = TupleToUnion<['foo', 'bar']>; // `typeof Result` is `"foo" | "bar"`
```

## Type Parameters

### T

`T` _extends_ `unknown`[] \| readonly `unknown`[]

Base for the new type.
