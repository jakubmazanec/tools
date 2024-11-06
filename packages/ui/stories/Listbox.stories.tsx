import {type Meta, type StoryObj} from '@storybook/react';
import {type ElementType} from 'react';

import {Field, Listbox, type ListboxProps} from '../source/main.js';

const items = [
  {label: '🍎 Apples', value: 'apples'},
  {label: '🍌 Bananas', value: 'bananas'},
  {label: '🥦 Broccoli', value: 'broccoli'},
  {label: '🥕 Carrots', value: 'carrots'},
  {label: '🍫 Chocolate', value: 'chocolate'},
];

const meta = {
  title: 'Components/Listbox',
  component: Listbox,
  decorators: [
    // `typeof Listbox` added because without it, the stories have `args` with type `never` 🤷‍♂️
    (Story: typeof Listbox) => (
      <Field name="listbox">
        <Story />
      </Field>
    ),
  ],
} satisfies Meta<ListboxProps<ElementType, boolean | number | string>>;

export default meta;

export const Default = {
  args: {items},
} satisfies StoryObj<typeof meta>;

export const Disabled = {
  args: {disabled: true, items},
} satisfies StoryObj<typeof meta>;

export const WithFilter = {
  args: {items, showFilter: true},
} satisfies StoryObj<typeof meta>;

export const Multiple = {
  args: {items, multiple: true},
} satisfies StoryObj<typeof meta>;

export const MultipleLimited = {
  args: {items, multiple: true, hideSelected: {limit: 1}},
} satisfies StoryObj<typeof meta>;
