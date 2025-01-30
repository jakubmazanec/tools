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

import {Table} from '../Table.js';
import {TableBody} from '../TableBody.js';
import {TableCell} from '../TableCell.js';
import {TableFoot} from '../TableFoot.js';
import {TableHead} from '../TableHead.js';
import {TableHeader} from '../TableHeader.js';
import {TableRow} from '../TableRow.js';
import {type DataTableColumnOrder} from './DataTableColumnOrder.js';
import {type DataTableColumnPinning} from './DataTableColumnPinning.js';
import {type DataTableColumnVisibility} from './DataTableColumnVisibility.js';
import {type DataTableFaceting} from './DataTableFaceting.js';
import {type DataTableFilters} from './DataTableFilters.js';
import {type DataTablePagination} from './DataTablePagination.js';
import {type DataTableSearch} from './DataTableSearch.js';
import {type DataTableSorting} from './DataTableSorting.js';
import {
  DataTableHeader,
  DataTablePagination as DataTablePaginationComponent,
  DataTableSearch as DataTableSearchComponent,
  DEFAULT_PAGE_SIZE,
  fromPinningState,
  fuzzyFilter,
  getCommonPinningClasses,
  getCommonPinningStyles,
} from './internals.js';

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- false positive
  interface ColumnMeta<TData extends RowData, TValue> {
    filterVariant?: 'range' | 'select' | 'text';
  }
}

export type DataTableProps<D, C> = {
  data: D[];
  columns: C;
  clientPagination?: boolean | undefined;
  hidePagination?: boolean | undefined;
  pagination?: DataTablePagination | undefined;
  onPaginationChange?:
    | ((
        pagination: Pick<DataTablePagination, 'page'> | Pick<DataTablePagination, 'pageSize'>,
      ) => void)
    | undefined;
  columnVisibility?: DataTableColumnVisibility;
  hideColumnVisibility?: boolean | undefined;
  onColumnVisibilityChange?: ((columnVisibility: DataTableColumnVisibility) => void) | undefined;
  columnOrder?: DataTableColumnOrder;
  hideColumnOrder?: boolean | undefined;
  onColumnOrderChange?: ((columnOrder: DataTableColumnOrder) => void) | undefined;
  columnPinning?: DataTableColumnPinning;
  hideColumnPinning?: boolean | undefined;
  onColumnPinningChange?: ((columnPinning: DataTableColumnPinning) => void) | undefined;
  hideColumnResizing?: boolean | undefined;
  clientSorting?: boolean | undefined;
  sorting?: DataTableSorting | undefined;
  hideSorting?: boolean | undefined;
  onSortingChange?: ((sorting: DataTableSorting) => void) | undefined;
  clientFilters?: boolean | undefined;
  hideFilters?: boolean | undefined;
  filters?: DataTableFilters | undefined;
  onFiltersChange?: ((filters: DataTableFilters) => void) | undefined;
  clientFaceting?: boolean | undefined;
  faceting?: DataTableFaceting | undefined;
  clientSearch?: boolean | undefined;
  hideSearch?: boolean | undefined;
  search?: DataTableSearch | undefined;
  onSearchChange?: ((search: DataTableSearch) => void) | undefined;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed so the type parameters are useful
export function DataTable<D extends RowData, C extends Array<ColumnDef<D, any>>>({
  data,
  columns,
  clientPagination = false,
  hidePagination = false,
  pagination: controlledPagination,
  onPaginationChange,
  clientSorting = false,
  sorting: controlledSorting,
  hideSorting = false,
  onSortingChange,
  columnVisibility: controlledColumnVisibility,
  hideColumnVisibility = false,
  onColumnVisibilityChange,
  columnOrder: controlledColumnOrder,
  hideColumnOrder = false,
  onColumnOrderChange,
  columnPinning: controlledColumnPinning,
  hideColumnPinning = false,
  onColumnPinningChange,
  hideColumnResizing = false,
  clientFilters = false,
  hideFilters = false,
  filters: controlledFilters,
  onFiltersChange,
  clientFaceting = false,
  faceting,
  clientSearch = false,
  hideSearch = false,
  search: controlledSearch,
  onSearchChange,
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
  let [columnVisibility, setColumnVisibility] = useState(controlledColumnVisibility ?? {});
  let [columnOrder, setColumnOrder] = useState<string[]>(
    controlledColumnOrder ?
      [
        ...controlledColumnOrder,
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
          .filter((value) => !controlledColumnOrder.includes(value)),
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
    controlledColumnPinning ?
      {
        left: Object.entries(controlledColumnPinning)
          .filter(([, pinning]) => pinning === 'left')
          .map(([column]) => column),
        right: Object.entries(controlledColumnPinning)
          .filter(([, pinning]) => pinning === 'right')
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
        onColumnVisibilityChange?.(columnVisibilityState(columnVisibility));
      } else {
        onColumnVisibilityChange?.(columnVisibilityState);
      }
    },
    [columnVisibility, onColumnVisibilityChange],
  );
  let handleColumnOrderChange = useCallback(
    (columnOrderState: Updater<ColumnOrderState>) => {
      setColumnOrder(columnOrderState);

      if (typeof columnOrderState === 'function') {
        onColumnOrderChange?.(columnOrderState(columnOrder));
      } else {
        onColumnOrderChange?.(columnOrderState);
      }
    },
    [columnOrder, onColumnOrderChange],
  );
  let handleColumnPinningChange = useCallback(
    (columnPinningState: Updater<ColumnPinningState>) => {
      setColumnPinning(columnPinningState);

      if (typeof columnPinningState === 'function') {
        onColumnPinningChange?.(fromPinningState(columnPinningState(columnPinning)));
      } else {
        onColumnPinningChange?.(fromPinningState(columnPinningState));
      }
    },
    [columnPinning, onColumnPinningChange],
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
    clientPagination ?
      table.getState().pagination.pageIndex + 1
    : (controlledPagination?.page ?? 1);
  let pageSize =
    clientPagination ?
      table.getState().pagination.pageSize
    : (controlledPagination?.pageSize ?? DEFAULT_PAGE_SIZE);
  let pageCount = clientPagination ? table.getPageCount() : (controlledPagination?.pageCount ?? 1);

  return (
    <DndContext
      collisionDetection={closestCenter}
      id={id}
      modifiers={[restrictToHorizontalAxis]}
      sensors={sensors}
      onDragEnd={handleDragEnd}
    >
      {hideSearch ? null : (
        <DataTableSearchComponent
          clientSearch={clientSearch}
          search={controlledSearch}
          table={table}
          onSearch={onSearchChange}
        />
      )}
      <div className="w-full overflow-x-scroll overflow-y-visible [scrollbar-width:thin]">
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
                      clientFaceting={clientFaceting}
                      clientFilters={clientFilters}
                      clientSorting={clientSorting}
                      faceting={faceting}
                      filters={controlledFilters}
                      header={header}
                      hideColumnOrder={hideColumnOrder}
                      hideColumnPinning={hideColumnPinning}
                      hideColumnResizing={hideColumnResizing}
                      hideColumnVisibility={hideColumnVisibility}
                      hideFilters={hideFilters}
                      hideSorting={hideSorting}
                      sorting={controlledSorting}
                      table={table}
                      onFiltering={onFiltersChange}
                      onSorting={onSortingChange}
                    />
                  ))}
                </SortableContext>
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  let value = cell.getValue();

                  return (
                    <TableCell
                      key={cell.id}
                      className={getCommonPinningClasses(cell.column)}
                      style={{...getCommonPinningStyles(cell.column)}}
                      title={value === null || value === undefined ? undefined : String(value)}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  );
                })}
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
      </div>
      {hidePagination ? null : (
        <DataTablePaginationComponent
          clientPagination={clientPagination}
          page={page}
          pageCount={pageCount}
          pageSize={pageSize}
          table={table}
          onPagination={onPaginationChange}
        />
      )}
    </DndContext>
  );
}
