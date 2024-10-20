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
import {type DataTableProps, type DataTableSorting} from '../DataTable.js';
import {DataTableHeaderFilter} from './DataTableHeaderFilter.js';
import {getCommonPinningClasses} from './getCommonPinningClasses.js';
import {getCommonPinningStyles} from './getCommonPinningStyles.js';

function normalizeSorting(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  header: Header<any, any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  controlledSorting?: DataTableProps<any, any>['sorting'],
): DataTableSorting {
  if (controlledSorting === undefined) {
    let column = header.column.id;
    let isSorted = header.column.getIsSorted();

    if (!isSorted) {
      return null;
    }

    return {
      column,
      direction: isSorted === 'asc' ? 'ascending' : 'descending',
    };
  }

  let column = header.column.id;

  if (!controlledSorting) {
    return null;
  }

  if (controlledSorting.column !== column) {
    return null;
  }

  return {
    column,
    direction: controlledSorting.direction,
  };
}

type DataTableHeaderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  table: Table<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  header: Header<any, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  clientSorting: DataTableProps<any, any>['clientSorting'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  sorting: DataTableProps<any, any>['sorting'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  onSorting: DataTableProps<any, any>['onSorting'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  clientFilters: DataTableProps<any, any>['clientFilters'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  filters: DataTableProps<any, any>['filters'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  onFiltering: DataTableProps<any, any>['onFiltering'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  clientFaceting: DataTableProps<any, any>['clientFaceting'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  faceting: DataTableProps<any, any>['faceting'];
};

export function DataTableHeader({
  table,
  header,
  clientSorting,
  sorting: controlledSorting,
  onSorting,
  clientFilters,
  filters: controlledFilters,
  onFiltering,
  clientFaceting,
  faceting,
}: DataTableHeaderProps) {
  let {attributes, isDragging, listeners, setNodeRef, transform} = useSortable({
    id: header.column.id,
  });

  let sorting =
    clientSorting ? normalizeSorting(header) : normalizeSorting(header, controlledSorting);

  let style: CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition: 'width transform 0.2s ease-in-out',
    zIndex: isDragging ? 20 : undefined,
    ...getCommonPinningStyles(header.column),
  };

  let contentElement = null;

  if (!header.isPlaceholder) {
    contentElement = flexRender(header.column.columnDef.header, header.getContext());
  }

  let sortElement = null;

  if (!sorting) {
    sortElement = (
      <Icon name="ArrowsUpDown" size="small" className="text-neutral-200 select-none" />
    );
  } else if (sorting.direction === 'ascending') {
    sortElement = <Icon name="ArrowUp" size="small" className="text-neutral-950 select-none" />;
  } else {
    sortElement = <Icon name="ArrowDown" size="small" className="text-neutral-950 select-none" />;
  }

  let title: string | undefined;

  if (!sorting) {
    title = 'Sort ascending';
  } else if (sorting.direction === 'ascending') {
    title = 'Sort descending';
  } else {
    title = 'Clear sort';
  }

  let handleSortClick = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let newSorting: DataTableProps<any, any>['sorting'] = null;

    if (!sorting) {
      newSorting = {
        column: header.column.id,
        direction: 'ascending',
      };
    } else if (sorting.direction === 'ascending') {
      newSorting = {
        column: header.column.id,
        direction: 'descending',
      };
    } else {
      newSorting = null;
    }

    if (clientSorting) {
      if (!sorting) {
        header.column.toggleSorting(false);
      } else if (sorting.direction === 'ascending') {
        header.column.toggleSorting(true);
      } else {
        header.column.clearSorting();
      }
    }

    if (onSorting) {
      onSorting(newSorting);
    }
  }, [sorting, clientSorting, onSorting, header.column]);

  let handleWidthReset = useCallback(() => {
    header.column.resetSize();
  }, [header.column]);

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
              onClick={handleSortClick}
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
                        table={table}
                        column={header.column}
                        clientFilters={clientFilters}
                        filters={controlledFilters}
                        clientFaceting={clientFaceting}
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
