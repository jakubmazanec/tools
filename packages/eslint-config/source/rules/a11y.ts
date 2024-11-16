import type eslint from 'eslint';

export const a11yRules: eslint.Linter.Config['rules'] = {
  // eslint-plugin-jsx-a11y rules
  'jsx-a11y/alt-text': 'warn', // enforce all elements that require alternative text have meaningful information to relay back to end user
  'jsx-a11y/anchor-ambiguous-text': 'off', // enforce <a> text to not exactly match "click here", "here", "link", or "a link"
  'jsx-a11y/anchor-has-content': ['warn', {components: ['Link']}], // enforce all anchors to contain accessible content
  'jsx-a11y/anchor-is-valid': [
    'error',
    {
      components: ['Link'],
      specialLink: ['hrefLeft', 'hrefRight', 'to'],
    },
  ], // enforce all anchors are valid, navigable elements
  'jsx-a11y/aria-activedescendant-has-tabindex': 'warn', // enforce elements with aria-active descendant are tab-able
  'jsx-a11y/aria-props': 'error', // enforce all aria-* props are valid
  'jsx-a11y/aria-proptypes': 'error', // enforce ARIA state and property values are valid
  'jsx-a11y/aria-role': ['error', {ignoreNonDOM: false}], // enforce that elements with ARIA roles must use a valid, non-abstract ARIA role
  'jsx-a11y/aria-unsupported-elements': 'error', // enforce that elements that do not support ARIA roles, states, and properties do not have those attributes
  'jsx-a11y/autocomplete-valid': 'warn', // enforce that autocomplete attributes are used correctly.
  'jsx-a11y/click-events-have-key-events': 'warn', // enforce a clickable non-interactive element has at least one keyboard event listener
  'jsx-a11y/control-has-associated-label': 'warn', // enforce that a control (an interactive element) has a text label
  'jsx-a11y/heading-has-content': ['warn', {components: ['Typography']}], // enforce heading (h1, h2, etc) elements contain accessible content
  'jsx-a11y/html-has-lang': 'warn', // enforce <html> element has lang prop
  'jsx-a11y/iframe-has-title': 'warn', // enforce iframe elements have a title attribute
  'jsx-a11y/img-redundant-alt': 'warn', // enforce <img> alt prop does not contain the word "image", "picture", or "photo"
  'jsx-a11y/interactive-supports-focus': 'warn', // enforce that elements with interactive handlers like onClick must be focusable
  'jsx-a11y/label-has-associated-control': 'warn', // enforce that a label tag has a text label and an associated control
  'jsx-a11y/lang': 'error', // enforce lang attribute has a valid value
  'jsx-a11y/media-has-caption': 'warn', // enforces that <audio> and <video> elements must have a <track> for captions
  'jsx-a11y/mouse-events-have-key-events': 'warn', // enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users
  'jsx-a11y/no-access-key': 'warn', // enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by a screen reader
  'jsx-a11y/no-aria-hidden-on-focusable': 'warn', // disallow aria-hidden="true" from being set on focusable elements
  'jsx-a11y/no-autofocus': 'off', // enforce autoFocus prop is not used
  'jsx-a11y/no-distracting-elements': 'error', // enforce distracting elements are not used
  'jsx-a11y/no-interactive-element-to-noninteractive-role': 'warn', // interactive elements should not be assigned non-interactive roles
  'jsx-a11y/no-noninteractive-element-interactions': 'warn', // non-interactive elements should not be assigned mouse or keyboard event listeners
  'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn', // Non-interactive elements should not be assigned interactive roles
  'jsx-a11y/no-noninteractive-tabindex': 'error', // tabIndex should only be declared on interactive elements
  'jsx-a11y/no-redundant-roles': 'error', // enforce explicit role property is not the same as implicit/default role property on element
  'jsx-a11y/no-static-element-interactions': 'warn', // enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute
  'jsx-a11y/prefer-tag-over-role': 'warn', // enforces using semantic DOM elements over the ARIA role property
  'jsx-a11y/role-has-required-aria-props': 'error', // enforce that elements with ARIA roles must have all required attributes for that role
  'jsx-a11y/role-supports-aria-props': 'error', // enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role
  'jsx-a11y/scope': 'error', // enforce scope prop is only used on <th> elements
  'jsx-a11y/tabindex-no-positive': 'error', // enforce tabIndex value is not greater than zero
};
