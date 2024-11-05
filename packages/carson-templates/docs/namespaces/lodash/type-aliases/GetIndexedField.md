[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Type alias: GetIndexedField\<T, K\>

> **GetIndexedField**\<`T`, `K`\>: `K` _extends_ keyof `T` ? `T`\[`K`\] : `K` _extends_
> \`$\{number\}\` ? `"length"` _extends_ keyof `T` ? `number` _extends_ `T`\[`"length"`\] ? `number`
> _extends_ keyof `T` ? `T`\[`number`\] : `undefined` : `undefined` : `undefined` : `undefined`

## Type parameters

• **T**

• **K**

## Source

node_modules/@types/lodash/common/object.d.ts:1024
