---
layout: page
title: "Landing-page styles"
permalink: /build-your-pages/landing-page-styles/
order: 1
summary: "Build a project overview with heroes, full-width sections, cards, and partner logos."
---

This is a reference guide. New to website editing? Start with [Beginners]({{ "/beginners/" | relative_url }}). Landing pages can combine a YAML hero, Markdown body content (including styled body blocks), and landing-page YAML blocks. They render in that order.

The `landing-page` layout is designed for research project websites that need a polished page without requiring the author to make design decisions. Most content is edited in page front matter.

Landing pages use the same shared header navigation as every other page. The menu uses `_data/navigation.yml`, which is useful when a page exists in the site but is not represented as a section on the landing page.

Set the default separator behaviour in `_config.yml`:

```yml
theme_settings:
  landing_block_separators: false
  button_shape: "rectangular"
```

When `landing_block_separators` is `true`, landing blocks show separator bars unless a block sets `separator: false`. When it is `false`, blocks hide separator bars unless a block sets `separator: true`.

Set `theme_settings.button_shape` to `rectangular` (the default, with slightly
rounded corners) or `lozenge` (fully rounded ends). Hero and section action
buttons share this setting with menu and carousel controls throughout the site.

## Use the layout

```yml
---
layout: landing-page
title: Home
permalink: /
hero:
  type: "split"
  eyebrow: "Research project"
  title: "Research with purpose, shared with clarity"
  lead: "A short plain-language description of the project."
  image: "/assets/sample-images/gallery-background.svg"
  image_alt: "Description of the hero image"
  title_alignment: "left"
  separator: true
  actions:
    - label: "Explore our research"
      url: "#our-research"
    - label: "Contact us"
      url: "/contact/"
blocks:
  - type: "standard"
    id: "our-research"
    title: "Our research"
    content: |
      Explain the research problem and what the project aims to achieve.
---
```

The hero follows `theme_settings.landing_block_separators` unless `hero.separator` is set.

There are two hero types:

- `type: "split"` (the default) places a separate image beside the lead and actions. Supply `image` and `image_alt`. Its eyebrow and title span the hero above the lead, actions, and image. An optional `background_color` fills the hero behind them.
- `type: "background"` places the content on a background colour that spans the full browser width. `background_image` is optional; when present, it also spans the full browser width and the background colour forms a subtle overlay. The text stays within the normal content width. Background images are decorative, so they do not use `image_alt`. Use this type when no image is needed.

For a split hero displaying a logo, set `image_fit: "contain"` to show the complete image on a transparent media panel. Ordinary hero images use `cover`.

Both types accept `title_alignment: "left"`, `"center"`, or `"right"`; the default is left. This aligns the eyebrow and title together across the hero, while the lead and buttons keep their own layout. `text_color` optionally overrides the eyebrow, title, and lead colours, while `link_color` overrides links in the lead. Set them when a custom background or image makes the theme colours difficult to read; buttons use the text or link colour paired with their own background.

Background images fill the hero without distortion. They keep their aspect ratio and are cropped from the centre when the hero's proportions differ from the image. `overlay_opacity` accepts a percentage such as `20%` (the default). Choose a background colour, text colour, and image that keep the words readable; increase the opacity if the image is busy.

```yml
hero:
  type: "background"
  eyebrow: "Research project"
  title: "Research with purpose"
  title_alignment: "center"
  lead: "A short introduction to the project."
  background_color: "#0B4F8A"
  background_image: "/assets/sample-images/gallery-background.svg"
  text_color: "#FFFFFF"
  link_color: "#FFFFFF"
  overlay_opacity: "20%"
```

## Main sections

Use the ordered `blocks` list for every block below the hero. Each item needs one of these types:

- `achievements`: facts, outcomes, or milestones
- `carousel`: a sequence of project images
- `standard`: text, images, actions, or cards on the normal page background
- `feature`: the same fields on a band using `secondary_color`
- `highlight`: the same fields on a strong band using `primary_color`
- `partner-logos`: organisation and funder logos
- `page-cards`: cards generated from pages in a folder, with configurable columns

Blocks render in list order, so authors can place a section before or after the carousel without using duplicate YAML keys.

Recommended sections for research project sites are:

- Our research
- In the media
- Our projects
- Latest news
- Impacts
- Who we are
- Partner organisations
- Contact us

Sections can contain text, an image, a text link, up to two action buttons, or a set of cards.

Markdown is supported in section `content`, hero and block `lead`, card and achievement `text`, carousel `caption`, and partner `content`. Use YAML's `|` syntax for multiple paragraphs or lists. Titles, labels, button text, and image alt text remain plain text.

```yml
blocks:
  - type: "feature"
    title: "Our research"
    eyebrow: "Focus"
    image: "/assets/sample-images/card-research-context.svg"
    image_alt: "Abstract research context image"
    content: |
      Explain the research problem, why it matters, and how the project responds.
    actions:
      - label: "View content-block examples"
        url: "/sample-content/content-blocks/"
      - label: "Browse samples"
        url: "/sample-content/"
    separator: true
```

The optional `actions` list supports up to two buttons. The first uses `primary_color` with `primary_link_color`; the second uses `surface_color` with `surface_link_color` and the standard `border_color`. Hero and section buttons use the same colours and underline on hover. Use `link_text` and `link_url` instead when a section only needs a quiet text link.

Set `separator: true` on any block to add a primary-colour separator bar after it. Set `content_separator` in page front matter to control the separator after optional Markdown body content.

Use `id` on a section and a fragment such as `#our-research` for an action that jumps within the page. Give each ID a unique name. For achievements, carousel, and partner-logo blocks, the ID is attached to the heading; include a title when using a heading as an anchor.

## Achievements

Use `type: "achievements"` for prominent facts, outcomes, or milestones. Three items work well in the desktop grid, but the list is not limited to three. Each tile accepts `value`, `icon`, and `image`; an image takes precedence over an icon, and a value can appear alongside either. The eyebrow and title default to “Achievements” when omitted.

```yml
blocks:
  - type: "achievements"
    title: "Progress at a glance"
    separator: true
    items:
      - value: "12"
        label: "Active studies"
        text: "Research activities underway with communities and partners."
      - icon: "P"
        label: "Publications"
        text: "Papers, reports, and datasets from the project."
      - image: "/assets/sample-images/card-green-turtle.svg"
        image_alt: "Green turtle"
        label: "Field sites"
        text: "Places where project activities are happening."
```

## Image carousel

Use `type: "carousel"` for a short sequence of project images. `eyebrow`, `title`, and `lead` are optional.

```yml
blocks:
  - type: "carousel"
    eyebrow: "Gallery"
    title: "Research in context"
    lead: "Use the carousel for fieldwork, project locations, lab work, or community activities."
    separator: true
    items:
      - image: "/assets/sample-images/gallery-background.svg"
        image_alt: "Abstract background image"
        caption: "Project context and research setting"
      - image: "/assets/sample-images/gallery-about.svg"
        image_alt: "Abstract project information image"
        caption: "Research activities and project updates"
```

## Card sections

Cards work well for media items, projects, news, people, or impact stories.

```yml
blocks:
  - type: "standard"
    title: "Species profiles"
    eyebrow: "Updates"
    cards:
      - title: "Southern cassowary"
        card_category: "Species profile"
        text: "Read about this **rainforest species** and its role in seed dispersal."
        link_text: "Read southern cassowary profile"
        url: "/sample-content/content-blocks/southern-cassowary/"
```

The optional `card_category` field adds a short label above a manually authored card's title. Omit it to keep the existing appearance. It is plain text, displayed in uppercase using the card's surface text colour; it is separate from the title and link.

## Partner organisations

Use `type: "partner-logos"` for funders, collaborators, and institutions. Its position in `blocks` determines where it is displayed.

The `title` is optional. Omit it or set it to an empty string to hide the visible heading; the theme retains an accessible label for the section. Set `background: "primary"` or `"secondary"` to place the block on a full-width band using that colour’s matching text and link settings. Omit `background` for the normal page background. `background_mode` is unnecessary and does not change this treatment. Set `columns` to the maximum number of logos per row; it overrides `partner_logo_max_items_per_row`, and fewer columns are used on narrower screens. Logo images have no tile background, allowing transparent monochrome logos to sit directly on the band.

```yml
blocks:
  - type: "partner-logos"
    background: "primary"
    columns: 2
    title: ""
    content: |
      Recognise the organisations that make the project possible.
    items:
      - name: "Example partner"
        logo: "/assets/sample-images/partner-placeholder-reverse-mono.svg"
      - name: "Example funding partner"
        logo: "/assets/sample-images/partner-mosaic-reverse-mono.svg"
```

## Page cards

Use `type: "page-cards"` anywhere in `blocks` to collect pages from a folder.
Cards use each page's `title`, optional `image`, and `summary` (or `description`),
sorted by `order`. The current page and `index.md` pages are excluded.

```yml
blocks:
  - type: "page-cards"
    id: "project-pages"
    eyebrow: "Explore"
    title: "Species profiles"
    folder: "sample-content/animals/"
    columns: 3
    link_text: "Read more"
    background: "secondary"
    separator: true
    content: |
      Read about our **research**, people, and outputs.
```

`columns` and `link_text` default to `theme_settings.page_card_columns` and
`theme_settings.page_card_link_text`. With `columns: 1`, images sit beside text
on desktop; text-only cards fill the row. Cards stack at 900px or narrower.

The heading, eyebrow, introduction, ID, and separator override are optional.
`background: "primary"` or `"secondary"` fills the browser width using the
highlight or feature style. Omit it for the normal page background.
`background_mode` is not used. Each card retains the surface colours.

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

## Style options

The layout uses the existing theme colours:

- `primary_color` for hero headings, primary buttons, highlight sections, and structural emphasis; pair it with `primary_text_color` and `primary_link_color`
- `secondary_color` for feature bands and coloured content-block backgrounds; pair it with `secondary_text_color` and `secondary_link_color`
- `background_color` for the normal page background; pair it with `background_text_color` and `background_link_color`
- `surface_color` for cards and callouts; pair it with `surface_text_color` and `surface_link_color`
- `warning_color` for Warning alerts; pair it with `warning_text_color` and `warning_link_color`
- `border_color` for structural borders

Alert settings apply when you include alert content in the Markdown body. Each alert type has `TYPE_background_color`, `TYPE_text_color`, and `TYPE_link_color`; `TYPE_color` supplies its left border, where `TYPE` is `note`, `important`, `warning`, or `caution`.

Hero overlays use `background_color` and `overlay_opacity` in `hero`. Cards use the shared surface colours. Configure the current settings rather than adding unsupported keys.

## CSS classes

The layout generates these main classes:

- `.landing-page`
- `.site-header`
- `.header-nav`
- `.header-submenu`
- `.landing-hero`
- `.landing-hero--split`
- `.landing-hero--background`
- `.landing-hero-heading`
- `.landing-hero-content`
- `.landing-hero-media`
- `.landing-actions`
- `.landing-button`
- `.landing-block--separator`
- `.landing-section`
- `.landing-section--feature`
- `.landing-section--highlight`
- `.landing-section--with-media`
- `.landing-card-grid`
- `.landing-card`
- `.landing-achievement-grid`
- `.landing-achievement`
- `.landing-carousel`
- `.landing-carousel-slide`
- `.landing-partners`
- `.landing-page-cards`
- `.page-cards`
- `.page-card`
- `.landing-section-actions`

Researchers usually should not need to edit these classes. Change content in front matter first, and only edit CSS for project-specific design requirements.

## Editing and previewing

Keep one ordered `blocks` list in front matter. Indent nested fields with spaces and use `|` for multiline Markdown. Split hero images and carousel images need useful alt text; background hero images are decorative. Replace sample assets and destinations with your own before using an example on a project site. Section cards are a simple grid; use `page-cards` when you need folder-generated cards or explicit column settings.

[View the working landing-page examples]({{ "/sample-content/landing-page-blocks/" | relative_url }}) or [return to Build your pages]({{ "/build-your-pages/" | relative_url }}).
