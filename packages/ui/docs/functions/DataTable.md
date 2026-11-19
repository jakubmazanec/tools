[**@jakubmazanec/ui**](../README.md)

---

# Function: DataTable()

> **DataTable**\<`D`, `C`\>(`__namedParameters`): `Element`

Defined in:
[components/data-table/DataTable.tsx:98](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/ui/source/components/data-table/DataTable.tsx#L98)

## Type Parameters

### D

`D` _extends_ `RowData`

### C

`C` _extends_ `ColumnDef`\<\{ `columnFacetingFeature`: `TableFeature`; `columnFilteringFeature`:
`TableFeature`; `columnOrderingFeature`: `TableFeature`; `columnPinningFeature`: `TableFeature`;
`columnResizingFeature`: `TableFeature`; `columnSizingFeature`: `TableFeature`;
`columnVisibilityFeature`: `TableFeature`; `facetedMinMaxValues`: (`table`, `columnId`) => () =>
\[`number`, `number`\] \| `undefined`; `facetedRowModel`: (`table`, `columnId`) => () =>
`RowModel`\<`any`, `any`\>; `facetedUniqueValues`: (`table`, `columnId`) => () => `Map`\<`any`,
`number`\>; `filteredRowModel`: (`table`) => () => `RowModel`\<`any`, `any`\>; `filterFns`: \{
`arrIncludes`: `CreatedFilterFn`\<`any`, `any`\>; `equals`: `CreatedFilterFn`\<`any`, `any`\>;
`includesString`: `CreatedFilterFn`\<`any`, `any`\>; `inDateRange`: `CreatedFilterFn`\<`any`,
`any`\>; `inNumberRange`: `CreatedFilterFn`\<`any`, `any`\>; `weakEquals`: `CreatedFilterFn`\<`any`,
`any`\>; \}; `globalFilteringFeature`: `TableFeature`; `paginatedRowModel`: (`table`) => () =>
`RowModel`\<`any`, `any`\>; `rowPaginationFeature`: `TableFeature`; `rowSortingFeature`:
`TableFeature`; `sortedRowModel`: (`table`) => () => `RowModel`\<`any`, `any`\>; `sortFns`: \{
`alphanumeric`: `CreatedSortFn`\<`any`, `any`\>; `datetime`: `CreatedSortFn`\<`any`, `any`\>;
`text`: `CreatedSortFn`\<`any`, `any`\>; \}; \}, `D`, `any`\>[]

## Parameters

### \_\_namedParameters

[`DataTableProps`](../type-aliases/DataTableProps.md)\<`D`, `C`\>

## Returns

`Element`
