---
layout: page
title: Image handling
permalink: /reference/image-handling/
order: 3.35
summary: Image shapes, fitting, cropping, and image behaviour across YAML blocks, Markdown layout classes, cards, and carousels.
---

Use this guide to choose how photographs, diagrams, and logos appear on your pages. Image handling applies across several block types, not just cards.

## Image shapes and cropping

Choose an image shape to keep photographs consistent without editing each file.
The website fits the source image into that shape. These options work on
`image-text`, manual `cards`, generated `page-cards`, `gallery`, `carousel`, and standard landing-page
images and cards. They also work with the `page-cards.html` Liquid include.

| `image_shape` | Proportions | Suggested use |
| --- | --- | --- |
| `landscape` | 4:3 | Fieldwork and general photos |
| `wide` | 16:9 | News and project cards |
| `square` | 1:1 | Matching team portraits |
| `portrait` | 3:4 | Taller head-and-shoulders photos |
| `original` | Source proportions | Diagrams, illustrations, and logos |

You do not need to know the numbers: use `square` for team profiles, or `portrait`
to show more of each person. Omit `image_shape` to keep the theme's existing
layout defaults. `original` preserves each source's proportions, so differently
shaped source images can produce uneven card rows.

`image_fit: cover` is the default: it fills the frame and crops edges without
stretching the photo. `image_fit: contain` shows the entire image with space
around it when its proportions differ. For a natural-sized logo or diagram,
choose `image_shape: original`.

`image_crop_position` accepts `center` (default), `top`, `bottom`, `left`, or
`right`. Try `top` if a centred portrait crop cuts off the top of a person's head.
This setting is separate from `image_position`, which places an image on the
left or right of the text.

```yaml
blocks:
  - type: image-text
    title: Team member
    image: /assets/images/team-member.jpg
    image_alt: Team member outdoors
    image_position: left
    image_size: small
    image_shape: square
    image_crop_position: top
    content: A short introduction.
  - type: cards
    columns: 3
    image_shape: square
    cards:
      - title: Team member
        image: /assets/images/team-member.jpg
        image_alt: Team member outdoors
        image_crop_position: top
        text: A short introduction.
```

Set these options on the block to apply them to every card. A manual card or a
source page for generated cards can override `image_shape`, `image_fit`, and
`image_crop_position` individually. Explicit shapes stay consistent in
single-column cards and on mobile. Invalid shapes fall back to the usual image
ratio; invalid fit or crop options fall back to `cover` and `center`.

{% raw %}
```liquid
{% include page-cards.html folder="people/" columns=3 image_shape="square" %}
```
{% endraw %}

See [image shape samples](https://jcu-eresearch.github.io/jcu-research-website-theme/sample-content/image-shapes/)
for square, portrait, landscape, wide, and original images.

### Carousel image shapes

`type: carousel` works on both standard and landing pages. Without framing
options, carousel images fill a wide 16:7 frame using `cover`, which crops
square and portrait photos. Set `image_shape: original` to show source
proportions without cropping. Original carousel images are centred and limited
to the smaller of 32rem and 70% of the viewport height. Space around differently
shaped photos is expected; the carousel reserves room for its tallest slide.

```yaml
blocks:
  - type: carousel
    title: Original photographs
    image_shape: original
    image_fit: contain
    items:
      - image: /assets/images/team-portrait.jpg
        image_alt: Team member outdoors
        caption: A portrait photo shown uncropped.
```

## Markdown and layout classes

A plain Markdown image normally retains its source proportions and scales down
to fit the available width. Layout classes add the theme's block styling:

| Image context | Current default behaviour |
| --- | --- |
| Plain Markdown image | Original source proportions |
| `jcu-image-text` with `jcu-media` | 4:3, cropped with `cover` |
| A card grid with `jcu-card-image` | 16:9, cropped with `cover` |
| Single-column cards | Image fills the row's image area on desktop; 16:9 on mobile |
| Gallery images | 4:3, cropped with `cover` |

`jcu-image-left` and `jcu-image-right` place the image beside the text.
`jcu-image-small` and `jcu-image-large` change the image column's width;
they do not change the image's aspect ratio. Images stack with text on small
screens. These classes also work in HTML wrappers containing Markdown.

The YAML settings `image_shape`, `image_fit`, and `image_crop_position` are
processed by theme templates. Writing those names in a Markdown attribute list
does not apply them to hand-written image-and-text or card wrappers. There are
currently no corresponding named shape classes for hand-written image-and-text
or card wrappers. Gallery wrappers support named classes as described below.
Use a YAML block for configurable image framing without custom CSS, or use the supported
Liquid include for generated page cards inside Markdown:

{% raw %}
```liquid
{% include page-cards.html folder="people/" columns=3 image_shape="square" image_crop_position="top" %}
```
{% endraw %}

For wrapper examples, see [Markdown with layout classes](https://jcu-eresearch.github.io/jcu-research-website-theme/reference/markdown-page-content/) and [HTML and Markdown](https://jcu-eresearch.github.io/jcu-research-website-theme/reference/html-markdown-page-content/).

## Gallery image shapes

YAML `gallery` blocks accept `image_shape`, `image_fit`, and
`image_crop_position` at block level. Each entry in `items` can override any
of those settings. Omitted settings retain the gallery's 4:3, `cover`, centred
default. Explicit `original` preserves the source proportions; mixed shapes
can leave space beneath shorter images in a gallery row.

```yaml
blocks:
  - type: gallery
    columns: 3
    image_shape: square
    image_crop_position: top
    items:
      - title: Team member
        image: /assets/images/team-member.jpg
        image_alt: Team member outdoors
        url: /assets/images/team-member.jpg
      - title: Full photo
        image: /assets/images/fieldwork.jpg
        image_shape: original
        image_fit: contain
        url: /assets/images/fieldwork.jpg
```

For Markdown and HTML galleries (`jcu-gallery` or `jcu-image-gallery`), use:

- Shape: `jcu-image-shape-landscape`, `jcu-image-shape-wide`,
  `jcu-image-shape-square`, `jcu-image-shape-portrait`, or `jcu-image-shape-original`.
- Fit: `jcu-image-fit-cover` or `jcu-image-fit-contain`.
- Crop position: `jcu-image-crop-center`, `jcu-image-crop-top`,
  `jcu-image-crop-bottom`, `jcu-image-crop-left`, or `jcu-image-crop-right`.

Put classes on the gallery to share settings, or directly on an image to
override them. In Kramdown, image attributes immediately follow the image
markup **inside** its link; gallery attributes follow the paragraph:

{% raw %}
```markdown
[![Team member]({{ '/assets/images/team-member.jpg' | relative_url }}){:.jcu-image-shape-portrait .jcu-image-crop-top}]({{ '/people/' | relative_url }})
[![Fieldwork]({{ '/assets/images/fieldwork.jpg' | relative_url }})]({{ '/research/' | relative_url }})
{:.jcu-gallery .jcu-columns-2 .jcu-image-shape-square}
```
{% endraw %}

These opt-in classes also remove the gallery's fixed minimum image height so
wide and original shapes are not stretched. They do not change existing
galleries without framing settings.
