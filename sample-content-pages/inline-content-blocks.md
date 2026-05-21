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

> ## Surface block with accent
>
> This version uses `.jcu-block--surface` and `.jcu-block--accent`. It is useful for a short note, project update, or highlighted takeaway.
>
> For example, a researcher could link to a [project output](https://www.jcu.edu.au/) or highlight a **priority action**.
{:.jcu-block .jcu-block--surface .jcu-block--accent}

The older front matter block system is still available for generated components such as page cards, image galleries, and partner logos.
