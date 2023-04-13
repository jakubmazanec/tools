---
'@jakubmazanec/error': major
---

Adds new function `createCustomErrorWithData` for creating errors without the optional data. The
function `createCustomError` now only creates custom error class that doesn't have `data` property.
This is to prevent situations when `data` property has wrong type. Also, the type for the error data
can be now defined using [Zod](https://github.com/colinhacks/zod).
