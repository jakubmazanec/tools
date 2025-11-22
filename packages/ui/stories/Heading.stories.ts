import {type Meta, type StoryObj} from '@storybook/react-vite';

import {Heading} from '../source/main.js';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Heading>;

export default meta;

export const Default = {
  args: {
    size: 'medium',
    children: 'Heading',
  },
} satisfies StoryObj<typeof meta>;

export const Small = {
  args: {
    size: 'small',
    children: 'Small heading',
  },
} satisfies StoryObj<typeof meta>;

export const Large = {
  args: {
    size: 'large',
    children: 'Large heading',
  },
} satisfies StoryObj<typeof meta>;

export const AsH1 = {
  args: {
    as: 'h1',
    children: 'Heading as h1',
  },
} satisfies StoryObj<typeof meta>;

export const AsH2 = {
  args: {
    as: 'h2',
    children: 'Heading as h2',
  },
} satisfies StoryObj<typeof meta>;

export const AsSpan = {
  args: {
    as: 'span',
    children: 'Heading as span',
  },
} satisfies StoryObj<typeof meta>;
