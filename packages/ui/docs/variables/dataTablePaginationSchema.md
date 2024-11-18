[**@jakubmazanec/ui**](../README.md) • **Docs**

---

# Variable: dataTablePaginationSchema

> `const` **dataTablePaginationSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`,
> `object`\>

## Type declaration

### page

> **page**: `ZodNumber`

Page number, starts with 1.

### pageCount

> **pageCount**: `ZodNumber`

### pageSize

> **pageSize**: `ZodUnion`\<[`ZodLiteral`\<`10`\>, `ZodLiteral`\<`25`\>, `ZodLiteral`\<`50`\>,
> `ZodLiteral`\<`75`\>, `ZodLiteral`\<`100`\>]\>

## Defined in

[packages/ui/source/components/data-table/DataTablePagination.ts:5](https://github.com/jakubmazanec/tools/blob/29163046acd1da0224b08fd05ca40f385e9ab4e5/packages/ui/source/components/data-table/DataTablePagination.ts#L5)
