---
layout: page
title: "Cards and page collections"
permalink: /reference/cards-and-page-collections/
order: 3.3
summary: "Cards and page collections"
---

Cards present a short summary and, when useful, a link to more detail. Give each a meaningful title and make the destination clear. Images are optional. Use a category label when it helps readers understand the kind of content, such as “Page content” or “Research output”.

## Manual cards

Write each card's title, text, and destination yourself. In YAML card blocks, use `card_category` for the optional label:

```yaml
blocks:
  - type: cards
    columns: 2
    cards:
      - card_category: Research output
        title: Publications
        text: "Read our peer-reviewed findings."
        url: /publications/
        link_text: View publications
```

This list belongs inside a standard page's existing front matter. Create a page at `/publications/` before using that destination. Manual card categories also work in landing-page card sections. For body cards, place a `jcu-card-category` paragraph inside `jcu-card-body`, above the card heading. See the syntax guides for complete wrappers.

## Generated page cards

Generated cards collect information from other pages. Give each source page useful front matter:

```yaml
---
layout: page
title: Publications from our research project
card_title: Publications
card_category: Research output
permalink: /outputs/publications/
summary: "Explore our published findings."
order: 1
---
```

`card_title` provides a shorter card heading without changing the page title. If omitted, the card uses `title`. `card_category` is optional. `summary` supplies the description. Add `image` if you want a card image. Generated card images use empty alt text because the adjacent card title describes the linked destination.

On a standard page, collect these pages with a YAML block:

```yaml
blocks:
  - type: page-cards
    title: Research outputs
    folder: outputs/
    columns: 3
```

The `folder` value selects source-file paths, not public permalinks. Put the source pages in an `outputs/` folder. Generated cards sort by `order`; the current page and files named `index.md` are excluded. Card order and menu order are separate: the menu follows `_data/navigation.yml`.

A Liquid include can generate cards at a chosen place in the body. Liquid is the template language that Jekyll processes before Markdown; you can copy this include without learning the whole language:

{% raw %}
```liquid
{% include page-cards.html folder="outputs/" title="Research outputs" columns=3 %}
```
{% endraw %}

See [YAML page content]({{ "/reference/yaml-page-content/" | relative_url }}), [Markdown with layout classes]({{ "/reference/markdown-page-content/" | relative_url }}), or [HTML and Markdown]({{ "/reference/html-markdown-page-content/" | relative_url }}) for complete manual and generated examples.

[Content block recipes]({{ "/reference/content-block-recipes/" | relative_url }}) [YAML page content]({{ "/reference/yaml-page-content/" | relative_url }})
{: .jcu-page-navigation}

## Image shapes and cropping

Choose an image shape to keep photographs consistent without editing each file.
The website fits the source image into that shape. These options work on
`image-text`, manual `cards`, generated `page-cards`, and standard landing-page
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

See [image shape samples]({{ '/sample-content/image-shapes/' | relative_url }})
for square, portrait, landscape, wide, and original images.
