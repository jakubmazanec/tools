# UI invalid state

Date: 2026-11-27. Branch: `fix-ui-disabled-components` (PR #619), as new commits on top of the
disabled rework commit. Package: `@jakubmazanec/ui`.

## Goal

Every form control can be invalid the same way: automatically when its Conform field has errors, or
when its `invalid` prop is set. The state is styled from `data-invalid`, exposed to screen readers
with `aria-invalid` where ARIA allows it, and the `Error` text is linked to the control with
`aria-describedby`. The mechanism follows `disabled`: a prop with no default, passed to Headless UI
where the component is rendered, styled with data-attribute selectors; no new hook, context or
`Field` prop.

## Decisions

1. Both sources: Conform field errors and the `invalid` prop.
2. Either source makes the control invalid: `invalid || field?.errors !== undefined`. Like
   `disabled={false}`, `invalid={false}` works like leaving the prop out. Reason: a control that
   looks and announces valid while its `Error` shows and links messages is incoherent, and the only
   case that needed to force valid (the Listbox filter) is solved by decision 6.
3. "Has errors" uses Conform's own default rule (`getAriaAttributes` with `ariaInvalid: 'errors'`):
   `errors !== undefined`, not `!valid` (which would also count nested errors of object or array
   fields).
4. The danger border shows in every state of an invalid control: hovered or not, checked or not,
   disabled or not.
5. Combobox also gets `aria-invalid` on its input, which Headless UI leaves out although ARIA allows
   it.
6. The Listbox filter `Input` does not take the Listbox's field. React context reaches it through
   the options portal, so without a reset it would turn invalid with the Listbox; it already takes
   the field's `id`, `name` and `form` from `getInputProps` today.

## Verified facts

Checked in `@headlessui/react` 2.2.10 and `@conform-to/react` 1.21.3 (dist code and a real Chromium
page) and WAI-ARIA 1.2 (`aria-invalid` is used in roles application, checkbox, combobox, gridcell,
listbox, radiogroup, slider, spinbutton, textbox, tree; global use is deprecated, and so is its use
on roles button and radio).

| Control    | Headless UI `invalid`                  | What reaches the DOM                                          | ARIA allows `aria-invalid`             | `Description` link                                                                          |
| ---------- | -------------------------------------- | ------------------------------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------- |
| Input      | yes                                    | `aria-invalid="true"`, `data-invalid`                         | yes (textbox)                          | from a surrounding Headless `Field`                                                         |
| Textarea   | yes                                    | `aria-invalid="true"`, `data-invalid`                         | yes (textbox)                          | from a surrounding Headless `Field`                                                         |
| Listbox    | yes                                    | `data-invalid` on the button only                             | deprecated on the button (role button) | on the button, from a surrounding `Field`                                                   |
| Combobox   | yes                                    | `data-invalid` on the input and the button, no `aria-invalid` | yes on the input (combobox)            | on the input, from a surrounding `Field`                                                    |
| Checkbox   | no (passed through as an unknown attr) | our own `aria-invalid` and `data-invalid` props reach the DOM | yes (checkbox)                         | from a surrounding `Field`                                                                  |
| RadioGroup | no (passed through to the root)        | our own props reach the group root; Radios get nothing        | yes on radiogroup, deprecated on radio | only from a `Description` inside the RadioGroup (to the root), not from a `Field` around it |

Our controls today, after a failed submit: none has `aria-invalid` or `data-invalid`,
`aria-describedby` points only at a `Description` when the field has one, and no `Error` has an
`id`. Headless UI merges its own props last, so it overwrites the `aria-invalid` and
`aria-describedby` that Conform's `getInputProps` and `getTextareaProps` return. `Error` renders a
plain element, so no control is linked to it. Our `Description` component already renders Headless
UI's `Description`.

Headless UI's `Description` keeps a user `id`, links an empty element harmlessly, and throws when no
Headless parent collects descriptions. Every provider of our `FieldContext` and `FieldNameContext`
(`Field`, `CheckboxField`, `RadioGroup`) renders such a parent, so an `Error` with a field or a
field name cannot throw. Conform sets `field.errors` back to `undefined` once the field validates,
but it revalidates only on `input` and `focusout` events from named native fields, which Headless
UI's hidden inputs do not fire (read from Conform 1.21.3 code, not run).

## Changes per component

`isInvalid` below means `invalid || field?.errors !== undefined`. Where it is used once it is
written inline; where it is used more than once it is one `let isInvalid` declared before the first
branch (TypeScript narrows `field` to `undefined` in the later branches, so `field?.errors` there
fails `no-unnecessary-condition`). Each use has a one-line comment, like the
`disabled ? true : undefined` lines.

- **Input, Textarea:** add `invalid?: boolean | undefined` (no default) and pass
  `invalid: isInvalid` next to `disabled` in `inputProps` and `textareaProps`, which are spread
  after Conform's props, so it wins the merge (the `field` comes from the existing `useField()`
  call). Root classes +=
  `has-data-invalid:border-danger-500 has-data-disabled:has-data-invalid:hover:border-danger-500`.
- **Listbox:** pass `invalid: isInvalid` instead of `invalid`. Wrap the filter `Input` in
  `<FieldContext value={undefined}>` (decision 6). Classes already present.
- **Combobox:** pass `invalid: isInvalid` to `HeadlessCombobox` and `aria-invalid` (`true` or
  `undefined`) to `ComboboxInput`. Classes already present.
- **Checkbox:** add the prop and take it out of `...rest` (Headless UI would pass it to the DOM);
  pass `'aria-invalid'` (`true` or `undefined`) and `'data-invalid'` (`''` or `undefined`) in both
  prop branches. Icon classes +=
  `group-data-invalid/checkbox:*:border-danger-500 group-data-invalid/checkbox:*:hover:border-danger-500 group-data-invalid/checkbox:group-data-[checked]/checkbox:*:border-danger-500 group-data-invalid/checkbox:hover:group-data-[checked]/checkbox:*:border-danger-500`.
- **RadioGroup:** add the prop and take it out of `...rest` (the `field` is its own `field` prop);
  pass the same two attributes in all three branches. Theme `className` += `group/radio-group`.
- **Radio:** no prop (`aria-invalid` is deprecated on radio). Icon classes +=
  `group-data-invalid/radio-group:*:border-danger-500 group-data-invalid/radio-group:*:hover:border-danger-500 group-data-invalid/radio-group:group-data-[checked]/radio:*:border-danger-500 group-data-invalid/radio-group:hover:group-data-[checked]/radio:*:border-danger-500`.
  The last class puts hover on the icon, like Checkbox and like Radio's own disabled rule.
- **Error:** with a field or a field name (`useFieldName()`), render Headless UI's `Description`
  (`as={Component}`) instead of a plain element, with props built the way our `Description` builds
  them (`HeadlessDescriptionProps<any>` and `filterProps`). With a field it shows the field's
  errors, otherwise its children, as today; with neither, it renders as today, because a Headless
  `Description` would throw there. So `<Field name="x"><Input invalid /><Error>…</Error></Field>` is
  linked too, without Conform. No `id={field.errorId}`: Headless UI generates the id and builds
  `aria-describedby` from it, and Conform's `aria-describedby` is overwritten anyway. For a
  RadioGroup, the `Error` must be inside the RadioGroup (where its `field` prop provides the field),
  which is where it can read the field today. An `Error` in a `Field` around a RadioGroup still
  shows its messages but is linked to nothing; an `Error` in a `RadioField` is linked to that one
  Radio.

The class sets were checked in Chromium with the real components (theme overridden through
`ThemeProvider`), and again from CSS compiled by Tailwind 4.3.3: the computed border is `danger-500`
in all 8 Checkbox states, all 8 Radio states and all 4 Input and Textarea states. Removing any
single class breaks at least one state, so none is superfluous. Two Tailwind specificity facts drive
the count: an invalid rule ties with the existing `*:hover:` and `group-data-[checked]` rules and
loses on order, and on Input and Textarea the disabled hover rule needs its own invalid counterpart.
On Checkbox and Radio the invalid classes tie with the disabled rules and win only because Tailwind
emits `group-data-invalid` after `group-data-disabled`. tailwind-merge 3.7 keeps every new class
when a user `className` is merged.

## Out of scope

- A `Field` or `Fieldset` level `invalid`, a new context or hook.
- `aria-invalid` on the Listbox button and on Radios (deprecated there in ARIA 1.2).
- Invalid styles for Label, Description, Legend and Error, and for the Listbox and Combobox icons.
- An `id={field.errorId}` on `Error`, and `aria-errormessage`.
- Focus after a failed submit: Conform focuses the first named field with errors, which for Listbox,
  Combobox, Checkbox and RadioGroup is Headless UI's hidden input, so focus stays on the submit
  button. No live region on `Error` either (it would interrupt typing, because fields revalidate on
  input).
- Clearing the invalid state when the user fixes a Listbox, Combobox, Checkbox or RadioGroup value:
  Conform does not revalidate these (see Verified facts), so `field.errors`, the danger border and
  `aria-invalid` stay until the next submit, as the `Error` text already does today.

## Testing

Write the tests first. Each must fail at runtime on the current code, except:

- the `invalid` prop tests for Input and Textarea: `invalid` already reaches Headless UI through
  `...rest`, so their red step is the type error;
- the Listbox `invalid` prop test and the `data-invalid` half of the Combobox one: already covered
  by `marks its button invalid` and `marks its input invalid`, so extend those tests (Combobox gets
  the `aria-invalid` assertion) instead of adding duplicates;
- the "shows its message" half of the Error link test;
- the guards named below.

Cases, as `test.each` tables where the setup allows (`vitest/prefer-each`):

- For each of Input, Textarea, Listbox, Combobox, Checkbox and RadioGroup:
  - `invalid` prop, without `Form` or `Field`: the element named in the table has `data-invalid`,
    and `aria-invalid="true"` where ARIA allows it (Input, Textarea, Combobox input, Checkbox,
    RadioGroup). Also Checkbox inside `CheckboxField name="x"` and RadioGroup with `name`, so every
    prop branch is reached.
  - Conform errors: inside a form whose field fails validation after clicking submit, the same
    attributes appear without the prop.
  - `invalid={false}` with field errors: both attributes, as with no prop (guards against `??`).
  - Error link: the `Error` element's `id` is not empty, the control's `aria-describedby`, split on
    spaces, contains it, and the `Error` shows its message. One case where the `Field` also has a
    `Description`: both ids.
- Error link without Conform: in `<Field name="x">` with `<Input invalid />`, the `Error` is linked
  and shows its children.
- Valid again: on Input, typing a valid value after a failed submit removes both attributes. Try the
  same once on Listbox: if the state clears there too, the stale-state line in Out of scope is
  wrong, so drop it and add the case for Listbox, Combobox, Checkbox and RadioGroup.
- Look: computed border colour equals that of a reference
  `<span className="border-2 border-danger-500" />` in every state listed above, measured on the
  element that carries the border (the `*` child of the icon span for Checkbox and Radio, the root
  span for Input and Textarea), with transitions turned off and the mouse moved away before each
  unhovered measurement.
- Guards: `Error` with neither a field nor a field name still renders its children; the Listbox
  filter input has no `data-invalid` or `aria-invalid` while the Listbox field has errors.

Setup:

- One shared test component for the Conform cases, modelled on `stories/Forms.tsx`:
  `useForm({schema, onSubmit(event) { event.preventDefault(); }})`, `Form`, `Field field={…}` and a
  submit `Button`. `preventDefault` keeps the page from navigating if validation passes by mistake.
- One shared helper for turning off transitions and reading the border colour, which the Listbox and
  Combobox tests each define today.
- `Checkbox.browser.test.tsx` and `RadioGroup.browser.test.tsx` import `../.storybook/tailwind.css`.
  New `Textarea.browser.test.tsx` and `Error.browser.test.tsx` use `describe(Textarea, …)` and
  `describe(Error, …)`.

Order: add `invalid` to the Input and Textarea prop types first, so the new tests typecheck. The
Error change turns all Error link tests green at once, so it is one step. RadioGroup's attributes
and `group/radio-group` land before or with the Radio icon classes.

## Stories

One `Invalid` story with every control invalid, also disabled and invalid, like `Disabled` in
`Fieldset.stories.tsx`, so the look is reviewed in Chromatic.

## Changeset

The `@jakubmazanec/ui` changeset (which Jakub is rewriting) should cover: the new `invalid` prop on
Input, Textarea, Checkbox and RadioGroup; invalid state from Conform field errors or the prop
(`invalid={false}` works like leaving it out, as with `disabled`), including on Listbox and
Combobox, so existing forms show the danger border after a failed submit without code changes; the
danger border; `aria-invalid` and the `Error` link through `aria-describedby`, with or without
Conform; that a RadioGroup's `Error` must be inside the RadioGroup; that the invalid state of
Listbox, Combobox, Checkbox and RadioGroup stays until the next submit. A new prop needs at least a
`minor` bump (`ui-disabled-invalid-states.md` is `patch` today).

## Before merge

Revert 946ed03e7 (the temporary Chromatic workflow) once the `Invalid` story has been reviewed.
