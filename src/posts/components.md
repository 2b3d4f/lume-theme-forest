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

## group

Groups and displays multiple contents.

### Syntax

```vento
{{ echo }}
{{ comp group <override> }}
  <children>
{{ /comp }}
{{ /echo }}
```

- `override`: Class to be added
- `content`: Content to be grouped

### Example

```vento
{{ echo }}
{{ comp group { override: "*:my-0 **:[a]:py-3 *:first:**:[a]:pt-0 *:last:**:[a]:pb-0" } }}
  {{ comp.page({ query: "url=/posts/components/" }) }}
  {{ comp.page({ query: "url=/posts/parameters/" }) }}
  {{ comp.page({ query: "url=/posts/markdown-guide/" }) }}
{{ /comp }}
{{ /echo }}
```

{{ comp group { override: "*:my-0 **:[a]:py-3 *:first:**:[a]:pt-0 *:last:**:[a]:pb-0" } }}
  {{ comp.page({ query: "url=/posts/components/" }) }}
  {{ comp.page({ query: "url=/posts/parameters/" }) }}
  {{ comp.page({ query: "url=/posts/markdown-guide/" }) }}
{{ /comp }}
