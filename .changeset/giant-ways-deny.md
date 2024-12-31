---
'@jakubmazanec/carson-templates': minor
---

Updates GitHub workflow in the `workspace` template so it doesn't make pre-releases (including
publishing packages and deplyoing apps) from pull requests that have their source branch created by
Renovate bot (i.e. starting with "renovate/").
