import {type Table} from '@tanstack/react-table';
import {type ChangeEvent, type FormEvent, useCallback, useState} from 'react';

import {Button} from '../Button.js';
import {type DataTableProps} from '../DataTable.js';
import {Form} from '../Form.js';
import {Icon} from '../Icon.js';
import {Input} from '../Input.js';

export type DataTableSearchProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  table: Table<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  search: DataTableProps<any, any>['search'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  onSearch: DataTableProps<any, any>['onSearch'];
};

export function DataTableSearch({table, search: controlledSearch, onSearch}: DataTableSearchProps) {
  let [search, setSearch] = useState(controlledSearch ?? '');

  let handleSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }, []);

  let handleSearchClick = useCallback(() => {
    if (search) {
      if (onSearch) {
        onSearch(search);
      } else {
        table.setGlobalFilter(search);
      }
    } else if (onSearch) {
      onSearch(null);
    } else {
      table.setGlobalFilter(undefined);
    }
  }, [onSearch, search, table]);

  let handleSearchSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (search) {
        if (onSearch) {
          onSearch(search);
        } else {
          table.setGlobalFilter(search);
        }
      } else if (onSearch) {
        onSearch(null);
      } else {
        table.setGlobalFilter(undefined);
      }
    },
    [onSearch, search, table],
  );

  let handleResetClick = useCallback(() => {
    setSearch('');

    if (onSearch) {
      onSearch(null);
    } else {
      table.setGlobalFilter(undefined);
    }
  }, [onSearch, table]);

  console.log('???', controlledSearch, onSearch);

  return (
    <Form className="flex-row gap-x-2" onSubmit={handleSearchSubmit}>
      <Input value={search} onChange={handleSearchChange} />
      <Button variant="outline" aria-label="Filter" onClick={handleSearchClick}>
        <Icon size="large" name="MagnifyingGlass" />
      </Button>
      <Button variant="outline" aria-label="Cancel" onClick={handleResetClick}>
        <Icon size="large" name="XMark" />
      </Button>
    </Form>
  );
}
