---
layout: landing-page
title: Landing page blocks
card_title: "Landing-page blocks"
card_category: "Landing page"
permalink: /sample-content/landing-page-blocks/
order: 0
image: "/assets/sample-images/sample-landing-page-blocks.svg"
summary: "Examples of each block and style available in the landing-page layout."
content_separator: true
hero:
  type: "background"
  eyebrow: "background-hero"
  title: "Landing page blocks"
  title_alignment: "center"
  lead: "This background hero (type: background) places content over a full-width background image. Explore the split hero and other landing blocks below."
  background: "secondary"
  background_image: "/assets/sample-images/rainforest-canopy-hero.jpg"
  text_color: "#FFFFFF"
  link_color: "#FFFFFF"
  separator: true
  actions:
    - label: "View sections"
      url: "#standard-section"
    - label: "Read documentation"
      url: "https://github.com/jcu-eresearch/jcu-research-website-theme#readme"
blocks:
  - type: "split-hero"
    background: "primary"
    eyebrow: "split-hero"
    title: "Split hero block"
    lead: |
      This split hero uses `type: "split-hero"` in the blocks list. It places an image beside the lead and actions, with its heading above both. `background: "primary"` selects the matching theme text and link colours.
    image: "/assets/images/rwt/hero-reverse-mono-transparent.png"
    image_fit: "contain"
    image_alt: "RWT tropical leaf logo"
    actions:
      - label: "Read the landing-page guide"
        url: "/build-your-pages/landing-page-styles/"
      - label: "Browse samples"
        url: "/sample-content/"
  - type: "standard"
    eyebrow: "standard"
    title: "How to use landing page blocks"
    content: |
      Create a page with `layout: landing-page`, then add a `hero` and the ordered `blocks` the page needs.

      Each item in `blocks` needs a `type`: `achievements`, `carousel`, `standard`, `page-cards`, `partner-logos`, `split-hero`, or `background-hero`. The blocks render in the order they appear in the YAML `blocks` list, from top to bottom.

      Every landing block accepts `background: "primary"` or `"secondary"`. Omit it for the normal page background. The `standard` type handles text, images, actions, and cards on any of these backgrounds.

      The only block most landing pages should always have is `hero`. Everything in `blocks` is optional and can be added or reordered as the project grows.
  - type: "achievements"
    background: "secondary"
    eyebrow: "achievements"
    title: "Achievements block"
    lead: "Use achievements for project metrics, major outputs, milestones, or key facts. `eyebrow`, `lead`, and `separator` are optional. Each item can use a `value`, an `icon`, or an `image`."
    items:
      - value: "24"
        label: "Research outputs"
        text: "Use `value` for numbers, dates, or short high-impact facts."
      - icon: "A"
        label: "Advisory groups"
        text: "Use `icon` for a compact letter, symbol, or short visual marker."
      - image: "/assets/sample-images/card-green-turtle.svg"
        image_alt: "Green turtle"
        label: "Field sites"
        text: "Use `image` and `image_alt` when a small picture is more meaningful."
  - type: "carousel"
    eyebrow: "carousel"
    title: "Carousel block"
    lead: "Use the carousel for fieldwork, project locations, lab work, community activities, or visual summaries. The carousel `eyebrow`, `title`, `lead`, `separator`, and slide `caption` fields are optional."
    items:
      - image: "/assets/sample-images/gallery-background.svg"
        image_alt: "Abstract image representing a research landscape"
        caption: "Slide captions are optional."
      - image: "/assets/sample-images/gallery-about.svg"
        image_alt: "Abstract image representing project information"
        caption: "Add as many slides as the page needs."
      - image: "/assets/sample-images/gallery-contact.svg"
        image_alt: "Abstract image representing collaboration"
        caption: "Always include useful image alt text."
  - type: "standard"
    id: "standard-section"
    title: "Standard text section"
    eyebrow: "standard"
    content: |
      This is the default landing section style. Use it for ordinary explanatory content.

      Required: `type: "standard"` and `title`.

      Optional: `id`, `eyebrow`, `content`, `link_text`, `link_url`, `actions`, `image`, `image_alt`, `image_fit`, `image_link`, `image_link_label`, `image_position`, `cards`, `background`, and `separator`.
    link_text: "Browse content samples"
    link_url: "/sample-content/"
  - type: "standard"
    title: "Section with image"
    eyebrow: "standard"
    image: "/assets/sample-images/card-research-context.svg"
    image_alt: "Abstract research context image"
    content: |
      Add `image` to place media beside the text. The image sits on the right by default.

      Optional: set `image_position: "left"` to reverse the layout.
  - type: "standard"
    title: "Complete, clickable image"
    eyebrow: "standard"
    image: "/assets/sample-images/card-research-context.svg"
    image_alt: "Abstract research context image"
    image_fit: "contain"
    image_link: "/assets/sample-images/card-research-context.svg"
    image_link_label: "View the full-size research context image"
    content: |
      Set `image_fit: "contain"` to show the complete image at its natural proportions. This is useful for maps, diagrams and logos.

      `image_link` makes the image clickable. Use `image_link_label` to describe the link's purpose; the default is “View full-size image”.
  - type: "standard"
    title: "Image on the left"
    eyebrow: "standard"
    image_position: "left"
    image: "/assets/sample-images/card-project-setting.svg"
    image_alt: "Abstract project setting image"
    content: |
      This section uses `image_position: "left"`. The layout stacks cleanly on small screens.
  - type: "standard"
    background: "secondary"
    title: "Standard block on secondary background"
    eyebrow: "standard"
    image: "/assets/sample-images/card-tree-kangaroo.svg"
    image_alt: "Abstract feature image"
    content: |
      Use `type: "standard"` with `background: "secondary"` for a full-width background band. It uses `secondary_color` from `_config.yml`.

      Good for project summaries, research focus areas, or sections that need gentle emphasis.
  - type: "standard"
    background: "primary"
    title: "Standard block on primary background"
    eyebrow: "standard"
    content: |
      Use `type: "standard"` with `background: "primary"` for a strong full-width band using `primary_color`.

      Good for impacts, calls to action, key findings, or short statements that should stand apart.
    link_text: "View generated species cards"
    link_url: "#species-page-cards"
  - type: "standard"
    title: "Card grid section"
    eyebrow: "standard"
    cards:
      - title: "Card with image"
        card_category: "Species profile"
        image: "/assets/sample-images/card-cassowary.svg"
        image_alt: "Southern cassowary"
        text: "Cards can include an optional image, text, and link."
        link_text: "Read southern cassowary profile"
        url: "/sample-content/content-blocks/southern-cassowary/"
      - title: "Card without image"
        text: "Only `title` is required. Use `text` for a short summary."
        link_text: "View YAML content blocks"
        url: "/sample-content/content-blocks/"
      - title: "Card without link"
        image: "/assets/sample-images/card-crocodile.svg"
        image_alt: "Estuarine crocodile"
        text: "Leave out `url` and `link_text` when the card is informational only."
  - type: "standard"
    background: "secondary"
    title: "Standard card grid on secondary background"
    eyebrow: "standard"
    cards:
      - title: "Markdown content blocks"
        text: "See how Markdown content blocks present text, images, galleries, and cards."
        link_text: "View Markdown content blocks"
        url: "/sample-content/inline-content-blocks/"
      - title: "HTML and Markdown content blocks"
        text: "Explore content blocks that combine HTML wrappers with Markdown."
        link_text: "View HTML and Markdown examples"
        url: "/sample-content/html-markdown-content-blocks/"
      - title: "Configured colours"
        text: "Review the theme colours used for text, links, panels, and alerts."
        link_text: "View configured colours"
        url: "/sample-content/configured-colours/"
  - type: "standard"
    title: "Section with action buttons"
    eyebrow: "standard"
    content: |
      Add up to two optional `actions` to any landing section. The first action uses the primary colour and the second uses the surface colour.
    actions:
      - label: "Contact us"
        url: "/contact/"
      - label: "Browse samples"
        url: "/sample-content/"
  - type: "page-cards"
    id: "species-page-cards"
    eyebrow: "page-cards"
    title: "Page cards block, three per row"
    folder: "sample-content/animals/"
    columns: 3
    link_text: "Read species profile"
    background: "secondary"
    separator: true
    content: |
      These cards are collected from the animals folder and displayed in page order. The secondary background fills the browser width, while each card uses the configured surface colours.
  - type: "page-cards"
    eyebrow: "page-cards"
    title: "Page cards block, one per row"
    folder: "sample-content/animals/"
    columns: 1
    link_text: "Open full profile"
    content: |
      With `columns: 1`, images sit beside their summaries on desktop and stack above them on smaller screens. Omit `background` to use the normal page background.
  - type: "standard"
    eyebrow: "standard"
    background: "primary"
    title: "Table on primary background"
    content: |
      The table uses the primary background and matching text colours. Light backgrounds receive subtle alternating row stripes; dark backgrounds remain unshaded. Borders separate the rows.

      | Activity | Habitat | Purpose |
      | --- | --- | --- |
      | Wildlife survey | Rainforest | Record species observations. |
      | Water sampling | Estuary | Monitor water quality. |
      | Nest monitoring | Coast | Track nesting success. |
      | Habitat mapping | Reef | Identify important habitat areas. |
  - type: standard
    eyebrow: "standard"
    title: "Table on standard background"
    content: |
      No background colour is specified for this block. The table body uses the standard page background and matching text colours, with subtle alternating stripes when that background is light.

      | Activity | Habitat | Purpose |
      | --- | --- | --- |
      | Wildlife survey | Rainforest | Record species observations. |
      | Water sampling | Estuary | Monitor water quality. |
      | Nest monitoring | Coast | Track nesting success. |
      | Habitat mapping | Reef | Identify important habitat areas. |
  - type: "partner-logos"
    background: "primary"
    columns: 2
    eyebrow: "partner-logos"
    title: "Partner logos with background: primary"
    content: |
      White reverse mono logos have transparent backgrounds, so the primary colour shows through their negative spaces.

      Use `type: "partner-logos"` for funders, collaborators, institutions, and participating groups. The title is optional. Place the block wherever it belongs in `blocks`.
    items:
      - name: "Partner organisation"
        logo: "/assets/sample-images/partner-placeholder-reverse-mono.svg"
      - name: "Rainforest research partner"
        logo: "/assets/sample-images/partner-rainforest-reverse-mono.svg"
      - name: "Reef research partner"
        logo: "/assets/sample-images/partner-reef-reverse-mono.svg"
      - name: "Funding partner"
        logo: "/assets/sample-images/partner-mosaic-reverse-mono.svg"
  - type: "partner-logos"
    background: "secondary"
    columns: 3
    eyebrow: "partner-logos"
    title: "Partners on a secondary background"
    content: |
      Use `type: "partner-logos"` for funders, collaborators, institutions, and participating groups. This example displays a heading and uses a secondary background with up to three logos per row. Place the block wherever it belongs in `blocks`.
    items:
      - name: "Partner organisation"
        logo: "/assets/sample-images/partner-placeholder.svg"
      - name: "Rainforest research partner"
        logo: "/assets/sample-images/partner-rainforest.svg"
      - name: "Reef research partner"
        logo: "/assets/sample-images/partner-reef.svg"
      - name: "Funding partner"
        logo: "/assets/sample-images/partner-mosaic.svg"
---
