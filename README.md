# JCU research website theme

A JCU-themed Jekyll theme for research project communications. The theme is designed for GitHub Pages, so research teams can maintain project websites with Markdown content while reusing shared JCU-styled layouts, navigation, content blocks, and assets.

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
title: "Research Project Website"
description: "A JCU-themed static website for research project communications."
url: "https://USERNAME.github.io"
baseurl: "/REPOSITORY-NAME"

remote_theme: jcu-eresearch/jcu-research-website-theme
plugins:
  - jekyll-remote-theme

theme_settings:
  show_breadcrumbs: true
  logo: "/assets/images/jcu-logo-mono.svg"
  project_logo: "/assets/images/project-logo.svg"
  project_logo_alt: "Project logo"
  sidebar_logo_tile_background: "transparent"
  sidebar_logo_tile_border_color: "transparent"
  font_family: "Lato, Inter, Arial, Helvetica, sans-serif"
  heading_font_family: "Lato, Inter, Arial, Helvetica, sans-serif"
  primary_color: "#005EB8"
  secondary_color: "#00857A"
  accent_color: "#F6C643"
  text_color: "#344054"
  heading_color: "#344054"
  muted_text_color: "#667085"
  background_color: "#FFFFFF"
  surface_color: "#F8FAFC"
  secondary_background_color: "#DCDAC3"
  secondary_background_opacity: "0.5"
  border_color: "#D0D5DD"
  table_banded_rows: true
  block_separator_style: "none"
  partner_logo_max_height: "4rem"
  partner_logo_columns: 4
  page_card_columns: 3
  page_card_link_text: "Read more"

defaults:
  - scope:
      path: ""
      type: "pages"
    values:
      layout: "page"
```

If your site uses the default JCU and project logo assets from this theme, the paths above will work through the remote theme. To use your own logos, add files to the consuming site's `assets/images/` folder and update the paths.

## Navigation

Add `_data/navigation.yml` in the project site:

```yml
- title: About
  url: /about/
- title: Background
  url: /background/
  children:
    - title: Research Context
      url: /background/research-context/
    - title: Project Setting
      url: /background/project-setting/
- title: Contact
  url: /contact/
```

If navigation is omitted, the theme falls back to a single Home link.

## Add a page

Create a Markdown file in the project site, such as `outputs.md`:

```yml
---
title: Outputs
permalink: /outputs/
blocks:
  - type: one-column
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

## Content block types

Content blocks can be added in front matter, or simple narrative blocks can be written inline in the Markdown body.

### Inline blocks

Use Markdown blockquote notation with a short class line when you want styled blocks to appear among ordinary page content:

```md
> ## Section title
>
> Markdown content can include **emphasis**, [links](https://www.jcu.edu.au/), and lists.
{:.jcu-block .jcu-block--coloured-bkgnd}
```

Inline block options:

- `.jcu-block--coloured-bkgnd`: use the configured secondary background colour
- `.jcu-block--card`: use the theme card colour with a border
- `.jcu-block--accent`: add the JCU accent line to the left of a block
- `.jcu-block--full`: allow the block to use the full content width
- `.jcu-block--image-left`: float the first image in the block to the left
- `.jcu-block--image-right`: float the first image in the block to the right

Place the class line directly underneath the block it should style.

For GitHub-style alerts, use a labelled blockquote with a JCU alert class:

```md
> **Note**
>
> Highlights information that users should take into account.
{:.jcu-alert .jcu-alert--note}
```

Alert options are `.jcu-alert--note`, `.jcu-alert--tip`, `.jcu-alert--important`, `.jcu-alert--warning`, and `.jcu-alert--caution`.

For inline partner logos, use standard Markdown images and linked images, then add a column class:

```md
[![James Cook University logo]({{ "/assets/images/jcu-logo-colour.svg" | relative_url }})](https://www.jcu.edu.au/)
![Partner organisation logo]({{ "/assets/images/partner-placeholder.svg" | relative_url }})
![Rainforest research partner logo]({{ "/assets/images/partner-rainforest.svg" | relative_url }})
{:.jcu-partner-logos .jcu-partner-logos--3}
```

Inline partner logo options are `.jcu-partner-logos--2`, `.jcu-partner-logos--3`, and `.jcu-partner-logos--4`.

For an inline image gallery, use standard Markdown images or linked images, then add a gallery column class:

```md
[![Southern cassowary]({{ "/assets/images/card-cassowary.svg" | relative_url }})]({{ "/sample-content-pages/animals/southern-cassowary/" | relative_url }})
[![Lumholtz's tree-kangaroo]({{ "/assets/images/card-tree-kangaroo.svg" | relative_url }})]({{ "/sample-content-pages/animals/lumholtzs-tree-kangaroo/" | relative_url }})
[![Estuarine crocodile]({{ "/assets/images/card-crocodile.svg" | relative_url }})]({{ "/sample-content-pages/animals/estuarine-crocodile/" | relative_url }})
{:.jcu-image-gallery .jcu-image-gallery--3}
```

Inline image gallery options are `.jcu-image-gallery--2`, `.jcu-image-gallery--3`, and `.jcu-image-gallery--4`.

### One column

```yml
- type: one-column
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
  image: "/assets/images/card-research-context.svg"
  image_alt: "Abstract illustration of research context"
  image_position: "right"
  image_size: "medium"
  background: "secondary"
  background_mode: "behind"
  caption: "Optional image caption."
  content: |
    Markdown content goes here.
```

Options:

- `image_position`: `left` or `right`
- `image_size`: `small`, `medium`, or `large`
- omit `image` to display the text at full width

### Block backgrounds

Any content block can use the configured secondary background:

```yml
- type: one-column
  title: "Section title"
  background: "secondary"
  background_mode: "block"
  content: |
    Markdown content goes here.
```

Use `background_mode: "block"` to colour the block itself, or `background_mode: "behind"` to place a larger coloured panel behind the block.

Block separator options are `none`, `line`, `accent`, and `band`.

### Image gallery

```yml
- type: gallery
  title: "Featured links"
  items:
    - title: "Background"
      image: "/assets/images/gallery-background.svg"
      url: "/background/"
```

### Partner logos

Set logo defaults in `_config.yml`:

```yml
theme_settings:
  partner_logo_tile_background: "#FFFFFF"
  partner_logo_max_height: "4rem"
  partner_logo_columns: 4
```

Then add a logo block to any page:

```yml
- type: partner-logos
  title: "Project partners"
  columns: 3
  content: |
    Optional introductory text.
  partners:
    - name: "James Cook University"
      logo: "/assets/images/jcu-logo-colour.svg"
      url: "https://www.jcu.edu.au/"
    - name: "Partner organisation"
      logo: "/assets/images/partner-placeholder.svg"
```

### Page cards

Set card defaults in `_config.yml`:

```yml
theme_settings:
  page_card_columns: 3
  page_card_link_text: "View page"
```

Then add a card block to any page. The `folder` value matches Markdown pages in that folder:

```yml
- type: page-cards
  title: "Background pages"
  folder: "background-pages/"
  columns: 2
  link_text: "Read more"
```

Each page in the folder can provide card metadata:

```yml
---
title: Research Context
permalink: /background/research-context/
order: 1
image: "/assets/images/card-research-context.svg"
summary: "A short overview of the project setting."
---
```

If `columns: 1`, each card uses a wide layout with the image on the left and the summary on the right on desktop screens.

## Local development

Use Ruby `3.3.4` to match the GitHub Pages build environment, then run:

```bash
bundle install
bundle exec jekyll serve
```

The configured GitHub Pages URL for this sample repository is:

```text
https://jcu-eresearch.github.io/jcu-research-website-theme/
```

## Maintaining the theme

Keep reusable presentation files in these folders:

- `_layouts`
- `_includes`
- `_data`
- `assets`

The Markdown pages in this repository are sample content for previewing the theme. Research project sites that use this as a remote theme should create their own content pages and navigation data.

When releasing a stable version, create a Git tag such as `v1.0.0` and tell consuming sites to pin that tag in `remote_theme`.
