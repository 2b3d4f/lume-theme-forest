---
title: Parameters
summary: Parameters available in `_data.yml` and front matter.
templateEngine: [vto, md]
---

## `author`: `string`

Name of the page's author. For more information, see "[About Author Pages](/post/about-author-pages)".

## `summary`: `string`

Defines a concise description of the page.

## 🧪 `generate_summary`: `boolean`

*Automatic summary generation is currently **experimental***.

When set to `true`, the theme extracts the first paragraph (excluding headings, blockquotes, lists, and fenced code) and assigns it to `summary`. An explicitly‑written `summary` always takes precedence.

| `summary` | `generate_summary` | Effective summary |
|-----------|--------------------|-------------------|
| *(set)*   | `true` or `false` or *(not set)*  | The value of `summary` |
| *(not set)* | `true` | First paragraph of the page |
| *(not set)* | `false` or *(not set)* | *No summary* |

---

## `enable_date`: `boolean`

Controls whether the page’s date appears in components (e.g. lists, headers) that support date display.

---

## `menu.visible`: `boolean`

Determines if the page appears in the top‑level navigation menu.
