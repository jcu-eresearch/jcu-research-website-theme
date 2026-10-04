---
title: YAML syntax content blocks
card_title: "YAML blocks"
card_category: "Page content"
permalink: /sample-content/content-blocks/
order: 2
image: "/assets/sample-images/sample-yaml-blocks.svg"
summary: "Examples of each content block style available with this template."
blocks:
  - type: image-text
    title: "Text-only block"
    background: "secondary"
    background_mode: "block"
    content: |
      The image-text block without an image uses the full content-panel width and is useful for short explanations, introductions, and narrative content. This example uses the optional secondary background colour on the block itself.

      Northern Queensland supports rainforest, reef, woodland, wetland, and savanna habitats. These landscapes are home to animals found nowhere else in Australia.
  - type: two-column
    title: "Two-column block"
    columns:
      - title: "Rainforest species"
        content: |
          The southern cassowary and Lumholtz's tree-kangaroo are strongly associated with Wet Tropics rainforest. They rely on connected habitat and healthy native vegetation.
      - title: "Coastal and marine species"
        content: |
          Estuarine crocodiles and green turtles connect freshwater, coastal, and reef systems. Their life cycles are shaped by water quality, nesting habitat, and climate.
  - type: two-column
    title: "Two-column block with primary background"
    background: "primary"
    background_mode: "block"
    columns:
      - title: "Rainforest research"
        content: |
          This example uses `background: "primary"` to place both columns inside a coloured content panel. The block heading uses the matching primary text colour.

          Research in the Wet Tropics explores how connected forests support wildlife and seed dispersal.
      - title: "Coastal research"
        content: |
          Each column retains its surface background and matching text and link colours, making it readable against the surrounding primary panel.

          Coastal research connects seagrass meadows, reef habitats, and nesting beaches.

          [View the sample pages](../).
  - type: image-text
    title: "Image and text block, image left, without background"
    image: "/assets/sample-images/card-cassowary.svg"
    image_alt: "Stylised southern cassowary in rainforest"
    image_position: "left"
    image_size: "small"
    caption: "Omit background to use the normal page background."
    content: |
      This example uses `image_position: "left"` and omits `background`. The image and text sit directly on the page, with a gap between them and no outer panel padding.

      Southern cassowaries disperse the seeds of many rainforest plants. Their movement through connected forest helps maintain the diversity of the Wet Tropics.
  - type: image-text
    title: "Image and text block, image left, with background"
    image: "/assets/sample-images/card-tree-kangaroo.svg"
    image_alt: "Stylised Lumholtz's tree-kangaroo in rainforest"
    image_position: "left"
    image_size: "small"
    background: "secondary"
    background_mode: "block"
    caption: "Example with image_position: left, image_size: small, and background contained within the content panel."
    content: |
      This block places an optional image beside a single text column. The image can be positioned on the left or right and set to small, medium, or large.

      Lumholtz's tree-kangaroo is an arboreal marsupial of the Wet Tropics. It moves through the forest canopy and is vulnerable to habitat fragmentation.
  - type: image-text
    title: "Image and text block, image right, with background"
    image: "/assets/sample-images/card-green-turtle.svg"
    image_alt: "Stylised green turtle in coastal waters"
    image_position: "right"
    image_size: "medium"
    background: "secondary"
    caption: "The image sits flush with the right edge of the coloured panel."
    content: |
      Use `image_position: "right"` to place the image beside the text on the right. The background stays within the content panel, and the image has no padding on its outer side.

      Green turtles connect reef and seagrass habitats with coastal nesting beaches. Protecting these linked environments supports their life cycle.

  - type: gallery
    title: "Image gallery block"
    columns: 4
    items:
      - title: "Southern cassowary"
        image: "/assets/sample-images/card-cassowary.svg"
        url: "/sample-content/content-blocks/southern-cassowary/"
      - title: "Lumholtz's tree-kangaroo"
        image: "/assets/sample-images/card-tree-kangaroo.svg"
        url: "/sample-content/content-blocks/lumholtzs-tree-kangaroo/"
      - title: "Estuarine crocodile"
        image: "/assets/sample-images/card-crocodile.svg"
        url: "/sample-content/content-blocks/estuarine-crocodile/"
      - title: "Green turtle"
        image: "/assets/sample-images/card-green-turtle.svg"
        url: "/sample-content/content-blocks/green-turtle/"
  - type: partner-logos
    title: "Partner logos block"
    columns: 4
    content: |
      The partner logo block can use a `columns` override in front matter as the maximum number of logos per row, with optional links from each logo. If `columns` is omitted, it uses `partner_logo_max_items_per_row` from `_config.yml`.
      A `background` colour setting is optional.
    partners:
      - name: "Partner organisation"
        logo: "/assets/sample-images/partner-placeholder.svg"
      - name: "Rainforest research partner"
        logo: "/assets/sample-images/partner-rainforest.svg"
      - name: "Reef research partner"
        logo: "/assets/sample-images/partner-reef.svg"
      - name: "Funding partner"
        logo: "/assets/sample-images/partner-mosaic.svg"
  - type: partner-logos
    title: "Partner logos block with background: primary"
    background: "primary"
    columns: 2
    content: |
      White reverse mono logos have transparent backgrounds, so the primary colour shows through their negative spaces.

    partners:
      - name: "Partner organisation"
        logo: "/assets/sample-images/partner-placeholder-reverse-mono.svg"
      - name: "Rainforest research partner"
        logo: "/assets/sample-images/partner-rainforest-reverse-mono.svg"
      - name: "Reef research partner"
        logo: "/assets/sample-images/partner-reef-reverse-mono.svg"
      - name: "Funding partner"
        logo: "/assets/sample-images/partner-mosaic-reverse-mono.svg"
  - type: cards
    title: "Cards block, > 1 column"
    columns: 3
    content: |
      These cards use the same surface colours and styling as page cards, but their content is written here rather than collected from other pages. Images and links are optional.
      The number of colums is configurable but if you add too many it won't look good or be very responsive.
    cards:
      - title: "Rainforest wildlife"
        card_category: "Species profile"
        image: "/assets/sample-images/card-cassowary.svg"
        image_alt: "Stylised southern cassowary in rainforest"
        text: |
          **Southern cassowaries** help disperse rainforest seeds throughout the Wet Tropics.
        url: "/sample-content/content-blocks/southern-cassowary/"
        link_text: "Read species profile"
      - title: "Coastal habitats"
        text: |
          This text-only card needs no image or link. It can include Markdown:

          - Seagrass meadows
          - Nesting beaches
          - Connected reef habitats
      - title: "Tree-kangaroo habitat"
        image: "/assets/sample-images/card-tree-kangaroo.svg"
        image_alt: "Stylised Lumholtz's tree-kangaroo in rainforest"
        text: "This card has an image without a link. Protecting connected forest supports canopy-dwelling wildlife."
  - type: cards
    title: "Cards block, 1 column"
    columns: 1
    content: |
      With `columns: 1`, images appear beside the text on desktop. Text-only cards use the full row. On smaller screens, images stack above the text.
    cards:
      - title: "Green turtle"
        image: "/assets/sample-images/card-green-turtle.svg"
        image_alt: "Stylised green turtle in coastal waters"
        text: "Green turtles depend on linked marine habitats and coastal nesting beaches."
        url: "/sample-content/content-blocks/green-turtle/"
        link_text: "Read species profile"
      - title: "Research priorities"
        text: |
          A text-only card fills the row without reserving an empty image column.

          Use the same `title`, `text`, `image`, `image_alt`, `url`, and `link_text` fields as landing-page section cards.
  - type: page-cards
    title: "Page cards block, four per row"
    folder: "sample-content/animals/"
    columns: 4
    link_text: "Read species profile"
    content: |
      This card block uses `columns: 4`. Each card is generated from a Markdown page in the animals folder.
  - type: page-cards
    title: "Page cards block, one per row"
    folder: "sample-content/animals/"
    columns: 1
    link_text: "Open full profile"
    content: |
      This card block uses `columns: 1`, so each card displays as a wide row with the image on the left and the summary on the right on desktop screens.
  - type: alert
    alert_type: "note"
    title: "Note alert block"
    content: |
      Use a Note for supporting information. **Markdown** is supported in the alert content, including lists and [links](../).
  - type: alert
    alert_type: "important"
    title: "Important alert block"
    content: |
      Use Important for details that readers need to complete a task successfully. For example, keep image paths relative to the site assets directory.
  - type: alert
    alert_type: "warning"
    title: "Warning alert block"
    content: |
      Use Warning to draw attention to a risk. Check that project information is approved for public release before publishing it.
  - type: alert
    alert_type: "caution"
    title: "Caution alert block"
    content: |
      Use Caution for actions that may have unwanted consequences. Keep a copy of your content before replacing sample pages.
  - type: one-column
    title: "Table on primary background"
    background: primary
    content: |
      The table uses the primary background and matching text colours. Light backgrounds receive subtle alternating row stripes; dark backgrounds remain unshaded. Borders separate the rows.

      | Activity | Habitat | Purpose |
      | --- | --- | --- |
      | Wildlife survey | Rainforest | Record species observations. |
      | Water sampling | Estuary | Monitor water quality. |
      | Nest monitoring | Coast | Track nesting success. |
      | Habitat mapping | Reef | Identify important habitat areas. |
  - type: one-column
    title: "Table on standard background"
    content: |
      No background colour is specified for this block. The table body uses the standard page background and matching text colours, with subtle alternating stripes when that background is light.

      | Activity | Habitat | Purpose |
      | --- | --- | --- |
      | Wildlife survey | Rainforest | Record species observations. |
      | Water sampling | Estuary | Monitor water quality. |
      | Nest monitoring | Coast | Track nesting success. |
      | Habitat mapping | Reef | Identify important habitat areas. |
---

This page demonstrates the reusable content block types using sample content about native animals of northern Queensland.
