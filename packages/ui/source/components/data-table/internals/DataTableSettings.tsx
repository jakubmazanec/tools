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
import {restrictToVerticalAxis} from '@dnd-kit/modifiers';
import {arrayMove, SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable';
import {type Table} from '@tanstack/react-table';
import {useCallback, useId} from 'react';

import {Container} from '../../Container.js';
import {type DataTableProps} from '../DataTable.js';
import {DataTableSetting} from './DataTableSetting.js';

export type DataTableSettingsProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  table: Table<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  hideColumnVisibility: DataTableProps<any, any>['hideColumnVisibility'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  hideColumnOrder: DataTableProps<any, any>['hideColumnOrder'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  hideColumnPinning: DataTableProps<any, any>['hideColumnPinning'];
};

export function DataTableSettings({
  table,
  hideColumnVisibility = false,
  hideColumnOrder = false,
  hideColumnPinning = false,
}: DataTableSettingsProps) {
  let sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor),
  );

  let id = useId();

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

  return (
    <DndContext
      collisionDetection={closestCenter}
      id={id}
      modifiers={[restrictToVerticalAxis]}
      sensors={sensors}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={table.getState().columnOrder} strategy={verticalListSortingStrategy}>
        <Container direction="column" spacing="small">
          {table.getAllLeafColumns().map((column) => (
            <DataTableSetting
              key={column.id}
              column={column}
              hideColumnOrder={hideColumnOrder}
              hideColumnPinning={hideColumnPinning}
              hideColumnVisibility={hideColumnVisibility}
              table={table}
            />
          ))}
        </Container>
      </SortableContext>
    </DndContext>
  );
}
