import {type Table} from '@tanstack/react-table';

import {Button} from '../../Button.js';
import {Container} from '../../Container.js';
import {Icon} from '../../Icon.js';
import {Popover} from '../../Popover.js';
import {PopoverButton} from '../../PopoverButton.js';
import {PopoverPanel} from '../../PopoverPanel.js';
import {type DataTableProps} from '../DataTable.js';
import {DataTableSettings} from './DataTableSettings.js';

export type DataTableMenuProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  table: Table<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  hideFilters: DataTableProps<any, any>['hideFilters'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  hideColumnVisibility: DataTableProps<any, any>['hideColumnVisibility'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  hideColumnOrder: DataTableProps<any, any>['hideColumnOrder'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  hideColumnPinning: DataTableProps<any, any>['hideColumnPinning'];

  // TODO: this probablu should be passed via some context
  toggleFilters: () => void;
};

export function DataTableMenu({
  table,
  hideFilters = false,
  hideColumnVisibility = false,
  hideColumnOrder = false,
  hideColumnPinning = false,
  toggleFilters,
}: DataTableMenuProps) {
  return (
    <Container justify="spaced" spacing="small">
      {hideFilters ? null : (
        <Button aria-label="Filter" variant="outline" onClick={toggleFilters}>
          <Icon name="Funnel" size="large" />
        </Button>
      )}
      <Popover className="ml-auto">
        <PopoverButton>
          <Button aria-label="Settings" variant="outline">
            <Icon name="Cog6Tooth" size="large" />
          </Button>
        </PopoverButton>
        <PopoverPanel anchor="bottom end">
          <DataTableSettings
            hideColumnOrder={hideColumnOrder}
            hideColumnPinning={hideColumnPinning}
            hideColumnVisibility={hideColumnVisibility}
            table={table}
          />
        </PopoverPanel>
      </Popover>
    </Container>
  );
}
