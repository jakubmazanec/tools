[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: LiteralUnion\<L, T\>

> **LiteralUnion**\<`L`, `T`\> = `L` \| `Record`\<`never`, `never`\> & `T`

Defined in:
[packages/ts-utils/source/types/LiteralUnion.ts:23](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/ts-utils/source/types/LiteralUnion.ts#L23)

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
