---
'@jakubmazanec/changesets-changelog': patch
'@jakubmazanec/carson-templates': patch
'@jakubmazanec/eslint-config': patch
'@jakubmazanec/zod-utils': patch
'@jakubmazanec/fs-utils': patch
'@jakubmazanec/template': patch
'@jakubmazanec/ts-utils': patch
'@jakubmazanec/carson': patch
'@jakubmazanec/error': patch
'@jakubmazanec/args': patch
'@jakubmazanec/cli': patch
---

All used development dependencies are now specified in the `package.json`; previously it was assumed
that tools like ESLint, `ts-node`, etc. are specified in the workspace `package.json`.
