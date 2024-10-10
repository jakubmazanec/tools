import {useCallback} from 'react';

import {Button} from '../../Button.js';

export type DataTablePageButtonProps = {
  page: number;
  isSelected: boolean;
  onClick: (page: number) => void;
};

export function DataTablePageButton({page, isSelected, onClick}: DataTablePageButtonProps) {
  let handleClick = useCallback(() => {
    onClick(page);
  }, [onClick, page]);

  return (
    <Button variant={isSelected ? 'solid' : 'outline'} onClick={handleClick}>
      {page}
    </Button>
  );
}
