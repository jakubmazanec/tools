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

[packages/ui/source/components/data-table/DataTablePagination.ts:5](https://github.com/jakubmazanec/tools/blob/eb8c22844f0a0aa0874efeab93afc2bd96c269e6/packages/ui/source/components/data-table/DataTablePagination.ts#L5)
