---
title: Inline Content Blocks
permalink: /sample-content/inline-content-blocks/
order: 3
image: "/assets/images/card-project-setting.svg"
summary: "Examples of content blocks written directly in the Markdown page body."
---

This page demonstrates content blocks written inline with the rest of the page content. The class line after each block keeps the authoring pattern short while still allowing Markdown inside the block.

> ## Inline one-column block
>
> This block uses `.jcu-block` and `.jcu-block--2ndary-bkg` for a full-width pale secondary background.
>
> The content inside can include **emphasis**, [links](https://www.jcu.edu.au/), and ordinary Markdown lists.
>
> - Write the block where it should appear on the page.
> - Keep using Markdown for the content.
> - Add the class line directly underneath the block.
{:.jcu-block .jcu-block--2ndary-bkg}

This paragraph sits between two inline blocks, so authors can mix normal page content and styled sections in the order they want readers to encounter them.

> ## Card block with accent
>
> This version uses `.jcu-block--card` and `.jcu-block--accent`. It is useful for a short note, project update, or highlighted takeaway.
>
> Use it for brief notes that should stand apart from the surrounding page content.
{:.jcu-block .jcu-block--card .jcu-block--accent}

The card style can also be combined with the secondary block style when the section should use the full-width pale secondary background.

> ## Card block with secondary background
>
> This combines `.jcu-block--card` and `.jcu-block--2ndary-bkg`, so the block uses the secondary background treatment while keeping the same spacing as the card block.
{:.jcu-block .jcu-block--card .jcu-block--2ndary-bkg}

The same card block can include an image and the image can be floated to the left or right. Add the image as the first line inside the block and include `.jcu-block--image-left` or `.jcu-block--image-right` in the class line.

## Card blocks with accent and image

> ![Abstract project setting image]({{ "/assets/images/card-project-setting.svg" | relative_url }})
>
> ### Card block with accent and image
>
> This block uses `.jcu-block`, `.jcu-block--card`, and `.jcu-block--accent`. The image is written as a normal Markdown image inside the block.
{:.jcu-block .jcu-block--card .jcu-block--accent}

Use `.jcu-block--image-left` to place the image on the left.

> ![Abstract project setting image]({{ "/assets/images/card-project-setting.svg" | relative_url }})
>
> ### Card block with accent and image to the left
>
> This block adds `.jcu-block--image-left` to float the first image to the left of the Markdown content.
>
> The image stacks above the text on smaller screens.
{:.jcu-block .jcu-block--card .jcu-block--accent .jcu-block--image-left}

Use `.jcu-block--image-right` to place the image on the right instead.

> ![Abstract research context image]({{ "/assets/images/card-research-context.svg" | relative_url }})
>
> ### Card block with accent and image to the right
>
> This version uses `.jcu-block--image-right` to float the first image to the right while the text starts on the left.
{:.jcu-block .jcu-block--card .jcu-block--accent .jcu-block--image-right}

The older front matter block system is still available for generated components such as page cards, image galleries, and partner logos.

## Inline partner logos

This example uses `.jcu-partner-logos` and `.jcu-partner-logos--4`, combined with `.jcu-block--2ndary-bkg`. Images can be plain Markdown images, or linked Markdown images when a logo should link somewhere.

[![James Cook University logo]({{ "/assets/images/jcu-logo-colour.svg" | relative_url }})](https://www.jcu.edu.au/)
![Partner organisation logo]({{ "/assets/images/partner-placeholder.svg" | relative_url }})
![Rainforest research partner logo]({{ "/assets/images/partner-rainforest.svg" | relative_url }})
![Reef research partner logo]({{ "/assets/images/partner-reef.svg" | relative_url }})
{:.jcu-block .jcu-block--2ndary-bkg .jcu-partner-logos .jcu-partner-logos--4}

## Inline image gallery

This example uses `.jcu-image-gallery` and `.jcu-image-gallery--4`. Each tile is a standard Markdown linked image, and the image alt text appears as a label on hover or keyboard focus.

[![Southern cassowary]({{ "/assets/images/card-cassowary.svg" | relative_url }})]({{ "/sample-content-pages/animals/southern-cassowary/" | relative_url }})
[![Lumholtz's tree-kangaroo]({{ "/assets/images/card-tree-kangaroo.svg" | relative_url }})]({{ "/sample-content-pages/animals/lumholtzs-tree-kangaroo/" | relative_url }})
[![Estuarine crocodile]({{ "/assets/images/card-crocodile.svg" | relative_url }})]({{ "/sample-content-pages/animals/estuarine-crocodile/" | relative_url }})
[![Green turtle]({{ "/assets/images/card-green-turtle.svg" | relative_url }})]({{ "/sample-content-pages/animals/green-turtle/" | relative_url }})
{:.jcu-image-gallery .jcu-image-gallery--4}

## Alert blocks

Alert boxes use `.jcu-alert` plus a type class.

> **Note**
>
> Uses `.jcu-alert--note` for general information that users should take into account, even when skimming.
{:.jcu-alert .jcu-alert--note}

> **Tip**
>
> Uses `.jcu-alert--tip` for optional information to help a user be more successful.
{:.jcu-alert .jcu-alert--tip}

> **Important**
>
> Uses `.jcu-alert--important` for crucial information necessary for users to succeed.
{:.jcu-alert .jcu-alert--important}

> **Warning**
>
> Uses `.jcu-alert--warning` for critical content demanding immediate user attention due to potential risks.
{:.jcu-alert .jcu-alert--warning}

> **Caution**
>
> Uses `.jcu-alert--caution` for negative potential consequences of an action.
{:.jcu-alert .jcu-alert--caution}
