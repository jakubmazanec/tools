import {type Meta, type StoryObj} from '@storybook/react';
import {type ElementType} from 'react';

import {
  Menu,
  MenuButton,
  MenuHeading,
  MenuItem,
  MenuItems,
  type MenuProps,
  MenuSection,
  MenuSeparator,
} from '../source/main.js';

const meta = {
  title: 'Components/Menu',
  component: Menu,
} satisfies Meta<MenuProps<ElementType>>;

export default meta;

export const Example = {
  args: {
    children: [
      <MenuButton key="1">My account</MenuButton>,
      <MenuItems key="2">
        <MenuSection>
          <MenuHeading>Settings</MenuHeading>
          <MenuItem>My profile</MenuItem>
          <MenuItem>Notifications</MenuItem>
        </MenuSection>
        <MenuSeparator className="my-1 h-px bg-black" />
        <MenuSection>
          <MenuHeading>Support</MenuHeading>
          <MenuItem disabled>Documentation</MenuItem>
          <MenuItem>License</MenuItem>
        </MenuSection>
      </MenuItems>,
    ],
  },
} satisfies StoryObj<typeof meta>;
