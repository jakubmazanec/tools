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
  type Cell,
  flexRender,
  getCoreRowModel,
  type Header,
  type RowData,
  type TableOptions,
  useReactTable,
} from '@tanstack/react-table';
import React, {type CSSProperties, useCallback} from 'react';

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
let DraggableTableHeader = ({header}: {header: Header<any, unknown>}) => {
  let {attributes, isDragging, listeners, setNodeRef, transform} = useSortable({
    id: header.column.id,
  });

  let style: CSSProperties = {
    // opacity: isDragging ? 0.8 : 1,
    position: 'relative',
    transform: CSS.Translate.toString(transform),
    transition: 'width transform 0.2s ease-in-out',
    whiteSpace: 'nowrap',
    width: header.column.getSize(),
    zIndex: isDragging ? 1 : 0,
  };

  return (
    <TableHeader ref={setNodeRef} colSpan={header.colSpan} style={style}>
      <Button variant="text" size="small" {...attributes} {...listeners}>
        <Icon name="Bars3" size="small" />
      </Button>
      {header.isPlaceholder ? null : (
        flexRender(header.column.columnDef.header, header.getContext())
      )}
    </TableHeader>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
let DragAlongCell = ({cell}: {cell: Cell<any, unknown>}) => {
  let {isDragging, setNodeRef, transform} = useSortable({
    id: cell.column.id,
  });
  let style: CSSProperties = {
    // opacity: isDragging ? 0.8 : 1,
    position: 'relative',
    transform: CSS.Translate.toString(transform),
    transition: 'width transform 0.2s ease-in-out',
    width: cell.column.getSize(),
    zIndex: isDragging ? 1 : 0,
  };

  return (
    <TableCell ref={setNodeRef} style={style}>
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </TableCell>
  );
};

export type DataTableProps<D> = {
  data: D[];
  columns: TableOptions<D>['columns'];
};

export function DataTable<D extends RowData>({data, columns}: DataTableProps<D>) {
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
  let table = useReactTable<D>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnOrder,
    },
    onColumnOrderChange: setColumnOrder,
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

  return (
    <DndContext
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
                <SortableContext
                  key={cell.id}
                  items={columnOrder}
                  strategy={horizontalListSortingStrategy}
                >
                  <DragAlongCell key={cell.id} cell={cell} />
                </SortableContext>
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
