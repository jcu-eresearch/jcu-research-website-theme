---
layout: page
title: "Content block recipes"
permalink: /reference/content-block-recipes/
order: 3.2
summary: "Content block recipes"
---

Choose a pattern by what your content needs. Then use the detailed syntax guide you find easiest to edit. The same page can include several methods.

| Content task | Pattern | Where to find examples |
| --- | --- | --- |
| Highlight an introduction | Text panel with a primary or secondary background | Text panels in each syntax guide |
| Put two explanations side by side | Two-column block | Two columns in each syntax guide |
| Explain a photograph or diagram | Image-text block | Image beside text in each syntax guide |
| Link to several destinations | Manual cards | Cards in each syntax guide |
| List pages automatically | Generated page cards | Automatic page cards in each syntax guide |
| Display several images | Gallery | Galleries in each syntax guide |
| Acknowledge supporting organisations | Partner logos | Partner logos in each syntax guide |
| Draw attention to a note or warning | Alert | Alerts in each syntax guide |

## Pick the syntax for a recipe

- [YAML examples]({{ "/reference/yaml-page-content/" | relative_url }}): name the block type and fill in its fields.
- [Markdown class examples]({{ "/reference/markdown-page-content/" | relative_url }}): group content and attach styling classes.
- [HTML wrapper examples]({{ "/reference/html-markdown-page-content/" | relative_url }}): use named containers around Markdown.

Plain Markdown supplies the paragraphs, lists, links, and tables inside or between blocks. Use [Combine writing methods]({{ "/build-your-pages/combine-writing-methods/" | relative_url }}) when you need to position a styled block among ordinary text.

## Equivalent styling controls

These controls select equivalent core styles across the block methods. Plain Markdown can accompany any of them.

| Option | YAML | Markdown and HTML classes |
| --- | --- | --- |
| Coloured panel | `background: primary` or `secondary` | `jcu-bg-primary` or `jcu-bg-secondary` |
| Two columns | `type: two-column` with `columns` | `jcu-two-column` with `jcu-column` groups |
| Image beside text | `type: image-text` | `jcu-image-text` with `jcu-text` and `jcu-media` groups |
| Image position | `image_position: left` or `right` | `jcu-image-left` or `jcu-image-right` |
| Image size | `image_size: small`, `medium`, or `large` | `jcu-image-small`, no size class for medium, or `jcu-image-large` |
| Cards | `type: cards` | `jcu-cards` with `jcu-card` groups |
| Gallery | `type: gallery` | `jcu-gallery` on the linked-image paragraph |
| Partner logos | `type: partner-logos` | `jcu-partner-logos` on the image paragraph |
| Grid columns | `columns: 1` through `6` | `jcu-columns-1` through `jcu-columns-6` |
| Alerts | `type: alert` and `alert_type` | `jcu-alert` and `jcu-alert--note`, `--important`, `--warning`, or `--caution` |


## See complete pages

Browse the [sample content styles]({{ "/sample-content/" | relative_url }}) to see each method in context. For full-width homepage sections, achievements, a carousel, or a hero, use the [landing-page guide]({{ "/build-your-pages/landing-page-styles/" | relative_url }}).

[YAML basics]({{ "/reference/yaml-basics/" | relative_url }}) [Cards and page collections]({{ "/reference/cards-and-page-collections/" | relative_url }})
{: .jcu-page-navigation}
