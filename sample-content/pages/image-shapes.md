---
layout: page
title: Image shapes
card_title: Image shapes
permalink: /sample-content/image-shapes/
order: 3.75
image: /assets/sample-images/shape-landscape.jpg
summary: Compare landscape, wide, square, portrait, and original shapes, with photographic examples and cropping choices.
blocks:
  - type: carousel
    id: source-photo-shapes
    title: The source photos, uncropped
    image_shape: original
    image_fit: contain
    lead: |
      **This carousel is configured with `image_shape: original` and `image_fit: contain`.** It shows each source photo in its original proportions, without cropping. Photos are centred and limited in display height, so space may appear around them.

      Browse the photos to compare their original shapes with the examples below, which use different `image_shape` settings.
    items:
      - image: /assets/sample-images/shape-landscape.jpg
        image_alt: Research team in a landscape photograph
        caption: "Landscape source: 4:3, 1200 × 900 pixels."
      - image: /assets/sample-images/shape-wide.jpg
        image_alt: Two researchers surveying a coastal wetland in a wide photograph
        caption: "Wide source: 16:9, 1600 × 900 pixels."
      - image: /assets/sample-images/shape-square.jpg
        image_alt: Researcher in a square portrait
        caption: "Square source: 1:1, 800 × 800 pixels."
      - image: /assets/sample-images/shape-portrait.jpg
        image_alt: Researcher in a tall portrait
        caption: "Portrait source: 3:4, 768 × 1024 pixels."
  - type: image-text
    title: Landscape — fieldwork and general photos
    image: /assets/sample-images/shape-landscape.jpg
    image_alt: Research team in a landscape frame
    image_position: left
    image_size: small
    image_shape: landscape
    content: 'Use `image_shape: landscape` for a 4:3 frame. Original source: landscape, 1200 × 900 pixels. Matching source and frame proportions show the complete photo.'
  - type: image-text
    title: Wide — news and project updates
    image: /assets/sample-images/shape-wide.jpg
    image_alt: Two researchers overlooking mangroves in a wide frame
    image_position: left
    image_size: small
    image_shape: wide
    content: 'Use `image_shape: wide` for a 16:9 frame. Original source: wide, 1600 × 900 pixels. Useful for horizontal scenes and card summaries.'
  - type: image-text
    title: Square — matching team portraits
    image: /assets/sample-images/shape-square.jpg
    image_alt: Researcher in a square frame
    image_position: left
    image_size: small
    image_shape: square
    content: 'Use `image_shape: square` for a 1:1 frame. Original source: square, 800 × 800 pixels. This keeps a set of team portraits consistent.'
  - type: image-text
    title: Portrait — more room for people
    image: /assets/sample-images/shape-portrait.jpg
    image_alt: Researcher in a tall portrait frame
    image_position: left
    image_size: small
    image_shape: portrait
    content: 'Use `image_shape: portrait` for a 3:4 frame. Original source: portrait, 768 × 1024 pixels. This leaves more room for shoulders and clothing.'
  - type: image-text
    title: Original — preserve the source proportions
    image: /assets/sample-images/shape-portrait.jpg
    image_alt: Researcher shown in the original source proportions
    image_position: left
    image_size: small
    image_shape: original
    content: 'Use `image_shape: original` to preserve source proportions. This source is 3:4, 768 × 1024 pixels. It also suits diagrams and logos that should not be cropped. Mixed source shapes can produce uneven card rows.'
  - type: cards
    title: Image shapes on individual cards
    columns: 3
    cards:
      - title: Landscape card
        image: /assets/sample-images/shape-landscape.jpg
        image_alt: Landscape team photograph
        image_shape: landscape
        text: "Original image: landscape (4:3), 1200 × 900 pixels. Selected frame: landscape."
      - title: Wide card
        image: /assets/sample-images/shape-wide.jpg
        image_alt: Wide photograph of researchers overlooking a coastal wetland
        image_shape: wide
        text: "Original image: wide (16:9), 1600 × 900 pixels. Selected frame: wide."
      - title: Square card
        image: /assets/sample-images/shape-square.jpg
        image_alt: Square team member portrait
        image_shape: square
        text: "Original image: square (1:1), 800 × 800 pixels. Selected frame: square."
      - title: Portrait card
        image: /assets/sample-images/shape-portrait.jpg
        image_alt: Tall team member portrait
        image_shape: portrait
        text: "Original image: portrait (3:4), 768 × 1024 pixels. Selected frame: portrait."
      - title: Original proportions
        image: /assets/sample-images/shape-portrait.jpg
        image_alt: Full portrait at its original proportions
        image_shape: original
        text: "Original image: portrait (3:4), 768 × 1024 pixels. Selected frame: original."
  - type: cards
    title: Comparing image shapes, cropping, and fitting
    columns: 3
    cards:
      - title: Square — cover, top aligned
        image: /assets/sample-images/shape-portrait.jpg
        image_alt: Portrait cropped to square from the top
        image_shape: square
        image_crop_position: top
        text: "Original image: portrait (3:4), 768 × 1024 pixels. This card uses image_shape: square, image_fit: cover, and image_crop_position: top. The photo is cropped to fill a square, with the top kept visible."
      - title: Landscape — contain, centred
        image: /assets/sample-images/shape-portrait.jpg
        image_alt: Entire portrait contained in a landscape frame
        image_shape: landscape
        image_fit: contain
        text: "Original image: the same portrait (3:4), 768 × 1024 pixels. This card uses image_shape: landscape, image_fit: contain, and the default centred placement. The entire photo is shown within a 4:3 image area, with space beside it."
      - title: Wide — cover, centred
        image: /assets/sample-images/shape-landscape.jpg
        image_alt: Landscape team photo cropped to a wide frame
        image_shape: wide
        text: "Original image: a different photo, landscape (4:3), 1200 × 900 pixels. This card uses image_shape: wide, image_fit: cover, and image_crop_position: center. The top and bottom are cropped to fill a 16:9 image area."
  - type: page-cards
    title: Generated landscape page cards
    folder: sample-content/animals/
    columns: 3
    image_shape: landscape
    content: 'Generated cards support the same presets. This block uses `image_shape: landscape` for every source page.'
  - type: gallery
    title: Gallery with a shared square shape
    columns: 3
    image_shape: square
    image_crop_position: top
    items:
      - title: Square portrait source
        image: /assets/sample-images/shape-square.jpg
        image_alt: Researcher in a square portrait
        url: /assets/sample-images/shape-square.jpg
      - title: Portrait source, square crop
        image: /assets/sample-images/shape-portrait.jpg
        image_alt: Tall portrait cropped into a square from the top
        url: /assets/sample-images/shape-portrait.jpg
      - title: Landscape source, square crop
        image: /assets/sample-images/shape-landscape.jpg
        image_alt: Research team cropped into a square
        url: /assets/sample-images/shape-landscape.jpg
  - type: gallery
    title: Gallery with per-image overrides
    columns: 3
    image_shape: landscape
    items:
      - title: Portrait override
        image: /assets/sample-images/shape-portrait.jpg
        image_alt: Researcher in a tall portrait
        image_shape: portrait
        url: /assets/sample-images/shape-portrait.jpg
      - title: Square, whole photo
        image: /assets/sample-images/shape-wide.jpg
        image_alt: Full coastal photograph contained in a square
        image_shape: square
        image_fit: contain
        url: /assets/sample-images/shape-wide.jpg
      - title: Original proportions
        image: /assets/sample-images/shape-landscape.jpg
        image_alt: Uncropped landscape team photograph
        image_shape: original
        url: /assets/sample-images/shape-landscape.jpg

---

Use the [`image_shape` setting](https://jcu-eresearch.github.io/jcu-research-website-theme/reference/image-handling/#image-shapes-and-cropping) to choose how an image is displayed:

- `landscape` — 4:3 proportions.
- `wide` — 16:9 proportions.
- `square` — equal width and height (1:1).
- `portrait` — taller than it is wide (3:4).
- `original` — the source image’s own proportions.

The first four options give displayed images consistent proportions, even when the source photos have different shapes. Choose `original` to keep each source image’s proportions. The carousel below uses `image_shape: original` to show the source photos uncropped. The following examples show how `image_shape`, `image_fit`, and `image_crop_position` control their shape, cropping, and placement.
