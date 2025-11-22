import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {type Column, flexRender, type Header, type Table} from '@tanstack/react-table';
import {useCallback} from 'react';

import {Button} from '../../Button.js';
import {Checkbox} from '../../Checkbox.js';
import {CheckboxField} from '../../CheckboxField.js';
import {Container} from '../../Container.js';
import {Icon} from '../../Icon.js';
import {Label} from '../../Label.js';
import {type DataTableProps} from '../DataTable.js';

export type DataTableSettingProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  table: Table<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  column: Column<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  hideColumnVisibility: DataTableProps<any, any>['hideColumnVisibility'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  hideColumnOrder: DataTableProps<any, any>['hideColumnOrder'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  hideColumnPinning: DataTableProps<any, any>['hideColumnPinning'];
};

export function DataTableSetting({
  table,
  // header,
  column,
  hideColumnVisibility = false,
  hideColumnOrder = false,
  hideColumnPinning = false,
}: DataTableSettingProps) {
  let {attributes, isDragging, listeners, setNodeRef, transform, setActivatorNodeRef} = useSortable(
    {
      id: column.id,
    },
  );

  let handleChange = useCallback(
    (checked: boolean) => {
      if (!checked && table.getFlatHeaders().length >= 2) {
        column.toggleVisibility(checked);
      } else if (checked) {
        column.toggleVisibility(checked);
      }
    },
    [column, table],
  );

  let handlePinLeftClick = useCallback(() => {
    column.pin('left');
  }, [column]);

  let handlePinRightClick = useCallback(() => {
    column.pin('right');
  }, [column]);

  let handleUnpinClick = useCallback(() => {
    column.pin(false);
  }, [column]);

  let resolvedHideColumnPinning = hideColumnPinning || !column.getCanPin();

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Translate.toString(transform),
        transition: 'width transform 0.2s ease-in-out',
        zIndex: isDragging ? 20 : undefined,
      }}
      className="flex items-center gap-4"
    >
      {hideColumnOrder ? null : (
        <Button
          ref={setActivatorNodeRef}
          aria-label="Resize"
          className="cursor-move"
          size="small"
          variant="invisible"
          {...attributes}
          {...listeners}
        >
          <Icon name="Bars4" size="small" />
        </Button>
      )}
      {hideColumnVisibility ?
        <span className="mr-auto font-sans text-sm font-medium">
          {flexRender(column.columnDef.header, {
            table,
            column,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/consistent-type-assertions -- needed
            header: {column} as Header<any, any>,
          })}
        </span>
      : <CheckboxField className="mr-auto">
          <Checkbox checked={column.getIsVisible()} onChange={handleChange} />
          <Label className="flex">
            {flexRender(column.columnDef.header, {
              table,
              column,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/consistent-type-assertions -- needed
              header: {column} as Header<any, any>,
            })}
          </Label>
        </CheckboxField>
      }

      {resolvedHideColumnPinning ? null : (
        <Container spacing="extra-small">
          {column.getIsPinned() === 'left' ? null : (
            <Button
              aria-label="Pin to left"
              size="small"
              variant="outline"
              onClick={handlePinLeftClick}
            >
              <Icon name="ArrowLeftEndOnRectangle" size="small" />
            </Button>
          )}
          {column.getIsPinned() ?
            <Button aria-label="Unpin" size="small" variant="outline" onClick={handleUnpinClick}>
              <Icon name="XMark" size="small" />
            </Button>
          : null}
          {column.getIsPinned() === 'right' ? null : (
            <Button
              aria-label="Pin to right"
              size="small"
              variant="outline"
              onClick={handlePinRightClick}
            >
              <Icon name="ArrowRightEndOnRectangle" size="small" />
            </Button>
          )}
        </Container>
      )}
    </div>
  );
}
