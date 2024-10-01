import {useArgs} from '@storybook/preview-api';
import {type Meta, type StoryObj} from '@storybook/react';

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
      columnHelper.accessor('firstName', {header: 'First name', size: 150}),
      columnHelper.accessor('lastName', {header: 'Last name'}),
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
  },
} satisfies StoryObj<typeof meta>;

export const ControlledExample = {
  args: {
    columns: [
      columnHelper.accessor('firstName', {header: 'First name', size: 150}),
      columnHelper.accessor('lastName', {header: 'Last name'}),
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
    onPagination: () => {},
    sorting: false,
    onSorting: () => {},
    filters: false,
    onFiltering: () => {},
  },
  // eslint-disable-next-line func-name-matching -- needed so `Render` is treated as a React component and `useArgs` doesn't trigger hooks-realated linting rules
  render: function Render(args) {
    let [{pagination, sorting, filters}, updateArgs] = useArgs<typeof args>();

    return (
      <DataTable
        {...args}
        pagination={pagination}
        // TODO: fix this
        // eslint-disable-next-line react/jsx-no-bind -- TODO
        onPagination={(newPagination) => {
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
        onSorting={(newSorting) => {
          updateArgs({sorting: newSorting});
        }}
        filters={filters}
        // TODO: fix this
        // eslint-disable-next-line react/jsx-no-bind -- TODO
        onFiltering={(newFilters) => {
          console.log('onFiltering...', 'newFilters', newFilters);
          updateArgs({filters: newFilters});
        }}
      />
    );
  },
} satisfies StoryObj<typeof meta>;
