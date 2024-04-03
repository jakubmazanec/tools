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
  sorting: DataTableProps<any, any>['sorting'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  onSorting: DataTableProps<any, any>['onSortingChange'];
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

export function DataTableHeader({
  table,
  header,
  clientSorting,
  sorting: controlledSorting,
  onSorting,
  clientFilters,
  filters: controlledFilters,
  onFiltering,
  clientFaceting,
  faceting,
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

  let sortElement = null;

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
    let newSorting: DataTableProps<any, any>['sorting'] = null;

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

  return (
    <TableHeader
      ref={setNodeRef}
      colSpan={header.colSpan}
      className={getCommonPinningClasses(header.column)}
      style={style}
    >
      <span className="relative mr-6 block overflow-hidden">
        <Container spacing="extra-small" justify="spaced" align="center">
          {header.column.getCanSort() ?
            <Button
              variant="text"
              size="small"
              className="mr-auto inline-flex cursor-move"
              title={title}
              onClick={handleSortClick}
              {...attributes}
              {...listeners}
            >
              {sortElement}
              {contentElement}
            </Button>
          : null}
          <Popover>
            <PopoverButton>
              <Button variant="text" size="small" aria-label="Settings">
                <Icon size="small" name="Cog6Tooth" />
              </Button>
            </PopoverButton>
            <PopoverPanel anchor="right start">
              <Container spacing="large" direction="column">
                {header.column.getCanPin() ?
                  <Container spacing="small" direction="row">
                    <Text>Pin column</Text>

                    <Field>
                      <Container spacing="small">
                        {header.column.getIsPinned() === 'left' ? null : (
                          <Button
                            variant="outline"
                            aria-label="Pin to left"
                            onClick={handlePinLeftClick}
                          >
                            <Icon size="large" name="ArrowLeftEndOnRectangle" />
                          </Button>
                        )}
                        {header.column.getIsPinned() ?
                          <Button variant="outline" aria-label="Unpin" onClick={handleUnpinClick}>
                            <Icon size="large" name="XMark" />
                          </Button>
                        : null}
                        {header.column.getIsPinned() === 'right' ? null : (
                          <Button
                            variant="outline"
                            aria-label="Pin to right"
                            onClick={handlePinRightClick}
                          >
                            <Icon size="large" name="ArrowRightEndOnRectangle" />
                          </Button>
                        )}
                      </Container>
                    </Field>
                  </Container>
                : null}

                {header.column.getCanFilter() ?
                  <Container spacing="small" direction="column">
                    <Text>Filter</Text>

                    <Field>
                      <DataTableHeaderFilter
                        table={table}
                        column={header.column}
                        clientFilters={clientFilters}
                        filters={controlledFilters}
                        clientFaceting={clientFaceting}
                        faceting={faceting}
                        onFiltering={onFiltering}
                      />
                    </Field>
                  </Container>
                : null}

                <Container spacing="small" direction="column">
                  <Text>Visible columns</Text>

                  {table.getAllLeafColumns().map((column) => (
                    <DataTableHeaderColumnCheckbox key={column.id} column={column} table={table} />
                  ))}
                </Container>
              </Container>
            </PopoverPanel>
          </Popover>
        </Container>
      </span>
      <Button
        variant="invisible"
        size="small"
        aria-label="Resize"
        className="absolute right-1 top-2.5 cursor-col-resize"
        onDoubleClick={handleWidthReset}
        onMouseDown={header.getResizeHandler()}
        onTouchStart={header.getResizeHandler()}
      >
        <Icon size="small" name="ArrowsRightLeft" />
      </Button>
    </TableHeader>
  );
}
