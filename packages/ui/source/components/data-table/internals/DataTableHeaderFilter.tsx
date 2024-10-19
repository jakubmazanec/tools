// TODO: fix somehow
/* eslint-disable complexity -- TODO */
import {type Column, Table} from '@tanstack/react-table';
import {type ChangeEvent, type FormEvent, useCallback, useMemo, useState} from 'react';

import {Button} from '../../Button.js';
import {Combobox} from '../../Combobox.js';
import {Form} from '../../Form.js';
import {Icon} from '../../Icon.js';
import {Input} from '../../Input.js';
import {Listbox} from '../../Listbox.js';
import {type DataTableProps} from '../DataTable.js';

function normalizeFilters(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  table: Table<any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  column: Column<any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  controlledFilters?: DataTableProps<any, any>['filters'],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
): DataTableProps<any, any>['filters'] {
  if (controlledFilters === undefined) {
    let filters = table.getState().columnFilters;

    if (!filters.length) {
      return null;
    }

    return filters.map((filter) => ({column: filter.id, filter: filter.value as string}));
  }

  if (!controlledFilters) {
    return null;
  }

  if (!controlledFilters.length) {
    return null;
  }

  return controlledFilters;
}

function normalizeFilter(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  column: Column<any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  controlledFilters?: DataTableProps<any, any>['filters'],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
): NonNullable<DataTableProps<any, any>['filters']>[number]['filter'] | null {
  if (controlledFilters === undefined) {
    let filter = column.getFilterValue();

    if (!filter) {
      return null;
    }

    return filter as string;
  }

  if (!controlledFilters) {
    return null;
  }

  let filter = controlledFilters.find((filter) => filter.column === column.id);

  if (!filter) {
    return null;
  }

  return filter.filter;
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
    return null;
  }

  if (!newFilters.length) {
    return null;
  }

  return newFilters;
}

type DataTableHeaderFilterProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  table: Table<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  column: Column<any>;
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

export function DataTableHeaderFilter({
  table,
  column,
  clientFilters,
  filters: controlledFilters,
  onFiltering,
  clientFaceting,
  faceting,
}: DataTableHeaderFilterProps) {
  let {filterVariant} = column.columnDef.meta ?? {};

  let currentFilters =
    clientFilters ?
      normalizeFilters(table, column)
    : normalizeFilters(table, column, controlledFilters);
  let currentFilter =
    clientFilters ? normalizeFilter(column) : normalizeFilter(column, controlledFilters);

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

  let facetingValues = useMemo(() => {
    if (!clientFaceting) {
      return faceting?.[column.id]?.values ?? [];
    }

    if (filterVariant === 'range') {
      return [];
    }

    return [...column.getFacetedUniqueValues().keys()].sort().slice(0, 5000) as unknown[];
  }, [clientFaceting, column, faceting, filterVariant]);

  let facetingMin =
    clientFaceting ?
      Number(column.getFacetedMinMaxValues()?.[0] ?? null)
    : faceting?.[column.id]?.min ?? null;
  let facetingMax =
    clientFaceting ?
      Number(column.getFacetedMinMaxValues()?.[1] ?? null)
    : faceting?.[column.id]?.max ?? null;

  let handleMinRangeChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setMin(event.target.value ? Number(event.target.value) : undefined);
  }, []);

  let handleMaxRangeChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setMax(event.target.value ? Number(event.target.value) : undefined);
  }, []);

  let handleSelectFilterChange = useCallback(
    (value: string) => {
      if (clientFilters) {
        column.setFilterValue(value);
      }

      if (onFiltering) {
        onFiltering(addFilter(currentFilters, column.id, value));
      }
    },
    [clientFilters, column, currentFilters, onFiltering],
  );

  let handleTextFilterChange = useCallback(
    (value: string | undefined) => {
      if (value) {
        if (clientFilters) {
          column.setFilterValue(value);
        }

        if (onFiltering) {
          onFiltering(addFilter(currentFilters, column.id, value));
        }
      } else {
        if (clientFilters) {
          column.setFilterValue(undefined);
        }

        if (onFiltering) {
          onFiltering(removeFilter(currentFilters, column.id));
        }
      }
    },
    [clientFilters, column, currentFilters, onFiltering],
  );

  let handleFilterChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setFilter(event.target.value);
    } else {
      setFilter(undefined);
    }
  }, []);

  let handleFilterClick = useCallback(() => {
    if (filterVariant === 'range') {
      if (!min && !max) {
        if (clientFilters) {
          column.setFilterValue(undefined);
        }

        if (onFiltering) {
          onFiltering(removeFilter(currentFilters, column.id));
        }
      } else {
        if (clientFilters) {
          column.setFilterValue([min, max]);
        }

        if (onFiltering) {
          onFiltering(addFilter(currentFilters, column.id, [min, max]));
        }
      }
    }

    if ((filterVariant === 'text' && !facetingValues.length) || !filterVariant) {
      if (filter) {
        if (clientFilters) {
          column.setFilterValue(filter);
        }

        if (onFiltering) {
          onFiltering(addFilter(currentFilters, column.id, filter));
        }
      } else {
        if (clientFilters) {
          column.setFilterValue(undefined);
        }

        if (onFiltering) {
          onFiltering(removeFilter(currentFilters, column.id));
        }
      }
    }
  }, [
    clientFilters,
    column,
    currentFilters,
    facetingValues.length,
    filter,
    filterVariant,
    max,
    min,
    onFiltering,
  ]);

  let handleFilterSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (filterVariant === 'range') {
        if (!min && !max) {
          if (clientFilters) {
            column.setFilterValue(undefined);
          }

          if (onFiltering) {
            onFiltering(removeFilter(currentFilters, column.id));
          }
        } else {
          if (clientFilters) {
            column.setFilterValue([min, max]);
          }

          if (onFiltering) {
            onFiltering(addFilter(currentFilters, column.id, [min, max]));
          }
        }
      }

      if ((filterVariant === 'text' && !facetingValues.length) || !filterVariant) {
        if (filter) {
          if (clientFilters) {
            column.setFilterValue(filter);
          }

          if (onFiltering) {
            onFiltering(addFilter(currentFilters, column.id, filter));
          }
        } else {
          if (clientFilters) {
            column.setFilterValue(undefined);
          }

          if (onFiltering) {
            onFiltering(removeFilter(currentFilters, column.id));
          }
        }
      }
    },
    [
      clientFilters,
      column,
      currentFilters,
      facetingValues.length,
      filter,
      filterVariant,
      max,
      min,
      onFiltering,
    ],
  );

  let handleResetClick = useCallback(() => {
    setFilter(undefined);
    setMin(undefined);
    setMax(undefined);

    if (clientFilters) {
      column.setFilterValue(undefined);
    }

    if (onFiltering) {
      onFiltering(removeFilter(currentFilters, column.id));
    }
  }, [clientFilters, column, currentFilters, onFiltering]);

  let filterElement = null;

  if (filterVariant === 'range') {
    filterElement = (
      <div>
        <div className="flex space-x-2">
          <Input
            type="number"
            min={String(facetingMin ?? '')}
            max={String(facetingMax ?? '')}
            value={min ?? ''}
            placeholder={`Min ${facetingMin === null ? '' : `(${facetingMin})`}`}
            onChange={handleMinRangeChange}
          />
          <Input
            type="number"
            min={String(facetingMin ?? '')}
            max={String(facetingMax ?? '')}
            value={max ?? ''}
            placeholder={`Max ${facetingMax === null ? '' : `(${facetingMax})`}`}
            onChange={handleMaxRangeChange}
          />
          <Button submit variant="outline" aria-label="Filter" onClick={handleFilterClick}>
            <Icon size="large" name="Funnel" />
          </Button>
          <Button variant="outline" aria-label="Cancel" onClick={handleResetClick}>
            <Icon size="large" name="XMark" />
          </Button>
        </div>
      </div>
    );
  } else if (filterVariant === 'select' && facetingValues.length) {
    filterElement = (
      <div className="flex gap-x-2">
        <Listbox
          value={currentFilter as string}
          items={(facetingValues as string[]).map((value: string) => ({
            value,
            label: `${value as unknown}`,
          }))}
          onChange={handleSelectFilterChange}
        />
        <Button variant="outline" aria-label="Cancel" onClick={handleResetClick}>
          <Icon size="large" name="XMark" />
        </Button>
      </div>
    );
  } else if (filterVariant === 'text' && facetingValues.length) {
    filterElement = (
      <div className="flex gap-x-2">
        <Combobox
          customValue
          value={(currentFilter ?? '') as string}
          items={(facetingValues as string[]).map((value: string) => ({
            value,
            label: `${value as unknown}`,
          }))}
          onChange={handleTextFilterChange}
        />
        <Button variant="outline" aria-label="Cancel" onClick={handleResetClick}>
          <Icon size="large" name="XMark" />
        </Button>
      </div>
    );
  } else if ((filterVariant === 'text' && !facetingValues.length) || !filterVariant) {
    filterElement = (
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

  return <Form onSubmit={handleFilterSubmit}>{filterElement}</Form>;
}
