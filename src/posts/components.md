---
title: Components
summary: Useful components available in Theme.
templateEngine: [vto, md]
---

## `page(query, continueLabel)`

Search and display a single page. See also [this document](https://lume.land/plugins/search/).

```vento
{{ echo }}
{{ comp.page({ query: "url=/posts/components/", continueLabel: true }) }}
{{ /echo }}
```

{{ comp.page({ query: "url=/posts/components/" }) }}

## `pages(query, sort, limit, continueLabel)`

Search and display multiple pages. See also [this document](https://lume.land/plugins/search/).

```vento
{{ echo }}
{{ comp.pages({ query: "type=post", sort: "date=desc title=asc", limit: 3, continueLabel: true }) }}
{{ /echo }}
```

{{ comp.pages({ query: "type=post", sort: "date=desc title=asc", limit: 3, continueLabel: true }) }}

## `box`

Boxes around other content.

```vento
{{ echo }}
{{ comp box }}

### Box

Hello, world!

{{ comp.page({ query: "url=/posts/components/", continueLabel: true }) }}
{{ /echo }}
```

{{ comp box }}

### Box

Hello, world!

{{ comp.page({ query: "url=/posts/components/", continueLabel: true }) }}
{{ /comp }}
