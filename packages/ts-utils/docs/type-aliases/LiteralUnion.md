[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type alias: LiteralUnion\<L, T\>

> **LiteralUnion**\<`L`, `T`\>: `L` \| `Record`\<`never`, `never`\> & `T`

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

## Type parameters

• **L**

Union of literal types

• **T** _extends_ [`Primitive`](Primitive.md)

Primitive type

## Source

[packages/ts-utils/source/types/LiteralUnion.ts:22](https://github.com/jakubmazanec/tools/blob/2f8bfe433bf76006231c1e3b5197238029672b8c/packages/ts-utils/source/types/LiteralUnion.ts#L22)
