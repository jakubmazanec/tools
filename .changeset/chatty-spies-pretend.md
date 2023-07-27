---
'@jakubmazanec/carson': patch
---

When creating a new workspace or a project, the Carson config is now saved only after a successful
template render, so a possible rendering failure doesn't create a malformed workspace or project
directory.
