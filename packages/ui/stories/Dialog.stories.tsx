import {type Meta, type StoryObj} from '@storybook/react-vite';

import {Dialog, DialogPanel, DialogTitle} from '../source/main.js';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
} satisfies Meta<typeof Dialog>;

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
