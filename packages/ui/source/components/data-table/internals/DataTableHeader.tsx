// TODO: fix somehow
/* eslint-disable complexity -- TODO */
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {type Column, flexRender, type Header, type Table} from '@tanstack/react-table';
import {type CSSProperties, useCallback} from 'react';

import {Button} from '../../Button.js';
import {Checkbox} from '../../Checkbox.js';
import {CheckboxField} from '../../CheckboxField.js';
import {Field} from '../../Field.js';
import {Icon} from '../../Icon.js';
import {Label} from '../../Label.js';
import {Popover} from '../../Popover.js';
import {PopoverButton} from '../../PopoverButton.js';
import {PopoverPanel} from '../../PopoverPanel.js';
import {TableHeader} from '../../TableHeader.js';
import {type DataTableProps} from '../DataTable.js';
import {DataTableHeaderFilter} from './DataTableHeaderFilter.js';
import {getCommonPinningClasses} from './getCommonPinningClasses.js';
import {getCommonPinningStyles} from './getCommonPinningStyles.js';

type DataTableHeaderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  header: Header<any, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  table: Table<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  sorting: DataTableProps<any, any>['sorting'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  onSorting: DataTableProps<any, any>['onSorting'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  filters: DataTableProps<any, any>['filters'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  onFiltering: DataTableProps<any, any>['onFiltering'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  faceting: DataTableProps<any, any>['faceting'];
};

export function DataTableHeader({
  header,
  table,
  sorting: controlledSorting,
  onSorting,
  filters: controlledFilters,
  onFiltering,
  faceting,
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

  let handleWidthReset = useCallback(() => {
    header.column.resetSize();
  }, [header.column]);

  let style: CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition: 'width transform 0.2s ease-in-out',
    zIndex: isDragging ? 20 : undefined,
    ...getCommonPinningStyles(header.column),
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

  let handlePinLeftClick = useCallback(() => {
    header.column.pin('left');
  }, [header.column]);

  let handlePinRightClick = useCallback(() => {
    header.column.pin('right');
  }, [header.column]);

  let handleUnpinClick = useCallback(() => {
    header.column.pin(false);
  }, [header.column]);

  return (
    <TableHeader
      ref={setNodeRef}
      colSpan={header.colSpan}
      className={getCommonPinningClasses(header.column)}
      style={style}
    >
      <span className="w-full overflow-hidden">
        <span className="flex justify-between items-center gap-x-1">
          {header.column.getCanSort() ?
            <Button
              variant="text"
              size="small"
              className="inline-flex mr-auto cursor-move"
              title={title}
              onClick={onSorting ? handleSortClick : header.column.getToggleSortingHandler()}
              {...attributes}
              {...listeners}
            >
              {sortElement}
              {contentElement}
            </Button>
          : null}
          <Popover>
            <PopoverButton>
              <Button variant="text" size="small" aria-label="Settings">
                <Icon size="small" name="Cog6Tooth" />
              </Button>
            </PopoverButton>
            <PopoverPanel anchor="right start" className="flex flex-col gap-y-2">
              <div className="flex flex-col gap-y-6">
                {header.column.getCanPin() ?
                  <div className="flex flex-col gap-y-2">
                    <p className="text-sm">Pin column</p>

                    <Field>
                      <div className="flex gap-x-2">
                        {header.column.getIsPinned() === 'left' ? null : (
                          <Button
                            variant="outline"
                            aria-label="Pin to left"
                            onClick={handlePinLeftClick}
                          >
                            <Icon size="large" name="ArrowLeftEndOnRectangle" />
                          </Button>
                        )}
                        {header.column.getIsPinned() ?
                          <Button variant="outline" aria-label="Unpin" onClick={handleUnpinClick}>
                            <Icon size="large" name="XMark" />
                          </Button>
                        : null}
                        {header.column.getIsPinned() === 'right' ? null : (
                          <Button
                            variant="outline"
                            aria-label="Pin to right"
                            onClick={handlePinRightClick}
                          >
                            <Icon size="large" name="ArrowRightEndOnRectangle" />
                          </Button>
                        )}
                      </div>
                    </Field>
                  </div>
                : null}

                {header.column.getCanFilter() ?
                  <div className="flex flex-col gap-y-2">
                    <p className="text-sm">Filter</p>

                    <Field>
                      <DataTableHeaderFilter
                        column={header.column}
                        filters={controlledFilters}
                        faceting={faceting}
                        onFiltering={onFiltering}
                      />
                    </Field>
                  </div>
                : null}

                <div className="flex flex-col gap-y-2">
                  <p className="text-sm">Visible columns</p>

                  {table.getAllLeafColumns().map((column) => (
                    <DataTableHeaderColumnCheckbox key={column.id} column={column} table={table} />
                  ))}
                </div>
              </div>
            </PopoverPanel>
          </Popover>
          <Button
            variant="invisible"
            size="small"
            aria-label="Resize"
            className="cursor-col-resize select-none"
            onDoubleClick={handleWidthReset}
            onMouseDown={header.getResizeHandler()}
            onTouchStart={header.getResizeHandler()}
          >
            <Icon size="small" name="ArrowsRightLeft" />
          </Button>
        </span>
      </span>
    </TableHeader>
  );
}

type DataTableHeaderColumnCheckboxProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  column: Column<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  table: Table<any>;
};

function DataTableHeaderColumnCheckbox({column, table}: DataTableHeaderColumnCheckboxProps) {
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

  return (
    <CheckboxField key={column.id}>
      <Checkbox
        checked={column.getIsVisible()}
        disabled={table.getFlatHeaders().length <= 1 && column.getIsVisible()}
        onChange={handleChange}
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
  );
}
