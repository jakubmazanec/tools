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
[packages/ui/source/components/data-table/DataTableFilters.ts:3](https://github.com/jakubmazanec/tools/blob/6fe16df773d5da14c29261ea934e72b3f99fabb7/packages/ui/source/components/data-table/DataTableFilters.ts#L3)
