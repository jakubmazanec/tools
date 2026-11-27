import {type Meta, type StoryObj} from '@storybook/react-vite';

import {
  Button,
  Checkbox,
  Combobox,
  Fieldset,
  Input,
  Listbox,
  Radio,
  RadioGroup,
  Textarea,
} from '../source/main.js';

const items = [
  {label: '🍎 Apples', value: 'apples'},
  {label: '🍌 Bananas', value: 'bananas'},
  {label: '🥦 Broccoli', value: 'broccoli'},
  {label: '🥕 Carrots', value: 'carrots'},
  {label: '🍫 Chocolate', value: 'chocolate'},
];
const meta = {
  title: 'Components/Fieldset',
  component: Fieldset,
} satisfies Meta<typeof Fieldset>;

export default meta;

export const Disabled = {
  args: {disabled: true},
  render: (args) => (
    <Fieldset {...args}>
      <Button>Button</Button>
      <Checkbox aria-label="Checkbox" />
      <RadioGroup>
        <Radio aria-label="First radio" value="first" />
        <Radio aria-label="Second radio" value="second" />
      </RadioGroup>
      <Input aria-label="Input" />
      <Textarea aria-label="Textarea" />
      <Listbox items={items} />
      <Combobox items={items} />
    </Fieldset>
  ),
} satisfies StoryObj<typeof meta>;

export const Invalid = {
  render: () => (
    <>
      {[false, true].map((disabled) => (
        <Fieldset key={String(disabled)} disabled={disabled}>
          <Checkbox invalid aria-label="Checkbox" />
          <Checkbox checked invalid aria-label="Checked checkbox" />
          <RadioGroup invalid defaultValue="first">
            <Radio aria-label="First radio" value="first" />
            <Radio aria-label="Second radio" value="second" />
          </RadioGroup>
          <Input invalid aria-label="Input" />
          <Textarea invalid aria-label="Textarea" />
          <Listbox invalid items={items} />
          <Combobox invalid items={items} />
        </Fieldset>
      ))}
    </>
  ),
} satisfies StoryObj<typeof meta>;
