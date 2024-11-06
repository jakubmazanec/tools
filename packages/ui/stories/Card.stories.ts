import {type Meta, type StoryObj} from '@storybook/react';
import {type ElementType} from 'react';

import {Card, type CardProps} from '../source/main.js';

const meta = {
  title: 'Components/Card',
  component: Card,
} satisfies Meta<CardProps<ElementType>>;

export default meta;

export const Default = {
  args: {},
} satisfies StoryObj<typeof meta>;
