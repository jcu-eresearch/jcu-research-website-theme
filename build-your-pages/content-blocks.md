---
layout: page
title: "Understand content blocks"
permalink: /build-your-pages/content-blocks/
order: 2.2
summary: "Understand content blocks"
---

A content block groups information that belongs together. Think of an introduction with a photograph, two related explanations in columns, or three cards directing visitors to methods, people, and outputs. Blocks help readers scan the page; use them when the grouping communicates something useful.

## Build a story in sections

A project overview might contain:

1. A short introduction: what the project investigates and why it matters.
2. An image beside text: where the research happens.
3. Cards: routes to methods, team members, and publications.
4. A closing paragraph: how to get involved.

These are content decisions before they are formatting decisions. Write clear headings and meaningful links, and keep the mobile reading order sensible. Two columns may become a single column on a narrow screen.

## Choose a block by its job

| What you need | Useful pattern |
| --- | --- |
| A connected explanation | Ordinary Markdown headings and paragraphs |
| A focused introduction or message | Text panel or alert |
| An illustration with its explanation | Image beside text |
| Two related groups | Two columns |
| Several destinations or summaries | Cards or generated page cards |
| A collection of images | Gallery |
| Supporting organisations | Partner logos |

The theme supplies matching styling through YAML fields or body classes. A class is a named styling instruction such as `jcu-bg-primary`. You can create the same core block styles through YAML, Markdown with classes, or HTML wrappers. Plain Markdown remains useful between them.

See [Content block recipes]({{ "/reference/content-block-recipes/" | relative_url }}) for examples, then [Combine writing methods]({{ "/build-your-pages/combine-writing-methods/" | relative_url }}) to place them on a page.
