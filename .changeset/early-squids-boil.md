---
'@jakubmazanec/carson': patch
---

Fixes order of writing files when creating workspaces and projects; Carson configs are now created
first, and a Carson template can then use "merge" strategy on these files.
