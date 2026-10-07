---
layout: page
title: "YAML page content"
permalink: /reference/yaml-page-content/
order: 2
summary: "Create standard-page blocks with named fields in front matter."
---

This is a reference guide. New to website editing? Start with [Beginners]({{ "/beginners/" | relative_url }}). All these methods can share a standard page: plain Markdown, YAML blocks, Markdown with classes, and HTML wrappers. See [Combine writing methods]({{ "/build-your-pages/combine-writing-methods/" | relative_url }}) for a complete example and the rendering order.

Use YAML when you prefer a list of named fields for each section. The theme turns those fields into styled page content. Text fields can contain Markdown; you do not need to write HTML.

[View the working YAML examples]({{ "/sample-content/content-blocks/" | relative_url }}).

## Use the layout

```yaml
---
layout: page
title: Research background
permalink: /research-background/
lead: Explore the project context.
blocks:
  - type: one-column
    title: Our research
    background: secondary
    content: |
      Explain the research problem and **why it matters**.

      - What we know
      - What the project will investigate
---

Optional introductory Markdown goes here, before all the blocks.
```

Keep a single `blocks` list between the front-matter delimiters. Blocks appear in list order, after the body content. Use spaces for indentation, quote strings containing special YAML characters, and use `|` for paragraphs or lists. Titles and labels are plain text; `content` and card `text` support Markdown. Liquid expressions inside YAML fields are not evaluated as page-body Liquid.

## Text panels and two columns

`one-column` is an alias for `image-text` without an image. Omit `background` for the normal page background, or choose `primary` or `secondary` for a coloured panel.

```yaml
blocks:
  - type: two-column
    title: Research settings
    background: primary
    columns:
      - title: Rainforest
        content: |
          Describe forest research and connected habitats.
      - title: Coast
        content: |
          Describe coastal research and marine habitats.
```

Each column keeps the shared surface colours inside the surrounding panel. Columns stack on small screens. Use two items in this `columns` list; it is a list of content groups, unlike the numeric grid column setting used for cards and galleries.

## Images beside text

```yaml
blocks:
  - type: image-text
    title: Rainforest wildlife
    background: secondary
    image: /assets/sample-images/card-cassowary.svg
    image_alt: Southern cassowary in rainforest
    image_position: left
    image_size: small
    caption: A rainforest seed disperser.
    content: |
      Southern cassowaries help maintain rainforest plant diversity.
```

`image_position` accepts `left` or `right` (default). `image_size` accepts `small`, `medium` (default), or `large`. Omit the image for a full-width text panel. Captions are plain text. Coloured image-text panels are contained in the content area; images meet the panel's outer edge and stack with the text on narrower screens.

## Cards

```yaml
blocks:
  - type: cards
    title: Species profiles
    columns: 3
    background: secondary
    content: |
      Read more about rainforest wildlife.
    cards:
      - title: Southern cassowary
        card_category: Species profile
        image: /assets/sample-images/card-cassowary.svg
        image_alt: Southern cassowary in rainforest
        text: "A large bird that disperses **rainforest seeds**."
        url: /sample-content/content-blocks/southern-cassowary/
        link_text: Read southern cassowary profile
      - title: Connected habitat
        text: "This informational card has no image or link."
```

Images and links are optional. Provide both `url` and `link_text` for a text link; an image also becomes a link when `url` is present. Cards use the theme's surface colours. `columns: 1` creates wide image-and-text rows on desktop; text-only cards fill the row. Larger counts create a grid that reduces or stacks on smaller screens. Omitted `columns` uses `page_card_columns`.

## Linked-image galleries

```yaml
blocks:
  - type: gallery
    title: Explore species
    columns: 3
    items:
      - title: Southern cassowary
        image: /assets/sample-images/card-cassowary.svg
        url: /sample-content/content-blocks/southern-cassowary/
      - title: Green turtle
        image: /assets/sample-images/card-green-turtle.svg
        url: /sample-content/content-blocks/green-turtle/
```

Supply an image, meaningful title, and destination for each gallery item. The visible title supplies the link label. `columns` sets a maximum per row and defaults to `image_gallery_max_items_per_row`.

## Partner logos

```yaml
blocks:
  - type: partner-logos
    title: Partners
    background: primary
    columns: 2
    content: |
      Recognise the organisations supporting the project.
    partners:
      - name: Example partner
        logo: /assets/sample-images/partner-placeholder-reverse-mono.svg
      - name: Example funding partner
        logo: /assets/sample-images/partner-mosaic-reverse-mono.svg
```

Use `partners`, rather than the landing layout's `items`. Names provide alt text. Add an optional `url` with the organisation's full website address to make a logo clickable. Omit it when no destination is available. Transparent logos sit directly on the panel, without individual tiles. Choose a reverse white logo on a dark primary background. `columns` defaults to `partner_logo_max_items_per_row`; logo height uses `partner_logo_max_height`. The heading and introduction are optional.

The optional `card_category` field adds a short label above a manually authored card's title. Omit it to keep the existing appearance. It is plain text, displayed in uppercase using the card's surface text colour; it is separate from the title and link.

## Cards generated from pages

```yaml
blocks:
  - type: page-cards
    title: Species profiles
    folder: sample-content/animals/
    columns: 3
    link_text: Read species profile
    background: secondary
    content: |
      These cards use information from the species pages.
```

Set `folder` to the source-file folder, not the pages' public permalink prefix. Pages are sorted by `order`; the current page and files named `index.md` are excluded. Each page supplies `title`, optional `image`, and `summary` (falling back to `description`). Configure those fields on the source pages. Optional `card_title` supplies a shorter card heading without changing the page title; `card_category` adds a small category label above it. Defaults come from `page_card_columns` and `page_card_link_text`. The same one-column row treatment applies.

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

## Alerts

```yaml
blocks:
  - type: alert
    alert_type: note
    title: Before you begin
    content: |
      Keep the project introduction brief and use descriptive links.
```

Types are `note`, `important`, `warning`, and `caution`. Omitting `title` uses the type's name; omitting or supplying an unsupported `alert_type` uses `note`. The theme supplies the matching background, text, link, and left-border colours.

## Shared style options

`background: primary` and `secondary` select matching theme text and link colours. Cards and column panels retain their surface colours. Omit the background for ordinary page content. Standard image-text and partner-logo blocks use contained panels; their `background_mode` is fixed to `block`. Other YAML panel types also accept the existing `background_mode: behind` treatment, which extends the background around the content; use the default `block` treatment for the same contained appearance as the body formats.

Set shared fonts, colours, `content_alignment`, grid defaults, and `block_separator_style` in `_config.yml`. The separator styles are `none`, `line`, `accent`, and `band`. Use sensible desktop column counts, and preview a narrow screen as well as desktop.

## Links and editing

Image and card/gallery URL fields accept site paths; the template adds the base URL. In `content` and `text`, write normal Markdown links, such as `[Overview](../)`, relative to the published page. Do not insert Liquid expressions in those text fields. Check that each URL matches its label and exists before publishing.

[Compare Markdown with layout classes]({{ "/reference/markdown-page-content/" | relative_url }}) or [the HTML and Markdown format]({{ "/reference/html-markdown-page-content/" | relative_url }}).

[Cards and page collections]({{ "/reference/cards-and-page-collections/" | relative_url }}) [Markdown with layout classes]({{ "/reference/markdown-page-content/" | relative_url }})
{: .jcu-page-navigation}
