# UI Invalid State Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development
> (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use
> checkbox (`- [ ]`) syntax for tracking.

**Goal:** Every `@jakubmazanec/ui` form control turns invalid from Conform field errors or its
`invalid` prop, shows a danger border in every state, exposes `aria-invalid` where ARIA allows it
and is linked to its `Error` through `aria-describedby`.

**Architecture:** Same mechanism as `disabled`: an `invalid` prop with no default, combined with
`field?.errors !== undefined` and passed to Headless UI where the component renders (or set as
`aria-invalid`/`data-invalid` ourselves where Headless UI has no `invalid`), styled with
`data-invalid` selectors. `Error` becomes a Headless UI `Description` when a field or field name
exists, so Headless UI links it.

**Tech Stack:** React 19, `@headlessui/react` 2.2.10, `@conform-to/react` 1.21.3, Zod 4, Tailwind
4.3, vitest 5 browser mode (Playwright, Chromium), `vitest-browser-react`.

**Spec:** `docs/superpowers/specs/2026-11-27-ui-invalid-state-design.md`

## Global Constraints

- Branch `fix-ui-disabled-components` (PR #619); new commits on top, no rebase.
- Package `packages/ui` only, plus the changeset and the final revert.
- Prop type: `invalid?: boolean | undefined`, no default.
- Invalid means `invalid || field?.errors !== undefined`; never `??`, never `!field.valid`.
- Used once: written inline. Used more than once: one `let isInvalid` before the first branch.
- Attribute values: `'aria-invalid'` is `true` or `undefined`; `'data-invalid'` is `''` or
  `undefined`. Never pass `false` (React would render `data-invalid="false"`, which
  `data-invalid:` selectors match).
- No new hook, context or `Field` prop; no `id={field.errorId}`; no `aria-errormessage`; no
  `aria-invalid` on the Listbox button or on Radios.
- Comment texts (one line each, reuse verbatim):
  - on each `invalid:` line and each `let isInvalid`:
    `// Field errors also make it invalid, so \`invalid={false}\` works like leaving the prop out`
  - above each `'aria-invalid'`/`'data-invalid'` pair:
    `// Headless UI has no \`invalid\` here, so set the attributes ourselves`
  - on Combobox's `aria-invalid`:
    `// Headless UI leaves \`aria-invalid\` off the combobox input although ARIA allows it`
- Red-green: every test is written and run red before its code, except the ones the spec exempts
  (named per step below).
- Never hand-edit `packages/*/docs/**` or `.github/workflows/*.yaml` (the Task 8 revert excepted).
- Commit messages: plain imperative sentence like `git log`, no prefix, no attribution lines.
- Run every command from the repo root in Bash.

## Review Focus

1. A valid Checkbox, RadioGroup or Combobox (no prop, no errors) must have no `data-invalid` and no
   `aria-invalid` at all; a `false` value would paint the danger border on every valid control.
   Tests: Tasks 2, 3, 4.
2. A user `className` that sets a border colour on an invalid Input must not hide the danger
   border (tailwind-merge must keep the `has-data-invalid:` classes). Test: Task 1.
3. `Error` with a custom `as` inside a named `Field` must render that element and still be linked.
   Test: Task 5.
4. Two Fields on one page: each control is linked only to its own `Error`. Test: Task 5.
5. RadioGroup with `name` (no Conform) and an `Error` inside it: the radiogroup is linked. Test:
   Task 5.

---

### Task 1: Input and Textarea

**Files:**
- Create: `packages/ui/tests/ConformForm.tsx`, `packages/ui/tests/borderColor.tsx`,
  `packages/ui/tests/Textarea.browser.test.tsx`
- Modify: `packages/ui/source/components/Input.tsx:28-37,73-82,128`,
  `packages/ui/source/components/Textarea.tsx:20-28,46-53,80`,
  `packages/ui/source/components/Listbox.tsx:29,331-335`
- Test: `packages/ui/tests/Input.browser.test.tsx`, `packages/ui/tests/Textarea.browser.test.tsx`,
  `packages/ui/tests/Listbox.browser.test.tsx`

**Interfaces:**
- Produces, in `tests/ConformForm.tsx`:
  - `export type ConformFields = UseFormReturn<typeof schema>['fields']`
  - `export function ConformForm({children}: {children: (fields: ConformFields) => ReactNode})`:
    renders `ThemeProvider theme={defaultTheme}` > `Form form={form}` > `children(fields)` and
    `<Button submit>Submit</Button>`; `useForm({schema, onSubmit(event) { event.preventDefault(); }})`.
  - `schema` (not exported) is a `z.object` with required fields, each with `{error: 'Required'}`:
    `input: z.string()`, `textarea: z.string()`, `listbox: z.string()`, `combobox: z.string()`,
    `checkbox: z.boolean()`, `radioGroup: z.enum(['first', 'second'])`.
- Produces, in `tests/borderColor.tsx`:
  - `export function DangerReference()`: `<span className="border-2 border-danger-500">Reference</span>`
    (the text gives it a box, so tests also hover it to move the mouse off the control).
  - `export function disableTransitions(): void`: appends a `<style>` with
    `* { transition: none !important; }` and removes it in `onTestFinished`.
  - `export function getBorderColor(element: Element | null): string`: throws
    `new Error('Nothing to measure')` for `null`, else `getComputedStyle(element).borderColor`.
- Produces: `InputProps` and `TextareaProps` gain `invalid?: boolean | undefined`.

- [ ] **Step 1: Create the two helper files** with the interfaces above.

- [ ] **Step 2: Write the `invalid` prop tests** (red is the type error; the prop already reaches
  Headless UI through `...rest`). In `Input.browser.test.tsx`:

```tsx
test('is invalid with the invalid prop', async () => {
  await render(
    <ThemeProvider theme={defaultTheme}>
      <Input invalid aria-label="Text" />
    </ThemeProvider>,
  );

  await expect.element(page.getByRole('textbox', {name: 'Text'})).toHaveAttribute('data-invalid');
  await expect
    .element(page.getByRole('textbox', {name: 'Text'}))
    .toHaveAttribute('aria-invalid', 'true');
});
```

  Create `Textarea.browser.test.tsx` with `describe(Textarea, …)`, importing
  `../.storybook/tailwind.css`, and the same test for `<Textarea invalid aria-label="Text" />`.

- [ ] **Step 3: Run the typecheck to see it fail**

Run: `npx turbo run typecheck --no-daemon --filter=@jakubmazanec/ui`
Expected: FAIL, `Property 'invalid' does not exist` in both test files.

- [ ] **Step 4: Add `invalid?: boolean | undefined;` after `disabled` in `InputProps` and
  `TextareaProps`** (type only; the value still reaches Headless UI through `...rest`). Rerun
  Step 3: PASS. Run the two prop tests: PASS.

- [ ] **Step 5: Write the Conform, valid-again and look tests.** In `Input.browser.test.tsx`:

```tsx
test.each([undefined, false])('is invalid when its field has errors (invalid=%s)', async (invalid) => {
  await render(
    <ConformForm>
      {(fields) => (
        <Field field={fields.input}>
          <Input aria-label="Text" invalid={invalid} />
        </Field>
      )}
    </ConformForm>,
  );
  await page.getByRole('button', {name: 'Submit'}).click();

  await expect.element(page.getByRole('textbox', {name: 'Text'})).toHaveAttribute('data-invalid');
  await expect
    .element(page.getByRole('textbox', {name: 'Text'}))
    .toHaveAttribute('aria-invalid', 'true');
});

test('is valid again once its value is valid', async () => {
  // render as above with no `invalid`, click Submit, then:
  await expect.element(page.getByRole('textbox', {name: 'Text'})).toHaveAttribute('data-invalid');
  await page.getByRole('textbox', {name: 'Text'}).fill('Jakub');
  await expect.element(page.getByRole('textbox', {name: 'Text'})).not.toHaveAttribute('data-invalid');
  await expect.element(page.getByRole('textbox', {name: 'Text'})).not.toHaveAttribute('aria-invalid');
});

test.each([
  {disabled: false, hovered: false},
  {disabled: false, hovered: true},
  {disabled: true, hovered: false},
  {disabled: true, hovered: true},
  {disabled: false, hovered: false, className: 'border-blue-500'}, // Review Focus 2
])('keeps a danger border (disabled: $disabled, hovered: $hovered, className: $className)', async ({disabled, hovered, className}) => {
  disableTransitions();
  await render(
    <ThemeProvider theme={defaultTheme}>
      <DangerReference />
      <Input invalid aria-label="Text" className={className} disabled={disabled} />
    </ThemeProvider>,
  );
  await (hovered ? page.getByRole('textbox', {name: 'Text'}) : page.getByText('Reference')).hover();

  expect(getBorderColor(page.getByRole('textbox', {name: 'Text'}).element().parentElement)).toBe(
    getBorderColor(page.getByText('Reference').element()),
  );
});
```

  In `Textarea.browser.test.tsx`: the same Conform table (`fields.textarea`) and the same look
  table without the `className` row. No valid-again test for Textarea (the spec asks only for
  Input).

- [ ] **Step 6: Write the Listbox filter guard** in `Listbox.browser.test.tsx` (a guard: passes on
  the current code):

```tsx
test('keeps its filter input valid when its field has errors', async () => {
  await render(
    <ConformForm>
      {(fields) => (
        <Field field={fields.listbox}>
          <Listbox showFilter items={[{value: 'done', label: 'Done'}]} placeholder="Choice" />
        </Field>
      )}
    </ConformForm>,
  );
  await page.getByRole('button', {name: 'Submit'}).click();
  await page.getByRole('button', {name: 'Choice'}).click();

  let filter = page.getByRole('listbox').getByRole('textbox');

  await expect.element(filter).not.toHaveAttribute('data-invalid');
  await expect.element(filter).not.toHaveAttribute('aria-invalid');
});
```

- [ ] **Step 7: Run the tests**

Run: `(cd packages/ui && npx vitest run --project browser tests/Input.browser.test.tsx tests/Textarea.browser.test.tsx tests/Listbox.browser.test.tsx)`
Expected: the Conform, valid-again and look tests FAIL (no `data-invalid`; border not danger); the
prop tests and the Listbox guard PASS.

- [ ] **Step 8: Implement** in `Input.tsx` and `Textarea.tsx`: destructure `invalid` next to
  `disabled` and add `invalid: invalid || field?.errors !== undefined,` plus its comment (Global
  Constraints) after `disabled` in `inputProps`/`textareaProps`. Append to each theme `root`:
  `has-data-invalid:border-danger-500 has-data-disabled:has-data-invalid:hover:border-danger-500`.

- [ ] **Step 9: Run Step 7 again**

Expected: everything PASSES except the Listbox guard, which now FAILS (`data-invalid` on the filter
input: `FieldContext` reaches it through the options portal).

- [ ] **Step 10: In `Listbox.tsx`, wrap the filter `<Input … />` in
  `<FieldContext value={undefined}>`** (import `FieldContext` from `./internals.js`). Rerun Step 7:
  all PASS.

- [ ] **Step 11: Lint, typecheck and commit**

Run: `npx turbo run typecheck lint --no-daemon --filter=@jakubmazanec/ui`
Expected: PASS (fix import order with `npx eslint --fix <file>` if needed).

```bash
git add packages/ui/source/components/{Input,Textarea,Listbox}.tsx packages/ui/tests
git commit -m "Make Input and Textarea invalid from field errors"
```

### Task 2: Listbox and Combobox

**Files:**
- Modify: `packages/ui/source/components/Listbox.tsx:178`,
  `packages/ui/source/components/Combobox.tsx:177-208`
- Test: `packages/ui/tests/Listbox.browser.test.tsx`, `packages/ui/tests/Combobox.browser.test.tsx`

**Interfaces:**
- Consumes: `ConformForm`, `disableTransitions`, `getBorderColor` from Task 1.

- [ ] **Step 1: Move the existing look tests onto the helpers.** In both `keeps a danger border …`
  tests, replace the inline `<style>` and `style.remove()` with `disableTransitions()`, and the
  local `getBorderColor` (Combobox's function, Listbox's arrow) with the shared one
  (`getBorderColor(locator.element())`). Assertions stay as they are. Run
  `(cd packages/ui && npx vitest run --project browser tests/Listbox.browser.test.tsx tests/Combobox.browser.test.tsx)`:
  PASS.

- [ ] **Step 2: Write the tests.**
  - Listbox: `test.each([undefined, false])('is invalid when its field has errors (invalid=%s)')`
    with `<Field field={fields.listbox}><Listbox items={[{value: 'done', label: 'Done'}]} placeholder="Choice" invalid={invalid} /></Field>`;
    after Submit, `page.getByRole('button', {name: 'Choice'})` has `data-invalid`.
  - Combobox: extend `marks its input invalid` with
    `toHaveAttribute('aria-invalid', 'true')` on `page.getByRole('combobox')`.
  - Combobox: the same Conform table with `fields.combobox`; the combobox has `data-invalid` and
    `aria-invalid="true"`.
  - Combobox (Review Focus 1): `test('is valid without the prop or field errors')`:
    `<Combobox items={[{value: 'done', label: 'Done'}]} />` has neither `data-invalid` nor
    `aria-invalid`.

- [ ] **Step 3: Run the tests**

Run: `(cd packages/ui && npx vitest run --project browser tests/Listbox.browser.test.tsx tests/Combobox.browser.test.tsx)`
Expected: the Conform tests and the `aria-invalid` assertion FAIL; the valid test PASSES (guard).

- [ ] **Step 4: Implement.**
  - `Listbox.tsx`: `invalid` → `invalid: invalid || field?.errors !== undefined,` plus comment.
  - `Combobox.tsx`: `let isInvalid = invalid || field?.errors !== undefined;` (plus comment) before
    `props`; `invalid: isInvalid` in `props`; on `HeadlessComboboxInput`
    `aria-invalid={isInvalid ? true : undefined}` with its comment.

- [ ] **Step 5: Run Step 3 again.** Expected: all PASS.

- [ ] **Step 6: Try the valid-again case once on Listbox.** Add a test like Input's: after Submit,
  open `Choice`, click option `Done`, expect the button to lose `data-invalid`. Run it.
  - If it FAILS (state stays, as the spec predicts): delete the test.
  - If it PASSES: keep it, add the same case for Combobox (pick `Done`), Checkbox (click it) and
    RadioGroup (click `First`) in Tasks 2 to 4, delete the stale-state bullet from the spec's
    "Out of scope" and its point from the spec's "Changeset" section, and tell Jakub.

- [ ] **Step 7: Lint, typecheck and commit**

Run: `npx turbo run typecheck lint --no-daemon --filter=@jakubmazanec/ui`
Expected: PASS.

```bash
git add packages/ui/source/components/{Listbox,Combobox}.tsx packages/ui/tests
git commit -m "Make Listbox and Combobox invalid from field errors"
```

### Task 3: Checkbox

**Files:**
- Modify: `packages/ui/source/components/Checkbox.tsx:22-108`
- Test: `packages/ui/tests/Checkbox.browser.test.tsx`

**Interfaces:**
- Consumes: `ConformForm`, `DangerReference`, `disableTransitions`, `getBorderColor` from Task 1.
- Produces: `CheckboxProps` gains `invalid?: boolean | undefined`.

- [ ] **Step 1: Write the tests.** Add `import '../.storybook/tailwind.css';`. The checkbox is
  `page.getByRole('checkbox', {name: 'Agree'})`; "invalid" means `data-invalid` and
  `aria-invalid="true"`.
  - `test.each` over two render functions, `['alone', <Checkbox invalid aria-label="Agree" />]`
    and `['in a named CheckboxField', <CheckboxField name="agree"><Checkbox invalid aria-label="Agree" /></CheckboxField>]`:
    `'is invalid with the invalid prop %s'`.
  - Conform table `[undefined, false]` with
    `<CheckboxField field={fields.checkbox}><Checkbox aria-label="Agree" invalid={invalid} /></CheckboxField>`.
  - Review Focus 1: the same two render functions without `invalid`: neither attribute.
  - Look: `test.each` over the 8 combinations of `{checked, disabled, hovered}`, rendering
    `<DangerReference />` and `<Checkbox invalid aria-label="Agree" checked={checked} disabled={disabled} />`,
    hovering the checkbox or `Reference`, then expecting
    `getBorderColor(checkbox.element().querySelector(':scope > span > *'))` to equal the
    reference's colour.

- [ ] **Step 2: Run the tests**

Run: `(cd packages/ui && npx vitest run --project browser tests/Checkbox.browser.test.tsx)`
Expected (vitest does not typecheck): the prop, Conform and look tests FAIL; the Review Focus test PASSES
(guard).

- [ ] **Step 3: Implement.** Add `invalid?: boolean | undefined;` after `disabled` in
  `CheckboxProps` and destructure it (so it leaves `...rest`). Before `if (field || fieldName)`:
  `let isInvalid = invalid || field?.errors !== undefined;` with its comment. In both `props`
  objects, after `disabled`, the commented pair
  `'aria-invalid': isInvalid ? true : undefined, 'data-invalid': isInvalid ? '' : undefined,`.
  Append to the theme `icon`:
  `group-data-invalid/checkbox:*:border-danger-500 group-data-invalid/checkbox:*:hover:border-danger-500 group-data-invalid/checkbox:group-data-[checked]/checkbox:*:border-danger-500 group-data-invalid/checkbox:hover:group-data-[checked]/checkbox:*:border-danger-500`.

- [ ] **Step 4: Run Step 2 again.** Expected: all PASS.

- [ ] **Step 5: Lint, typecheck and commit**

Run: `npx turbo run typecheck lint --no-daemon --filter=@jakubmazanec/ui`

```bash
git add packages/ui/source/components/Checkbox.tsx packages/ui/tests/Checkbox.browser.test.tsx
git commit -m "Add invalid state to Checkbox"
```

### Task 4: RadioGroup and Radio

**Files:**
- Modify: `packages/ui/source/components/RadioGroup.tsx:22-133`,
  `packages/ui/source/components/Radio.tsx:70`
- Test: `packages/ui/tests/RadioGroup.browser.test.tsx`

**Interfaces:**
- Consumes: `ConformForm`, `DangerReference`, `disableTransitions`, `getBorderColor` from Task 1.
- Produces: `RadioGroupProps` gains `invalid?: boolean | undefined`; the RadioGroup root carries
  class `group/radio-group`.

- [ ] **Step 1: Write the tests.** Add `import '../.storybook/tailwind.css';`. The group is
  `page.getByRole('radiogroup', {name: 'Priority'})` (`aria-label="Priority"` on RadioGroup),
  with `<Radio aria-label="First" value="first" />` inside.
  - `test.each` over `['without a name', {}]` and `['with a name', {name: 'priority'}]` props:
    `'is invalid with the invalid prop %s'`; the group has `data-invalid` and
    `aria-invalid="true"`.
  - Conform table `[undefined, false]` with `<RadioGroup field={fields.radioGroup} …>`.
  - Review Focus 1: both prop rows without `invalid`: neither attribute on the group.
  - Look: the 8 combinations of `{checked, disabled, hovered}`, rendering `<DangerReference />` and
    `<RadioGroup invalid aria-label="Priority" defaultValue={checked ? 'first' : undefined} disabled={disabled}>`,
    hovering the radio `First` or `Reference`, measuring
    `radio.element().querySelector(':scope > span > *')`.

- [ ] **Step 2: Run the tests**

Run: `(cd packages/ui && npx vitest run --project browser tests/RadioGroup.browser.test.tsx)`
Expected (vitest does not typecheck): the prop, Conform and look tests FAIL; the Review Focus test
PASSES (guard).

- [ ] **Step 3: Implement RadioGroup.** Extend the shared props part to
  `{disabled?: boolean | undefined; invalid?: boolean | undefined}` and destructure `invalid`.
  Before `if (field)`: `let isInvalid = invalid || field?.errors !== undefined;` with its comment.
  In all three `props` objects, after `disabled`, the commented `'aria-invalid'`/`'data-invalid'`
  pair as in Task 3. Theme `className`: `'group/radio-group flex flex-col gap-y-2'`.

- [ ] **Step 4: Implement Radio.** Append to the theme `icon`:
  `group-data-invalid/radio-group:*:border-danger-500 group-data-invalid/radio-group:*:hover:border-danger-500 group-data-invalid/radio-group:group-data-[checked]/radio:*:border-danger-500 group-data-invalid/radio-group:hover:group-data-[checked]/radio:*:border-danger-500`.
  No prop on Radio.

- [ ] **Step 5: Run Step 2 again.** Expected: all PASS.

- [ ] **Step 6: Lint, typecheck and commit**

Run: `npx turbo run typecheck lint --no-daemon --filter=@jakubmazanec/ui`

```bash
git add packages/ui/source/components/{RadioGroup,Radio}.tsx packages/ui/tests/RadioGroup.browser.test.tsx
git commit -m "Add invalid state to RadioGroup"
```

### Task 5: Error link

**Files:**
- Create: `packages/ui/tests/Error.browser.test.tsx`
- Modify: `packages/ui/source/components/Error.tsx`

**Interfaces:**
- Consumes: `ConformForm`, `ConformFields` from Task 1; `invalid` on Input (Task 1) and
  RadioGroup (Task 4).

- [ ] **Step 1: Write the tests** in `Error.browser.test.tsx` with `describe(Error, …)`. Shared
  assertion, written once as a local `async function expectLinked(control: Locator, error: Element | null)`:
  `error?.id` is not `''`, and `control.element().getAttribute('aria-describedby')?.split(' ')`
  contains it. Find an `Error` with `container.querySelector('[data-component="error"]')`.
  - `test.each` of `[name, render: (fields: ConformFields) => ReactNode, control: () => Locator]`,
    `'links its message to %s'`, rendered in `ConformForm`, after Submit `expectLinked` and
    `page.getByText('Required')` is in the document:
    - Input: `<Field field={fields.input}><Input aria-label="Control" /><Error /></Field>`, textbox
    - Textarea: same with `fields.textarea`, textbox
    - Listbox: `fields.listbox`, `placeholder="Choice"`, button `Choice`
    - Combobox: `fields.combobox`, combobox
    - Checkbox: `<CheckboxField field={fields.checkbox}>`, checkbox
    - RadioGroup: `<RadioGroup field={fields.radioGroup} aria-label="Control"><Radio aria-label="First" value="first" /><Error /></RadioGroup>`, radiogroup
  - `links its message and the Description`: Input row plus `<Description>Hint</Description>`;
    `aria-describedby` contains both the Description's and the Error's id.
  - `links its children without Conform`: `<Field name="x"><Input invalid aria-label="Control" /><Error>Fix it</Error></Field>`;
    linked, `Fix it` shown.
  - Review Focus 5: `<RadioGroup invalid name="x" aria-label="Control">` with a Radio and
    `<Error>Fix it</Error>` inside: the radiogroup is linked.
  - Review Focus 3: the without-Conform case with `<Error as="span">`: linked, and the Error's
    `tagName` is `SPAN`.
  - Review Focus 4: two `<Field name>` blocks (`a`, `b`), each with an invalid Input (`A`, `B`)
    and an Error: each Input's `aria-describedby` contains its own Error's id and not the other's.
  - Guard: `<Error>Fix it</Error>` with no Field renders `Fix it`.

- [ ] **Step 2: Run the tests**

Run: `(cd packages/ui && npx vitest run --project browser tests/Error.browser.test.tsx)`
Expected: every link test FAILS on the empty id; the guard PASSES.

- [ ] **Step 3: Implement `Error.tsx`.** Add `useFieldName()`. With `field || fieldName`, return
  `<HeadlessDescription {...props}>` where `props: HeadlessDescriptionProps<any>` is built with
  `filterProps({as: Component, ref, className, 'data-component': 'error', ...rest})` as in
  `Description.tsx`; its children are the field's errors (as today) with a field, else `children`.
  With neither, keep today's `createElement` path (a Headless `Description` throws without a
  Headless parent; one-line comment saying so). No `id`.

- [ ] **Step 4: Run Step 2 again.** Expected: all PASS. Also rerun the whole browser project
  (`(cd packages/ui && npx vitest run --project browser)`) since every Error in a Field now renders through Headless
  UI.

- [ ] **Step 5: Lint, typecheck and commit**

Run: `npx turbo run typecheck lint --no-daemon --filter=@jakubmazanec/ui`

```bash
git add packages/ui/source/components/Error.tsx packages/ui/tests/Error.browser.test.tsx
git commit -m "Link Error to its control through aria-describedby"
```

### Task 6: Invalid story

**Files:**
- Modify: `packages/ui/stories/Fieldset.stories.tsx`

- [ ] **Step 1: Add `export const Invalid`** (`satisfies StoryObj<typeof meta>`) rendering two
  `Fieldset`s, the second `disabled`, each with every control `invalid`: an unchecked and a
  checked `Checkbox`, a `RadioGroup invalid defaultValue="first"` with two Radios, `Input`,
  `Textarea`, `Listbox items={items}` and `Combobox items={items}`, all with `aria-label`s as in
  `Disabled`.

- [ ] **Step 2: Check it builds**

Run: `npx turbo run build typecheck lint --no-daemon --filter=@jakubmazanec/ui`
Expected: PASS (the build includes `storybook build`).

- [ ] **Step 3: Commit**

```bash
git add packages/ui/stories/Fieldset.stories.tsx
git commit -m "Add Invalid story"
```

### Task 7: Changeset and full gate

**Files:**
- Modify: `.changeset/ui-disabled-invalid-states.md`

- [ ] **Step 1: Re-read the changeset** (Jakub is rewriting it; keep his text). Set the bump to at
  least `minor`. Make sure it covers: the new `invalid` prop on Input, Textarea, Checkbox and
  RadioGroup; invalid from Conform field errors or the prop (`invalid={false}` works like leaving
  it out, as with `disabled`), also on Listbox and Combobox, so existing forms show the danger
  border after a failed submit without code changes; the danger border; `aria-invalid` and the
  `Error` link through `aria-describedby`, with or without Conform; a RadioGroup's `Error` must be
  inside the RadioGroup; the invalid state of Listbox, Combobox, Checkbox and RadioGroup stays
  until the next submit (unless Task 2 Step 6 removed that); a custom `as` on Checkbox must
  forward `data-invalid` and `aria-invalid`. No em-dashes, no Oxford commas.

- [ ] **Step 2: Run the full gate**

Run: `npm test && git status --porcelain`
Expected: PASS and no output from `git status --porcelain` (commit any regenerated file).

- [ ] **Step 3: Commit**

```bash
git add .changeset/ui-disabled-invalid-states.md
git commit -m "Describe the invalid state in the changeset"
```

- [ ] **Step 4: Ask Jakub to push** (or for approval to push) so Chromatic builds the `Invalid`
  story.

### Task 8: Before merge

- [ ] **Step 1: After Jakub has reviewed the `Invalid` story in Chromatic**, revert the
  temporary workflow and commit:

```bash
git revert --no-edit 946ed03e7
```
