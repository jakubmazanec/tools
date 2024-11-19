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

[packages/ui/source/components/data-table/DataTablePagination.ts:5](https://github.com/jakubmazanec/tools/blob/e8e1a063ee4a3ba5413ab6c19f760853c220a8ce/packages/ui/source/components/data-table/DataTablePagination.ts#L5)
