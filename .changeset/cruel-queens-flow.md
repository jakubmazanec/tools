---
'@jakubmazanec/carson-templates': major
---

BREAKING: Templates `projects/react-library` and `projects/app` now use
[Vitest Browser mode](https://vitest.dev/guide/browser/) instead of `happy-dom`. Browser test must
have filenames like `*.browser.test.*`. Browser mode support is turned on when at least one such
test file exists!
