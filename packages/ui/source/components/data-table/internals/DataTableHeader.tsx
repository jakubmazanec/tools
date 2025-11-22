import {flexRender, type Header} from '@tanstack/react-table';
import {type CSSProperties, useCallback} from 'react';

import {Button} from '../../Button.js';
import {Container} from '../../Container.js';
import {Icon} from '../../Icon.js';
import {TableHeader} from '../../TableHeader.js';
import {type DataTableProps} from '../DataTable.js';
import {getCommonPinningClasses} from './getCommonPinningClasses.js';
import {getCommonPinningStyles} from './getCommonPinningStyles.js';
import {normalizeSorting} from './normalizeSorting.js';

export type DataTableHeaderProps = {
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
  hideColumnOrder: DataTableProps<any, any>['hideColumnOrder'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  hideColumnResizing: DataTableProps<any, any>['hideColumnResizing'];
};

export function DataTableHeader({
  header,
  clientSorting,
  hideSorting = false,
  sorting: controlledSorting,
  onSorting,
  hideColumnOrder = false,
  hideColumnResizing = false,
}: DataTableHeaderProps) {
  let sorting =
    clientSorting ? normalizeSorting(header) : normalizeSorting(header, controlledSorting);

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

  let resolvedHideSorting = hideSorting || !header.column.getCanSort();

  let style: CSSProperties = {
    transition: 'width transform 0.2s ease-in-out',
    ...getCommonPinningStyles(header.column),
  };

  return (
    <TableHeader
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
              className="inline-flex"
              size="small"
              title={title}
              variant="text"
              onClick={resolvedHideSorting ? undefined : handleSortClick}
            >
              {resolvedHideSorting ? null : sortElement}
              {contentElement}
            </Button>
          }
        </Container>
      </span>
      {hideColumnResizing ? null : (
        <Button
          aria-label="Resize"
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
