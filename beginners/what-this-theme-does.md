---
layout: page
title: "What this theme does"
permalink: /beginners/what-this-theme-does/
order: 1.1
summary: "What this theme does"
---

A research website gives visitors a place to learn about your project, team, methods, findings, and ways to get involved. Begin with the questions your visitors need answered, rather than with a particular visual layout.

## A theme supplies the shared appearance

This theme provides the menu, page headings, fonts, colours, responsive layouts, and reusable content blocks. You supply the words, images, links, and project details. Responsive means the layout adapts to a phone, tablet, or desktop screen.

A **layout** is a template for a whole page. A **content block** is a group within a page, such as an introduction, an image beside text, or a set of cards linking to other pages. You can use ordinary paragraphs and headings without creating blocks.

## A static website is built from files

Your website starts as editable text and image files. A tool called **Jekyll** turns them into finished web pages. GitHub Pages can run this build and host the result. Visitors see the finished pages; you edit the source files. A static site works well for research information that you update periodically. Features such as collecting form responses require a separate service or integration.

| File or folder | What it contains | When you use it |
| --- | --- | --- |
| `index.md` | The homepage text and page settings | Introduce your project |
| Other `.md` files | Supporting pages written in Markdown | Add methods, people, or outputs |
| `_config.yml` | Site-wide settings | Change the site title, address, and colours |
| `_data/navigation.yml` | Menu entries | Help visitors find pages |
| `assets/images/` | Image files | Add photographs, diagrams, and logos |

Markdown (`.md`) is a simple way to mark headings, lists, and links in text. YAML (`.yml`) stores named settings and lists. You will learn each through small examples.

Next: [How your website gets online]({{ "/beginners/how-your-website-gets-online/" | relative_url }}).
