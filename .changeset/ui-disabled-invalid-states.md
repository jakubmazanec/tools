---
'@jakubmazanec/ui': minor
---

BREAKING: `disabled` and `invalid` are now styled from Headless UI's `data-disabled` and `data-invalid` attributes, and controls inherit `disabled` from `Fieldset`, `Field` and `RadioGroup`.

- `disabled` and `invalid` are no longer theme variants; custom themes that define `variants.disabled` or `variants.invalid` or use them in `compoundVariants` stop type-checking and must move those classes to `data-disabled:`/`data-invalid:` selectors. The exported `use*Theme` hooks of the converted components no longer take `disabled` or `invalid`.
- Controls now inherit `disabled` from `Fieldset`, `Field` and `RadioGroup`, also when their own prop is `false`: `disabled={false}` works like leaving the prop out, so a control cannot stay enabled inside a disabled `Fieldset`, `Field` or `RadioGroup`. `Field`, `CheckboxField` and `RadioField` accept a `disabled` prop. Inherited `disabled` works like the prop: it blocks click handlers and leaves the value out of form submission. It also reaches Dialog and Popover content written inside a disabled `Fieldset` or `Field`.
- To override a disabled style through `className`, use the theme's state prefix, e.g. `data-disabled:not-data-pending:bg-red-200` on Button; plain and `hover:` overrides work as before.
- A custom `as` component must forward `data-disabled` and `data-pending` to its DOM element; before, forwarding `className` was enough. A custom `as` on Checkbox must also forward `data-invalid` and `aria-invalid`.
- Natively disabled Buttons no longer get `pointer-events: none`, so clicks on them no longer reach the parent element; other disabled Buttons (e.g. `as={NavLink}`) still get it.
- Look: a disabled Radio is now visible, with Checkbox's disabled look; disabled Input, Textarea, Listbox, Combobox and their options and pending Buttons no longer react to hover. `Combobox` now passes `invalid` to Headless UI. A disabled Input hides its clear button.
- Accessibility: a disabled Button rendered as a link ignores Enter; with the `disabled` prop it also leaves the tab order and gets `aria-disabled`.
- `Input`, `Textarea`, `Checkbox` and `RadioGroup` accept a new `invalid` prop; `Listbox` and `Combobox` already had one. A control is invalid when its prop is set or its Conform field has errors, so existing forms show the danger border after a failed submit without code changes. `invalid={false}` works like leaving the prop out, as with `disabled`.
- An invalid control keeps its danger border in every state (hovered, checked, disabled).
- Accessibility: an invalid `Input`, `Textarea`, `Combobox` input, `Checkbox` and `RadioGroup` get `aria-invalid="true"`; the `Listbox` button and `Radio` do not, because ARIA 1.2 deprecates it there.
- `Error` inside a `Field`, `CheckboxField` or `RadioGroup` with a `field` or `name` is linked to its control through `aria-describedby`, with or without Conform. A `RadioGroup`'s `Error` must be inside the `RadioGroup` to be linked.
- The `Listbox` filter input no longer takes the `Listbox`'s field.
- The invalid state of `Listbox`, `Combobox`, `Checkbox` and `RadioGroup` stays until the next submit, because Conform does not revalidate them.
