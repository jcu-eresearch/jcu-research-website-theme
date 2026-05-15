# JCU-themed research project website

This repository contains a simple Jekyll website designed for GitHub Pages. Page content is written in Markdown, with reusable block types for one-column content, two-column content, and image galleries.

## Configure the theme

Edit `_config.yml` to change the site title, logo, fonts, and colours:

```yml
title: "Research Project Website"
theme_settings:
  logo: "/assets/images/jcu-logo.svg"
  font_family: "Inter, Arial, Helvetica, sans-serif"
  primary_color: "#005EB8"
  secondary_color: "#F6C643"
  accent_color: "#00857A"
```

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

## Run locally

Use Ruby `3.3.4` to match the GitHub Pages build environment, then run:

```bash
bundle install
bundle exec jekyll serve
```

GitHub Pages will build the site automatically when the repository is published.
