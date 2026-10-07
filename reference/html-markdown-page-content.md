---
layout: page
title: "HTML and Markdown page content"
permalink: /reference/html-markdown-page-content/
order: 4
summary: "Create standard-page blocks with named HTML wrappers and Markdown."
---

This is a reference guide. New to website editing? Start with [Beginners]({{ "/beginners/" | relative_url }}). All these methods can share a standard page: plain Markdown, YAML blocks, Markdown with classes, and HTML wrappers. See [Combine writing methods]({{ "/build-your-pages/combine-writing-methods/" | relative_url }}) for a complete example and the rendering order.

Use HTML wrappers when named opening and closing groups are easier for you to follow than nested blockquotes. The wrappers select the layout and styling; Markdown inside them supplies the content. The same classes and styles are used by the Markdown format and match the YAML blocks.

[View the working examples]({{ "/sample-content/html-markdown-content-blocks/" | relative_url }}).

## Use the layout

```yaml
---
layout: page
title: Research background
permalink: /research-background/
lead: Explore the project context.
---
```

Place ordinary Markdown and styled blocks after this front matter, in reading order. The theme supplies the main page heading; use `##` for section headings and `###` for card or column headings.

Add `markdown="1"` to each wrapper containing Markdown. Keep blank lines around block content, close every element, and use `article` for a card, `div` for a content group, and `section` for a complete block. Gallery, logo, and card-link paragraphs use `<p class="…" markdown="1">`.

## Text panels

Use a coloured text panel for introductions or a focused explanation. Omit the background class for normal page content.

```html
<section class="jcu-block jcu-bg-secondary" markdown="1">

## Our research

Explain the research problem and **why it matters**.

</section>
```

## Two columns

Put two content groups inside the outer block. Each column keeps its surface colours and stacks on smaller screens.

```html
<section class="jcu-block jcu-two-column jcu-bg-primary" markdown="1">

## Research settings

<div class="jcu-column" markdown="1">

### Rainforest

Describe forest research and connected habitats.

</div>

<div class="jcu-column" markdown="1">

### Coast

Describe coastal research and marine habitats.

</div>

</section>
```

## Images beside text

Group the title and paragraphs in `jcu-text`, and the image and optional caption in `jcu-media`. Use `jcu-image-left` or `jcu-image-right` (default). Choose `jcu-image-small`, no size class for medium, or `jcu-image-large`. Coloured images meet the outer edge of the panel; image and text stack on narrow screens.

{% raw %}
```html
<section class="jcu-block jcu-image-text jcu-image-left jcu-image-small jcu-bg-secondary" markdown="1">

<div class="jcu-text" markdown="1">

## Rainforest wildlife

Southern cassowaries help maintain rainforest plant diversity.

</div>

<div class="jcu-media" markdown="1">

![Southern cassowary in rainforest]({{ "/assets/sample-images/card-cassowary.svg" | relative_url }})

A rainforest seed disperser.

</div>

</section>
```
{% endraw %}

## Cards

The outer group sets the grid. Each card has a body and an optional image group; the link paragraph uses `jcu-card-link`. Use `jcu-columns-1` for wide desktop rows, or `jcu-columns-2` through `jcu-columns-6` for a grid. Text-only cards need no image group. Cards share the surface colours and adapt to narrow screens.

{% raw %}
```html
<section class="jcu-block jcu-cards jcu-columns-3 jcu-bg-secondary" markdown="1">

## Species profiles

<article class="jcu-card" markdown="1">

<div class="jcu-card-image" markdown="1">

[![Southern cassowary in rainforest]({{ "/assets/sample-images/card-cassowary.svg" | relative_url }})]({{ "/sample-content/content-blocks/southern-cassowary/" | relative_url }})

</div>

<div class="jcu-card-body" markdown="1">

<p class="jcu-card-category">Species profile</p>

### Southern cassowary

A large bird that disperses **rainforest seeds**.

<p class="jcu-card-link" markdown="1">
[Read southern cassowary profile]({{ "/sample-content/content-blocks/southern-cassowary/" | relative_url }})
</p>

</div>

</article>

<article class="jcu-card" markdown="1">

<div class="jcu-card-body" markdown="1">

### Connected habitat

This informational card has no image or link.

</div>

</article>

</section>
```
{% endraw %}

Add an optional `<p class="jcu-card-category">Species profile</p>` at the start of `jcu-card-body`, before the heading. It supplies the same category styling as YAML and Markdown cards. Omit it for an unlabelled card.

## Linked-image galleries

Write consecutive linked images, each with a bold visible label inside the link. Keep them in one paragraph. The column count is a maximum and steps down on narrower screens; omitted column classes use `image_gallery_max_items_per_row`.

{% raw %}
```html
<section class="jcu-block" markdown="1">

## Explore species

<p class="jcu-gallery jcu-columns-3" markdown="1">
[![Southern cassowary]({{ "/assets/sample-images/card-cassowary.svg" | relative_url }}) **Southern cassowary**]({{ "/sample-content/content-blocks/southern-cassowary/" | relative_url }})
[![Green turtle]({{ "/assets/sample-images/card-green-turtle.svg" | relative_url }}) **Green turtle**]({{ "/sample-content/content-blocks/green-turtle/" | relative_url }})
</p>

</section>
```
{% endraw %}

## Partner logos

Keep the images in one paragraph. Wrap an image in a Markdown link when it has a real destination; otherwise leave it unlinked. Alt text names the organisation. Transparent reverse white logos work on a dark primary panel. Column classes override `partner_logo_max_items_per_row`; height uses `partner_logo_max_height`.

{% raw %}
```html
<section class="jcu-block jcu-bg-primary" markdown="1">

## Partners

Recognise the organisations supporting the project.

<p class="jcu-partner-logos jcu-columns-2" markdown="1">
![Example partner]({{ "/assets/sample-images/partner-placeholder-reverse-mono.svg" | relative_url }})
![Example funding partner]({{ "/assets/sample-images/partner-mosaic-reverse-mono.svg" | relative_url }})
</p>

</section>
```
{% endraw %}

## Alerts

Types are `note`, `important`, `warning`, and `caution`. Change the `jcu-alert--note` suffix and heading together. All use the same alert colours as YAML blocks.

```html
<aside class="jcu-alert jcu-alert--note" markdown="1">

## Before you begin

Keep the project introduction brief and use descriptive links.

</aside>
```

## Cards generated from pages

Automatic page cards use a short Liquid include in both body formats. A CSS class cannot collect pages from other files.

{% raw %}
```liquid
{% include page-cards.html
  title="Species profiles"
  folder="sample-content/animals/"
  columns=3
  link_text="Read species profile"
  background="secondary"
  content="These cards use information from the species pages."
%}
```
{% endraw %}

Place this include directly in the page body, outside HTML wrappers or blockquotes. `folder` is a source-file folder, not a public permalink prefix. Cards use each page's `title`, optional `image`, and `summary` (or `description`), sorted by `order`. The current page and files named `index.md` are excluded. Defaults use `page_card_columns` and `page_card_link_text`. `columns=1` produces wide rows on desktop; text-only cards fill the row. Optional `content` accepts Markdown.

### Optional titles and categories for generated cards

Set these fields in the front matter of each source page collected by `folder`:

```yaml
---
title: Southern cassowary research profile
card_title: Southern cassowary
card_category: Species profile
permalink: /sample-content/content-blocks/southern-cassowary/
summary: A rainforest seed disperser.
order: 1
---
```

`card_category` is an optional plain-text label above the card heading. `card_title` is an optional shorter heading for the card; the page itself keeps its `title`. If omitted, the category is hidden and the card uses the page title. These fields work with generated page cards in both layouts and with the `page-cards.html` include used in Markdown and HTML bodies. Put them on the source page, not on the collecting block or include.

## Shared style options

Use `jcu-block` for a complete layout block, adding `jcu-bg-primary` or `jcu-bg-secondary` for a contained coloured panel. Omit those background classes for normal page content. Two-column panels and cards retain their surface colours, while surrounding panels use matching background, text, and link colours.

Use `jcu-columns-1` through `jcu-columns-6` on card grids, gallery paragraphs, and logo paragraphs. Without a column class, those groups use their respective configured defaults. Layouts adapt to smaller screens; choose a readable desktop grid rather than fitting as many items as possible in one row.

Configure fonts, colours, `content_alignment`, `block_separator_style`, gallery and partner-logo maximums, and card defaults in `_config.yml`. Separators accept `none`, `line`, `accent`, or `band`. No project-specific CSS is needed for these standard styles.

## Images, links, and previewing

Use descriptive image alt text and meaningful link labels. For internal body links and images, the examples use `relative_url` so they work when the site is published under a repository name. Fragment links such as `#section-heading` jump within the same page. Use a full URL for external websites.

Liquid is evaluated before Markdown, even in fenced code examples. When writing documentation that must display a Liquid expression literally, wrap the code example in Liquid `raw` and `endraw` tags. For actual content, use the include and URL expressions directly.

Preview both desktop and narrow-screen layouts. Check group nesting, image paths, link destinations, and the selected theme colours. You can move a block to another position in the body without changing its style.

[Compare the YAML format]({{ "/reference/yaml-page-content/" | relative_url }}) or [return to Content and styling reference]({{ "/reference/" | relative_url }}).

## Native HTML features

HTML wrappers are also useful beyond layout blocks. The [HTML alongside Markdown samples]({{ "/sample-content/html-markdown-content-blocks/#html-alongside-ordinary-markdown" | relative_url }}) demonstrate collapsible sections, highlighting, subscript, superscript, abbreviations, figures and captions, explicit line breaks, and hidden comments.

Use a descriptive `summary` in a `details` element, and add `markdown="1"` when its body contains Markdown:

```html
<details markdown="1">
<summary>Read the sampling notes</summary>

We visit each location **three times**.

- Record dates and conditions.
- Explain any departures from the protocol.

</details>
```

Do not hide essential instructions in a collapsed section. Spell out abbreviations in the text rather than relying on a `title` tooltip. A `figcaption` supplies an image's context; it does not replace useful alt text. HTML comments are hidden visually but remain public in the source.

[Markdown with layout classes]({{ "/reference/markdown-page-content/" | relative_url }}) [Site appearance]({{ "/reference/site-appearance/" | relative_url }})
{: .jcu-page-navigation}
