import {useArgs} from '@storybook/preview-api';
import {type Meta, type StoryObj} from '@storybook/react';
import _ from 'lodash';

import {createColumnHelper, DataTable, formatDateTime, formatNumber} from '../source/main.js';
import {data, type Person} from './data.js';

const meta = {
  title: 'Components/DataTable',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  component: DataTable<Person, any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
} satisfies Meta<typeof DataTable<Person, any>>;

export default meta;

const DEFAULT_PAGE_SIZE = 50;

let columnHelper = createColumnHelper<Person>();

export const Example = {
  args: {
    columns: [
      columnHelper.accessor('firstName', {
        header: 'First name',
        size: 150,
        meta: {
          filterVariant: 'text',
        },
      }),
      columnHelper.accessor('lastName', {
        header: 'Last name',
        meta: {
          filterVariant: 'text',
        },
      }),
      columnHelper.accessor('age', {
        header: 'Age',
        size: 100,
        meta: {
          filterVariant: 'range',
        },
      }),
      columnHelper.accessor('visits', {
        header: 'Visits',
        sortUndefined: 'last',
        meta: {
          filterVariant: 'range',
        },
      }),
      columnHelper.accessor('visitedAt', {
        header: 'Visited at',
        size: 300,
        cell: ({cell}) => {
          let value = cell.getValue();

          if (!value) {
            return null;
          }

          return formatDateTime(value.toString(), {
            locale: 'en-US',
            dateStyle: 'long',
            timeStyle: 'medium',
          });
        },
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        size: 200,
        cell: ({cell}) => {
          let value = cell.getValue();

          if (value === 'in-progress') {
            return 'In progress';
          }

          if (value === 'not-started') {
            return 'Not started';
          }

          return 'Done';
        },
        meta: {
          filterVariant: 'select',
        },
      }),
      columnHelper.accessor('progress', {
        header: 'Progress',
        meta: {
          filterVariant: 'range',
        },
        cell: ({cell}) => {
          let value = cell.getValue();

          if (!value) {
            return null;
          }

          return `${formatNumber(value * 100, {
            locale: 'en-US',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} %`;
        },
      }),
    ],
    data,
    clientPagination: true,
    clientSorting: true,
    clientFilters: true,
    clientFaceting: true,
    clientSearch: true,
    columnVisibility: {
      age: false,
    },
    columnOrder: ['lastName', 'firstName'],
    columnPinning: {
      lastName: 'left',
      firstName: 'left',
    },
    onPaginationChange: (...args) => {
      console.log('onPagination...', ...args);
    },
    onColumnVisibilityChange: (...args) => {
      console.log('onVisibilityChange...', ...args);
    },
    onColumnOrderChange: (...args) => {
      console.log('onOrderChange...', ...args);
    },
    onColumnPinningChange: (...args) => {
      console.log('onPinningChange...', ...args);
    },
    onSortingChange: (...args) => {
      console.log('onSorting...', ...args);
    },
    onFiltersChange: (...args) => {
      console.log('onFiltering...', ...args);
    },
    onSearchChange: (...args) => {
      console.log('onSearch...', ...args);
    },
  },
} satisfies StoryObj<typeof meta>;

export const ControlledExample = {
  args: {
    columns: [
      columnHelper.accessor('firstName', {
        header: 'First name',
        size: 150,
        meta: {
          filterVariant: 'text',
        },
      }),
      columnHelper.accessor('lastName', {
        header: 'Last name',
        meta: {
          filterVariant: 'text',
        },
      }),
      columnHelper.accessor('age', {
        header: 'Age',
        size: 100,
        meta: {
          filterVariant: 'range',
        },
      }),
      columnHelper.accessor('visits', {
        header: 'Visits',
        sortUndefined: 'last',
        meta: {
          filterVariant: 'range',
        },
      }),
      columnHelper.accessor('visitedAt', {
        header: 'Visited at',
        size: 300,
        cell: ({cell}) => {
          let value = cell.getValue();

          if (!value) {
            return null;
          }

          return formatDateTime(value.toString(), {
            locale: 'en-US',
            dateStyle: 'long',
            timeStyle: 'medium',
          });
        },
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        size: 200,
        cell: ({cell}) => {
          let value = cell.getValue();

          if (value === 'in-progress') {
            return 'In progress';
          }

          if (value === 'not-started') {
            return 'Not started';
          }

          return 'Done';
        },
        meta: {
          filterVariant: 'select',
        },
      }),
      columnHelper.accessor('progress', {
        header: 'Progress',
        meta: {
          filterVariant: 'range',
        },
        cell: ({cell}) => {
          let value = cell.getValue();

          if (!value) {
            return null;
          }

          return `${formatNumber(value * 100, {
            locale: 'en-US',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} %`;
        },
      }),
    ],
    data,
    pagination: {
      page: 1,
      pageCount: Math.ceil(data.length / DEFAULT_PAGE_SIZE),
      pageSize: DEFAULT_PAGE_SIZE,
    },
    onPaginationChange: () => {},
    sorting: null,
    onSortingChange: () => {},
    filters: null,
    onFiltersChange: () => {},
    search: null,
    onSearchChange: () => {},
    faceting: {
      firstName: {
        min: _.min(data.map((value) => value.firstName)),
        max: _.max(data.map((value) => value.firstName)),
        values: _.uniq(data.map((value) => value.firstName)),
      },
      lastName: {
        min: _.min(data.map((value) => value.lastName)),
        max: _.max(data.map((value) => value.lastName)),
        values: _.uniq(data.map((value) => value.lastName)),
      },
      age: {
        min: _.min(data.map((value) => value.age)),
        max: _.max(data.map((value) => value.age)),
        values: _.uniq(data.map((value) => value.age)),
      },
      visits: {
        min: _.min(data.map((value) => value.visits)),
        max: _.max(data.map((value) => value.visits)),
        values: _.uniq(data.map((value) => value.visits)),
      },
      visitedAt: {
        min: _.min(data.map((value) => value.visitedAt)),
        max: _.max(data.map((value) => value.visitedAt)),
        values: _.uniq(data.map((value) => value.visitedAt)),
      },
      status: {
        min: _.min(data.map((value) => value.status)),
        max: _.max(data.map((value) => value.status)),
        values: _.uniq(data.map((value) => value.status)),
      },
      progress: {
        min: _.min(data.map((value) => value.progress)),
        max: _.max(data.map((value) => value.progress)),
        values: _.uniq(data.map((value) => value.progress)),
      },
    },
  },
  // eslint-disable-next-line func-name-matching -- needed so `Render` is treated as a React component and `useArgs` doesn't trigger hooks-realated linting rules
  render: function Render(args) {
    let [{pagination, sorting, filters, search}, updateArgs] = useArgs<typeof args>();

    return (
      <DataTable
        {...args}
        pagination={pagination}
        // TODO: fix this
        // eslint-disable-next-line react/jsx-no-bind -- TODO
        onPaginationChange={(newPagination) => {
          console.log('onPagination...', newPagination);

          if (pagination) {
            let resolvedPagination = {...pagination, ...newPagination};

            updateArgs({
              pagination: {
                ...resolvedPagination,
                pageCount: Math.ceil(data.length / resolvedPagination.pageSize),
              },
            });
          }
        }}
        sorting={sorting}
        // TODO: fix this
        // eslint-disable-next-line react/jsx-no-bind -- TODO
        onSortingChange={(newSorting) => {
          console.log('onSorting...', newSorting);
          updateArgs({sorting: newSorting});
        }}
        filters={filters}
        // TODO: fix this
        // eslint-disable-next-line react/jsx-no-bind -- TODO
        onFiltersChange={(newFilters) => {
          console.log('onFiltering...', newFilters);
          updateArgs({filters: newFilters});
        }}
        search={search}
        // TODO: fix this
        // eslint-disable-next-line react/jsx-no-bind -- TODO
        onSearchChange={(newSearch) => {
          console.log('onSearch...', newSearch);
          updateArgs({search: newSearch});
        }}
      />
    );
  },
} satisfies StoryObj<typeof meta>;
