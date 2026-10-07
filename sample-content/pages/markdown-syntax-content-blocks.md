---
title: Markdown syntax content blocks
card_title: "Markdown with classes"
card_category: "Page content"
permalink: /sample-content/inline-content-blocks/
order: 3
image: "/assets/sample-images/sample-markdown-blocks.svg"
summary: "Examples of content blocks written directly in the Markdown page body."
---

This page presents the same examples as the YAML syntax content blocks page, written in Markdown. Class lines sit outside the block they style. Nested quotes group columns, images and captions, or cards; automatic page cards use a short Liquid include.

To shorten the class lines, use the [reusable layout attributes file]({{ "/sample-content/markdown-layout-attributes.md" | relative_url }}). Copy the definitions you need into your page and follow its usage example. The [Markdown with layout classes guide]({{ "/reference/markdown-page-content/" | relative_url }}#reusable-attributes) explains how these names replace class lines while keeping the same nested layout structure.

> ## Text-only block
>
> The image-text block without an image uses the full content-panel width and is useful for short explanations, introductions, and narrative content. This example uses the optional secondary background colour on the block itself.
>
> Northern Queensland supports rainforest, reef, woodland, wetland, and savanna habitats. These landscapes are home to animals found nowhere else in Australia.
{:.jcu-block .jcu-bg-secondary}

> ## Two-column block
>
> > ### Rainforest species
> >
> > The southern cassowary and Lumholtz's tree-kangaroo are strongly associated with Wet Tropics rainforest. They rely on connected habitat and healthy native vegetation.
> {:.jcu-column}
>
> > ### Coastal and marine species
> >
> > Estuarine crocodiles and green turtles connect freshwater, coastal, and reef systems. Their life cycles are shaped by water quality, nesting habitat, and climate.
> {:.jcu-column}
{:.jcu-block .jcu-two-column}

> ## Two-column block with primary background
>
> > ### Rainforest research
> >
> > This example uses `background: "primary"` to place both columns inside a coloured content panel. The block heading uses the matching primary text colour.
> >
> > Research in the Wet Tropics explores how connected forests support wildlife and seed dispersal.
> {:.jcu-column}
>
> > ### Coastal research
> >
> > Each column retains its surface background and matching text and link colours, making it readable against the surrounding primary panel.
> >
> > Coastal research connects seagrass meadows, reef habitats, and nesting beaches.
> >
> > [View the sample pages](../).
> {:.jcu-column}
{:.jcu-block .jcu-two-column .jcu-bg-primary}

> > ## Image and text block, image left, without background
> >
> > This example uses `image_position: "left"` and omits `background`. The image and text sit directly on the page, with a gap between them and no outer panel padding.
> >
> > Southern cassowaries disperse the seeds of many rainforest plants. Their movement through connected forest helps maintain the diversity of the Wet Tropics.
> {:.jcu-text}
>
> > ![Stylised southern cassowary in rainforest]({{ "/assets/sample-images/card-cassowary.svg" | relative_url }})
> >
> > Omit background to use the normal page background.
> {:.jcu-media}
{:.jcu-block .jcu-image-text .jcu-image-left .jcu-image-small}

> > ## Image and text block, image left, with background
> >
> > This block places an optional image beside a single text column. The image can be positioned on the left or right and set to small, medium, or large.
> >
> > Lumholtz's tree-kangaroo is an arboreal marsupial of the Wet Tropics. It moves through the forest canopy and is vulnerable to habitat fragmentation.
> {:.jcu-text}
>
> > ![Stylised Lumholtz's tree-kangaroo in rainforest]({{ "/assets/sample-images/card-tree-kangaroo.svg" | relative_url }})
> >
> > Example with image_position: left, image_size: small, and background contained within the content panel.
> {:.jcu-media}
{:.jcu-block .jcu-image-text .jcu-image-left .jcu-image-small .jcu-bg-secondary}

> > ## Image and text block, image right, with background
> >
> > Use `image_position: "right"` to place the image beside the text on the right. The background stays within the content panel, and the image has no padding on its outer side.
> >
> > Green turtles connect reef and seagrass habitats with coastal nesting beaches. Protecting these linked environments supports their life cycle.
> {:.jcu-text}
>
> > ![Stylised green turtle in coastal waters]({{ "/assets/sample-images/card-green-turtle.svg" | relative_url }})
> >
> > The image sits flush with the right edge of the coloured panel.
> {:.jcu-media}
{:.jcu-block .jcu-image-text .jcu-image-right .jcu-bg-secondary}

> ## Image gallery block
>
> [![Southern cassowary]({{ "/assets/sample-images/card-cassowary.svg" | relative_url }}) **Southern cassowary**]({{ "/sample-content/content-blocks/southern-cassowary/" | relative_url }})
> [![Lumholtz's tree-kangaroo]({{ "/assets/sample-images/card-tree-kangaroo.svg" | relative_url }}) **Lumholtz's tree-kangaroo**]({{ "/sample-content/content-blocks/lumholtzs-tree-kangaroo/" | relative_url }})
> [![Estuarine crocodile]({{ "/assets/sample-images/card-crocodile.svg" | relative_url }}) **Estuarine crocodile**]({{ "/sample-content/content-blocks/estuarine-crocodile/" | relative_url }})
> [![Green turtle]({{ "/assets/sample-images/card-green-turtle.svg" | relative_url }}) **Green turtle**]({{ "/sample-content/content-blocks/green-turtle/" | relative_url }})
> {:.jcu-gallery .jcu-columns-4}
{:.jcu-block}

> ## Partner logos block
>
> The partner logo block can use a `columns` override in front matter as the maximum number of logos per row, with optional links from each logo. If `columns` is omitted, it uses `partner_logo_max_items_per_row` from `_config.yml`.
> A `background` colour setting is optional.
>
> ![Partner organisation]({{ "/assets/sample-images/partner-placeholder.svg" | relative_url }})
> ![Rainforest research partner]({{ "/assets/sample-images/partner-rainforest.svg" | relative_url }})
> ![Reef research partner]({{ "/assets/sample-images/partner-reef.svg" | relative_url }})
> ![Funding partner]({{ "/assets/sample-images/partner-mosaic.svg" | relative_url }})
> {:.jcu-partner-logos .jcu-columns-4}
{:.jcu-block}

> ## Partner logos block with background: primary
>
> White reverse mono logos have transparent backgrounds, so the primary colour shows through their negative spaces.
>
> ![Partner organisation]({{ "/assets/sample-images/partner-placeholder-reverse-mono.svg" | relative_url }})
> ![Rainforest research partner]({{ "/assets/sample-images/partner-rainforest-reverse-mono.svg" | relative_url }})
> ![Reef research partner]({{ "/assets/sample-images/partner-reef-reverse-mono.svg" | relative_url }})
> ![Funding partner]({{ "/assets/sample-images/partner-mosaic-reverse-mono.svg" | relative_url }})
> {:.jcu-partner-logos .jcu-columns-2}
{:.jcu-block .jcu-bg-primary}

> ## Cards block, > 1 column
>
> These cards use the same surface colours and styling as page cards, but their content is written here rather than collected from other pages. Images and links are optional.
> The number of colums is configurable but if you add too many it won't look good or be very responsive.
>
> > > [![Stylised southern cassowary in rainforest]({{ "/assets/sample-images/card-cassowary.svg" | relative_url }})]({{ "/sample-content/content-blocks/southern-cassowary/" | relative_url }})
> > {:.jcu-card-image}
> >
> > > Species profile
> > > {:.jcu-card-category}
> > >
> > > ### Rainforest wildlife
> > >
> > > **Southern cassowaries** help disperse rainforest seeds throughout the Wet Tropics.
> > >
> > > [Read species profile]({{ "/sample-content/content-blocks/southern-cassowary/" | relative_url }})
> > > {:.jcu-card-link}
> > {:.jcu-card-body}
> {:.jcu-card}
>
> > > ### Coastal habitats
> > >
> > > This text-only card needs no image or link. It can include Markdown:
> > >
> > > - Seagrass meadows
> > > - Nesting beaches
> > > - Connected reef habitats
> > {:.jcu-card-body}
> {:.jcu-card}
>
> > > ![Stylised Lumholtz's tree-kangaroo in rainforest]({{ "/assets/sample-images/card-tree-kangaroo.svg" | relative_url }})
> > {:.jcu-card-image}
> >
> > > ### Tree-kangaroo habitat
> > >
> > > This card has an image without a link. Protecting connected forest supports canopy-dwelling wildlife.
> > {:.jcu-card-body}
> {:.jcu-card}
{:.jcu-block .jcu-cards .jcu-columns-3}

> ## Cards block, 1 column
>
> With `columns: 1`, images appear beside the text on desktop. Text-only cards use the full row. On smaller screens, images stack above the text.
>
> > > [![Stylised green turtle in coastal waters]({{ "/assets/sample-images/card-green-turtle.svg" | relative_url }})]({{ "/sample-content/content-blocks/green-turtle/" | relative_url }})
> > {:.jcu-card-image}
> >
> > > ### Green turtle
> > >
> > > Green turtles depend on linked marine habitats and coastal nesting beaches.
> > >
> > > [Read species profile]({{ "/sample-content/content-blocks/green-turtle/" | relative_url }})
> > > {:.jcu-card-link}
> > {:.jcu-card-body}
> {:.jcu-card}
>
> > > ### Research priorities
> > >
> > > A text-only card fills the row without reserving an empty image column.
> > >
> > > Use the same `title`, `text`, `image`, `image_alt`, `url`, and `link_text` fields as landing-page section cards.
> > {:.jcu-card-body}
> {:.jcu-card}
{:.jcu-block .jcu-cards .jcu-columns-1}

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

> ## Note alert block
>
> Use a Note for supporting information. **Markdown** is supported in the alert content, including lists and [links](../).
{:.jcu-alert .jcu-alert--note}

> ## Important alert block
>
> Use Important for details that readers need to complete a task successfully. For example, keep image paths relative to the site assets directory.
{:.jcu-alert .jcu-alert--important}

> ## Warning alert block
>
> Use Warning to draw attention to a risk. Check that project information is approved for public release before publishing it.
{:.jcu-alert .jcu-alert--warning}

> ## Caution alert block
>
> Use Caution for actions that may have unwanted consequences. Keep a copy of your content before replacing sample pages.
{:.jcu-alert .jcu-alert--caution}

> ## Table on primary background
>
> The table uses the primary background and matching text colours. Light backgrounds receive subtle alternating row stripes; dark backgrounds remain unshaded. Borders separate the rows.
>
> | Activity | Habitat | Purpose |
> | --- | --- | --- |
> | Wildlife survey | Rainforest | Record species observations. |
> | Water sampling | Estuary | Monitor water quality. |
> | Nest monitoring | Coast | Track nesting success. |
> | Habitat mapping | Reef | Identify important habitat areas. |
{:.jcu-block .jcu-bg-primary}

> ## Table on standard background
>
> No background colour is specified for this block. The table body uses the standard page background and matching text colours, with subtle alternating stripes when that background is light.
>
> | Activity | Habitat | Purpose |
> | --- | --- | --- |
> | Wildlife survey | Rainforest | Record species observations. |
> | Water sampling | Estuary | Monitor water quality. |
> | Nest monitoring | Coast | Track nesting success. |
> | Habitat mapping | Reef | Identify important habitat areas. |
{:.jcu-block}
