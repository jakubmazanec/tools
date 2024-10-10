import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {restrictToHorizontalAxis} from '@dnd-kit/modifiers';
import {arrayMove, horizontalListSortingStrategy, SortableContext} from '@dnd-kit/sortable';
import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type PaginationState,
  type RowData,
  type SortingState,
  useReactTable,
} from '@tanstack/react-table';
import {useCallback, useId, useState} from 'react';
import {z} from 'zod';

import {Table} from '../Table.js';
import {TableBody} from '../TableBody.js';
import {TableCell} from '../TableCell.js';
import {TableFoot} from '../TableFoot.js';
import {TableHead} from '../TableHead.js';
import {TableHeader} from '../TableHeader.js';
import {TableRow} from '../TableRow.js';
import {
  DataTableHeader,
  DataTablePagination as DataTablePaginationComponent,
  DataTableSearch as DataTableSearchComponent,
  DEFAULT_PAGE_SIZE,
  fuzzyFilter,
  getCommonPinningClasses,
  getCommonPinningStyles,
  PAGE_SIZES,
} from './internals.js';

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- false positive
  interface ColumnMeta<TData extends RowData, TValue> {
    filterVariant?: 'range' | 'select' | 'text';
  }
}

export const dataTablePaginationSchema = z.object({
  /** Page number, starts with 1. */
  page: z.number(),
  pageSize: z.union([
    z.literal(PAGE_SIZES[0]),
    z.literal(PAGE_SIZES[1]),
    z.literal(PAGE_SIZES[2]),
    z.literal(PAGE_SIZES[3]),
    z.literal(PAGE_SIZES[4]),
  ]),
  pageCount: z.number(),
});

export type DataTablePagination = z.infer<typeof dataTablePaginationSchema>;

export const dataTableSortingSchema = z.union([
  z.literal(false),
  z.object({
    column: z.string(),
    direction: z.enum(['ascending', 'descending']),
  }),
]);

export type DataTableSorting = z.infer<typeof dataTableSortingSchema>;

export const dataTableFiltersSchema = z.union([
  z.literal(false),
  z
    .object({
      column: z.string(),
      filter: z.union([
        z.string(),
        z.number(),
        z.boolean(),
        z.tuple([z.number().nullable().optional(), z.number().nullable().optional()]),
      ]),
    })
    .array(),
]);

export type DataTableFilters = z.infer<typeof dataTableFiltersSchema>;

export const dataTableFacetingSchema = z.record(
  z.string(),
  z.object({
    values: z.unknown().array().optional(),
    min: z.unknown().optional(),
    max: z.unknown().optional(),
  }),
);

export type DataTableFaceting = z.infer<typeof dataTableFacetingSchema>;

export const dataTableSearchSchema = z.string().nullable();

export type DataTableSearch = z.infer<typeof dataTableSearchSchema>;

export type DataTableProps<D, C> = {
  data: D[];
  columns: C;
  pagination?: DataTablePagination | undefined;
  onPagination?:
    | ((
        pagination: Pick<DataTablePagination, 'page'> | Pick<DataTablePagination, 'pageSize'>,
      ) => void)
    | undefined;
  sorting?: DataTableSorting | undefined;
  onSorting?: ((sorting: DataTableSorting) => void) | undefined;
  filters?: DataTableFilters | undefined;
  onFiltering?: ((filters: DataTableFilters) => void) | undefined;
  faceting?: DataTableFaceting | undefined;
  search?: DataTableSearch | undefined;
  onSearch?: ((search: DataTableSearch) => void) | undefined;
};

export function DataTable<D extends RowData, C extends Array<ColumnDef<D>>>({
  data,
  columns,
  pagination: controlledPagination,
  onPagination,
  sorting: controlledSorting,
  onSorting,
  filters: controlledFilters,
  onFiltering,
  faceting,
  search: controlledSearch,
  onSearch,
}: DataTableProps<D, C>) {
  let [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: DEFAULT_PAGE_SIZE,
  });
  let [columnVisibility, setColumnVisibility] = useState({});
  let [columnOrder, setColumnOrder] = useState<string[]>(
    columns.map((column) => {
      if (column.id) {
        return column.id;
      }

      if ('accessorKey' in column) {
        return String(column.accessorKey);
      }

      if (typeof column.header === 'string') {
        return String(column.header);
      }

      return '';
    }),
  );
  let [columnPinning, setColumnPinning] = useState({});
  let [sorting, setSorting] = useState<SortingState>([]);
  let [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  let [search, setSearch] = useState('');

  let table = useReactTable<D>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: onPagination ? undefined : getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: onFiltering ? undefined : getFacetedRowModel(),
    getFacetedUniqueValues: onFiltering ? undefined : getFacetedUniqueValues(),
    getFacetedMinMaxValues: onFiltering ? undefined : getFacetedMinMaxValues(),
    state: {
      pagination: onPagination ? undefined : pagination,
      columnVisibility,
      columnOrder,
      columnPinning,
      sorting: onSorting ? undefined : sorting,
      columnFilters: onFiltering ? undefined : columnFilters,
      globalFilter: onSearch ? undefined : search,
    },
    onPaginationChange: onPagination ? undefined : setPagination,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    onColumnPinningChange: setColumnPinning,
    onSortingChange: onSorting ? undefined : setSorting,
    onColumnFiltersChange: onFiltering ? undefined : setColumnFilters,
    onGlobalFilterChange: onSearch ? undefined : setSearch,
    columnResizeMode: 'onChange',
    globalFilterFn: fuzzyFilter,
  });
  let handleDragEnd = useCallback(({active, over}: DragEndEvent) => {
    if (over && active.id !== over.id) {
      setColumnOrder((previousColumnOrder) => {
        let oldIndex = previousColumnOrder.indexOf(active.id as string);
        let newIndex = previousColumnOrder.indexOf(over.id as string);

        return arrayMove(previousColumnOrder, oldIndex, newIndex);
      });
    }
  }, []);

  let sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {}),
  );

  let id = useId();

  let page =
    onPagination && controlledPagination ?
      controlledPagination.page
    : table.getState().pagination.pageIndex + 1;
  let pageSize =
    onPagination && controlledPagination ?
      controlledPagination.pageSize
    : table.getState().pagination.pageSize;
  let pageCount =
    onPagination && controlledPagination ? controlledPagination.pageCount : table.getPageCount();

  return (
    <DndContext
      id={id}
      collisionDetection={closestCenter}
      modifiers={[restrictToHorizontalAxis]}
      sensors={sensors}
      onDragEnd={handleDragEnd}
    >
      <DataTableSearchComponent table={table} search={controlledSearch} onSearch={onSearch} />
      <Table
        style={{
          width: table.getCenterTotalSize(),
          tableLayout: 'fixed',
        }}
      >
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              <SortableContext items={columnOrder} strategy={horizontalListSortingStrategy}>
                {headerGroup.headers.map((header) => (
                  <DataTableHeader
                    key={header.id}
                    header={header}
                    table={table}
                    sorting={controlledSorting}
                    filters={controlledFilters}
                    faceting={faceting}
                    onSorting={onSorting}
                    onFiltering={onFiltering}
                  />
                ))}
              </SortableContext>
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  className={getCommonPinningClasses(cell.column)}
                  style={{...getCommonPinningStyles(cell.column)}}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFoot>
          {table.getFooterGroups().map((footerGroup) => (
            <TableRow key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <TableHeader key={header.id}>
                  {header.isPlaceholder ? null : (
                    flexRender(header.column.columnDef.footer, header.getContext())
                  )}
                </TableHeader>
              ))}
            </TableRow>
          ))}
        </TableFoot>
      </Table>
      <DataTablePaginationComponent
        table={table}
        page={page}
        pageSize={pageSize}
        pageCount={pageCount}
        onPagination={onPagination}
      />
    </DndContext>
  );
}
