---
layout: page
title: "Choose a layout"
permalink: /build-your-pages/choose-a-layout/
order: 2.1
summary: "Choose a layout"
---

| Layout | Purpose | How you write content |
| --- | --- | --- |
| `landing-page` | A homepage or project overview that introduces the project and guides visitors to more detail. Includes a hero, full-width sections, achievements, a carousel, cards, and partner logos. | Configure `hero` and an ordered `blocks` list in YAML front matter. Optional Markdown body content appears between the hero and the blocks. |
| `page` | Detail pages such as research background, methods, outputs, people, contact information, and these guides. Includes a page title, optional lead and breadcrumbs, and reusable content blocks. | Use plain Markdown, YAML blocks, Markdown with layout classes, or HTML wrappers with Markdown. |

Both layouts share the header, navigation, typography, colours, and responsive styling. A site can use a landing page for its homepage and standard pages for the supporting information. The catalogue integration layout is a specialist option described in the repository README; the two layouts above cover general content authoring.

[Read the landing-page guide]({{ "/build-your-pages/landing-page-styles/" | relative_url }}).

## Choose for the reader

Use a standard page when visitors need to read a connected explanation. Use a landing page when visitors need a quick overview and routes into the rest of the site. Both use YAML front matter for page settings, and both can contain Markdown body text.

Changing the layout name does not translate existing blocks: landing-page block fields and standard-page block fields differ. Use the matching guide when moving content between layouts.

[← Overview]({{ "/build-your-pages/" | relative_url }}) [Next →]({{ "/build-your-pages/content-blocks/" | relative_url }})
{: .jcu-page-navigation}
