---
'@jakubmazanec/carson-templates': minor
---

All projects and workspace templates specify `@jakubmazanec/carson-templates` package as a
dependency. Previously it was only dependency of a workspace, and when this dependency was updated
to newer version that brought changes also to the projects, user needed to create changesets for
these changes manually. Now all those changes fall under one simple dependency update.
