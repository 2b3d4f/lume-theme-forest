---
title: Parameters
summary: Parameters available in `_data.yml` and front matter.
templateEngine: [vto, md]
---

## `summary`: `string`

Defines a concise description of the page.

## 🧪 `generate_summary`: `boolean`

*Automatic summary generation is currently **experimental***.

When set to `true`, the theme extracts the first paragraph (excluding headings, blockquotes, lists, and fenced code) and assigns it to `summary`. An explicitly‑written `summary` always takes precedence.

---

## `enable_date`: `boolean`

Controls whether the page’s date appears in components (e.g. lists, headers) that support date display.

---

## `menu.visible`: `boolean`

Determines if the page appears in the top‑level navigation menu.
