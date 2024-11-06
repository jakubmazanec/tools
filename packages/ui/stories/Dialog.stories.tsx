import {type Meta, type StoryObj} from '@storybook/react';
import {type ElementType} from 'react';

import {Dialog, DialogPanel, type DialogProps, DialogTitle} from '../source/main.js';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
} satisfies Meta<DialogProps<ElementType>>;

export default meta;

export const Example = {
  args: {
    open: true,
    children: (
      <DialogPanel>
        <DialogTitle>Dialog title</DialogTitle>
        <p>Lorem ipsum.</p>
      </DialogPanel>
    ),
  },
} satisfies StoryObj<typeof meta>;
