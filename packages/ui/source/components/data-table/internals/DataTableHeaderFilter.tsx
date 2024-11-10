import {type Column, type Table} from '@tanstack/react-table';
import {type ChangeEvent, type FormEvent, useCallback, useMemo, useState} from 'react';

import {Button} from '../../Button.js';
import {Combobox} from '../../Combobox.js';
import {Container} from '../../Container.js';
import {Form} from '../../Form.js';
import {Icon} from '../../Icon.js';
import {Input} from '../../Input.js';
import {Listbox} from '../../Listbox.js';
import {type DataTableProps} from '../DataTable.js';
import {addFilter} from './addFilter.js';
import {normalizeFilter} from './normalizeFilter.js';
import {normalizeFilters} from './normalizeFilters.js';
import {removeFilter} from './removeFilter.js';

export type DataTableHeaderFilterProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  table: Table<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  column: Column<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  clientFilters: DataTableProps<any, any>['clientFilters'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  filters: DataTableProps<any, any>['filters'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  onFiltering: DataTableProps<any, any>['onFiltersChange'];
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
    clientFilters ? normalizeFilters(table) : normalizeFilters(table, controlledFilters);
  let currentFilter =
    clientFilters ? normalizeFilter(column) : normalizeFilter(column, controlledFilters);

  let currentMin =
    filterVariant === 'range' ?
      ((currentFilter as [number?, number?] | undefined)?.[0] ?? undefined)
    : undefined;
  let currentMax =
    filterVariant === 'range' ?
      ((currentFilter as [number?, number?] | undefined)?.[1] ?? undefined)
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
    : (faceting?.[column.id]?.min ?? null);
  let facetingMax =
    clientFaceting ?
      Number(column.getFacetedMinMaxValues()?.[1] ?? null)
    : (faceting?.[column.id]?.max ?? null);

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
      <Container spacing="small">
        <Input
          max={String(facetingMax ?? '')}
          min={String(facetingMin ?? '')}
          placeholder={`Min ${facetingMin === null ? '' : `(${facetingMin})`}`}
          type="number"
          value={min ?? ''}
          onChange={handleMinRangeChange}
        />
        <Input
          max={String(facetingMax ?? '')}
          min={String(facetingMin ?? '')}
          placeholder={`Max ${facetingMax === null ? '' : `(${facetingMax})`}`}
          type="number"
          value={max ?? ''}
          onChange={handleMaxRangeChange}
        />
        <Button submit aria-label="Filter" variant="outline" onClick={handleFilterClick}>
          <Icon name="Funnel" size="large" />
        </Button>
        <Button aria-label="Cancel" variant="outline" onClick={handleResetClick}>
          <Icon name="XMark" size="large" />
        </Button>
      </Container>
    );
  } else if (filterVariant === 'select' && facetingValues.length) {
    filterElement = (
      <Container spacing="small">
        <Listbox
          items={(facetingValues as string[]).map((value: string) => ({
            value,
            label: `${value as unknown}`,
          }))}
          value={currentFilter as string}
          onChange={handleSelectFilterChange}
        />
        <Button aria-label="Cancel" variant="outline" onClick={handleResetClick}>
          <Icon name="XMark" size="large" />
        </Button>
      </Container>
    );
  } else if (filterVariant === 'text' && facetingValues.length) {
    filterElement = (
      <Container spacing="small">
        <Combobox
          customValue
          items={(facetingValues as string[]).map((value: string) => ({
            value,
            label: `${value as unknown}`,
          }))}
          value={(currentFilter ?? '') as string}
          onChange={handleTextFilterChange}
        />
        <Button aria-label="Cancel" variant="outline" onClick={handleResetClick}>
          <Icon name="XMark" size="large" />
        </Button>
      </Container>
    );
  } else if ((filterVariant === 'text' && !facetingValues.length) || !filterVariant) {
    filterElement = (
      <Container spacing="small">
        <Input value={filter ?? ''} onChange={handleFilterChange} />
        <Button aria-label="Filter" variant="outline" onClick={handleFilterClick}>
          <Icon name="Funnel" size="large" />
        </Button>
        <Button aria-label="Cancel" variant="outline" onClick={handleResetClick}>
          <Icon name="XMark" size="large" />
        </Button>
      </Container>
    );
  }

  return <Form onSubmit={handleFilterSubmit}>{filterElement}</Form>;
}
