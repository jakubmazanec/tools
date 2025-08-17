[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: LiteralUnion\<L, T\>

> **LiteralUnion**\<`L`, `T`\> = `L` \| `Record`\<`never`, `never`\> & `T`

Defined in:
[packages/ts-utils/source/types/LiteralUnion.ts:22](https://github.com/jakubmazanec/tools/blob/c36a857a499e2c0c4f38fc4405cb987b357adf10/packages/ts-utils/source/types/LiteralUnion.ts#L22)

Creates union type by combining primitve types and literal types while allowing auto-completion in
IDEs. This type is a workaround for
[Microsoft/TypeScript#29729](https://github.com/Microsoft/TypeScript/issues/29729).

```TypeScript
type Animal = 'cat' | 'dog' | string;

const: animal: Animal = ''; // No auto-completion here...
```

```TypeScript
type Animal = LiteralUnion<'cat' | 'dog', string>;

const: animal: Animal = ''; // Auto-completion works: 'cat' and 'dog' is suggested!
```

## Type Parameters

### L

`L`

Union of literal types

### T

`T` _extends_ [`Primitive`](Primitive.md)

Primitive type
