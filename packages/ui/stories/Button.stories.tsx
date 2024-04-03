import {type Meta, type StoryObj} from '@storybook/react';

import {Button, Icon, Spinner} from '../source/main.js';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Solid = {
  args: {
    variant: 'solid',
    children: 'Solid',
  },
} satisfies StoryObj<typeof meta>;

export const Outline = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
} satisfies StoryObj<typeof meta>;

export const Text = {
  args: {
    variant: 'text',
    children: 'Text',
  },
} satisfies StoryObj<typeof meta>;

export const Small = {
  args: {
    variant: 'solid',
    size: 'small',
    children: 'Small',
  },
} satisfies StoryObj<typeof meta>;

export const Large = {
  args: {
    variant: 'solid',
    size: 'large',
    children: 'Large',
  },
} satisfies StoryObj<typeof meta>;

export const DisabledSolid = {
  args: {
    variant: 'solid',
    disabled: true,
    children: 'Disabled',
  },
} satisfies StoryObj<typeof meta>;

export const DisabledOutline = {
  args: {
    variant: 'outline',
    disabled: true,
    children: 'Disabled',
  },
} satisfies StoryObj<typeof meta>;

export const DisabledText = {
  args: {
    variant: 'text',
    disabled: true,
    children: 'Disabled',
  },
} satisfies StoryObj<typeof meta>;

export const WithIcon = {
  args: {
    variant: 'solid',
    children: [<Icon key="0" name="CloudArrowUp" size="large" />, 'Icon!'],
  },
} satisfies StoryObj<typeof meta>;

export const OutlineWithIcon = {
  args: {
    variant: 'outline',
    children: [<Icon key="0" name="CloudArrowUp" size="large" />, 'Icon!'],
  },
} satisfies StoryObj<typeof meta>;

export const WithOnlyIcon = {
  args: {
    children: [<Icon key="0" name="CloudArrowUp" size="large" />],
  },
} satisfies StoryObj<typeof meta>;

export const OutlineWithOnlyIcon = {
  args: {
    variant: 'outline',
    children: [<Icon key="0" name="CloudArrowUp" size="large" />],
  },
} satisfies StoryObj<typeof meta>;

export const TextWithOnlyIcon = {
  args: {
    variant: 'text',
    children: [<Icon key="0" name="CloudArrowUp" size="large" />],
  },
} satisfies StoryObj<typeof meta>;

export const WithSpinner = {
  args: {
    children: [<Spinner key="0" />, 'Spinner!'],
  },
} satisfies StoryObj<typeof meta>;

export const OutlineWithSpinner = {
  args: {
    variant: 'outline',
    children: [<Spinner key="0" />, 'Spinner!'],
  },
} satisfies StoryObj<typeof meta>;

export const CustomElement = {
  args: {children: 'Custom element', as: 'a', href: 'https://mazanec.dev'},
} satisfies StoryObj<typeof meta>;
