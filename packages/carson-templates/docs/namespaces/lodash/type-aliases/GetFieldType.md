[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Type alias: GetFieldType\<T, P\>

> **GetFieldType**\<`T`, `P`\>: `P` _extends_ \`$\{infer Left\}.$\{infer Right\}\` ? `Left`
> _extends_ keyof `Exclude`\<`T`, `undefined`\> ?
> [`FieldWithPossiblyUndefined`](FieldWithPossiblyUndefined.md)\<`Exclude`\<`T`,
> `undefined`\>\[`Left`\], `Right`\> \| `Extract`\<`T`, `undefined`\> : `Left` _extends_
> \`$\{infer FieldKey\}\[$\{infer IndexKey\}\]\` ? `FieldKey` _extends_ keyof `T` ?
> [`FieldWithPossiblyUndefined`](FieldWithPossiblyUndefined.md)\<[`IndexedFieldWithPossiblyUndefined`](IndexedFieldWithPossiblyUndefined.md)\<`T`\[`FieldKey`\],
> `IndexKey`\>, `Right`\> : `undefined` : `undefined` : `P` _extends_ keyof `T` ? `T`\[`P`\] : `P`
> _extends_ \`$\{infer FieldKey\}\[$\{infer IndexKey\}\]\` ? `FieldKey` _extends_ keyof `T` ?
> [`IndexedFieldWithPossiblyUndefined`](IndexedFieldWithPossiblyUndefined.md)\<`T`\[`FieldKey`\],
> `IndexKey`\> : `undefined` :
> [`IndexedFieldWithPossiblyUndefined`](IndexedFieldWithPossiblyUndefined.md)\<`T`, `P`\>

## Type parameters

• **T**

• **P**

## Source

node_modules/@types/lodash/common/object.d.ts:1043
