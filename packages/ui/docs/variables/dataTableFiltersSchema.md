[**@jakubmazanec/ui**](../README.md)

---

# Variable: dataTableFiltersSchema

> `const` **dataTableFiltersSchema**: `ZodUnion`\<\[`ZodNull`, `ZodArray`\<`ZodObject`\<\{ `column`:
> `ZodString`; `filter`: `ZodUnion`\<\[`ZodString`, `ZodNumber`, `ZodBoolean`,
> `ZodTuple`\<\[`ZodOptional`\<`ZodNullable`\<...\>\>, `ZodOptional`\<`ZodNullable`\<...\>\>\],
> `null`\>\]\>; \}, `"strip"`, `ZodTypeAny`, \{ `column`: `string`; `filter`: `string` \| `number`
> \| `boolean` \| \[`undefined` \| `null` \| `number`, `undefined` \| `null` \| `number`\]; \}, \{
> `column`: `string`; `filter`: `string` \| `number` \| `boolean` \| \[`undefined` \| `null` \|
> `number`, `undefined` \| `null` \| `number`\]; \}\>, `"many"`\>\]\>

Defined in:
[packages/ui/source/components/data-table/DataTableFilters.ts:3](https://github.com/jakubmazanec/tools/blob/d956cf350ae3e6bad1df754a19dfbabb088c1451/packages/ui/source/components/data-table/DataTableFilters.ts#L3)
