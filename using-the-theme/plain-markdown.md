---
layout: page
title: "Plain Markdown pages"
permalink: /using-the-theme/plain-markdown/
order: 1.5
summary: "Write simple pages with ordinary Markdown and automatic theme styling."
---

Use plain Markdown for pages whose main purpose is to communicate information: project background, methods, updates, frequently asked questions, or contact details. You write headings, paragraphs, lists, links, and images in reading order. The theme provides the typography, spacing, colours, navigation, and responsive page container automatically.

You do not need layout classes, HTML wrappers, or a YAML `blocks` list. This is the simplest authoring option. It has fewer layout controls than the three block formats, but uses the same site appearance.

## Create a page

Create a `.md` file with a small front-matter header, then write ordinary Markdown below it:

```markdown
---
layout: page
title: Research background
permalink: /research-background/
lead: An introduction to our research.
---

## Why this research matters

Describe the problem in plain language. Use **bold** for emphasis and
*italics* for a term or publication title.

## Our priorities

- Understand the research setting.
- Share findings with communities.
- Support future research.

## Find out more

[Contact the project team](../contact/).
```

Front matter supplies page information; it does not turn the body into a block layout. `title` provides the main heading, `permalink` sets the public address, and `lead` is optional. Use `##` for body sections and `###` for subsections instead of repeating the page title with `#`.

Add the page to `_data/navigation.yml` if it should appear in the menu. Writing a page does not automatically add a menu item.

## What you can include

| Content | Markdown syntax | What the theme supplies |
| --- | --- | --- |
| Paragraphs | Separate paragraphs with a blank line. | Readable line length, text colour, and spacing. |
| Headings | `## Section` and `### Subsection` | Consistent heading sizes, colours, and spacing. |
| Emphasis | `**bold**` and `*italic*` | Bold and italic text within the normal typography. |
| Lists | `- Item` or `1. Item` | List indentation and spacing; nested lists are supported. |
| Links | `[Meaningful label](destination)` | Link colours and hover styling. |
| Images | `![Description](image-path)` | Images constrained to the content width. |
| Linked images | `[![Description](image-path)](destination)` | A clickable image with ordinary link behaviour. |
| Tables | Pipe-separated headings and rows | Styled headings, borders, and optional alternating row backgrounds. |
| Quotations | `> Quoted text` | Standard quotation styling. |
| Code | Backticks or fenced code blocks | Distinct inline code and formatted code examples. |
| Horizontal rules | `---` in the body, separated by blank lines | A visual break between parts of the text. |

## Tables

Use a table for compact comparisons rather than to arrange a page into columns:

```markdown
| Activity | Purpose |
| --- | --- |
| Fieldwork | Observe the research setting. |
| Analysis | Interpret the findings. |
| Communication | Share the results. |
```

The theme uses secondary colours for the table heading. Body text inherits the surrounding page's text colour, and alternating row backgrounds follow the theme's table styling when `table_banded_rows` is enabled. Keep tables short and check wide tables on a narrow screen.

## Images and captions

An image appears in the normal flow of the page. Put a caption in a paragraph below it:

```markdown
![Southern cassowary in rainforest](../../assets/sample-images/card-cassowary.svg)

*Southern cassowaries disperse rainforest seeds.*
```

The relative image path above works from this guide's published address. Adjust it for your own page. An italic paragraph provides a visual caption; plain Markdown does not create the image-and-text panel or grouped media caption used by the block formats. Alt text should explain the image's relevant content.

## Links and paths

Relative URLs work without Liquid or classes. They are resolved from the page's **published permalink**, which can differ from the Markdown file's source folder. On this page, `[Using the Theme](../)` goes to the section overview, and `[Contact us](../../contact/)` goes to the contact page. Full external website URLs work normally.

```markdown
[Using the Theme](../)
[Contact us](../../contact/)
[Tables on this page](#tables)
```

Relative paths preserve the site's repository base path when the folder depth is correct. A path starting with `/` starts at the domain root and can miss the repository name on GitHub Pages. If you prefer site-root paths, you can optionally use the theme's Liquid URL filter; that is a path helper, not a layout class:

{% raw %}
```markdown
[View samples]({{ "/sample-content/" | relative_url }})
```
{% endraw %}

Use descriptive labels and check the rendered destinations. A `#heading-name` fragment jumps to a heading on the same page; preview the page to confirm the generated heading ID.

## Quotations and code

```markdown
> A quotation from a project participant or source.

Use `permalink` to set a page's public address.
```

Fenced code blocks preserve indentation and display an example as code rather than normal Markdown. Add a language name after the opening three backticks for syntax highlighting. Liquid expressions are evaluated even inside code fences; documentation showing those expressions literally must protect them with Liquid `raw` and `endraw` tags.

Ordinary blockquotes remain quotations. They do not become Note, Important, Warning, or Caution panels unless you use the classes or YAML blocks described in the other guides.

## What needs a block format

Plain Markdown does not select the theme's two-column panels, side-by-side image-and-text layouts, configurable card grids, linked-image galleries, partner-logo grids, coloured section panels, styled alerts, or automatically generated page cards. Ordinary lists, images, and tables remain useful, but do not reproduce those components.

Use [Markdown with layout classes]({{ "/using-the-theme/markdown-page-content/" | relative_url }}), [YAML page content]({{ "/using-the-theme/yaml-page-content/" | relative_url }}), or [HTML and Markdown page content]({{ "/using-the-theme/html-markdown-page-content/" | relative_url }}) when you need those layouts. For a hero, carousel, achievements, or full-width overview sections, use the [landing-page layout]({{ "/using-the-theme/landing-page-styles/" | relative_url }}).

You can begin with plain Markdown and add a styled block later. The page does not need to be rewritten in another format to add a class-based block in its body. YAML blocks, when used, appear after all body content.

## Shared appearance and previewing

Fonts, heading colours, background and text colours, link colours, and table styling come from `_config.yml` and the shared stylesheet. Plain Markdown automatically follows them. A class-free page does not choose a different panel background or grid setting for an individual section.

Preview the page on desktop and a narrow screen. Check heading order, list nesting, image paths, link destinations, and table readability. Keep blank lines between paragraphs and around lists, quotations, and code examples.

[View the Markdown formatting samples]({{ "/sample-content/markdown-formats/" | relative_url }}) or [return to Using the Theme]({{ "/using-the-theme/" | relative_url }}).
