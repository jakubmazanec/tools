import {type Meta, type StoryObj} from '@storybook/react';
import {type ElementType} from 'react';

import {Button, Popover, PopoverButton, PopoverPanel, type PopoverProps} from '../source/main.js';

const meta = {
  title: 'Components/Popover',
  component: Popover,
} satisfies Meta<PopoverProps<ElementType>>;

export default meta;

export const Example = {
  args: {
    children: [
      <PopoverButton key="1">
        <Button variant="outline">Popover button</Button>
      </PopoverButton>,
      <PopoverPanel key="2">Popover</PopoverPanel>,
    ],
  },
} satisfies StoryObj<typeof meta>;
