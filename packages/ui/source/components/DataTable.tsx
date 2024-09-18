// TODO: fix somehow
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
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {
  type Column,
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type Header,
  type PaginationState,
  type RowData,
  type SortingState,
  type Table as TanstackTable,
  useReactTable,
} from '@tanstack/react-table';
import {type ChangeEvent, type CSSProperties, useCallback, useId, useState} from 'react';
import {z} from 'zod';

import {Button} from './Button.js';
import {Checkbox} from './Checkbox.js';
import {CheckboxField} from './CheckboxField.js';
import {DataTablePageButton} from './data-table/DataTablePageButton.js';
import {Field} from './Field.js';
import {Form} from './Form.js';
import {Icon} from './Icon.js';
import {Input} from './Input.js';
import {Label} from './Label.js';
import {Listbox} from './Listbox.js';
import {ListboxOption} from './ListboxOption.js';
import {Popover} from './Popover.js';
import {PopoverButton} from './PopoverButton.js';
import {PopoverPanel} from './PopoverPanel.js';
import {Table} from './Table.js';
import {TableBody} from './TableBody.js';
import {TableCell} from './TableCell.js';
import {TableFoot} from './TableFoot.js';
import {TableHead} from './TableHead.js';
import {TableHeader} from './TableHeader.js';
import {TableRow} from './TableRow.js';

const MAX_PAGE_BUTTONS_COUNT = 10;
const PAGE_SIZES = [10, 25, 50, 75, 100] as const;
const DEFAULT_PAGE_SIZE = 50;

type PageSize = (typeof PAGE_SIZES)[number];

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
function getCommonPinningStyles(column: Column<any>): CSSProperties {
  let isPinned = column.getIsPinned();

  return {
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    width: column.getSize(),
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
function getCommonPinningClasses(column: Column<any>): string {
  let isPinned = column.getIsPinned();
  let isLastLeftPinnedColumn = isPinned === 'left' && column.getIsLastColumn('left');
  let isFirstRightPinnedColumn = isPinned === 'right' && column.getIsFirstColumn('right');

  let borderClassName =
    isLastLeftPinnedColumn ? 'border-r-2 border-gray-100'
    : isFirstRightPinnedColumn ? 'border-l-2 border-gray-100'
    : undefined;
  let opacityClassName = isPinned ? 'opacity-90' : 'opacity-100';
  let positionClassName = isPinned ? 'sticky' : 'relative';
  let zIndexClassName = isPinned ? 'z-10' : 'z-0';
  let bgClassName = isPinned ? 'bg-white' : 'bg-transparent';

  return `${bgClassName} ${borderClassName} ${opacityClassName} ${positionClassName} ${zIndexClassName}`;
}

type DataTableHeaderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  header: Header<any, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  table: TanstackTable<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  sorting: DataTableProps<any, any>['sorting'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  onSorting: DataTableProps<any, any>['onSorting'];
};

function DataTableHeader({
  header,
  table,
  sorting: controlledSorting,
  onSorting,
}: DataTableHeaderProps) {
  let {attributes, isDragging, listeners, setNodeRef, transform} = useSortable({
    id: header.column.id,
  });

  let handleSortClick = useCallback(() => {
    if (onSorting) {
      if (
        controlledSorting === false ||
        controlledSorting === undefined ||
        controlledSorting.column !== header.column.id
      ) {
        onSorting({
          column: header.column.id,
          direction: 'ascending',
        });
      } else if (
        controlledSorting.column === header.column.id &&
        controlledSorting.direction === 'ascending'
      ) {
        onSorting({
          column: header.column.id,
          direction: 'descending',
        });
      } else if (
        controlledSorting.column === header.column.id &&
        controlledSorting.direction === 'descending'
      ) {
        onSorting(false);
      }
    }
  }, [controlledSorting, onSorting, header.column.id]);

  let style: CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition: 'width transform 0.2s ease-in-out',
    zIndex: isDragging ? 20 : undefined,
    ...getCommonPinningStyles(header.column),
    // width: header.getSize(),
  };

  let isSorted = header.column.getIsSorted();

  let contentElement = null;

  if (!header.isPlaceholder) {
    contentElement = flexRender(header.column.columnDef.header, header.getContext());
  }

  let sortElement = null;

  if (onSorting) {
    if (
      controlledSorting === false ||
      controlledSorting === undefined ||
      controlledSorting.column !== header.column.id
    ) {
      sortElement = <Icon name="ArrowsUpDown" size="small" className="text-gray-200 select-none" />;
    } else if (
      controlledSorting.direction === 'ascending' &&
      controlledSorting.column === header.column.id
    ) {
      sortElement = <Icon name="ArrowUp" size="small" className="text-gray-950 select-none" />;
    } else if (
      controlledSorting.direction === 'descending' &&
      controlledSorting.column === header.column.id
    ) {
      sortElement = <Icon name="ArrowDown" size="small" className="text-gray-950 select-none" />;
    }
  } else {
    if (!header.isPlaceholder && isSorted === false) {
      sortElement = <Icon name="ArrowsUpDown" size="small" className="text-gray-200 select-none" />;
    }

    if (!header.isPlaceholder && isSorted === 'asc') {
      sortElement = <Icon name="ArrowUp" size="small" className="text-gray-950 select-none" />;
    }

    if (!header.isPlaceholder && isSorted === 'desc') {
      sortElement = <Icon name="ArrowDown" size="small" className="text-gray-950 select-none" />;
    }
  }

  let title: string | undefined;

  if (onSorting) {
    if (controlledSorting === false || controlledSorting === undefined) {
      title = 'Sort ascending';
    } else if (
      controlledSorting.direction === 'ascending' &&
      controlledSorting.column === header.column.id
    ) {
      title = 'Sort descending';
    } else if (
      controlledSorting.direction === 'descending' &&
      controlledSorting.column === header.column.id
    ) {
      title = 'Clear sort';
    }
  } else if (header.column.getCanSort()) {
    if (header.column.getNextSortingOrder() === 'asc') {
      title = 'Sort ascending';
    } else if (header.column.getNextSortingOrder() === 'desc') {
      title = 'Sort descending';
    } else {
      title = 'Clear sort';
    }
  }

  return (
    <TableHeader
      ref={setNodeRef}
      colSpan={header.colSpan}
      className={getCommonPinningClasses(header.column)}
      style={style}
    >
      <span className="flex justify-between items-center gap-x-1">
        {header.column.getCanSort() ?
          <Button
            variant="text"
            size="small"
            aria-label="Resize"
            className="cursor-move select-none"
            {...attributes}
            {...listeners}
          >
            <Icon size="small" name="Bars3" />
          </Button>
        : null}

        <Button
          variant="text"
          size="small"
          className="inline-flex mr-auto"
          title={title}
          onClick={onSorting ? handleSortClick : header.column.getToggleSortingHandler()}
        >
          {sortElement}
          {contentElement}
        </Button>
        <Popover>
          <PopoverButton>
            <Button variant="text" size="small" aria-label="Settings">
              <Icon size="small" name="Cog6Tooth" />
            </Button>
          </PopoverButton>
          <PopoverPanel anchor="top end" className="flex flex-col gap-y-2">
            <Form>
              {header.column.getCanPin() ?
                <div className="flex flex-col gap-y-2">
                  <p className="text-sm">Pin column</p>

                  <Field>
                    <div className="flex gap-x-2">
                      {header.column.getIsPinned() === 'left' ? null : (
                        <Button
                          variant="text"
                          size="small"
                          aria-label="Pin to left"
                          onClick={() => {
                            header.column.pin('left');
                          }}
                        >
                          <Icon size="small" name="ArrowLeftEndOnRectangle" />
                        </Button>
                      )}
                      {header.column.getIsPinned() ?
                        <Button
                          variant="text"
                          size="small"
                          aria-label="Unpin"
                          onClick={() => {
                            header.column.pin(false);
                          }}
                        >
                          <Icon size="small" name="XMark" />
                        </Button>
                      : null}
                      {header.column.getIsPinned() === 'right' ? null : (
                        <Button
                          variant="text"
                          size="small"
                          aria-label="Pin to right"
                          onClick={() => {
                            header.column.pin('right');
                          }}
                        >
                          <Icon size="small" name="ArrowRightEndOnRectangle" />
                        </Button>
                      )}
                    </div>
                  </Field>
                </div>
              : null}

              <div className="flex flex-col gap-y-2">
                <p className="text-sm">Visible columns</p>

                {/*<Checkbox
                    checked={table.getIsAllColumnsVisible()}
                    onChange={table.getToggleAllColumnsVisibilityHandler()}
                  />
                  <Label>All columns</Label>*/}
                {table.getAllLeafColumns().map((column) => (
                  <CheckboxField key={column.id}>
                    <Checkbox
                      checked={column.getIsVisible()}
                      disabled={table.getFlatHeaders().length <= 1 && column.getIsVisible()}
                      onChange={(checked) => {
                        if (!checked && table.getFlatHeaders().length >= 2) {
                          column.toggleVisibility(checked);
                        } else if (checked) {
                          column.toggleVisibility(checked);
                        }
                      }}
                    />
                    <Label>
                      {flexRender(column.columnDef.header, {
                        table,
                        column,
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/consistent-type-assertions -- needed
                        header: {column} as Header<any, any>,
                      })}
                    </Label>
                  </CheckboxField>
                ))}
              </div>
            </Form>
          </PopoverPanel>
        </Popover>
        <Button
          variant="text"
          size="small"
          aria-label="Resize"
          className="cursor-col-resize select-none"
          onDoubleClick={() => header.column.resetSize()}
          onMouseDown={header.getResizeHandler()}
          onTouchStart={header.getResizeHandler()}
        >
          <Icon size="small" name="ArrowsRightLeft" />
        </Button>
      </span>
    </TableHeader>
  );
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
};

export function DataTable<D extends RowData, C extends Array<ColumnDef<D>>>({
  data,
  columns,
  pagination: controlledPagination,
  onPagination,
  sorting: controlledSorting,
  onSorting,
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

  let table = useReactTable<D>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: onPagination ? undefined : getPaginationRowModel(),
    state: {
      pagination: onPagination ? undefined : pagination,
      columnVisibility,
      columnOrder,
      columnPinning,
      sorting: onSorting ? undefined : sorting,
    },
    onPaginationChange: onPagination ? undefined : setPagination,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    onColumnPinningChange: setColumnPinning,
    onSortingChange: onSorting ? undefined : setSorting,
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
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
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
            Page {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount().toLocaleString()}
          </span>
        : null}
        {pageCount > MAX_PAGE_BUTTONS_COUNT ?
          <span className="flex items-center gap-1">
            Go to page:
            <Input
              type="text"
              pattern="[0-9]*"
              defaultValue={table.getState().pagination.pageIndex + 1}
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
