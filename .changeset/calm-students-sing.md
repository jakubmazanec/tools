---
'@jakubmazanec/carson-templates': minor
---

GitHub workflows were updated: 1) instead of releasing from a feature branch, release is now from a
pull request commit, 2) actions use Node.js v20, 3) concurrency is now properly specified, 4)
release is fixed so the commit with updated versions and changelogs isn't ammended.
