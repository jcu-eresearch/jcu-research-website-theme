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
> This block uses normal Markdown blockquote notation, followed by a short class line:
>
> ```md
> > Content goes here.
> {:.jcu-block .jcu-block--secondary}
> ```
>
> The content inside can include **emphasis**, [links](https://www.jcu.edu.au/), and ordinary Markdown lists.
>
> - Write the block where it should appear on the page.
> - Keep using Markdown for the content.
> - Add the class line directly underneath the block.
{:.jcu-block .jcu-block--secondary}

This paragraph sits between two inline blocks, so authors can mix normal page content and styled sections in the order they want readers to encounter them.

> ### Column one
>
> Use two consecutive `.jcu-column` blocks for compact comparisons, paired ideas, or short lists.
>
> - Research context
> - Study setting
> - Key collaborators
{:.jcu-column}
> ### Column two
>
> Each column is still Markdown, so links and emphasis work as expected.
>
> For example, a researcher could link to a [project output](https://www.jcu.edu.au/) or highlight a **priority action**.
{:.jcu-column}

> ## Surface block with accent
>
> This version uses `.jcu-block--surface` and `.jcu-block--accent`. It is useful for a short note, project update, or highlighted takeaway.
>
> Use it for brief notes that should stand apart from the surrounding page content.
{:.jcu-block .jcu-block--surface .jcu-block--accent}

The same surface block can include an image floated to the left. Add the image as the first line inside the block and include `.jcu-block--image-left` in the class line.

```md
> ![Abstract project setting image]({{ "/assets/images/card-project-setting.svg" | relative_url }})
>
> ## Surface block with accent and image
>
> This block uses a left-aligned image with normal Markdown content beside it.
{:.jcu-block .jcu-block--surface .jcu-block--accent .jcu-block--image-left}
```

> ![Abstract project setting image]({{ "/assets/images/card-project-setting.svg" | relative_url }})
>
> ## Surface block with accent and image
>
> This block uses a left-aligned image with normal Markdown content beside it. It is useful when a project update, case study, or highlighted method needs a visual cue.
>
> The image stacks above the text on smaller screens.
{:.jcu-block .jcu-block--surface .jcu-block--accent .jcu-block--image-left}

The older front matter block system is still available for generated components such as page cards, image galleries, and partner logos.

## Inline partner logos

Use standard Markdown image syntax for unlinked logos, or wrap the image in a standard Markdown link when the logo should link somewhere. Add a class line underneath the group to choose 2, 3, or 4 columns.

```md
[![James Cook University logo]({{ "/assets/images/jcu-logo-colour.svg" | relative_url }})](https://www.jcu.edu.au/)
![Partner organisation logo]({{ "/assets/images/partner-placeholder.svg" | relative_url }})
![Rainforest research partner logo]({{ "/assets/images/partner-rainforest.svg" | relative_url }})
![Reef research partner logo]({{ "/assets/images/partner-reef.svg" | relative_url }})
{:.jcu-block .jcu-block--secondary .jcu-partner-logos .jcu-partner-logos--4}
```

[![James Cook University logo]({{ "/assets/images/jcu-logo-colour.svg" | relative_url }})](https://www.jcu.edu.au/)
![Partner organisation logo]({{ "/assets/images/partner-placeholder.svg" | relative_url }})
![Rainforest research partner logo]({{ "/assets/images/partner-rainforest.svg" | relative_url }})
![Reef research partner logo]({{ "/assets/images/partner-reef.svg" | relative_url }})
{:.jcu-block .jcu-block--secondary .jcu-partner-logos .jcu-partner-logos--4}

## Alert blocks

Use the same blockquote pattern for alert boxes. Add the alert label in bold, then place the alert class line directly underneath the block.

```md
> **Note**
>
> Highlights information that users should take into account, even when skimming.
{:.jcu-alert .jcu-alert--note}
```

> **Note**
>
> Highlights information that users should take into account, even when skimming.
{:.jcu-alert .jcu-alert--note}

```md
> **Tip**
>
> Optional information to help a user be more successful.
{:.jcu-alert .jcu-alert--tip}
```

> **Tip**
>
> Optional information to help a user be more successful.
{:.jcu-alert .jcu-alert--tip}

```md
> **Important**
>
> Crucial information necessary for users to succeed.
{:.jcu-alert .jcu-alert--important}
```

> **Important**
>
> Crucial information necessary for users to succeed.
{:.jcu-alert .jcu-alert--important}

```md
> **Warning**
>
> Critical content demanding immediate user attention due to potential risks.
{:.jcu-alert .jcu-alert--warning}
```

> **Warning**
>
> Critical content demanding immediate user attention due to potential risks.
{:.jcu-alert .jcu-alert--warning}

```md
> **Caution**
>
> Negative potential consequences of an action.
{:.jcu-alert .jcu-alert--caution}
```

> **Caution**
>
> Negative potential consequences of an action.
{:.jcu-alert .jcu-alert--caution}
