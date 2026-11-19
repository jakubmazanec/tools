[**@jakubmazanec/ui**](../README.md)

---

# Function: createColumnHelper()

> **createColumnHelper**\<`TData`\>(): `ColumnHelper`\<\{ `columnFacetingFeature`: `TableFeature`;
> `columnFilteringFeature`: `TableFeature`; `columnOrderingFeature`: `TableFeature`;
> `columnPinningFeature`: `TableFeature`; `columnResizingFeature`: `TableFeature`;
> `columnSizingFeature`: `TableFeature`; `columnVisibilityFeature`: `TableFeature`;
> `facetedMinMaxValues`: (`table`, `columnId`) => () => \[`number`, `number`\] \| `undefined`;
> `facetedRowModel`: (`table`, `columnId`) => () => `RowModel`\<`any`, `any`\>;
> `facetedUniqueValues`: (`table`, `columnId`) => () => `Map`\<`any`, `number`\>;
> `filteredRowModel`: (`table`) => () => `RowModel`\<`any`, `any`\>; `filterFns`: \{ `arrIncludes`:
> `CreatedFilterFn`\<`any`, `any`\>; `equals`: `CreatedFilterFn`\<`any`, `any`\>; `includesString`:
> `CreatedFilterFn`\<`any`, `any`\>; `inDateRange`: `CreatedFilterFn`\<`any`, `any`\>;
> `inNumberRange`: `CreatedFilterFn`\<`any`, `any`\>; `weakEquals`: `CreatedFilterFn`\<`any`,
> `any`\>; \}; `globalFilteringFeature`: `TableFeature`; `paginatedRowModel`: (`table`) => () =>
> `RowModel`\<`any`, `any`\>; `rowPaginationFeature`: `TableFeature`; `rowSortingFeature`:
> `TableFeature`; `sortedRowModel`: (`table`) => () => `RowModel`\<`any`, `any`\>; `sortFns`: \{
> `alphanumeric`: `CreatedSortFn`\<`any`, `any`\>; `datetime`: `CreatedSortFn`\<`any`, `any`\>;
> `text`: `CreatedSortFn`\<`any`, `any`\>; \}; \}, `TData`\>

Defined in:
[components/data-table/createColumnHelper.ts:8](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/ui/source/components/data-table/createColumnHelper.ts#L8)

## Type Parameters

### TData

`TData` _extends_ `RowData`

## Returns

`ColumnHelper`\<\{ `columnFacetingFeature`: `TableFeature`; `columnFilteringFeature`:
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
`text`: `CreatedSortFn`\<`any`, `any`\>; \}; \}, `TData`\>
