---
'@jakubmazanec/carson': minor
---

BREAKING: Fixes support for single-project workspaces. Carson can now correctly distinct between
projects, single-project and multi-project workspaces. Template file strategies `create` and `merge`
now work on both existing and missing target files. Template render snapshots are saved separately
for workspaces and projects; you have to delete the old snapshot files named `.snapshots` manually.
