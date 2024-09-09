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
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type Header,
  type RowData,
  type SortingState,
  useReactTable,
} from '@tanstack/react-table';
import React, {type CSSProperties, useCallback, useId} from 'react';

import {Button} from './Button.js';
import {Icon} from './Icon.js';
import {Table} from './Table.js';
import {TableBody} from './TableBody.js';
import {TableCell} from './TableCell.js';
import {TableFoot} from './TableFoot.js';
import {TableHead} from './TableHead.js';
import {TableHeader} from './TableHeader.js';
import {TableRow} from './TableRow.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
function DraggableTableHeader({header}: {header: Header<any, unknown>}) {
  let {attributes, isDragging, listeners, setNodeRef, transform} = useSortable({
    id: header.column.id,
  });

  let style: CSSProperties = {
    position: 'relative',
    transform: CSS.Translate.toString(transform),
    transition: 'width transform 0.2s ease-in-out',
    whiteSpace: 'nowrap',
    width: header.column.getSize(),
    zIndex: isDragging ? 1 : 0,
  };

  let isSorted = header.column.getIsSorted();

  let contentElement = null;

  if (!header.isPlaceholder) {
    contentElement = flexRender(header.column.columnDef.header, header.getContext());
  }

  let sortElement = null;

  if (!header.isPlaceholder && isSorted === false) {
    sortElement = <Icon name="ArrowsUpDown" size="small" className="text-gray-200 select-none" />;
  }

  if (!header.isPlaceholder && isSorted === 'asc') {
    sortElement = <Icon name="ArrowUp" size="small" className="text-gray-950 select-none" />;
  }

  if (!header.isPlaceholder && isSorted === 'desc') {
    sortElement = <Icon name="ArrowDown" size="small" className="text-gray-950 select-none" />;
  }

  return (
    <TableHeader ref={setNodeRef} colSpan={header.colSpan} style={style}>
      <Button
        variant="text"
        size="small"
        className="inline-flex"
        title={
          header.column.getCanSort() ?
            header.column.getNextSortingOrder() === 'asc' ?
              'Sort ascending'
            : header.column.getNextSortingOrder() === 'desc' ?
              'Sort descending'
            : 'Clear sort'
          : undefined
        }
        onClick={header.column.getToggleSortingHandler()}
      >
        {sortElement}
        {contentElement}
        {header.column.getCanSort() ?
          <Icon
            name="Bars3"
            size="small"
            className="text-gray-300 cursor-move select-none"
            {...attributes}
            {...listeners}
          />
        : null}
      </Button>
    </TableHeader>
  );
}

export type DataTableProps<D, C> = {
  data: D[];
  columns: C;
};

export function DataTable<D extends RowData, C extends Array<ColumnDef<D>>>({
  data,
  columns,
}: DataTableProps<D, C>) {
  let [columnOrder, setColumnOrder] = React.useState<string[]>(
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
  let [sorting, setSorting] = React.useState<SortingState>([]);
  let table = useReactTable<D>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      columnOrder,
      sorting,
    },
    onColumnOrderChange: setColumnOrder,
    onSortingChange: setSorting,
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
      <Table>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              <SortableContext items={columnOrder} strategy={horizontalListSortingStrategy}>
                {headerGroup.headers.map((header) => (
                  <DraggableTableHeader key={header.id} header={header} />
                ))}
              </SortableContext>
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
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
