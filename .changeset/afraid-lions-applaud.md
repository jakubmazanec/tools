---
'@jakubmazanec/carson-templates': minor
---

Updates GitHub workflow in the `workspace` template: when Renovate bot bumps a dependency that is
this package, workflow step that creates a changeset for this update now instead creates a changeset
for all projects in the workspace that use Carson.
