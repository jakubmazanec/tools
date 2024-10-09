// TODO: fix somehow
/* eslint-disable complexity -- TODO */
import {type Column} from '@tanstack/react-table';
import {type ChangeEvent, useCallback, useDeferredValue, useEffect, useMemo, useState} from 'react';

import {Button} from '../Button.js';
import {Combobox} from '../Combobox.js';
import {type DataTableProps} from '../DataTable.js';
import {Icon} from '../Icon.js';
import {Input} from '../Input.js';
import {Listbox} from '../Listbox.js';

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  faceting: DataTableProps<any, any>['faceting'];
};

export function DataTableHeaderFilter({
  column,
  filters: controlledFilters,
  onFiltering,
  faceting,
}: DataTableHeaderFilterProps) {
  let {filterVariant} = column.columnDef.meta ?? {};

  let currentFilter =
    onFiltering ?
      controlledFilters ? controlledFilters.find((filter) => filter.column === column.id)?.filter
      : undefined
    : column.getFilterValue();

  let currentMin =
    filterVariant === 'range' ?
      (currentFilter as [number?, number?] | undefined)?.[0] ?? undefined
    : undefined;
  let currentMax =
    filterVariant === 'range' ?
      (currentFilter as [number?, number?] | undefined)?.[1] ?? undefined
    : undefined;

  let [filter, setFilter] = useState<string | undefined>(
    typeof currentFilter === 'string' ? currentFilter : undefined,
  );
  let [min, setMin] = useState(currentMin);
  let [max, setMax] = useState(currentMax);

  let deferredMin = useDeferredValue(min);
  let deferredMax = useDeferredValue(max);

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
    setFilter(undefined);
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
      if (value) {
        if (onFiltering) {
          onFiltering(addFilter(controlledFilters, column.id, value));
        } else {
          column.setFilterValue(value);
        }
      } else if (onFiltering) {
        onFiltering(removeFilter(controlledFilters, column.id));
      } else {
        column.setFilterValue(undefined);
      }
    },
    [column, controlledFilters, onFiltering],
  );

  let handleFilterChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setFilter(event.target.value);
    } else {
      setFilter(undefined);
    }
  }, []);

  let handleFilterClick = useCallback(() => {
    if (filter) {
      if (onFiltering) {
        onFiltering(addFilter(controlledFilters, column.id, filter));
      } else {
        column.setFilterValue(filter);
      }
    } else if (onFiltering) {
      onFiltering(removeFilter(controlledFilters, column.id));
    } else {
      column.setFilterValue(undefined);
    }
  }, [column, controlledFilters, filter, onFiltering]);

  let facetingValues = useMemo(() => {
    if (onFiltering) {
      return faceting?.[column.id]?.values ?? [];
    }

    if (filterVariant === 'range') {
      return [];
    }

    return [...column.getFacetedUniqueValues().keys()].sort().slice(0, 5000) as unknown[];
  }, [column, faceting, filterVariant, onFiltering]);

  let facetingMin =
    onFiltering ?
      faceting?.[column.id]?.min ?? null
    : Number(column.getFacetedMinMaxValues()?.[0] ?? null);
  let facetingMax =
    onFiltering ?
      faceting?.[column.id]?.max ?? null
    : Number(column.getFacetedMinMaxValues()?.[1] ?? null);

  if (filterVariant === 'range') {
    return (
      <div>
        <div className="flex space-x-2">
          <Input
            type="number"
            min={String(facetingMin ?? '')}
            max={String(facetingMax ?? '')}
            // value={(filter as [number?, number?] | undefined)?.[0] ?? ''}
            value={min ?? ''}
            placeholder={`Min ${facetingMin === null ? '' : `(${facetingMin})`}`}
            onChange={handleMinRangeChange}
          />
          <Input
            type="number"
            min={String(facetingMin ?? '')}
            max={String(facetingMax ?? '')}
            // value={(filter as [number?, number?] | undefined)?.[1] ?? ''}
            value={max ?? ''}
            placeholder={`Max ${facetingMax === null ? '' : `(${facetingMax})`}`}
            onChange={handleMaxRangeChange}
          />
          <Button variant="outline" aria-label="Cancel" onClick={handleResetClick}>
            <Icon size="large" name="XMark" />
          </Button>
        </div>
      </div>
    );
  }

  if (filterVariant === 'select' && facetingValues.length) {
    return (
      <div className="flex gap-x-2">
        <Listbox
          value={currentFilter as string}
          items={(facetingValues as string[]).map((value: string) => ({
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

  if (filterVariant === 'text' && facetingValues.length) {
    return (
      <div className="flex gap-x-2">
        <Combobox
          customValue
          value={(currentFilter ?? '') as string}
          items={(facetingValues as string[]).map((value: string) => ({
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

  return (
    <div className="flex gap-x-2">
      <Input value={filter ?? ''} onChange={handleFilterChange} />
      <Button variant="outline" aria-label="Filter" onClick={handleFilterClick}>
        <Icon size="large" name="Funnel" />
      </Button>
      <Button variant="outline" aria-label="Cancel" onClick={handleResetClick}>
        <Icon size="large" name="XMark" />
      </Button>
    </div>
  );
}
