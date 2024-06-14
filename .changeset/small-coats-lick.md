---
'@jakubmazanec/carson-templates': minor
---

Updates `projects/remix-app` and `workspace` templates to support specifying an app URL (available
to the apps as `VITE_APP_URL` env variable during builds), using new project config option
`deployment.appUrl` for production URL; URLs for non-production environments are generated using the
`deployment.appName` project config option.
