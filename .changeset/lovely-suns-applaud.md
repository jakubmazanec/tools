---
"@jakubmazanec/changesets-changelog": patch
"@jakubmazanec/carson": patch
"@jakubmazanec/args": patch
---

Unnecessary checking `value` using `typeof value === 'undefined'` was replaced with simpler `value === undefined`.
