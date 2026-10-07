---
layout: page
title: "Write your first page"
permalink: /beginners/write-your-first-page/
order: 1.4
summary: "Write your first page"
---

Create a file named `research-background.md` in your website repository. Copy this complete example, replace the text with your own research story, and commit the file.

```markdown
---
layout: page
title: Research background
permalink: /research-background/
---

Our project explores how coastal ecosystems change over time.

## Why this matters

Explain the problem and who benefits from the research.

## What we will do

- Observe changes in selected study areas.
- Work with local communities.
- Share findings and practical recommendations.

## Find out more

[Visit our university](https://www.jcu.edu.au/).
```

## Understand the small header

The lines between `---` markers are **YAML front matter**: settings attached to this page. `layout: page` selects the standard page template. `title` supplies its main heading, so you do not repeat that heading in the body. `permalink` sets the published address; choose a short, unique path. Keep the markers and indentation intact.

The text below the second marker is the **page body**. Markdown uses `##` for section headings and `-` for list items. Blank lines separate paragraphs. You can add an optional `lead:` line to the header for a short introduction under the title, but you do not need it for this example.

## Put the page in the menu

Add this item to `_data/navigation.yml`, after Home:

```yaml
- title: Research background
  url: /research-background/
```

The menu URL must match the page's `permalink`. Keep the existing Home item. Commit the menu change, wait for publishing, then test the link on the live site.

## Continue at your own pace

Use [Plain Markdown pages]({{ "/reference/plain-markdown/" | relative_url }}) for images, tables, links, and more text formatting. Learn [YAML basics]({{ "/reference/yaml-basics/" | relative_url }}) when you need additional settings. When the story calls for panels, columns, or cards, go to [Build your pages]({{ "/build-your-pages/" | relative_url }}).

[← Previous]({{ "/beginners/create-your-first-website/" | relative_url }}) [Overview →]({{ "/beginners/" | relative_url }})
{: .jcu-page-navigation}
