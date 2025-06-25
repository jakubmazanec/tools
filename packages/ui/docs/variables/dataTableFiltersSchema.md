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
[packages/ui/source/components/data-table/DataTableFilters.ts:3](https://github.com/jakubmazanec/tools/blob/5907d31a071e860d7db8b8a00f698d18fe23e18a/packages/ui/source/components/data-table/DataTableFilters.ts#L3)
