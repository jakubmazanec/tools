import {type Meta, type StoryObj} from '@storybook/react';

import {
  Menu,
  MenuButton,
  MenuHeading,
  MenuItem,
  MenuItems,
  MenuSection,
  MenuSeparator,
} from '../source/main.js';

const meta = {
  title: 'Components/Menu',
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;

export const Example = {
  args: {
    children: [
      <MenuButton key="1">My account</MenuButton>,
      <MenuItems key="2">
        <MenuSection>
          <MenuHeading className="text-sm opacity-50">Settings</MenuHeading>
          <MenuItem>
            <a className="block data-[focus]:bg-blue-100" href="/profile">
              My profile
            </a>
          </MenuItem>
          <MenuItem>
            <a className="block data-[focus]:bg-blue-100" href="/notifications">
              Notifications
            </a>
          </MenuItem>
        </MenuSection>
        <MenuSeparator className="my-1 h-px bg-black" />
        <MenuSection>
          <MenuHeading className="text-sm opacity-50">Support</MenuHeading>
          <MenuItem>
            <a className="block data-[focus]:bg-blue-100" href="/support">
              Documentation
            </a>
          </MenuItem>
          <MenuItem>
            <a className="block data-[focus]:bg-blue-100" href="/license">
              License
            </a>
          </MenuItem>
        </MenuSection>
      </MenuItems>,
    ],
  },
} satisfies StoryObj<typeof meta>;
