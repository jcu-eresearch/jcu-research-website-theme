---
layout: page
title: "YAML basics"
permalink: /reference/yaml-basics/
order: 3.1
summary: "YAML basics"
---

YAML stores settings as readable names and values. In this theme, you will encounter it in `_config.yml`, `_data/navigation.yml`, and the front matter at the top of Markdown pages. Front matter is enclosed by two lines containing `---`; standalone `.yml` files do not need those markers.

## Names, values, and indentation

```yaml
layout: page
title: "Methods: field observations"
permalink: /methods/
```

A colon separates the field name from its value. Leave a space after it. Quote text containing a colon followed by a space or other special characters. Keep colour codes quoted, for example `primary_color: "#354F52"`, because an unquoted `#` begins a comment.

Use spaces, never tabs, for indentation. Indented settings belong to the field above them:

```yaml
theme_settings:
  primary_color: "#354F52"
  primary_text_color: "#FFFFFF"
```

Do not repeat a top-level field to add more settings. Add new entries under the existing field instead. For example, keep one `theme_settings:` section and one `blocks:` list.

## Lists and longer text

A dash introduces a list item. The theme reads blocks in list order:

```yaml
blocks:
  - type: one-column
    title: Our approach
    content: |
      We combine field observations with **community knowledge**.

      - Visit study locations.
      - Record observations.
  - type: one-column
    title: Our results
    content: "Results will be published here."
```

The `|` starts a multiline text value. Indent all its lines further than `content:`. Blank lines separate Markdown paragraphs. Block text fields support Markdown, but titles and labels are plain text. Liquid expressions in YAML text fields are not evaluated like expressions in the page body.

## Page settings are not the page body

All authoring methods can use YAML front matter for the title, address, and layout. A `blocks:` list is optional. Text below the closing `---` belongs to the page body, not to the YAML settings.

Use [Write your first page]({{ "/beginners/write-your-first-page/" | relative_url }}) for a complete file or [YAML page content]({{ "/reference/yaml-page-content/" | relative_url }}) for supported block fields.
