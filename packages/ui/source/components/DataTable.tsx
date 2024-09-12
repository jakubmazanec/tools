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
  getSortedRowModel,
  type Header,
  type RowData,
  type SortingState,
  type Table as TanstackTable,
  useReactTable,
} from '@tanstack/react-table';
import {type CSSProperties, useCallback, useId, useState} from 'react';

import {Button} from './Button.js';
import {Checkbox} from './Checkbox.js';
import {CheckboxField} from './CheckboxField.js';
import {Field} from './Field.js';
import {Form} from './Form.js';
import {Icon} from './Icon.js';
import {Label} from './Label.js';
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
function getCommonPinningStyles(column: Column<any>): CSSProperties {
  let isPinned = column.getIsPinned();
  let isLastLeftPinnedColumn = isPinned === 'left' && column.getIsLastColumn('left');
  let isFirstRightPinnedColumn = isPinned === 'right' && column.getIsFirstColumn('right');

  return {
    boxShadow:
      isLastLeftPinnedColumn ? '-4px 0 4px -4px gray inset'
      : isFirstRightPinnedColumn ? '4px 0 4px -4px gray inset'
      : undefined,
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    opacity: isPinned ? 0.95 : 1,
    position: isPinned ? 'sticky' : 'relative',
    width: column.getSize(),
    zIndex: isPinned ? 1 : 0,
  };
}

type DataTableHeaderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  header: Header<any, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  table: TanstackTable<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  sort: DataTableProps<any, any>['sort'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  onSort: DataTableProps<any, any>['onSort'];
};

function DataTableHeader({header, table, sort, onSort}: DataTableHeaderProps) {
  let {attributes, isDragging, listeners, setNodeRef, transform} = useSortable({
    id: header.column.id,
  });

  let handleSortClick = useCallback(() => {
    if (onSort) {
      if (sort === false || sort === undefined || sort.column !== header.column.id) {
        onSort({
          column: header.column.id,
          direction: 'ascending',
        });
      } else if (sort.column === header.column.id && sort.direction === 'ascending') {
        onSort({
          column: header.column.id,
          direction: 'descending',
        });
      } else if (sort.column === header.column.id && sort.direction === 'descending') {
        onSort(false);
      }
    }
  }, [sort, onSort, header.column.id]);

  let style: CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition: 'width transform 0.2s ease-in-out',
    zIndex: isDragging ? 1 : 0,
    ...getCommonPinningStyles(header.column),
    width: header.getSize(),
  };

  let isSorted = header.column.getIsSorted();

  let contentElement = null;

  if (!header.isPlaceholder) {
    contentElement = flexRender(header.column.columnDef.header, header.getContext());
  }

  let sortElement = null;

  if (onSort) {
    if (sort === false || sort === undefined || sort.column !== header.column.id) {
      sortElement = <Icon name="ArrowsUpDown" size="small" className="text-gray-200 select-none" />;
    } else if (sort.direction === 'ascending' && sort.column === header.column.id) {
      sortElement = <Icon name="ArrowUp" size="small" className="text-gray-950 select-none" />;
    } else if (sort.direction === 'descending' && sort.column === header.column.id) {
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

  if (onSort) {
    if (sort === false || sort === undefined) {
      title = 'Sort ascending';
    } else if (sort.direction === 'ascending' && sort.column === header.column.id) {
      title = 'Sort descending';
    } else if (sort.direction === 'descending' && sort.column === header.column.id) {
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
    <TableHeader ref={setNodeRef} colSpan={header.colSpan} style={style}>
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
          onClick={onSort ? handleSortClick : header.column.getToggleSortingHandler()}
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
          <PopoverPanel anchor="top start" className="flex flex-col gap-y-2">
            <Form>
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

export type DataTableSort =
  | false
  | {
      column: string;
      direction: 'ascending' | 'descending';
    };

export type DataTableProps<D, C> = {
  data: D[];
  columns: C;
  sort?: DataTableSort | undefined;
  onSort?: ((sort: DataTableSort) => void) | undefined;
};

export function DataTable<D extends RowData, C extends Array<ColumnDef<D>>>({
  data,
  columns,
  sort,
  onSort,
}: DataTableProps<D, C>) {
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
    state: {
      columnVisibility,
      columnOrder,
      columnPinning,
      sorting: onSort ? undefined : sorting,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    onColumnPinningChange: setColumnPinning,
    onSortingChange: onSort ? undefined : setSorting,
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
                    sort={sort}
                    onSort={onSort}
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
                <TableCell key={cell.id} style={{...getCommonPinningStyles(cell.column)}}>
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
    </DndContext>
  );
}
