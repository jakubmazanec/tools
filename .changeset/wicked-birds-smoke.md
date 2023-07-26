---
'@jakubmazanec/carson-templates': patch
---

Template `workspace` no longer adds `@jakubmazanec/carson` or `@jakubmazanec/carson-templates` to
the workspace `package.json` if the workspace already contains them as a project.
