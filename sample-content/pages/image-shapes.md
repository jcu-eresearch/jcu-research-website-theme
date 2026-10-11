---
layout: page
title: Image shapes
card_title: Image shapes
permalink: /sample-content/image-shapes/
order: 0.5
image: /assets/sample-images/shape-square.svg
summary: Choose square, portrait, landscape, wide, or original image shapes without editing photos.
blocks:
  - type: image-text
    title: Square team portrait
    image: /assets/sample-images/shape-square.svg
    image_alt: Illustrated person in a square frame
    image_position: left
    image_size: small
    image_shape: square
    content: 'Use `image_shape: square` for matching team portraits. The source image here is also square.'
  - type: image-text
    title: Taller portrait
    image: /assets/sample-images/shape-portrait.svg
    image_alt: Illustrated person in a portrait frame
    image_position: left
    image_size: small
    image_shape: portrait
    content: 'Use `image_shape: portrait` to give a head-and-shoulders photo more vertical space. This source is 3:4.'
  - type: cards
    title: Different shapes on individual cards
    columns: 3
    image_shape: square
    cards:
      - title: Landscape
        image: /assets/sample-images/shape-landscape.svg
        image_alt: Illustrated person in a landscape frame
        image_shape: landscape
        text: A 4:3 source and frame.
      - title: Wide
        image: /assets/sample-images/shape-wide.svg
        image_alt: Illustrated person in a wide frame
        image_shape: wide
        text: A 16:9 source and frame.
      - title: Original
        image: /assets/sample-images/shape-portrait.svg
        image_alt: Illustrated person in the original portrait proportions
        image_shape: original
        text: The original source proportions are preserved.
  - type: cards
    title: Consistent square cards from mixed source shapes
    columns: 3
    image_shape: square
    cards:
      - title: Square source
        image: /assets/sample-images/shape-square.svg
        image_alt: Square source portrait
        text: No cropping needed.
      - title: Portrait source, top crop
        image: /assets/sample-images/shape-portrait.svg
        image_alt: Tall portrait cropped to square from the top
        image_crop_position: top
        text: The website crops the tall source automatically.
      - title: Full portrait inside a square
        image: /assets/sample-images/shape-portrait.svg
        image_alt: Full tall portrait contained in a square
        image_fit: contain
        text: Contain preserves the whole image with space beside it.
  - type: cards
    title: Square images in single-column cards
    columns: 1
    image_shape: square
    cards:
      - title: Portrait beside text
        image: /assets/sample-images/shape-square.svg
        image_alt: Square portrait beside text
        text: Explicit square framing remains square on desktop and mobile.
  - type: page-cards
    title: Generated square page cards
    folder: sample-content/animals/
    columns: 3
    image_shape: square
---

Choose a shape by name rather than editing every image. These illustrations have deliberately different source proportions so you can compare the results. [Read the image shape guide]({{ '/reference/cards-and-page-collections/#image-shapes-and-cropping' | relative_url }}).
