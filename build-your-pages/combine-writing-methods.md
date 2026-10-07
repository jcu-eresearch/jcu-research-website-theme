---
layout: page
title: "Combine writing methods"
permalink: /build-your-pages/combine-writing-methods/
order: 2.3
summary: "Combine writing methods"
---

The authoring methods are tools you can use together, not four exclusive page types. Every page can have YAML front matter for its settings. A standard page can then combine ordinary Markdown, Markdown with layout classes, HTML wrappers containing Markdown, and a YAML `blocks` list.

| Method | What it contributes | Guide |
| --- | --- | --- |
| Plain Markdown | Headings, paragraphs, lists, links, images, and tables | [Plain Markdown]({{ "/reference/plain-markdown/" | relative_url }}) |
| YAML blocks | Named fields describing styled blocks; text fields can contain Markdown | [YAML page content]({{ "/reference/yaml-page-content/" | relative_url }}) |
| Markdown with classes | Styled groups written as nested Markdown blockquotes | [Markdown with layout classes]({{ "/reference/markdown-page-content/" | relative_url }}) |
| HTML wrappers with Markdown | Explicit opening and closing containers with layout classes | [HTML and Markdown]({{ "/reference/html-markdown-page-content/" | relative_url }}) |

The three block methods share core styling options. Ordinary Markdown provides document formatting without selecting columns, cards, or coloured panels. YAML front matter is used for page settings even when no YAML content blocks are present.

## Know the rendering order

For `layout: page`, all body content appears first, in the order you write it. The layout then renders the YAML blocks in list order. You cannot place a YAML block between two body paragraphs. Use a class-based Markdown group or HTML wrapper for a styled block at that position.

For `layout: landing-page`, the hero appears first, followed by the optional page body, then the landing-page YAML blocks. Use the [landing-page guide]({{ "/build-your-pages/landing-page-styles/" | relative_url }}) for its block types.

## A complete mixed standard page

This example uses all four methods. The final YAML panel is defined at the top of the file but appears last on the finished page.

```markdown
---
layout: page
title: Our fieldwork
permalink: /fieldwork/
blocks:
  - type: one-column
    title: Next steps
    background: secondary
    content: |
      We will share **results** when the analysis is complete.
---

## Why we collect observations

These ordinary Markdown paragraphs introduce the study.

> ## Working with communities
>
> Local knowledge helps us choose useful research questions.
{:.jcu-block .jcu-bg-primary}

A normal paragraph can follow the styled Markdown group.

<section class="jcu-block jcu-bg-secondary" markdown="1">

## Our study area

We compare observations from several coastal locations.

</section>

This paragraph is the end of the body. The Next steps YAML panel
appears after it.
```

Keep blank lines around HTML content, add `markdown="1"` to wrappers that contain Markdown, and put a Markdown class line immediately after the group it styles. Each method keeps its own syntax; they work together because the theme renders them into shared styles.

Choose the method easiest for your team to maintain. It is fine to keep most content as plain Markdown and use only a few styled blocks.

[← Previous]({{ "/build-your-pages/content-blocks/" | relative_url }}) [Next →]({{ "/build-your-pages/landing-page-styles/" | relative_url }})
{: .jcu-page-navigation}
