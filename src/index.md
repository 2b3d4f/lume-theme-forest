---
title: Home
templateEngine: [vto, md]
---

Cupidatat reprehenderit consequat aute eu minim. Dolor excepteur occaecat in occaecat cillum nisi sint qui reprehenderit esse. Laboris reprehenderit elit velit quis officia duis deserunt consectetur eiusmod. Aliquip reprehenderit occaecat officia esse nostrud qui proident excepteur ut sint sit. Sit fugiat minim consectetur reprehenderit dolor officia. Officia culpa ex esse aliqua duis. Nulla Lorem officia labore ex ullamco aliqua ut qui veniam consequat non est.

{{ comp group { override: "*:my-0 **:[a]:py-3 *:first:**:[a]:pt-0 *:last:**:[a]:pb-0" } }}
  {{ comp.page({ query: "url=/posts/components/" }) }}
  {{ comp.page({ query: "url=/posts/parameters/" }) }}
  {{ comp.page({ query: "url=/posts/markdown-guide/" }) }}
{{ /comp }}

## Recent Posts

{{ comp.pages({ query: "type=post", sort: "date=desc title=asc", limit: 3 }) }}

More posts can be found in [the archive](/archive).
