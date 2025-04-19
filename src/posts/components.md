---
title: Components
summary: Reference guide for built‑in components.
templateEngine: [vto, md]
---

This guide explains how to use the reusable components bundled with the Theme. The examples assume the **Vento** templating engine but the concepts apply to any Markdown‑enabled templates.

## `page(query)`

Renders a single page that matches the **query** expression. Use it when you need to pull in exactly one page—post, doc, or any other content entry.

For a complete list of query operators, refer to the official documentation: [Search one page](https://lume.land/plugins/search/#search-one-page).

### Syntax

```vento
{{ echo }}
{{ comp.page({ query: "<query>" }) }}
{{ /echo }}
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `query`   | `string` | A search expression understood by the [Search plugin](https://lume.land/plugins/search/). |

### Example

```vento
{{ echo }}
{{ comp.page({ query: "url=/posts/components/" }) }}
{{ /echo }}
```

{{ echo }}
{{ comp.page({ query: "url=/posts/components/" }) }}
{{ /echo }}

The above displays the page whose canonical URL is `/posts/components/`.

## `pages(query, sort?, limit?)`

Searches for multiple pages and renders each of them in order. Perfect for building lists such as “Latest Posts” or “Related Articles”.

For additional examples and options, see the official documentation: [Search pages](https://lume.land/plugins/search/#search-pages).

### Syntax

```vento
{{ echo }}
{{ comp.pages({
  query: "<query>",
  sort:  "<sort>",
  limit: <limit>
}) }}
{{ /echo }}
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `string` | A search expression understood by the [Search plugin](https://lume.land/plugins/search/). |
| `sort`  | `string` | Optional sort specifier, e.g. `"date=desc title=asc"`. |
| `limit` | `number` | Optional maximum number of pages to return. |

### Example

```vento
{{ echo }}
{{ comp.pages({
  query: "type=post",
  sort:  "date=desc title=asc",
  limit: 3
}) }}
{{ /echo }}
```

{{ comp.pages({
  query: "type=post",
  sort:  "date=desc title=asc",
  limit: 3
}) }}

## `box`

Wraps arbitrary content in a visually distinct **box**. Think of it as a call‑out panel or card that highlights important information.

### Syntax

```vento
{{ echo }}
{{ comp box }}
  <content>
{{ /comp }}
{{ /echo }}
```

The component takes no arguments. Everything placed between the opening and closing tags becomes the box’s body.

### Example

```vento
{{ echo }}
{{ comp box }}

### Box title

Hello, world!

{{ comp.page({ query: "url=/posts/components/" }) }}

{{ /comp }}
{{ /echo }}
```

{{ comp box }}

### Box title

Hello, world!

{{ comp.page({ query: "url=/posts/components/" }) }}

{{ /comp }}

## `group(class?)`

Aggregates several pieces of content into a single block. Use it to apply consistent spacing or classes to a collection of child elements.

### Syntax

```vento
{{ echo }}
{{ comp group { class: "<class>" } }}
  <children>
{{ /comp }}
{{ /echo }}
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `class` | `string` | Utility‑class string that is **appended** to each child element (it does *not* replace existing classes). |

### Example

```vento
{{ echo }}
{{ comp group {
  override: "*:my-0 **:[a]:py-3 *:first:**:[a]:pt-0 *:last:**:[a]:pb-0"
} }}
  {{ comp.page({ query: "url=/posts/components/" }) }}
  {{ comp.page({ query: "url=/posts/parameters/" }) }}
  {{ comp.page({ query: "url=/posts/markdown-guide/" }) }}
{{ /comp }}
{{ /echo }}
```

{{ comp group {
  override: "*:my-0 **:[a]:py-3 *:first:**:[a]:pt-0*:last:**:[a]:pb-0"
} }}
  {{ comp.page({ query: "url=/posts/components/" }) }}
  {{ comp.page({ query: "url=/posts/parameters/" }) }}
  {{ comp.page({ query: "url=/posts/markdown-guide/" }) }}
{{ /comp }}
