---
'@jakubmazanec/carson-templates': minor
---

In template `workspace`, Renovate bot config was changed: peer dependency ranges are widened when a
peer dependency gets a new major version (e.g. `^9.0.0` becomes `^9.0.0 || ^10.0.0`), instead of
replaced, so such update isn't a breaking change.
