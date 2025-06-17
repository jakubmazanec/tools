import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {flexRender, type Header, type Table} from '@tanstack/react-table';
import {type CSSProperties, useCallback} from 'react';

import {Button} from '../../Button.js';
import {Container} from '../../Container.js';
import {Field} from '../../Field.js';
import {Icon} from '../../Icon.js';
import {Popover} from '../../Popover.js';
import {PopoverButton} from '../../PopoverButton.js';
import {PopoverPanel} from '../../PopoverPanel.js';
import {TableHeader} from '../../TableHeader.js';
import {Text} from '../../Text.js';
import {type DataTableProps} from '../DataTable.js';
import {DataTableHeaderColumnCheckbox} from './DataTableHeaderColumnCheckbox.js';
import {DataTableHeaderFilter} from './DataTableHeaderFilter.js';
import {getCommonPinningClasses} from './getCommonPinningClasses.js';
import {getCommonPinningStyles} from './getCommonPinningStyles.js';
import {normalizeSorting} from './normalizeSorting.js';

export type DataTableHeaderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  table: Table<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  header: Header<any, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  clientSorting: DataTableProps<any, any>['clientSorting'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  hideSorting: DataTableProps<any, any>['hideSorting'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  sorting: DataTableProps<any, any>['sorting'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  onSorting: DataTableProps<any, any>['onSortingChange'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  clientFilters: DataTableProps<any, any>['clientFilters'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  hideFilters: DataTableProps<any, any>['hideFilters'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  filters: DataTableProps<any, any>['filters'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  onFiltering: DataTableProps<any, any>['onFiltersChange'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  clientFaceting: DataTableProps<any, any>['clientFaceting'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  faceting: DataTableProps<any, any>['faceting'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  hideColumnVisibility: DataTableProps<any, any>['hideColumnVisibility'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  hideColumnOrder: DataTableProps<any, any>['hideColumnOrder'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  hideColumnPinning: DataTableProps<any, any>['hideColumnPinning'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  hideColumnResizing: DataTableProps<any, any>['hideColumnResizing'];
};

export function DataTableHeader({
  table,
  header,
  clientSorting,
  hideSorting = false,
  sorting: controlledSorting,
  onSorting,
  clientFilters,
  hideFilters = false,
  filters: controlledFilters,
  onFiltering,
  clientFaceting,
  faceting,
  hideColumnVisibility = false,
  hideColumnOrder = false,
  hideColumnPinning = false,
  hideColumnResizing = false,
}: DataTableHeaderProps) {
  let {attributes, isDragging, listeners, setNodeRef, transform} = useSortable({
    id: header.column.id,
  });

  let sorting =
    clientSorting ? normalizeSorting(header) : normalizeSorting(header, controlledSorting);

  let style: CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition: 'width transform 0.2s ease-in-out',
    zIndex: isDragging ? 20 : undefined,
    ...getCommonPinningStyles(header.column),
  };

  let contentElement = null;

  if (!header.isPlaceholder) {
    contentElement = flexRender(header.column.columnDef.header, header.getContext());
  }

  let sortElement;

  if (!sorting) {
    sortElement = <Icon name="ArrowsUpDown" size="small" variant="light" />;
  } else if (sorting.direction === 'ascending') {
    sortElement = <Icon name="ArrowUp" size="small" />;
  } else {
    sortElement = <Icon name="ArrowDown" size="small" />;
  }

  let title: string | undefined;

  if (!sorting) {
    title = 'Sort ascending';
  } else if (sorting.direction === 'ascending') {
    title = 'Sort descending';
  } else {
    title = 'Clear sort';
  }

  let handleSortClick = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let newSorting: DataTableProps<any, any>['sorting'];

    if (!sorting) {
      newSorting = {
        column: header.column.id,
        direction: 'ascending',
      };
    } else if (sorting.direction === 'ascending') {
      newSorting = {
        column: header.column.id,
        direction: 'descending',
      };
    } else {
      newSorting = null;
    }

    if (clientSorting) {
      if (!sorting) {
        header.column.toggleSorting(false);
      } else if (sorting.direction === 'ascending') {
        header.column.toggleSorting(true);
      } else {
        header.column.clearSorting();
      }
    }

    if (onSorting) {
      onSorting(newSorting);
    }
  }, [sorting, clientSorting, onSorting, header.column]);

  let handleWidthReset = useCallback(() => {
    header.column.resetSize();
  }, [header.column]);

  let handlePinLeftClick = useCallback(() => {
    header.column.pin('left');
  }, [header.column]);

  let handlePinRightClick = useCallback(() => {
    header.column.pin('right');
  }, [header.column]);

  let handleUnpinClick = useCallback(() => {
    header.column.pin(false);
  }, [header.column]);

  let resolvedHideFilters = hideFilters || !header.column.getCanFilter();
  let resolvedHideSorting = hideSorting || !header.column.getCanSort();
  let resolvedHideColumnPinning = hideColumnPinning || !header.column.getCanPin();

  return (
    <TableHeader
      ref={setNodeRef}
      className={getCommonPinningClasses(header.column)}
      colSpan={header.colSpan}
      style={style}
    >
      <span
        className={
          hideColumnResizing ?
            'relative block overflow-hidden'
          : 'relative mr-6 block overflow-hidden'
        }
      >
        <Container align="center" justify="end" spacing="extra-small">
          {resolvedHideSorting && hideColumnOrder ?
            contentElement
          : <Button
              className={hideColumnOrder ? 'inline-flex' : 'inline-flex cursor-move'}
              size="small"
              title={title}
              variant="text"
              onClick={resolvedHideSorting ? undefined : handleSortClick}
              {...(hideColumnOrder ? {} : attributes)}
              {...(hideColumnOrder ? {} : listeners)}
            >
              {resolvedHideSorting ? null : sortElement}
              {contentElement}
            </Button>
          }
          {resolvedHideColumnPinning && resolvedHideFilters && hideColumnVisibility ? null : (
            <Popover>
              <PopoverButton>
                <Button aria-label="Settings" size="small" variant="text">
                  <Icon name="Cog6Tooth" size="small" />
                </Button>
              </PopoverButton>
              <PopoverPanel anchor="right start">
                <Container direction="column" spacing="large">
                  {resolvedHideColumnPinning ? null : (
                    <Container direction="row" spacing="small">
                      <Text>Pin column</Text>

                      <Field>
                        <Container spacing="small">
                          {header.column.getIsPinned() === 'left' ? null : (
                            <Button
                              aria-label="Pin to left"
                              variant="outline"
                              onClick={handlePinLeftClick}
                            >
                              <Icon name="ArrowLeftEndOnRectangle" size="large" />
                            </Button>
                          )}
                          {header.column.getIsPinned() ?
                            <Button aria-label="Unpin" variant="outline" onClick={handleUnpinClick}>
                              <Icon name="XMark" size="large" />
                            </Button>
                          : null}
                          {header.column.getIsPinned() === 'right' ? null : (
                            <Button
                              aria-label="Pin to right"
                              variant="outline"
                              onClick={handlePinRightClick}
                            >
                              <Icon name="ArrowRightEndOnRectangle" size="large" />
                            </Button>
                          )}
                        </Container>
                      </Field>
                    </Container>
                  )}

                  {resolvedHideFilters ? null : (
                    <Container direction="column" spacing="small">
                      <Text>Filter</Text>

                      <Field>
                        <DataTableHeaderFilter
                          clientFaceting={clientFaceting}
                          clientFilters={clientFilters}
                          column={header.column}
                          faceting={faceting}
                          filters={controlledFilters}
                          table={table}
                          onFiltering={onFiltering}
                        />
                      </Field>
                    </Container>
                  )}

                  {hideColumnVisibility ? null : (
                    <Container direction="column" spacing="small">
                      <Text>Visible columns</Text>

                      {table.getAllLeafColumns().map((column) => (
                        <DataTableHeaderColumnCheckbox
                          key={column.id}
                          column={column}
                          table={table}
                        />
                      ))}
                    </Container>
                  )}
                </Container>
              </PopoverPanel>
            </Popover>
          )}
        </Container>
      </span>
      {hideColumnResizing ? null : (
        <Button
          aria-label="Resize"
          // className="absolute right-1 top-2.5 cursor-col-resize"
          className="absolute top-1/2 right-1 -mt-2.5 cursor-col-resize"
          size="small"
          variant="invisible"
          onDoubleClick={handleWidthReset}
          onMouseDown={header.getResizeHandler()}
          onTouchStart={header.getResizeHandler()}
        >
          <Icon name="ArrowsRightLeft" size="small" />
        </Button>
      )}
    </TableHeader>
  );
}
