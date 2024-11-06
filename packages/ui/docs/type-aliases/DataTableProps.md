[**@jakubmazanec/ui**](../README.md) • **Docs**

---

# Type Alias: DataTableProps\<D, C\>

> **DataTableProps**\<`D`, `C`\>: `object`

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

### onColumnOrderChange()?

> `optional` **onColumnOrderChange**: (`columnOrder`) => `void`

#### Parameters

• **columnOrder**: `any`[]

#### Returns

`void`

### onColumnPinningChange()?

> `optional` **onColumnPinningChange**: (`columnPinning`) => `void`

#### Parameters

• **columnPinning**: [`DataTableColumnPinning`](DataTableColumnPinning.md)

#### Returns

`void`

### onColumnVisibilityChange()?

> `optional` **onColumnVisibilityChange**: (`columnVisibility`) => `void`

#### Parameters

• **columnVisibility**: [`DataTableColumnVisibility`](DataTableColumnVisibility.md)

#### Returns

`void`

### onFiltersChange()?

> `optional` **onFiltersChange**: (`filters`) => `void`

#### Parameters

• **filters**: [`DataTableFilters`](DataTableFilters.md)

#### Returns

`void`

### onPaginationChange()?

> `optional` **onPaginationChange**: (`pagination`) => `void`

#### Parameters

• **pagination**: `Pick`\<[`DataTablePagination`](DataTablePagination.md), `"page"`\> \|
`Pick`\<[`DataTablePagination`](DataTablePagination.md), `"pageSize"`\>

#### Returns

`void`

### onSearchChange()?

> `optional` **onSearchChange**: (`search`) => `void`

#### Parameters

• **search**: [`DataTableSearch`](DataTableSearch.md)

#### Returns

`void`

### onSortingChange()?

> `optional` **onSortingChange**: (`sorting`) => `void`

#### Parameters

• **sorting**: [`DataTableSorting`](DataTableSorting.md)

#### Returns

`void`

### pagination?

> `optional` **pagination**: [`DataTablePagination`](DataTablePagination.md)

### search?

> `optional` **search**: [`DataTableSearch`](DataTableSearch.md)

### sorting?

> `optional` **sorting**: [`DataTableSorting`](DataTableSorting.md)

## Defined in

[packages/ui/source/components/data-table/DataTable.tsx:70](https://github.com/jakubmazanec/tools/blob/1c4f0471e4ca7ee64c14124101a8ac795175e9bf/packages/ui/source/components/data-table/DataTable.tsx#L70)
