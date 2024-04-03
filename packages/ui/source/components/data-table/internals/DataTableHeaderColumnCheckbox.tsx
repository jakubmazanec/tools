import {type Column, flexRender, type Header, type Table} from '@tanstack/react-table';
import {useCallback} from 'react';

import {Checkbox} from '../../Checkbox.js';
import {CheckboxField} from '../../CheckboxField.js';
import {Label} from '../../Label.js';

export type DataTableHeaderColumnCheckboxProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  column: Column<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  table: Table<any>;
};

export function DataTableHeaderColumnCheckbox({column, table}: DataTableHeaderColumnCheckboxProps) {
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
