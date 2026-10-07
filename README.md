# Research Project Website Theme

A configurable Jekyll theme for research project communications. The theme is designed for GitHub Pages, so research teams can maintain project websites with Markdown content while reusing shared layouts, navigation, content blocks, and sample assets.

This repository is both:

- a reusable remote Jekyll theme, consumed with `remote_theme`
- a live sample site showing the page types and content blocks available in the theme

## Use as a remote theme

Create a Jekyll/GitHub Pages repository for your research project, then add this to the project site's `_config.yml`:

```yml
remote_theme: jcu-eresearch/jcu-research-website-theme
plugins:
  - jekyll-remote-theme
```

For production project sites, pin a release once this theme has tagged versions:

```yml
remote_theme: jcu-eresearch/jcu-research-website-theme@v1.0.0
plugins:
  - jekyll-remote-theme
```

GitHub Pages can load public GitHub-hosted Jekyll themes with `remote_theme`. The theme does not need to be published as a RubyGem.

Before other projects can consume this theme, keep this repository public on GitHub.

For local development in a consuming project, use a Gemfile such as:

```ruby
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
```

## Minimal project configuration

In the project site's `_config.yml`, set the project identity and theme settings:

```yml
title: "Research Project Website Theme"
description: "A configurable static website for research project communications."
url: "https://USERNAME.github.io"
baseurl: "/REPOSITORY-NAME"

remote_theme: jcu-eresearch/jcu-research-website-theme
plugins:
  - jekyll-remote-theme

markdown: kramdown
kramdown:
  input: GFM

theme_settings:
  show_breadcrumbs: true
  favicon: "/assets/images/rwt/favicon-colour-transparent.png"
  app_icon: "/assets/images/rwt/app-colour-transparent.png"
  project_logo: "/assets/images/rwt/app-colour-transparent.png"
  header_logo: "/assets/images/rwt/app-reverse-mono-transparent.png"
  project_logo_alt: "Project logo"
  font_family: "Lato, Arial, Helvetica, sans-serif"
  heading_font_family: "Lora, Georgia, serif"
  primary_color: "#354F52"
  primary_text_color: "#FFFFFF"
  primary_link_color: "#FFFFFF"
  secondary_color: "#C3D5C7"
  secondary_text_color: "#354F52"
  secondary_link_color: "#354F52"
  text_color: "#344054"
  heading_color: "#344054"
  background_color: "#F4F6F3"
  background_text_color: "#344054"
  background_link_color: "#354F52"
  surface_color: "#FFFFFF"
  surface_text_color: "#344054"
  surface_link_color: "#354F52"
  # Alert colours: left border, background, text and links.
  note_color: "#354F52"
  note_background_color: "#EDF2EF"
  note_text_color: "#354F52"
  note_link_color: "#354F52"

  important_color: "#527C66"
  important_background_color: "#E7F0EA"
  important_text_color: "#354F52"
  important_link_color: "#354F52"

  warning_color: "#C83B35"
  warning_background_color: "#FBECEB"
  warning_text_color: "#354F52"
  warning_link_color: "#922C27"

  caution_color: "#A86A2B"
  caution_background_color: "#FFF3E0"
  caution_text_color: "#354F52"
  caution_link_color: "#75471A"

  border_color: "#D0D5DD"
  # content_alignment options: "left", "center"
  content_alignment: "left"
  # bullet_style options: "line", "circle"
  bullet_style: "line"
  button_shape: "rectangular"
  block_separator_style: "none"
  partner_logo_max_height: "6rem"
  partner_logo_max_items_per_row: 3
  image_gallery_max_items_per_row: 3
  page_card_columns: 3
  page_card_link_text: "Read more"

defaults:
  - scope:
      path: ""
      type: "pages"
    values:
      layout: "page"
```

The theme does not include an institutional logo. The sample `project_logo` above is the RWT tropical leaf mark; remove that setting to show only the project title, or add your own image to the consuming site's `assets/images/` folder and set its path and alt text. The generic favicon can also be replaced with your own file.

Each background colour has a matching `*_text_color` and `*_link_color`. Set both to colours with enough contrast against that background. `text_color` remains a fallback for older configurations when `background_text_color` is omitted. The white `surface_color` is used for cards and other raised panels. `warning_color` colours Warning alerts.

The optional `header_logo` appears at the left of the shared site header, falling back to `project_logo` when omitted. The sample uses the transparent white reverse mono mark on the dark title bar. `project_logo` and `app_icon` use the coloured transparent mark; `app_icon` supplies the Apple touch icon. The header navigation is used on every page and changes to a burger menu on smaller screens.

The optional `favicon` appears in the browser tab. Set `favicon: false` to omit the favicon link.

The `markdown` and `kramdown` settings enable GitHub-flavoured Markdown features such as pipe tables and task lists.

Set `theme_settings.bullet_style` to `line` (the default) or `circle` for solid content-list markers. All nesting levels use the same marker, including lists in alerts and footnotes. Numbered lists, task-list checkboxes, and navigation controls retain their existing behaviour.

Set `theme_settings.content_alignment` to `left` or `center` to control how
content is aligned within page, block, card, and landing-page section containers.
The default is `left`.

Set `theme_settings.button_shape` to `rectangular` (the default) for straight
edges with slightly rounded corners, or `lozenge` for fully rounded ends. This
site-wide setting applies to hero and content action buttons, menu controls and
navigation highlights, and carousel controls. Action buttons use `primary_color` and `primary_link_color` for the first button,
and `surface_color` and `surface_link_color` for the second, with `border_color`
for its border. These colours are consistent across heroes and content sections.
Small carousel indicators become
rounded squares or circles respectively. Missing or unrecognised values use
`rectangular`.

## Navigation

Add `_data/navigation.yml` in the project site:

```yml
- title: Home
  url: /
- title: Project
  url: /project/
  children:
    - title: Research context
      url: /project/research-context/
    - title: Project setting
      url: /project/project-setting/
- title: Contact
  url: /contact/
```

If navigation is omitted, the theme falls back to a single Home link.
Navigation supports two levels. Top-level items appear in the header and any
`children` appear in a dropdown menu. A parent with children becomes a single
submenu button styled like a navigation link. It opens on hover, click, or tap;
keyboard users can use Enter, Space, or Arrow Down. The first submenu link,
Overview, leads to the parent's URL. Escape closes the submenu and returns focus
to its button.

## Add a page

Create a Markdown file in the project site, such as `outputs.md`:

```yml
---
title: Outputs
permalink: /outputs/
blocks:
  - type: image-text
    title: "Project outputs"
    content: |
      Add reports, papers, datasets, or links here.
---
```

Then add it to `_data/navigation.yml`:

```yml
- title: Outputs
  url: /outputs/
```

## Full-width page layout

Use `layout: landing-page` for a polished project page driven by front matter. It supports split-image and background heroes, achievement tiles, a carousel, styled sections before or after the carousel, card grids for media/projects/news, people and impact sections, optional section action buttons, and partner logos.

Add those components to the page's ordered `blocks` list. Each block declares a `type` of `achievements`, `carousel`, `standard`, `feature`, `highlight`, `page-cards`, or `partner-logos`.

The [homepage documentation section](index.md) links to the [beginner’s path](beginners/index.md), [page-building guidance](build-your-pages/index.md), [content and styling reference](reference/index.md), and [checks and maintenance](check-and-maintain/index.md). Plain Markdown, YAML blocks, Markdown with layout classes, and HTML wrappers can be combined on the same page; they are authoring methods, not four separate page layouts. All can use YAML front matter for page settings. Standard-page body content renders before its YAML blocks; landing pages render the hero, body, then their YAML blocks. See the [mixed-method example](build-your-pages/combine-writing-methods.md). The [landing-page guide](build-your-pages/landing-page-styles.md) covers the editable front matter pattern and the CSS classes generated by the layout.

## JavaScript catalogue layout

Use `layout: jcudl-catalog` for a page that keeps the project header and provides the mount element required by the JCU Digital Library catalogue. The theme does not currently include a footer.

Place `jcudl-style.css` at `assets/css/jcudl-style.css` and `jcudl.js` at `assets/js/jcudl.js`, then create a page such as `catalog.md`:

```yml
---
layout: jcudl-catalog
title: Project catalogue
permalink: /catalog/
---
```

The layout loads the Material Symbols stylesheet, the catalogue stylesheet, and the catalogue script, and renders the required `<div id="jcudlc">` element.

To let the catalogue fill the available width below the header, set `catalog_full_width: true` in the page front matter. By default, the catalogue stays within the normal page margins.

```yml
---
layout: jcudl-catalog
title: Project catalogue
catalog_full_width: true
---
```

The local asset locations can be overridden when needed:

```yml
jcudl_stylesheet: /catalog/jcudl-style.css
jcudl_script: /catalog/jcudl.js
```

## Content block types

Content blocks can be added in front matter, or simple narrative blocks can be written inline in the Markdown body.

### Markdown blocks

The Markdown and YAML sample pages show the same blocks in the same order.
Markdown uses blockquotes with class lines to group and style content:

```md
> ## Section title
>
> Markdown content can include **emphasis**, links, and lists.
{:.jcu-block .jcu-bg-secondary}
```

Place a class line **outside the quote it styles**, immediately below it. For
nested blocks, the class line belongs to the containing quote level:

```md
> ## Two columns
>
> > ### First column
> > First column content.
> {:.jcu-column}
>
> > ### Second column
> > Second column content.
> {:.jcu-column}
{:.jcu-block .jcu-two-column .jcu-bg-primary}
```

| Class | Purpose |
| --- | --- |
| `jcu-block` | Full content-panel width and standard block spacing |
| `jcu-bg-primary`, `jcu-bg-secondary` | Contained coloured panel with matching text and link colours |
| `jcu-two-column` / `jcu-column` | Two-column container / individual surface-coloured panel |
| `jcu-image-text` | Image and text grid containing `jcu-text` and `jcu-media` nested quotes |
| `jcu-image-left`, `jcu-image-right` | Image position (right is the default) |
| `jcu-image-small`, `jcu-image-large` | Image width (medium is the default) |
| `jcu-cards` / `jcu-card` | Card grid / individual surface-coloured card |
| `jcu-card-body`, `jcu-card-image`, `jcu-card-link` | Card text group, optional image group, and optional link paragraph |
| `jcu-gallery` | A paragraph of linked images with bold labels inside their links |
| `jcu-partner-logos` | A paragraph of ordinary or linked logo images |
| `jcu-columns-1` through `jcu-columns-6` | Column count for cards, galleries, and partner logos |

For an image-text block, put the title and paragraphs in a nested quote marked
`jcu-text`; put its image and optional caption in a second quote marked
`jcu-media`. Apply the image layout and background classes to the outer
`jcu-block`. Images sit flush against the coloured panel's outer side and stack
with the text on small screens, matching the YAML version.

For cards, mark the outer quote `jcu-block jcu-cards jcu-columns-3`. Each nested
`jcu-card` contains a `jcu-card-body` quote and, optionally, a `jcu-card-image`
quote. Text-only cards need no extra modifier. With `jcu-columns-1`, image cards
use wide rows on desktop, while text-only cards fill the row.

For galleries, write each item as `[![alt text](image-url) **Label**](page-url)`.
Put the images on consecutive lines and add `{:.jcu-gallery .jcu-columns-4}`
below the paragraph. Logo paragraphs use `{:.jcu-partner-logos .jcu-columns-4}`.
Wrap either in `jcu-block` when adding a heading or background. Omitted column
classes use the configured gallery, partner-logo, or page-card default.

Alerts use the existing type classes and the same colours as YAML alerts:

```md
> ## Note
>
> Supporting information.
{:.jcu-alert .jcu-alert--note}
```

Alert types are `note`, `important`, `warning`, and `caution`.

Automatic page cards are the one Liquid exception, because a CSS class cannot
collect pages from a folder. The short include reuses the YAML page-card
renderer:

```liquid
{% include page-cards.html
  title="Project pages"
  folder="project-pages/"
  columns=3
  link_text="Read more"
%}
```

The include also accepts `content`, `background`, and `background_mode`.
Markdown content is supported in `content`. Liquid URLs such as
`{{ "/assets/images/example.svg" | relative_url }}` work in the Markdown page
body; they should not be embedded inside YAML content fields.

See `sample-content/pages/markdown-syntax-content-blocks.md` for complete
examples of each structure. The older inline block classes have been replaced.

### HTML wrappers with Markdown

As an alternative to nested blockquotes, use HTML wrappers with the same classes
and `markdown="1"` to enable Markdown inside each wrapper:

```html
<section class="jcu-block jcu-bg-secondary" markdown="1">

## Section title

Content with **bold**, lists, and links.

</section>
```

Use nested `div` elements for columns, image/text groups, and card bodies, and
`article` elements for individual cards. Gallery, logo, and card-link paragraphs
can use `<p class="…" markdown="1">`. Keep blank lines around block content and
close every wrapper. Automatic page cards use the same Liquid include shown above.

See `sample-content/pages/html-markdown-content-blocks.md` for the same complete
examples as the YAML and Markdown sample pages.

### Alert blocks

Use `type: alert` in the page layout. It shares its colours and appearance with
Markdown `.jcu-alert` blocks:

```yml
- type: alert
  alert_type: "note"
  title: "Before you begin"
  content: |
    **Markdown** content, lists, and links are supported here.
```

`alert_type` accepts `note`, `important`, `warning`, or `caution`; missing or
unrecognised values use `note`. `title` is plain text and defaults to the type
name. These are static information boxes, not live announcements.

For each type, `theme_settings` provides four colour settings. For example,
`warning_color` controls the left border, `warning_background_color` the panel,
`warning_text_color` the heading and body, and `warning_link_color` its links.
If a background setting is omitted, it uses a 10% tint of that type's border
colour against white. These settings also control Markdown alerts.

### Text-only block

```yml
- type: image-text
  title: "Section title"
  content: |
    Markdown content goes here.
```

### Two column

```yml
- type: two-column
  title: "Section title"
  columns:
    - title: "Left column"
      content: |
        Markdown content goes here.
    - title: "Right column"
      content: |
        Markdown content goes here.
```

### Image and text

```yml
- type: image-text
  title: "Context with supporting image"
  image: "/assets/sample-images/card-research-context.svg"
  image_alt: "Abstract illustration of research context"
  image_position: "right"
  image_size: "medium"
  background: "secondary"
  background_mode: "block"
  caption: "Optional image caption."
  content: |
    Markdown content goes here.
```

Options:

- `image_position`: `left` or `right`
- `image_size`: `small`, `medium`, or `large`
- with a secondary background, the image sits flush against its left or right panel edge; text and captions retain padding, and stacked images span the panel width on small screens
- omit `background` to place the block directly on the page without panel padding
- omit `image` to display the text at the full content-panel width
- `one-column` remains a supported alias for `image-text`
- backgrounds stay within the content panel, with the same padding and rounded corners as the former one-column block; `background_mode: "behind"` is treated as `"block"` for these two type names

### Block backgrounds

Any content block can use the configured secondary colour as its background:

```yml
- type: image-text
  title: "Section title"
  background: "secondary"
  background_mode: "block"
  content: |
    Markdown content goes here.
```

Image-text blocks (including the `one-column` alias) always keep their background within the block. Other block types support `background_mode: "block"` to colour the block itself, or `background_mode: "behind"` to place a larger coloured panel behind it.

Block separator options are `none`, `line`, `accent`, and `band`. The `accent` style uses `primary_color`.

The landing-page layout does not show breadcrumbs. Other pages show breadcrumbs unless `theme_settings.show_breadcrumbs` is set to `false`.

### Markdown tables

Markdown pipe tables use the configured secondary colour for the header row. Internal table lines use a muted version of the secondary colour, with no lines on the outer edges.

```md
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |
```

On ordinary page backgrounds, table headings use the secondary background and matching text colour. Inside coloured panels, cards, and alerts, headers reverse the surrounding colours: the panel text colour becomes the header background, and the panel background becomes the header text colour. Body text inherits its surrounding text colour, with borders separating rows and columns.

Tables automatically receive subtle alternating row stripes on light backgrounds and remain unshaded on dark backgrounds. The theme classifies the existing page, primary, secondary, surface, and alert background colours at build time; nested cards and alerts use their own background rather than the outer panel. Stripe colours mix 94% of the background with 6% of its matching text colour. No additional configuration is needed. Use opaque three- or six-digit hex colours for build-time classification (`white` and `black` also work). Other colour expressions remain unshaded because their brightness cannot be resolved by this build-time helper.

### Image gallery

```yml
- type: gallery
  title: "Featured links"
  columns: 3
  items:
    - title: "Project context"
      image: "/assets/sample-images/gallery-background.svg"
      url: "/project/research-context/"
```

For front matter gallery blocks, `columns` overrides `theme_settings.image_gallery_max_items_per_row`. Inline `.jcu-image-gallery` blocks use only the value from `_config.yml`. Both gallery styles treat the configured value as a maximum and step down to fewer tiles per row as the screen narrows.

### Partner logos

Set logo defaults in `_config.yml`:

```yml
theme_settings:
  partner_logo_max_height: "6rem"
  partner_logo_max_items_per_row: 3
```

Then add a logo block to any page:

```yml
- type: partner-logos
  title: "Project partners"
  background: "secondary"
  columns: 3
  content: |
    Optional introductory text.
  partners:
    - name: "Partner organisation"
      logo: "/assets/sample-images/partner-placeholder.svg"
    - name: "Rainforest research partner"
      logo: "/assets/sample-images/partner-rainforest.svg"
    - name: "Reef research partner"
      logo: "/assets/sample-images/partner-reef.svg"
    - name: "Funding partner"
      logo: "/assets/sample-images/partner-mosaic.svg"
```

Both layouts support `background: "primary"` or `"secondary"`, using the matching
text and link colours. Omit `background` for the normal page background. In the
`page` layout, colour stays within a padded content panel; in `landing-page`,
it forms a full-width band. Partner-logo blocks use this standard treatment even
if an older block specifies `background_mode`. Use transparent logos that remain
readable on the chosen colour. White sample versions are available as
`partner-*-reverse-mono.svg`; the primary-background examples use these.

For front matter partner-logo blocks in either layout, `columns` overrides `theme_settings.partner_logo_max_items_per_row`. Inline `.jcu-partner-logos` blocks use only the value from `_config.yml`. Both partner logo styles treat the configured value as a maximum and step down to fewer logos per row as the screen narrows.

### Cards with content supplied in the block

Use `type: cards` in the `page` layout to write card content directly in front
matter. Cards use the same surface colours, borders, and layout as `page-cards`.
The card fields match landing-page section cards:

```yml
- type: cards
  title: "Project highlights"
  columns: 2
  content: |
    Optional introductory Markdown.
  cards:
    - title: "Research context"
      image: "/assets/sample-images/card-research-context.svg"
      image_alt: "Abstract research context illustration"
      text: |
        **Markdown** is supported in each card's text.
      url: "/sample-content/"
      link_text: "Learn more"
    - title: "Project priorities"
      text: "Images and links are optional."
```

- `cards` supplies the list, in display order; no folder lookup is performed.
- Each card accepts `title`, `text`, `image`, `image_alt`, `url`, and `link_text`.
- A text link appears when both `url` and `link_text` are supplied. Images link
  to `url` when provided.
- `columns` overrides `theme_settings.page_card_columns` (default: 3).
- With `columns: 1`, image cards use a wide row on desktop; text-only cards
  occupy the full row. At 900px or less, cards stack into a single column.
- The block also accepts `background` and `background_mode`, like page cards.

### Optional categories on manually authored cards

In a `type: cards` block, or the `cards` list of a landing-page section, add `card_category` to an individual card:

```yaml
cards:
  - title: Southern cassowary
    card_category: Species profile
    text: A rainforest seed disperser.
    url: /sample-content/content-blocks/southern-cassowary/
    link_text: Read species profile
```

The optional label appears above the title. It is plain text and uses the surface text colour; omit it for an unlabelled card. In body formats, place the category inside `jcu-card-body`, before its heading:

```markdown
> > > Species profile
> > > {:.jcu-card-category}
> > >
> > > ### Southern cassowary
> > >
> > > A rainforest seed disperser.
> > {:.jcu-card-body}
> {:.jcu-card}
{:.jcu-block .jcu-cards .jcu-columns-3}
```

```html
<article class="jcu-card" markdown="1">

<div class="jcu-card-body" markdown="1">

<p class="jcu-card-category">Species profile</p>

### Southern cassowary

A rainforest seed disperser.

</div>

</article>
```

Wrap HTML cards in a `jcu-block jcu-cards` section, as shown in the HTML and Markdown guide.

### Page cards

Set card defaults in `_config.yml`:

```yml
theme_settings:
  page_card_columns: 3
  page_card_link_text: "Read more"
```

Then add a card block to any page. The `folder` value matches Markdown pages in that folder:

```yml
- type: page-cards
  title: "Project pages"
  folder: "project-pages/"
  columns: 2
  link_text: "Read more"
```

Each page in the folder can provide card metadata:

```yml
---
title: Research context
permalink: /project/research-context/
order: 1
image: "/assets/sample-images/card-research-context.svg"
summary: "A short overview of the project setting."
---
```

If `columns: 1`, each card uses a wide layout with the image on the left and the summary on the right on desktop screens.

`page-cards` works in both the `page` and `landing-page` layouts. In a landing
page, place it anywhere in `blocks`. It also accepts optional `id`, `eyebrow`,
Markdown `content`, and `separator` fields. `separator` overrides the configured
landing-block separator setting.

For landing-page blocks, `background: "primary"` or `background: "secondary"`
uses the same browser-wide background as highlight or feature sections. Omit
`background` for the normal page background; `background_mode` is not used in
this layout. Cards retain their surface text and link colours on either background.

### Generated card metadata

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

## Local development

Use Ruby `3.3.4` to match the GitHub Pages build environment, then run:

```bash
bundle install
bundle exec jekyll serve
```

The configured GitHub Pages URL for this sample repository is:

```text
https://PaulineLawrey.github.io/jcu-research-website-theme/
```

## Maintaining the theme

Keep reusable presentation files in these folders:

- `_layouts`
- `_includes`
- `_data`
- `assets`

Sample content for previewing the theme is grouped under `sample-content/`. Sample-only media, including transparent partner logo placeholders in different proportions, is grouped under `assets/sample-images/`. Replace the placeholders with logos supplied by your own partners.

Research project sites that use this as a remote theme should create their own content pages and navigation data.

When releasing a stable version, create a Git tag such as `v1.0.0` and tell consuming sites to pin that tag in `remote_theme`.
