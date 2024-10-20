// TODO: fix
/* eslint-disable complexity -- TODO */
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
  type ColumnOrderState,
  type ColumnPinningState,
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
  type Updater,
  useReactTable,
  type VisibilityState,
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

function fromPinningState(pinning: ColumnPinningState) {
  let result: DataTablePinning = {};

  for (let left of pinning.left ?? []) {
    result[left] = 'left';
  }

  for (let right of pinning.right ?? []) {
    result[right] = 'right';
  }

  return result;
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

export const dataTableVisibilitySchema = z.record(z.string(), z.boolean());

export type DataTableVisibility = z.infer<typeof dataTableVisibilitySchema>;

export const dataTableOrderSchema = z.string().array();

export type DataTableOrder = z.infer<typeof dataTableOrderSchema>;

export const dataTablePinningSchema = z.record(z.string(), z.enum(['left', 'right']));

export type DataTablePinning = z.infer<typeof dataTablePinningSchema>;

export const dataTableSortingSchema = z.union([
  z.null(),
  z.object({
    column: z.string(),
    direction: z.enum(['ascending', 'descending']),
  }),
]);

export type DataTableSorting = z.infer<typeof dataTableSortingSchema>;

export const dataTableFiltersSchema = z.union([
  z.null(),
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
  clientPagination?: boolean | undefined;
  pagination?: DataTablePagination | undefined;
  onPagination?:
    | ((
        pagination: Pick<DataTablePagination, 'page'> | Pick<DataTablePagination, 'pageSize'>,
      ) => void)
    | undefined;
  visibility?: DataTableVisibility;
  onVisibilityChange?: ((visibility: DataTableVisibility) => void) | undefined;
  order?: DataTableOrder;
  onOrderChange?: ((order: DataTableOrder) => void) | undefined;
  pinning?: DataTablePinning;
  onPinningChange?: ((pinning: DataTablePinning) => void) | undefined;
  clientSorting?: boolean | undefined;
  sorting?: DataTableSorting | undefined;
  onSorting?: ((sorting: DataTableSorting) => void) | undefined;
  clientFilters?: boolean | undefined;
  filters?: DataTableFilters | undefined;
  onFiltering?: ((filters: DataTableFilters) => void) | undefined;
  clientFaceting?: boolean | undefined;
  faceting?: DataTableFaceting | undefined;
  clientSearch?: boolean | undefined;
  search?: DataTableSearch | undefined;
  onSearch?: ((search: DataTableSearch) => void) | undefined;
};

// TODO: 1) rename types and props and event handlers and local variables and all the stuff to be more consistent; 2) put each component or function or type to separate file; 3) fix styling of buttons in column headers (e.g. when resizing, button icons change size -> make it that they're instead hidden/cut off, etc.0; 4) fix rendering cell values (e.g. add title attribute, etc.)

export function DataTable<D extends RowData, C extends Array<ColumnDef<D>>>({
  data,
  columns,
  clientPagination = false,
  pagination: controlledPagination,
  onPagination,
  clientSorting = false,
  sorting: controlledSorting,
  onSorting,
  visibility,
  onVisibilityChange,
  order,
  onOrderChange,
  pinning,
  onPinningChange,
  clientFilters = false,
  filters: controlledFilters,
  onFiltering,
  clientFaceting = false,
  faceting,
  clientSearch = false,
  search: controlledSearch,
  onSearch,
}: DataTableProps<D, C>) {
  let [pagination, setPagination] = useState<PaginationState>(
    controlledPagination ?
      {
        pageIndex: Math.max(0, controlledPagination.page - 1),
        pageSize: controlledPagination.pageSize,
      }
    : {
        pageIndex: 0,
        pageSize: DEFAULT_PAGE_SIZE,
      },
  );
  let [columnVisibility, setColumnVisibility] = useState(visibility ?? {});
  let [columnOrder, setColumnOrder] = useState<string[]>(
    order ?
      [
        ...order,
        ...columns
          .map((column, index) => {
            if (column.id) {
              return column.id;
            }

            if ('accessorKey' in column) {
              return String(column.accessorKey);
            }

            if (typeof column.header === 'string') {
              return String(column.header);
            }

            return String(index);
          })
          .filter((value) => !order.includes(value)),
      ]
    : columns.map((column, index) => {
        if (column.id) {
          return column.id;
        }

        if ('accessorKey' in column) {
          return String(column.accessorKey);
        }

        if (typeof column.header === 'string') {
          return String(column.header);
        }

        return String(index);
      }),
  );
  let [columnPinning, setColumnPinning] = useState<ColumnPinningState>(
    pinning ?
      {
        left: Object.entries(pinning)
          .filter(([column, pinning]) => pinning === 'left')
          .map(([column]) => column),
        right: Object.entries(pinning)
          .filter(([column, pinning]) => pinning === 'right')
          .map(([column]) => column),
      }
    : {left: [], right: []},
  );
  let [sorting, setSorting] = useState<SortingState>([]);
  let [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  let [search, setSearch] = useState('');

  let handleColumnVisibilityChange = useCallback(
    (columnVisibilityState: Updater<VisibilityState>) => {
      setColumnVisibility(columnVisibilityState);

      if (typeof columnVisibilityState === 'function') {
        onVisibilityChange?.(columnVisibilityState(columnVisibility));
      } else {
        onVisibilityChange?.(columnVisibilityState);
      }
    },
    [columnVisibility, onVisibilityChange],
  );
  let handleColumnOrderChange = useCallback(
    (columnOrderState: Updater<ColumnOrderState>) => {
      setColumnOrder(columnOrderState);

      if (typeof columnOrderState === 'function') {
        onOrderChange?.(columnOrderState(columnOrder));
      } else {
        onOrderChange?.(columnOrderState);
      }
    },
    [columnOrder, onOrderChange],
  );
  let handleColumnPinningChange = useCallback(
    (columnPinningState: Updater<ColumnPinningState>) => {
      setColumnPinning(columnPinningState);

      if (typeof columnPinningState === 'function') {
        onPinningChange?.(fromPinningState(columnPinningState(columnPinning)));
      } else {
        onPinningChange?.(fromPinningState(columnPinningState));
      }
    },
    [columnPinning, onPinningChange],
  );

  let table = useReactTable<D>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: clientPagination ? getPaginationRowModel() : undefined,
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: clientFaceting ? getFacetedRowModel() : undefined,
    getFacetedUniqueValues: clientFaceting ? getFacetedUniqueValues() : undefined,
    getFacetedMinMaxValues: clientFaceting ? getFacetedMinMaxValues() : undefined,
    state: {
      pagination: clientPagination ? pagination : undefined,
      columnVisibility,
      columnOrder,
      columnPinning,
      sorting: clientSorting ? sorting : undefined,
      columnFilters: clientFilters ? columnFilters : undefined,
      globalFilter: clientSearch ? search : undefined,
    },
    onPaginationChange: clientPagination ? setPagination : undefined,
    onColumnVisibilityChange: handleColumnVisibilityChange,
    onColumnOrderChange: handleColumnOrderChange,
    onColumnPinningChange: handleColumnPinningChange,
    onSortingChange: clientSorting ? setSorting : undefined,
    onColumnFiltersChange: clientFilters ? setColumnFilters : undefined,
    onGlobalFilterChange: clientSearch ? setSearch : undefined,
    columnResizeMode: 'onChange',
    globalFilterFn: fuzzyFilter,
  });

  let handleDragEnd = useCallback(
    ({active, over}: DragEndEvent) => {
      if (over && active.id !== over.id) {
        table.setColumnOrder((previousColumnOrder) => {
          let oldIndex = previousColumnOrder.indexOf(active.id as string);
          let newIndex = previousColumnOrder.indexOf(over.id as string);

          return arrayMove(previousColumnOrder, oldIndex, newIndex);
        });
      }
    },
    [table],
  );

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
    clientPagination ? table.getState().pagination.pageIndex + 1 : controlledPagination?.page ?? 1;
  let pageSize =
    clientPagination ?
      table.getState().pagination.pageSize
    : controlledPagination?.pageSize ?? DEFAULT_PAGE_SIZE;
  let pageCount = clientPagination ? table.getPageCount() : controlledPagination?.pageCount ?? 1;

  return (
    <DndContext
      id={id}
      collisionDetection={closestCenter}
      modifiers={[restrictToHorizontalAxis]}
      sensors={sensors}
      onDragEnd={handleDragEnd}
    >
      <DataTableSearchComponent
        table={table}
        clientSearch={clientSearch}
        search={controlledSearch}
        onSearch={onSearch}
      />
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
                    table={table}
                    header={header}
                    clientSorting={clientSorting}
                    sorting={controlledSorting}
                    clientFilters={clientFilters}
                    filters={controlledFilters}
                    clientFaceting={clientFaceting}
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
                  {
                    flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext(),
                    ) /* TODO: add title attribute for truncated data */
                  }
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
        clientPagination={clientPagination}
        onPagination={onPagination}
      />
    </DndContext>
  );
}
