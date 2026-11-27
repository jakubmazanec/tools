import {onTestFinished} from 'vitest';

export function DangerReference() {
  return <span className="border-danger-500 border-2">Reference</span>;
}

// Transitions would make the computed colour lag behind the hover.
export function disableTransitions() {
  let style = document.createElement('style');

  style.textContent = '* { transition: none !important; }';
  document.head.append(style);
  onTestFinished(() => {
    style.remove();
  });
}

export function getBorderColor(element: Element | null) {
  if (!element) {
    throw new Error('Nothing to measure');
  }

  return getComputedStyle(element).borderColor;
}
