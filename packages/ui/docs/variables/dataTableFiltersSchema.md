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
[packages/ui/source/components/data-table/DataTableFilters.ts:3](https://github.com/jakubmazanec/tools/blob/a1a5edf56256b0aa4e209cc73bc7a07f5d7fc236/packages/ui/source/components/data-table/DataTableFilters.ts#L3)
