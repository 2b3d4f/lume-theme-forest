---
title: About Author Pages
author: 2B3D4F
generate_summary: false
---

You can set an author for every page.

To specify an author, add the `author` field either in `_data.yml`, `_data/*`, or in the page’s front matter. Note that multiple authors are not supported.

```yaml
author: 2B3D4F
```

You can also create dedicated author pages linked to specific authors.

To create and link an author page, the following conditions must be met:

- The `type` of the author page must be set to `author`.
- The `author` value of the author page must match the `author` value on other pages. Matching is case-insensitive.

When these conditions are satisfied, pages with the same author can link to the corresponding author page.
