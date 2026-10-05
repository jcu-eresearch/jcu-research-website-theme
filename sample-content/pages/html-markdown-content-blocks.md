---
title: HTML wrappers and Markdown content blocks
card_title: "HTML with Markdown"
card_category: "Page content"
permalink: /sample-content/html-markdown-content-blocks/
order: 3.5
image: "/assets/sample-images/sample-html-markdown-blocks.svg"
summary: "HTML wrappers, Markdown content blocks, and useful native HTML elements."
---

This page presents the same examples as the YAML and Markdown syntax content blocks pages. HTML wrappers name each group, while `markdown="1"` enables Markdown inside them. Keep blank lines around the Markdown content. Automatic page cards use the same short Liquid include.

<section class="jcu-block jcu-bg-secondary" markdown="1">

## Text-only block

The image-text block without an image uses the full content-panel width and is useful for short explanations, introductions, and narrative content. This example uses the optional secondary background colour on the block itself.

Northern Queensland supports rainforest, reef, woodland, wetland, and savanna habitats. These landscapes are home to animals found nowhere else in Australia.

</section>

<section class="jcu-block jcu-two-column" markdown="1">

## Two-column block

<div class="jcu-column" markdown="1">

### Rainforest species

The southern cassowary and Lumholtz's tree-kangaroo are strongly associated with Wet Tropics rainforest. They rely on connected habitat and healthy native vegetation.

</div>

<div class="jcu-column" markdown="1">

### Coastal and marine species

Estuarine crocodiles and green turtles connect freshwater, coastal, and reef systems. Their life cycles are shaped by water quality, nesting habitat, and climate.

</div>

</section>

<section class="jcu-block jcu-two-column jcu-bg-primary" markdown="1">

## Two-column block with primary background

<div class="jcu-column" markdown="1">

### Rainforest research

This example uses `background: "primary"` to place both columns inside a coloured content panel. The block heading uses the matching primary text colour.

Research in the Wet Tropics explores how connected forests support wildlife and seed dispersal.

</div>

<div class="jcu-column" markdown="1">

### Coastal research

Each column retains its surface background and matching text and link colours, making it readable against the surrounding primary panel.

Coastal research connects seagrass meadows, reef habitats, and nesting beaches.

[View the sample pages](../).

</div>

</section>

<section class="jcu-block jcu-image-text jcu-image-left jcu-image-small" markdown="1">

<div class="jcu-text" markdown="1">

## Image and text block, image left, without background

This example uses `image_position: "left"` and omits `background`. The image and text sit directly on the page, with a gap between them and no outer panel padding.

Southern cassowaries disperse the seeds of many rainforest plants. Their movement through connected forest helps maintain the diversity of the Wet Tropics.

</div>

<div class="jcu-media" markdown="1">

![Stylised southern cassowary in rainforest]({{ "/assets/sample-images/card-cassowary.svg" | relative_url }})

Omit background to use the normal page background.

</div>

</section>

<section class="jcu-block jcu-image-text jcu-image-left jcu-image-small jcu-bg-secondary" markdown="1">

<div class="jcu-text" markdown="1">

## Image and text block, image left, with background

This block places an optional image beside a single text column. The image can be positioned on the left or right and set to small, medium, or large.

Lumholtz's tree-kangaroo is an arboreal marsupial of the Wet Tropics. It moves through the forest canopy and is vulnerable to habitat fragmentation.

</div>

<div class="jcu-media" markdown="1">

![Stylised Lumholtz's tree-kangaroo in rainforest]({{ "/assets/sample-images/card-tree-kangaroo.svg" | relative_url }})

Example with image_position: left, image_size: small, and background contained within the content panel.

</div>

</section>

<section class="jcu-block jcu-image-text jcu-image-right jcu-bg-secondary" markdown="1">

<div class="jcu-text" markdown="1">

## Image and text block, image right, with background

Use `image_position: "right"` to place the image beside the text on the right. The background stays within the content panel, and the image has no padding on its outer side.

Green turtles connect reef and seagrass habitats with coastal nesting beaches. Protecting these linked environments supports their life cycle.

</div>

<div class="jcu-media" markdown="1">

![Stylised green turtle in coastal waters]({{ "/assets/sample-images/card-green-turtle.svg" | relative_url }})

The image sits flush with the right edge of the coloured panel.

</div>

</section>

<section class="jcu-block" markdown="1">

## Image gallery block

<p class="jcu-gallery jcu-columns-4" markdown="1">
[![Southern cassowary]({{ "/assets/sample-images/card-cassowary.svg" | relative_url }}) **Southern cassowary**]({{ "/sample-content/content-blocks/southern-cassowary/" | relative_url }})
[![Lumholtz's tree-kangaroo]({{ "/assets/sample-images/card-tree-kangaroo.svg" | relative_url }}) **Lumholtz's tree-kangaroo**]({{ "/sample-content/content-blocks/lumholtzs-tree-kangaroo/" | relative_url }})
[![Estuarine crocodile]({{ "/assets/sample-images/card-crocodile.svg" | relative_url }}) **Estuarine crocodile**]({{ "/sample-content/content-blocks/estuarine-crocodile/" | relative_url }})
[![Green turtle]({{ "/assets/sample-images/card-green-turtle.svg" | relative_url }}) **Green turtle**]({{ "/sample-content/content-blocks/green-turtle/" | relative_url }})
</p>

</section>

<section class="jcu-block" markdown="1">

## Partner logos block

The partner logo block can use a `columns` override in front matter as the maximum number of logos per row, with optional links from each logo. If `columns` is omitted, it uses `partner_logo_max_items_per_row` from `_config.yml`.
A `background` colour setting is optional.

<p class="jcu-partner-logos jcu-columns-4" markdown="1">
![Partner organisation]({{ "/assets/sample-images/partner-placeholder.svg" | relative_url }})
![Rainforest research partner]({{ "/assets/sample-images/partner-rainforest.svg" | relative_url }})
![Reef research partner]({{ "/assets/sample-images/partner-reef.svg" | relative_url }})
![Funding partner]({{ "/assets/sample-images/partner-mosaic.svg" | relative_url }})
</p>

</section>

<section class="jcu-block jcu-bg-primary" markdown="1">

## Partner logos block with background: primary

White reverse mono logos have transparent backgrounds, so the primary colour shows through their negative spaces.

<p class="jcu-partner-logos jcu-columns-2" markdown="1">
![Partner organisation]({{ "/assets/sample-images/partner-placeholder-reverse-mono.svg" | relative_url }})
![Rainforest research partner]({{ "/assets/sample-images/partner-rainforest-reverse-mono.svg" | relative_url }})
![Reef research partner]({{ "/assets/sample-images/partner-reef-reverse-mono.svg" | relative_url }})
![Funding partner]({{ "/assets/sample-images/partner-mosaic-reverse-mono.svg" | relative_url }})
</p>

</section>

<section class="jcu-block jcu-cards jcu-columns-3" markdown="1">

## Cards block, > 1 column

These cards use the same surface colours and styling as page cards, but their content is written here rather than collected from other pages. Images and links are optional.
The number of colums is configurable but if you add too many it won't look good or be very responsive.

<article class="jcu-card" markdown="1">

<div class="jcu-card-image" markdown="1">

[![Stylised southern cassowary in rainforest]({{ "/assets/sample-images/card-cassowary.svg" | relative_url }})]({{ "/sample-content/content-blocks/southern-cassowary/" | relative_url }})

</div>

<div class="jcu-card-body" markdown="1">

<p class="jcu-card-category">Species profile</p>

### Rainforest wildlife

**Southern cassowaries** help disperse rainforest seeds throughout the Wet Tropics.

<p class="jcu-card-link" markdown="1">
[Read species profile]({{ "/sample-content/content-blocks/southern-cassowary/" | relative_url }})
</p>

</div>

</article>

<article class="jcu-card" markdown="1">

<div class="jcu-card-body" markdown="1">

### Coastal habitats

This text-only card needs no image or link. It can include Markdown:

- Seagrass meadows
- Nesting beaches
- Connected reef habitats

</div>

</article>

<article class="jcu-card" markdown="1">

<div class="jcu-card-image" markdown="1">

![Stylised Lumholtz's tree-kangaroo in rainforest]({{ "/assets/sample-images/card-tree-kangaroo.svg" | relative_url }})

</div>

<div class="jcu-card-body" markdown="1">

### Tree-kangaroo habitat

This card has an image without a link. Protecting connected forest supports canopy-dwelling wildlife.

</div>

</article>

</section>

<section class="jcu-block jcu-cards jcu-columns-1" markdown="1">

## Cards block, 1 column

With `columns: 1`, images appear beside the text on desktop. Text-only cards use the full row. On smaller screens, images stack above the text.

<article class="jcu-card" markdown="1">

<div class="jcu-card-image" markdown="1">

[![Stylised green turtle in coastal waters]({{ "/assets/sample-images/card-green-turtle.svg" | relative_url }})]({{ "/sample-content/content-blocks/green-turtle/" | relative_url }})

</div>

<div class="jcu-card-body" markdown="1">

### Green turtle

Green turtles depend on linked marine habitats and coastal nesting beaches.

<p class="jcu-card-link" markdown="1">
[Read species profile]({{ "/sample-content/content-blocks/green-turtle/" | relative_url }})
</p>

</div>

</article>

<article class="jcu-card" markdown="1">

<div class="jcu-card-body" markdown="1">

### Research priorities

A text-only card fills the row without reserving an empty image column.

Use the same `title`, `text`, `image`, `image_alt`, `url`, and `link_text` fields as landing-page section cards.

</div>

</article>

</section>

{% include page-cards.html
  title="Page cards block, four per row"
  folder="sample-content/animals/"
  columns=4
  link_text="Read species profile"
  content="This card block uses `columns: 4`. Each card is generated from a Markdown page in the animals folder."
%}

{% include page-cards.html
  title="Page cards block, one per row"
  folder="sample-content/animals/"
  columns=1
  link_text="Open full profile"
  content="This card block uses `columns: 1`, so each card displays as a wide row with the image on the left and the summary on the right on desktop screens."
%}

<section class="jcu-alert jcu-alert--note" markdown="1">

## Note alert block

Use a Note for supporting information. **Markdown** is supported in the alert content, including lists and [links](../).

</section>

<section class="jcu-alert jcu-alert--important" markdown="1">

## Important alert block

Use Important for details that readers need to complete a task successfully. For example, keep image paths relative to the site assets directory.

</section>

<section class="jcu-alert jcu-alert--warning" markdown="1">

## Warning alert block

Use Warning to draw attention to a risk. Check that project information is approved for public release before publishing it.

</section>

<section class="jcu-alert jcu-alert--caution" markdown="1">

## Caution alert block

Use Caution for actions that may have unwanted consequences. Keep a copy of your content before replacing sample pages.

</section>

<section class="jcu-block jcu-bg-primary" markdown="1">

## Table on primary background

The table uses the primary background and matching text colours. Light backgrounds receive subtle alternating row stripes; dark backgrounds remain unshaded. Borders separate the rows.

| Activity | Habitat | Purpose |
| --- | --- | --- |
| Wildlife survey | Rainforest | Record species observations. |
| Water sampling | Estuary | Monitor water quality. |
| Nest monitoring | Coast | Track nesting success. |
| Habitat mapping | Reef | Identify important habitat areas. |

</section>

<section class="jcu-block" markdown="1">

## Table on standard background

No background colour is specified for this block. The table body uses the standard page background and matching text colours, with subtle alternating stripes when that background is light.

| Activity | Habitat | Purpose |
| --- | --- | --- |
| Wildlife survey | Rainforest | Record species observations. |
| Water sampling | Estuary | Monitor water quality. |
| Nest monitoring | Coast | Track nesting success. |
| Habitat mapping | Reef | Identify important habitat areas. |

</section>

## HTML alongside ordinary Markdown

HTML also provides elements that ordinary Markdown does not define. These examples work without a layout block. Keep blank lines around block elements and add `markdown="1"` when a container should parse its contents as Markdown.

## Collapsible sections

Use `details` and a descriptive `summary` to let readers reveal supplementary information. Keep essential instructions visible. This native control can be operated with the keyboard.

<details markdown="1">
<summary>Read the sampling notes</summary>

We visited each location **three times**.

- Record the observation date.
- Note weather and habitat conditions.

</details>

{% raw %}
````html
<details markdown="1">
<summary>Read the sampling notes</summary>

We visited each location **three times**.

- Record the observation date.
- Note weather and habitat conditions.

</details>
````
{: .jcu-alert .jcu-alert--note}
{% endraw %}

## Highlighting, subscript, and superscript

These are inline HTML elements. Use `mark` for relevant highlighting, and `sub` or `sup` for notation. Explain specialised notation in the surrounding text.

The <mark>sampling period</mark> is highlighted. Water is H<sub>2</sub>O; the study area is measured in km<sup>2</sup>.

{% raw %}
````html
The <mark>sampling period</mark> is highlighted. Water is H<sub>2</sub>O; the study area is measured in km<sup>2</sup>.
````
{: .jcu-alert .jcu-alert--note}
{% endraw %}

## Abbreviations in HTML

An abbreviation can carry a title, but its meaning should also be written in the text for readers who cannot use a tooltip.

Environmental DNA (<abbr title="Environmental DNA">eDNA</abbr>) helps identify species.

{% raw %}
````html
Environmental DNA (<abbr title="Environmental DNA">eDNA</abbr>) helps identify species.
````
{: .jcu-alert .jcu-alert--note}
{% endraw %}

## Figures and captions

Use `figure` and `figcaption` to group an image with its caption. Alternative text describes the relevant image content; the caption supplies context.

<figure>
  <img src="{{ "/assets/sample-images/card-cassowary.svg" | relative_url }}" alt="Illustration of a southern cassowary">
  <figcaption>Southern cassowaries help disperse rainforest seeds.</figcaption>
</figure>

{% raw %}
````html
<figure>
  <img src="{{ "/assets/sample-images/card-cassowary.svg" | relative_url }}" alt="Illustration of a southern cassowary">
  <figcaption>Southern cassowaries help disperse rainforest seeds.</figcaption>
</figure>
````
{: .jcu-alert .jcu-alert--note}
{% endraw %}

## Explicit line breaks

A `br` element creates a line break within a paragraph. Use separate paragraphs for separate ideas rather than adding repeated breaks to create spacing.

Fieldwork team<br>
Coastal research project

{% raw %}
````html
Fieldwork team<br>
Coastal research project
````
{: .jcu-alert .jcu-alert--note}
{% endraw %}

## Hidden HTML comments

Comments are absent from the visible page but remain in its source. Use them for editing notes, not confidential information.

This sentence is visible.

<!-- Editing note: review this description after the next survey. -->

This sentence is also visible.

{% raw %}
````html
This sentence is visible.

<!-- Editing note: review this description after the next survey. -->

This sentence is also visible.
````
{: .jcu-alert .jcu-alert--note}
{% endraw %}
