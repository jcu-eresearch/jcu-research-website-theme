---
layout: page
title: "Markdown with layout classes"
permalink: /reference/markdown-page-content/
order: 3
summary: "Create standard-page blocks with nested Markdown groups and theme classes."
---

This is a reference guide. New to website editing? Start with [Beginners]({{ "/beginners/" | relative_url }}). All these methods can share a standard page: plain Markdown, YAML blocks, Markdown with classes, and HTML wrappers. See [Combine writing methods]({{ "/build-your-pages/combine-writing-methods/" | relative_url }}) for a complete example and the rendering order.

For simple text pages, you can also use [plain Markdown]({{ "/reference/plain-markdown/" | relative_url }}) without layout classes.

Use this method when you want the whole story in the Markdown page body. Nested blockquotes group the content, and class lines select the theme layout and styling. The classes reuse the styles used by YAML blocks and HTML wrappers.

[View the working examples]({{ "/sample-content/inline-content-blocks/" | relative_url }}).

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

Write a class line immediately after the block it styles, without an intervening blank line. Put the class line outside that group: a nested quote closes with one fewer `>` marker before its class line. Blank quote lines separate paragraphs and nested groups. These styled quotes become layout containers rather than ordinary quotation callouts.

## Reusable attributes

The [reusable layout attributes file]({{ "/sample-content/markdown-layout-attributes.md" | relative_url }}) in `sample-content/markdown-layout-attributes.md` provides named Kramdown attributes for every class combination in the Markdown-with-classes sample, including nested columns, card parts, backgrounds, and alerts. It also includes instructions and a two-column example.

Copy the definitions you need into your own Markdown page, then use their names instead of repeating the full class lines. For example, copy `{:two-column: .jcu-block .jcu-two-column}` and use `{:two-column}` immediately after a two-column block. Keep the nested blockquote structure shown in the examples. Definitions apply only to the page containing them; the theme does not load this file automatically. Automatic page cards still use the Liquid include described below.

## Text panels

Use a coloured text panel for introductions or a focused explanation. Omit the background class for normal page content.

```markdown
> ## Our research
>
> Explain the research problem and **why it matters**.
{:.jcu-block .jcu-bg-secondary}
```

## Two columns

Put two content groups inside the outer block. Each column keeps its surface colours and stacks on smaller screens.

```markdown
> ## Research settings
>
> > ### Rainforest
> >
> > Describe forest research and connected habitats.
> {:.jcu-column}
>
> > ### Coast
> >
> > Describe coastal research and marine habitats.
> {:.jcu-column}
{:.jcu-block .jcu-two-column .jcu-bg-primary}
```

## Images beside text

Group the title and paragraphs in `jcu-text`, and the image and optional caption in `jcu-media`. Use `jcu-image-left` or `jcu-image-right` (default). Choose `jcu-image-small`, no size class for medium, or `jcu-image-large`. Coloured images meet the outer edge of the panel; image and text stack on narrow screens.

{% raw %}
```markdown
> > ## Rainforest wildlife
> >
> > Southern cassowaries help maintain rainforest plant diversity.
> {:.jcu-text}
>
> > ![Southern cassowary in rainforest]({{ "/assets/sample-images/card-cassowary.svg" | relative_url }})
> >
> > A rainforest seed disperser.
> {:.jcu-media}
{:.jcu-block .jcu-image-text .jcu-image-left .jcu-image-small .jcu-bg-secondary}
```
{% endraw %}

## Cards

The outer group sets the grid. Each card has a body and an optional image group; the link paragraph uses `jcu-card-link`. Use `jcu-columns-1` for wide desktop rows, or `jcu-columns-2` through `jcu-columns-6` for a grid. Text-only cards need no image group. Cards share the surface colours and adapt to narrow screens.

{% raw %}
```markdown
> ## Species profiles
>
> > > [![Southern cassowary in rainforest]({{ "/assets/sample-images/card-cassowary.svg" | relative_url }})]({{ "/sample-content/content-blocks/southern-cassowary/" | relative_url }})
> > {:.jcu-card-image}
> >
> > > Species profile
> > > {:.jcu-card-category}
> > >
> > > ### Southern cassowary
> > >
> > > A large bird that disperses **rainforest seeds**.
> > >
> > > [Read southern cassowary profile]({{ "/sample-content/content-blocks/southern-cassowary/" | relative_url }})
> > > {:.jcu-card-link}
> > {:.jcu-card-body}
> {:.jcu-card}
>
> > > ### Connected habitat
> > >
> > > This informational card has no image or link.
> > {:.jcu-card-body}
> {:.jcu-card}
{:.jcu-block .jcu-cards .jcu-columns-3 .jcu-bg-secondary}
```
{% endraw %}

Add an optional category paragraph at the start of `jcu-card-body` and put `{:.jcu-card-category}` immediately below it at the same quote depth. The example above uses “Species profile”. Omit that paragraph for an unlabelled card.

## Linked-image galleries

Write consecutive linked images, each with a bold visible label inside the link. Keep them in one paragraph. The column count is a maximum and steps down on narrower screens; omitted column classes use `image_gallery_max_items_per_row`.

{% raw %}
```markdown
> ## Explore species
>
> [![Southern cassowary]({{ "/assets/sample-images/card-cassowary.svg" | relative_url }}) **Southern cassowary**]({{ "/sample-content/content-blocks/southern-cassowary/" | relative_url }})
> [![Green turtle]({{ "/assets/sample-images/card-green-turtle.svg" | relative_url }}) **Green turtle**]({{ "/sample-content/content-blocks/green-turtle/" | relative_url }})
> {:.jcu-gallery .jcu-columns-3}
{:.jcu-block}
```
{% endraw %}

## Partner logos

Keep the images in one paragraph. Wrap an image in a Markdown link when it has a real destination; otherwise leave it unlinked. Alt text names the organisation. Transparent reverse white logos work on a dark primary panel. Column classes override `partner_logo_max_items_per_row`; height uses `partner_logo_max_height`.

{% raw %}
```markdown
> ## Partners
>
> Recognise the organisations supporting the project.
>
> ![Example partner]({{ "/assets/sample-images/partner-placeholder-reverse-mono.svg" | relative_url }})
> ![Example funding partner]({{ "/assets/sample-images/partner-mosaic-reverse-mono.svg" | relative_url }})
> {:.jcu-partner-logos .jcu-columns-2}
{:.jcu-block .jcu-bg-primary}
```
{% endraw %}

## Alerts

Types are `note`, `important`, `warning`, and `caution`. Change the `jcu-alert--note` suffix and heading together. All use the same alert colours as YAML blocks.

```markdown
> ## Before you begin
>
> Keep the project introduction brief and use descriptive links.
{:.jcu-alert .jcu-alert--note}
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

## Previous and Next links

Use `{: .jcu-page-navigation}` immediately beneath a paragraph containing two links to place the first on the left and the second on the right. See [Previous and Next links]({{ "/reference/navigation-and-links/" | relative_url }}#previous-and-next-links) for a copyable example and advice on choosing destinations.

## Shared style options

Use `jcu-block` for a complete layout block, adding `jcu-bg-primary` or `jcu-bg-secondary` for a contained coloured panel. Omit those background classes for normal page content. Two-column panels and cards retain their surface colours, while surrounding panels use matching background, text, and link colours.

Use `jcu-columns-1` through `jcu-columns-6` on card grids, gallery paragraphs, and logo paragraphs. Without a column class, those groups use their respective configured defaults. Layouts adapt to smaller screens; choose a readable desktop grid rather than fitting as many items as possible in one row.

Configure fonts, colours, `content_alignment`, `block_separator_style`, gallery and partner-logo maximums, and card defaults in `_config.yml`. Separators accept `none`, `line`, `accent`, or `band`. No project-specific CSS is needed for these standard styles.

## Images, links, and previewing

Use descriptive image alt text and meaningful link labels. For internal body links and images, the examples use `relative_url` so they work when the site is published under a repository name. Fragment links such as `#section-heading` jump within the same page. Use a full URL for external websites.

Liquid is evaluated before Markdown, even in fenced code examples. When writing documentation that must display a Liquid expression literally, wrap the code example in Liquid `raw` and `endraw` tags. For actual content, use the include and URL expressions directly.

Preview both desktop and narrow-screen layouts. Check group nesting, image paths, link destinations, and the selected theme colours. You can move a block to another position in the body without changing its style.

[Compare the YAML format]({{ "/reference/yaml-page-content/" | relative_url }}) or [return to Content and styling reference]({{ "/reference/" | relative_url }}).

[YAML page content]({{ "/reference/yaml-page-content/" | relative_url }}) [HTML and Markdown page content]({{ "/reference/html-markdown-page-content/" | relative_url }})
{: .jcu-page-navigation}
