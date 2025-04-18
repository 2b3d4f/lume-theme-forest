---
title: Components
summary: Useful components available in Theme.
templateEngine: [vto, md]
---

## `page(query)`

Search and display a single page. See also [this document](https://lume.land/plugins/search/#search-one-page).

```vento
{{ echo }}
{{ comp.page({ query: "url=/posts/components/" }) }}
{{ /echo }}
```

{{ comp.page({ query: "url=/posts/components/" }) }}

## `pages(query, sort, limit)`

Search and display multiple pages. See also [this document](https://lume.land/plugins/search/#search-pages).

```vento
{{ echo }}
{{ comp.pages({ query: "type=post", sort: "date=desc title=asc", limit: 3 }) }}
{{ /echo }}
```

{{ comp.pages({ query: "type=post", sort: "date=desc title=asc", limit: 3 }) }}

## `box`

Boxes around other content.

```vento
{{ echo }}
{{ comp box }}

### Box

Hello, world!

{{ comp.page({ query: "url=/posts/components/" }) }}
{{ /echo }}
```

{{ comp box }}

### Box

Hello, world!

{{ comp.page({ query: "url=/posts/components/" }) }}
{{ /comp }}
