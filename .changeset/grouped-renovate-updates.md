---
'@jakubmazanec/carson-templates': major
---

BREAKING: Template `workspace` now groups all non-major dependency updates into a single Renovate
pull request that refreshes weekly. Major updates, minor updates of 0.x dependencies and updates of
Carson packages keep their own pull requests.
