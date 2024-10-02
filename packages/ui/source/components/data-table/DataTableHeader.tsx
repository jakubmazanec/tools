// TODO: fix somehow
/* eslint-disable complexity -- TODO */
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {type Column, flexRender, type Header, type Table} from '@tanstack/react-table';
import {
  type ChangeEvent,
  type CSSProperties,
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {Button} from '../Button.js';
import {Checkbox} from '../Checkbox.js';
import {CheckboxField} from '../CheckboxField.js';
import {Combobox} from '../Combobox.js';
import {type DataTableProps} from '../DataTable.js';
import {Field} from '../Field.js';
import {Form} from '../Form.js';
import {Icon} from '../Icon.js';
import {Input} from '../Input.js';
import {Label} from '../Label.js';
import {Listbox} from '../Listbox.js';
import {Popover} from '../Popover.js';
import {PopoverButton} from '../PopoverButton.js';
import {PopoverPanel} from '../PopoverPanel.js';
import {TableHeader} from '../TableHeader.js';
import {getCommonPinningClasses} from './internals/getCommonPinningClasses.js';
import {getCommonPinningStyles} from './internals/getCommonPinningStyles.js';

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
};

export function DataTableHeader({
  header,
  table,
  sorting: controlledSorting,
  onSorting,
  filters: controlledFilters,
  onFiltering,
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
              <Form>
                {header.column.getCanPin() ?
                  <div className="flex flex-col gap-y-2">
                    <p className="text-sm">Pin column</p>

                    <Field>
                      <div className="flex gap-x-2">
                        {header.column.getIsPinned() === 'left' ? null : (
                          <Button
                            variant="outline"
                            aria-label="Pin to left"
                            onClick={() => {
                              header.column.pin('left');
                            }}
                          >
                            <Icon size="large" name="ArrowLeftEndOnRectangle" />
                          </Button>
                        )}
                        {header.column.getIsPinned() ?
                          <Button
                            variant="outline"
                            aria-label="Unpin"
                            onClick={() => {
                              header.column.pin(false);
                            }}
                          >
                            <Icon size="large" name="XMark" />
                          </Button>
                        : null}
                        {header.column.getIsPinned() === 'right' ? null : (
                          <Button
                            variant="outline"
                            aria-label="Pin to right"
                            onClick={() => {
                              header.column.pin('right');
                            }}
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
              </Form>
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

function addFilter(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  filters: DataTableProps<any, any>['filters'],
  column: string,
  newFilter: unknown,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  let newFilters: DataTableProps<any, any>['filters'] = [];

  if (filters) {
    let wasUpdated = false;

    for (let filter of filters) {
      if (filter.column === column) {
        newFilters.push({
          column,
          filter: newFilter as string | [number, number],
        });

        wasUpdated = true;
      } else {
        newFilters.push(filter);
      }
    }

    if (!wasUpdated) {
      newFilters.push({
        column,
        filter: newFilter as string | [number, number],
      });
    }
  } else {
    newFilters.push({
      column,
      filter: newFilter as string | [number, number],
    });
  }

  return newFilters;
}

function removeFilter(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  filters: DataTableProps<any, any>['filters'],
  column: string,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  let newFilters: DataTableProps<any, any>['filters'] = [];

  if (filters) {
    for (let filter of filters) {
      if (filter.column !== column) {
        newFilters.push(filter);
      }
    }
  } else {
    return false;
  }

  if (!newFilters.length) {
    return false;
  }

  return newFilters;
}

type DataTableHeaderFilterProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  column: Column<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  filters: DataTableProps<any, any>['filters'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  onFiltering: DataTableProps<any, any>['onFiltering'];
};

function DataTableHeaderFilter({
  column,
  filters: controlledFilters,
  onFiltering,
}: DataTableHeaderFilterProps) {
  let {filterVariant} = column.columnDef.meta ?? {};

  let filter =
    onFiltering ?
      controlledFilters ? controlledFilters.find((filter) => filter.column === column.id)?.filter
      : undefined
    : column.getFilterValue();

  let currentMin =
    filterVariant === 'range' ?
      (filter as [number?, number?] | undefined)?.[0] ?? undefined
    : undefined;
  let currentMax =
    filterVariant === 'range' ?
      (filter as [number?, number?] | undefined)?.[1] ?? undefined
    : undefined;

  let [min, setMin] = useState(currentMin);
  let [max, setMax] = useState(currentMax);

  const deferredMin = useDeferredValue(min);
  const deferredMax = useDeferredValue(max);

  useEffect(() => {
    if (currentMin === deferredMin && currentMax === deferredMax) {
      return;
    }

    if (!deferredMin && !deferredMax) {
      if (onFiltering) {
        onFiltering(removeFilter(controlledFilters, column.id));
      } else {
        column.setFilterValue(undefined);
      }
    } else if (onFiltering) {
      onFiltering(addFilter(controlledFilters, column.id, [deferredMin, deferredMax]));
    } else {
      column.setFilterValue([deferredMin, deferredMax]);
    }
  }, [deferredMin, deferredMax, column, onFiltering, controlledFilters, currentMin, currentMax]);

  let handleResetClick = useCallback(() => {
    setMin(undefined);
    setMax(undefined);

    if (onFiltering) {
      onFiltering(removeFilter(controlledFilters, column.id));
    } else {
      column.setFilterValue(undefined);
    }
  }, [column, controlledFilters, onFiltering]);

  let handleMinRangeChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setMin(event.target.value ? Number(event.target.value) : undefined);
    // if (onFiltering) {
    //   onFiltering(
    //     addFilter(controlledFilters, column.id, [
    //       event.target.value,
    //       (filter as [number, number] | undefined)?.[1],
    //     ]),
    //   );
    // } else {
    //   column.setFilterValue((old: [number, number] | undefined) => [
    //     event.target.value,
    //     old?.[1],
    //   ]);
    // }
  }, []);

  let handleMaxRangeChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setMax(event.target.value ? Number(event.target.value) : undefined);
    // if (onFiltering) {
    //   onFiltering(
    //     addFilter(controlledFilters, column.id, [
    //       (filter as [number, number] | undefined)?.[0],
    //       event.target.value,
    //     ]),
    //   );
    // } else {
    //   column.setFilterValue((old: [number, number] | undefined) => [
    //     old?.[0],
    //     event.target.value,
    //   ]);
    // }
  }, []);

  let handleSelectChange = useCallback(
    (value: string) => {
      if (onFiltering) {
        onFiltering(addFilter(controlledFilters, column.id, value));
      } else {
        column.setFilterValue(value);
      }
    },
    [column, controlledFilters, onFiltering],
  );

  let handleTextChange = useCallback(
    (value: string | undefined) => {
      if (onFiltering) {
        onFiltering(addFilter(controlledFilters, column.id, value));
      } else {
        column.setFilterValue(value);
      }
    },
    [column, controlledFilters, onFiltering],
  );

  let sortedUniqueValues = useMemo(() => {
    if (filterVariant === 'range') {
      return [];
    }

    return [...column.getFacetedUniqueValues().keys()].sort().slice(0, 5000) as unknown[];
  }, [column, filterVariant]);

  if (filterVariant === 'range') {
    return (
      <div>
        <div className="flex space-x-2">
          <Input
            type="number"
            min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
            max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
            // value={(filter as [number?, number?] | undefined)?.[0] ?? ''}
            value={min ?? ''}
            placeholder={`Min ${
              column.getFacetedMinMaxValues()?.[0] === undefined ?
                ''
              : `(${column.getFacetedMinMaxValues()?.[0]})`
            }`}
            onChange={handleMinRangeChange}
          />
          <Input
            type="number"
            min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
            max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
            // value={(filter as [number?, number?] | undefined)?.[1] ?? ''}
            value={max ?? ''}
            placeholder={`Max ${
              column.getFacetedMinMaxValues()?.[1] ?
                `(${column.getFacetedMinMaxValues()?.[1]})`
              : ''
            }`}
            onChange={handleMaxRangeChange}
          />
          <Button variant="outline" aria-label="Cancel" onClick={handleResetClick}>
            <Icon size="large" name="XMark" />
          </Button>
        </div>
      </div>
    );
  }

  if (filterVariant === 'select') {
    return (
      <div className="flex gap-x-2">
        <Listbox
          value={filter as string}
          items={(sortedUniqueValues as string[]).map((value: string) => ({
            value,
            label: `${value as unknown}`,
          }))}
          onChange={handleSelectChange}
        />
        <Button variant="outline" aria-label="Cancel" onClick={handleResetClick}>
          <Icon size="large" name="XMark" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex gap-x-2">
      <Combobox
        customValue
        value={(filter ?? '') as string}
        items={(sortedUniqueValues as string[]).map((value: string) => ({
          value,
          label: `${value as unknown}`,
        }))}
        onChange={handleTextChange}
      />
      <Button variant="outline" aria-label="Cancel" onClick={handleResetClick}>
        <Icon size="large" name="XMark" />
      </Button>
    </div>
  );
}
