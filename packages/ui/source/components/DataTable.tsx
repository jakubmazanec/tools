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
import {type ChangeEvent, useCallback, useId, useState} from 'react';
import {z} from 'zod';

import {Button} from './Button.js';
import {DataTableHeader} from './data-table/DataTableHeader.js';
import {DataTablePageButton} from './data-table/DataTablePageButton.js';
import {
  DEFAULT_PAGE_SIZE,
  MAX_PAGE_BUTTONS_COUNT,
  PAGE_SIZES,
} from './data-table/internals/constants.js';
import {getCommonPinningClasses} from './data-table/internals/getCommonPinningClasses.js';
import {getCommonPinningStyles} from './data-table/internals/getCommonPinningStyles.js';
import {Icon} from './Icon.js';
import {Input} from './Input.js';
import {Listbox} from './Listbox.js';
import {ListboxOption} from './ListboxOption.js';
import {Table} from './Table.js';
import {TableBody} from './TableBody.js';
import {TableCell} from './TableCell.js';
import {TableFoot} from './TableFoot.js';
import {TableHead} from './TableHead.js';
import {TableHeader} from './TableHeader.js';
import {TableRow} from './TableRow.js';

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- false positive
  interface ColumnMeta<TData extends RowData, TValue> {
    filterVariant?: 'range' | 'select' | 'text';
  }
}

type PageSize = (typeof PAGE_SIZES)[number];

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

  let table = useReactTable<D>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: onPagination ? undefined : getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    // getFacetedRowModel: onPagination ? undefined : getFacetedRowModel(),
    // getFacetedUniqueValues: onPagination ? undefined : getFacetedUniqueValues(),
    // getFacetedMinMaxValues: onPagination ? undefined : getFacetedMinMaxValues(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    state: {
      pagination: onPagination ? undefined : pagination,
      columnVisibility,
      columnOrder,
      columnPinning,
      sorting: onSorting ? undefined : sorting,
      columnFilters: onFiltering ? undefined : columnFilters,
    },
    onPaginationChange: onPagination ? undefined : setPagination,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    onColumnPinningChange: setColumnPinning,
    onSortingChange: onSorting ? undefined : setSorting,
    onColumnFiltersChange: onFiltering ? undefined : setColumnFilters,
    columnResizeMode: 'onChange',
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
  let isFirstPage = page === 1;
  let isLastPage = page >= pageCount;

  let handlePageClick = useCallback(
    (page: number) => {
      if (onPagination && controlledPagination) {
        onPagination({
          page: Math.max(1, Math.min(page, pageCount)),
        });
      } else {
        table.setPageIndex(Math.max(0, Math.min(page - 1, pageCount)));
      }
    },
    [controlledPagination, onPagination, pageCount, table],
  );

  let handleFirstPageClick = useCallback(() => {
    if (onPagination && controlledPagination) {
      onPagination({
        page: 1,
      });
    } else {
      table.firstPage();
    }
  }, [controlledPagination, onPagination, table]);

  let handleLastPageClick = useCallback(() => {
    if (onPagination && controlledPagination) {
      onPagination({
        page: pageCount,
      });
    } else {
      table.lastPage();
    }
  }, [controlledPagination, onPagination, pageCount, table]);

  let handlePreviousPageClick = useCallback(() => {
    if (onPagination && controlledPagination) {
      onPagination({
        page: Math.max(1, Math.min(page - 1, pageCount)),
      });
    } else {
      table.previousPage();
    }
  }, [controlledPagination, onPagination, page, pageCount, table]);

  let handleNextPageClick = useCallback(() => {
    if (onPagination && controlledPagination) {
      onPagination({
        page: Math.max(1, Math.min(page + 1, pageCount)),
      });
    } else {
      table.nextPage();
    }
  }, [controlledPagination, onPagination, page, pageCount, table]);

  let handlePageChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      let pageIndex = event.target.value ? Number(event.target.value) - 1 : 0;

      if (onPagination && controlledPagination) {
        onPagination({
          page: Math.max(1, Math.min(pageIndex + 1, pageCount)),
        });
      } else {
        table.setPageIndex(pageIndex);
      }
    },
    [controlledPagination, onPagination, pageCount, table],
  );

  let handlePageSizeChange = useCallback(
    (pageSize: string) => {
      if (onPagination && controlledPagination) {
        onPagination({
          pageSize: Number(pageSize) as PageSize,
        });
      } else {
        table.setPageSize(Number(pageSize));
      }
    },
    [controlledPagination, onPagination, table],
  );

  let id = useId();

  console.log('DataTable...', 'controlledFilters', controlledFilters);
  console.log('faceting', faceting);

  return (
    <DndContext
      id={id}
      collisionDetection={closestCenter}
      modifiers={[restrictToHorizontalAxis]}
      sensors={sensors}
      onDragEnd={handleDragEnd}
    >
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
                    onSorting={onSorting}
                    filters={controlledFilters}
                    onFiltering={onFiltering}
                    faceting={faceting}
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
      <div className="flex items-center gap-x-4 text-sm justify-center">
        <span className="flex items-center gap-x-2">
          <Button
            variant="outline"
            aria-label="First page"
            disabled={isFirstPage}
            onClick={handleFirstPageClick}
          >
            <Icon name="ChevronDoubleLeft" />
          </Button>
          <Button
            variant="outline"
            aria-label="Previous page"
            disabled={isFirstPage}
            onClick={handlePreviousPageClick}
          >
            <Icon name="ChevronLeft" />
          </Button>

          {pageCount <= MAX_PAGE_BUTTONS_COUNT ?
            Array.from({length: pageCount}).map((_, index) => (
              <DataTablePageButton
                // eslint-disable-next-line react/no-array-index-key -- needed, there is no other value
                key={index}
                page={index + 1}
                isSelected={page === index + 1}
                onClick={handlePageClick}
              />
            ))
          : null}

          <Button
            variant="outline"
            aria-label="Next page"
            disabled={isLastPage}
            onClick={handleNextPageClick}
          >
            <Icon name="ChevronRight" />
          </Button>
          <Button
            variant="outline"
            aria-label="Last page"
            disabled={isLastPage}
            onClick={handleLastPageClick}
          >
            <Icon name="ChevronDoubleRight" />
          </Button>
        </span>
        {pageCount > MAX_PAGE_BUTTONS_COUNT ?
          <span className="flex items-center gap-1">
            Page {page} of {pageCount}
          </span>
        : null}
        {pageCount > MAX_PAGE_BUTTONS_COUNT ?
          <span className="flex items-center gap-1">
            Go to page:
            <Input
              type="text"
              pattern="[0-9]*"
              defaultValue={page}
              className="w-12"
              onChange={handlePageChange}
            />
          </span>
        : null}
        <Listbox
          value={String(pageSize)}
          className="w-auto min-w-min"
          onChange={handlePageSizeChange}
        >
          {PAGE_SIZES.map((pageSize) => (
            <ListboxOption key={pageSize} value={String(pageSize)}>
              Show {pageSize}
            </ListboxOption>
          ))}
        </Listbox>
      </div>
    </DndContext>
  );
}
