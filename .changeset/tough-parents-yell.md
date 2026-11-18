---
'@jakubmazanec/carson-templates': major
---

BREAKING: Removed support for Gel cloud in the `projects/app` template. Previously, the project
option `deployment.dbInstance` pointed to Gel cloud instance; now option `deployment.gel` specifies
Gel instance DSN. For authentication, secret `GEL_PASSWORD` is used, prefixed with the snake-cased
project name, e.g. for project named `@myorg/foobar` set secret `MYORG_FOOBAR_GEL_PASSWORD`.
