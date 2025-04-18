---
title: Parameters
summary: Parameters available in `_data.yml` and front matter.
---

## `summary`

Page Summary. Used for components such as `page.vto` and pages with `generate_summary` set.

## `generate_summary`

Automatically generates a summary from the page.

If `true`, the summary is automatically generated from the first paragraph of the page, excluding headings, block quotations, lists, and code fences. If `summary` is set, that is used first.

Currently, the auto-generated summary is only used for the `page` or `pages` component.

### `generate_summary` is not set, `summary` is set

{{ comp box }}
{{ comp.page({ query: "url=/about/", continueLabel: true }) }}
{{ /comp }}

### `generate_summary` is `true`, `summary` is not set

{{ comp box }}
{{ comp.page({ query: "url=/posts/second-post/", continueLabel: true }) }}
{{ /comp }}

### `generate_summary` is `false`, `summary` is not set

{{ comp box }}
{{ comp.page({ query: "url=/posts/third-post/", continueLabel: true }) }}
{{ /comp }}

---

## `enable_date`

Controls the display of dates in other components or pages.

### `enable_date` is `true`

{{ comp box }}
{{ comp.page({ query: "url=/posts/third-post/", continueLabel: true }) }}
{{ /comp }}

### `enable_date` is `false`

{{ comp box }}
{{ comp.page({ query: "url=/about/", continueLabel: true }) }}
{{ /comp }}

---

## `menu.visible`

If `true`, displays a link to the page in the top navigation.
