---
'@jakubmazanec/carson-templates': minor
---

Updates GitHub workflow in the `workspace` template so when Renovate bot bumps major version of a
dependency that is handled by Carson, an error is thrown that warns a Carson template package update
is also needed.
