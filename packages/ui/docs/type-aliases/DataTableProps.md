[**@jakubmazanec/ui**](../README.md)

---

# Type Alias: DataTableProps\<D, C\>

> **DataTableProps**\<`D`, `C`\>: `object`

Defined in:
[packages/ui/source/components/data-table/DataTable.tsx:68](https://github.com/jakubmazanec/tools/blob/dcfb3b06be051bf99e23e7e35174b07af0f0fddd/packages/ui/source/components/data-table/DataTable.tsx#L68)

## Type Parameters

• **D**

• **C**

## Type declaration

### clientFaceting?

> `optional` **clientFaceting**: `boolean`

### clientFilters?

> `optional` **clientFilters**: `boolean`

### clientPagination?

> `optional` **clientPagination**: `boolean`

### clientSearch?

> `optional` **clientSearch**: `boolean`

### clientSorting?

> `optional` **clientSorting**: `boolean`

### columnOrder?

> `optional` **columnOrder**: `any`[]

### columnPinning?

> `optional` **columnPinning**: [`DataTableColumnPinning`](DataTableColumnPinning.md)

### columns

> **columns**: `C`

### columnVisibility?

> `optional` **columnVisibility**: [`DataTableColumnVisibility`](DataTableColumnVisibility.md)

### data

> **data**: `D`[]

### faceting?

> `optional` **faceting**: [`DataTableFaceting`](DataTableFaceting.md)

### filters?

> `optional` **filters**: [`DataTableFilters`](DataTableFilters.md)

### hideColumnOrder?

> `optional` **hideColumnOrder**: `boolean`

### hideColumnPinning?

> `optional` **hideColumnPinning**: `boolean`

### hideColumnResizing?

> `optional` **hideColumnResizing**: `boolean`

### hideColumnVisibility?

> `optional` **hideColumnVisibility**: `boolean`

### hideFilters?

> `optional` **hideFilters**: `boolean`

### hidePagination?

> `optional` **hidePagination**: `boolean`

### hideSearch?

> `optional` **hideSearch**: `boolean`

### hideSorting?

> `optional` **hideSorting**: `boolean`

### onColumnOrderChange()?

> `optional` **onColumnOrderChange**: (`columnOrder`) => `void`

#### Parameters

##### columnOrder

`any`[]

#### Returns

`void`

### onColumnPinningChange()?

> `optional` **onColumnPinningChange**: (`columnPinning`) => `void`

#### Parameters

##### columnPinning

[`DataTableColumnPinning`](DataTableColumnPinning.md)

#### Returns

`void`

### onColumnVisibilityChange()?

> `optional` **onColumnVisibilityChange**: (`columnVisibility`) => `void`

#### Parameters

##### columnVisibility

[`DataTableColumnVisibility`](DataTableColumnVisibility.md)

#### Returns

`void`

### onFiltersChange()?

> `optional` **onFiltersChange**: (`filters`) => `void`

#### Parameters

##### filters

[`DataTableFilters`](DataTableFilters.md)

#### Returns

`void`

### onPaginationChange()?

> `optional` **onPaginationChange**: (`pagination`) => `void`

#### Parameters

##### pagination

`Pick`\<[`DataTablePagination`](DataTablePagination.md), `"page"`\> |
`Pick`\<[`DataTablePagination`](DataTablePagination.md), `"pageSize"`\>

#### Returns

`void`

### onSearchChange()?

> `optional` **onSearchChange**: (`search`) => `void`

#### Parameters

##### search

[`DataTableSearch`](DataTableSearch.md)

#### Returns

`void`

### onSortingChange()?

> `optional` **onSortingChange**: (`sorting`) => `void`

#### Parameters

##### sorting

[`DataTableSorting`](DataTableSorting.md)

#### Returns

`void`

### pagination?

> `optional` **pagination**: [`DataTablePagination`](DataTablePagination.md)

### search?

> `optional` **search**: [`DataTableSearch`](DataTableSearch.md)

### sorting?

> `optional` **sorting**: [`DataTableSorting`](DataTableSorting.md)
