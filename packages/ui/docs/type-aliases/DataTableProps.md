[**@jakubmazanec/ui**](../README.md) • **Docs**

---

# Type alias: DataTableProps\<D, C\>

> **DataTableProps**\<`D`, `C`\>: `object`

## Type parameters

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

### columnVisibility?

> `optional` **columnVisibility**: [`DataTableColumnVisibility`](DataTableColumnVisibility.md)

### columns

> **columns**: `C`

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

## Source

[packages/ui/source/components/data-table/DataTable.tsx:70](https://github.com/jakubmazanec/tools/blob/bb20df5276ddb119762948adc2cda520aef09f0f/packages/ui/source/components/data-table/DataTable.tsx#L70)
