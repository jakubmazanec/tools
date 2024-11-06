import {type Table} from '@tanstack/react-table';
import {type ChangeEvent, type FormEvent, useCallback, useState} from 'react';

import {Button} from '../../Button.js';
import {Container} from '../../Container.js';
import {Form} from '../../Form.js';
import {Icon} from '../../Icon.js';
import {Input} from '../../Input.js';
import {type DataTableProps} from '../DataTable.js';

export type DataTableSearchProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  table: Table<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  clientSearch: DataTableProps<any, any>['clientSearch'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  search: DataTableProps<any, any>['search'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  onSearch: DataTableProps<any, any>['onSearchChange'];
};

export function DataTableSearch({
  table,
  clientSearch,
  search: controlledSearch,
  onSearch,
}: DataTableSearchProps) {
  let currentSearch =
    clientSearch ?
      ((table.getState().globalFilter as string | undefined) ?? null)
    : (controlledSearch ?? null);

  let [search, setSearch] = useState(currentSearch ?? '');

  let handleSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }, []);

  let handleSearchClick = useCallback(() => {
    if (search) {
      if (clientSearch) {
        table.setGlobalFilter(search);
      }

      if (onSearch) {
        onSearch(search);
      }
    } else {
      if (clientSearch) {
        table.setGlobalFilter(undefined);
      }

      if (onSearch) {
        onSearch(null);
      }
    }
  }, [clientSearch, onSearch, search, table]);

  let handleSearchSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (search) {
        if (clientSearch) {
          table.setGlobalFilter(search);
        }

        if (onSearch) {
          onSearch(search);
        }
      } else {
        if (clientSearch) {
          table.setGlobalFilter(undefined);
        }

        if (onSearch) {
          onSearch(null);
        }
      }
    },
    [clientSearch, onSearch, search, table],
  );

  let handleResetClick = useCallback(() => {
    setSearch('');

    if (clientSearch) {
      table.setGlobalFilter(undefined);
    }

    if (onSearch) {
      onSearch(null);
    }
  }, [clientSearch, onSearch, table]);

  return (
    <Form onSubmit={handleSearchSubmit}>
      <Container spacing="small">
        <Input value={search} onChange={handleSearchChange} />
        <Button variant="outline" aria-label="Filter" onClick={handleSearchClick}>
          <Icon size="large" name="MagnifyingGlass" />
        </Button>
        <Button variant="outline" aria-label="Cancel" onClick={handleResetClick}>
          <Icon size="large" name="XMark" />
        </Button>
      </Container>
    </Form>
  );
}
