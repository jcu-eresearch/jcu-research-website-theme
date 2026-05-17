---
title: Content Blocks
permalink: /sample-content-pages/content-blocks/
order: 2
image: "/assets/images/card-cassowary.svg"
summary: "Examples of each content block style available with this template."
blocks:
  - type: one-column
    title: "One-column block"
    background: "secondary"
    background_mode: "block"
    content: |
      The one-column block is useful for short explanations, introductions, and narrative content. This example uses the optional secondary background colour on the block itself.

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
  - type: image-text
    title: "Image and text block"
    image: "/assets/images/card-tree-kangaroo.svg"
    image_alt: "Stylised Lumholtz's tree-kangaroo in rainforest"
    image_position: "left"
    image_size: "small"
    background: "secondary"
    background_mode: "behind"
    caption: "Example with image_position: left, image_size: small, and background_mode: behind."
    content: |
      This block places an optional image beside a single text column. The image can be positioned on the left or right and set to small, medium, or large.

      Lumholtz's tree-kangaroo is an arboreal marsupial of the Wet Tropics. It moves through the forest canopy and is vulnerable to habitat fragmentation.
  - type: gallery
    title: "Image gallery block"
    items:
      - title: "Southern cassowary"
        image: "/assets/images/card-cassowary.svg"
        url: "/sample-content-pages/animals/southern-cassowary/"
      - title: "Lumholtz's tree-kangaroo"
        image: "/assets/images/card-tree-kangaroo.svg"
        url: "/sample-content-pages/animals/lumholtzs-tree-kangaroo/"
      - title: "Estuarine crocodile"
        image: "/assets/images/card-crocodile.svg"
        url: "/sample-content-pages/animals/estuarine-crocodile/"
      - title: "Green turtle"
        image: "/assets/images/card-green-turtle.svg"
        url: "/sample-content-pages/animals/green-turtle/"
  - type: partner-logos
    title: "Partner logo block"
    columns: 4
    content: |
      The partner logo block can display logos in a configurable number of columns, with optional links from each logo.
    partners:
      - name: "James Cook University"
        logo: "/assets/images/partner-jcu.svg"
        url: "https://www.jcu.edu.au/"
      - name: "Partner organisation"
        logo: "/assets/images/partner-placeholder.svg"
      - name: "Rainforest research partner"
        logo: "/assets/images/partner-rainforest.svg"
      - name: "Reef research partner"
        logo: "/assets/images/partner-reef.svg"
  - type: page-cards
    title: "Page cards block, four per row"
    folder: "sample-content-pages/animals/"
    columns: 4
    link_text: "Read species profile"
    content: |
      This card block uses `columns: 4`. Each card is generated from a Markdown page in the animals folder.
  - type: page-cards
    title: "Page cards block, one per row"
    folder: "sample-content-pages/animals/"
    columns: 1
    link_text: "Open full profile"
    content: |
      This card block uses `columns: 1`, so each card displays as a wide row with the image on the left and the summary on the right on desktop screens.
---

This page demonstrates the reusable content block types using sample content about native animals of northern Queensland.
