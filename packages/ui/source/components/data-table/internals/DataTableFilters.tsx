import {type Table} from '@tanstack/react-table';

import {Container} from '../../Container.js';
import {Heading} from '../../Heading.js';
import {type DataTableProps} from '../DataTable.js';
import {DataTableFilter} from './DataTableFilter.js';

export type DataTableFiltersProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  table: Table<any>;
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

export function DataTableFilters({
  table,
  clientFilters,
  filters: controlledFilters,
  onFiltering,
  clientFaceting,
  faceting,
}: DataTableFiltersProps) {
  return (
    <Container
      className="hidden w-full justify-items-stretch bg-white sm:order-first sm:row-span-3 sm:border-r-2 sm:border-neutral-100 sm:pr-4 [[data-show-filters]_&]:flex"
      direction="column"
    >
      <Heading size="small">Filters</Heading>

      {table
        .getAllLeafColumns()
        .map((column) =>
          column.getCanFilter() ?
            <DataTableFilter
              key={column.id}
              clientFaceting={clientFaceting}
              clientFilters={clientFilters}
              column={column}
              faceting={faceting}
              filters={controlledFilters}
              table={table}
              onFiltering={onFiltering}
            />
          : null,
        )}
    </Container>
  );
}
