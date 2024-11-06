import {type Meta, type StoryObj} from '@storybook/react';
import {type ElementType} from 'react';

import {Textarea, type TextareaProps} from '../source/main.js';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
} satisfies Meta<TextareaProps<ElementType>>;

export default meta;

export const Default = {
  args: {},
} satisfies StoryObj<typeof meta>;

export const Disabled = {
  args: {disabled: true},
} satisfies StoryObj<typeof meta>;
