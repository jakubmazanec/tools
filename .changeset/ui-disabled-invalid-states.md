---
'@jakubmazanec/ui': patch
---

BREAKING: `disabled` and `invalid` are now styled from Headless UI's `data-disabled` and `data-invalid` attributes, and controls inherit `disabled` from `Fieldset`, `Field` and `RadioGroup`.

- `disabled` and `invalid` are no longer theme variants; custom themes that define `variants.disabled` or `variants.invalid` or use them in `compoundVariants` stop type-checking and must move those classes to `data-disabled:`/`data-invalid:` selectors. The exported `use*Theme` hooks of the converted components no longer take `disabled` or `invalid`.
- Controls now inherit `disabled` from `Fieldset`, `Field` and `RadioGroup`, also when their own prop is `false`: `disabled={false}` works like leaving the prop out, so a control cannot stay enabled inside a disabled `Fieldset`, `Field` or `RadioGroup`. `Field`, `CheckboxField` and `RadioField` accept a `disabled` prop. Inherited `disabled` works like the prop: it blocks click handlers and leaves the value out of form submission. It also reaches Dialog and Popover content written inside a disabled `Fieldset` or `Field`.
- To override a disabled style through `className`, use the theme's state prefix, e.g. `data-disabled:not-data-pending:bg-red-200` on Button; plain and `hover:` overrides work as before.
- A custom `as` component must forward `data-disabled` and `data-pending` to its DOM element; before, forwarding `className` was enough.
- Natively disabled Buttons no longer get `pointer-events: none`, so clicks on them no longer reach the parent element; other disabled Buttons (e.g. `as={NavLink}`) still get it.
- Look: a disabled Radio is now visible, with Checkbox's disabled look; disabled Input, Textarea, Listbox, Combobox and their options and pending Buttons no longer react to hover. `Combobox` now passes `invalid` to Headless UI. A disabled Input hides its clear button.
- Accessibility: a disabled Button rendered as a link ignores Enter; with the `disabled` prop it also leaves the tab order and gets `aria-disabled`.
