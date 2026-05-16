# JCU-themed research project website

This repository contains a simple Jekyll website designed for GitHub Pages. Page content is written in Markdown, with reusable block types for one-column content, two-column content, and image galleries.

## Configure the theme

Edit `_config.yml` to change the site title, logo, fonts, and colours:

```yml
title: "Research Project Website"
theme_settings:
  show_breadcrumbs: true
  logo: "/assets/images/jcu-logo.svg"
  project_logo: "/assets/images/project-logo.svg"
  project_logo_alt: "Project logo"
  sidebar_logo_tile_background: "transparent"
  sidebar_logo_tile_border_color: "transparent"
  # Optional project-logo-specific overrides:
  # sidebar_project_logo_tile_background: "#FFFFFF"
  # sidebar_project_logo_tile_border_color: "rgba(255, 255, 255, 0.45)"
  font_family: "Inter, Arial, Helvetica, sans-serif"
  primary_color: "#005EB8"
  secondary_color: "#F6C643"
  accent_color: "#00857A"
  block_separator_style: "line"
```

Block separator options are `none`, `line`, `accent`, and `band`.

## Add a page

1. Create a new Markdown file, such as `outputs.md`.
2. Add front matter:

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

3. Add the page to `_data/navigation.yml`:

```yml
- title: Outputs
  url: /outputs/
```

Nested menu items can be added with `children`:

```yml
- title: Background
  url: /background/
  children:
    - title: Research Context
      url: /background/research-context/
    - title: Project Setting
      url: /background/project-setting/
```

## Content block types

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

Use this for one-column content with an optional image:

```yml
- type: image-text
  title: "Context with supporting image"
  image: "/assets/images/card-research-context.svg"
  image_alt: "Abstract illustration of research context"
  image_position: "right"
  image_size: "medium"
  caption: "Optional image caption."
  content: |
    Markdown content goes here.
```

Options:

- `image_position`: `left` or `right`
- `image_size`: `small`, `medium`, or `large`
- omit `image` to display the text at full width

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

Set the maximum logo height in `_config.yml`:

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
      logo: "/assets/images/partner-jcu.svg"
      url: "https://www.jcu.edu.au/"
    - name: "Partner organisation"
      logo: "/assets/images/partner-placeholder.svg"
```

### Page cards

Set the default number of cards per row in `_config.yml`:

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

## Run locally

Use Ruby `3.3.4` to match the GitHub Pages build environment, then run:

```bash
bundle install
bundle exec jekyll serve
```

GitHub Pages will build the site automatically when the repository is published.
