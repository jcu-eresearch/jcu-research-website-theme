---
layout: page
title: "Using the Theme"
permalink: /using-the-theme/
order: 0
summary: "Choose a layout and the content format that suits you."
---

This theme lets you create research project websites using ready-made layouts and shared styling. Choose a layout for the purpose of the page, then choose the content format you find easiest to write and maintain.

## Choose a layout

| Layout | Purpose | How you write content |
| --- | --- | --- |
| `landing-page` | A homepage or project overview that introduces the project and guides visitors to more detail. Includes a hero, full-width sections, achievements, a carousel, cards, and partner logos. | Configure `hero` and an ordered `blocks` list in YAML front matter. Optional Markdown body content appears between the hero and the blocks. |
| `page` | Detail pages such as research background, methods, outputs, people, contact information, and these guides. Includes a page title, optional lead and breadcrumbs, and reusable content blocks. | Use YAML blocks, Markdown blocks, or HTML wrappers with Markdown. |

Both layouts share the header, navigation, typography, colours, and responsive styling. A site can use a landing page for its homepage and standard pages for the supporting information. The catalogue integration layout is a specialist option described in the repository README; the two layouts above cover general content authoring.

[Read the landing-page guide]({{ "/using-the-theme/landing-page-styles/" | relative_url }}).

## Choose a page-content format

The three formats are alternative ways to create the same styled page content. Choose the method that feels easiest to you; you do not need to learn all three.

| Format | Best suited to | How it works |
| --- | --- | --- |
| YAML front matter | Authors who prefer named fields and a consistent structure. | Declare blocks and their fields in `blocks:` above the page body. Write Markdown inside text fields. |
| Markdown blocks | Authors who prefer keeping the whole story in the page body. | Group content using nested blockquotes and attach the theme's classes underneath each group. |
| HTML wrappers with Markdown | Authors who find named opening and closing elements easier than nested blockquotes. | Use `section`, `div`, and `article` wrappers with the same theme classes; write Markdown inside them. |

All three provide the same core styling options: text panels, two columns, images beside text, cards, galleries, partner logos, generated page cards, and alerts. They use the same theme colours, image sizes, card surfaces, grid settings, and responsive behaviour. You select those options with YAML fields in the first format and CSS classes in the other two. Generated page cards use a short Liquid include in the body formats because they collect content from other files.

[YAML page-content guide]({{ "/using-the-theme/yaml-page-content/" | relative_url }}) · [Markdown page-content guide]({{ "/using-the-theme/markdown-page-content/" | relative_url }}) · [HTML and Markdown page-content guide]({{ "/using-the-theme/html-markdown-page-content/" | relative_url }})

## Styling equivalents

| Option | YAML | Markdown and HTML classes |
| --- | --- | --- |
| Coloured panel | `background: primary` or `secondary` | `jcu-bg-primary` or `jcu-bg-secondary` |
| Two columns | `type: two-column` with `columns` | `jcu-two-column` with `jcu-column` groups |
| Image beside text | `type: image-text` | `jcu-image-text` with `jcu-text` and `jcu-media` groups |
| Image position | `image_position: left` or `right` | `jcu-image-left` or `jcu-image-right` |
| Image size | `image_size: small`, `medium`, or `large` | `jcu-image-small`, no size class for medium, or `jcu-image-large` |
| Cards | `type: cards` | `jcu-cards` with `jcu-card` groups |
| Gallery | `type: gallery` | `jcu-gallery` on the linked-image paragraph |
| Partner logos | `type: partner-logos` | `jcu-partner-logos` on the image paragraph |
| Grid columns | `columns: 1` through `6` | `jcu-columns-1` through `jcu-columns-6` |
| Alerts | `type: alert` and `alert_type` | `jcu-alert` and `jcu-alert--note`, `--important`, `--warning`, or `--caution` |

## Create a page

Create a `.md` file and begin with front matter:

```yaml
---
layout: page
title: Research background
permalink: /research-background/
lead: A short introduction to the research.
---

Write your page content here.
```

The current configuration defaults ordinary pages to `layout: page`; setting it explicitly makes the choice clear. Add the page's title and permalink to `_data/navigation.yml` when it should appear in the menu. The theme generates the page's main heading, so use `##` for main sections in the body.

YAML blocks appear after all body content. Body formats let you place styled blocks between ordinary paragraphs. You can combine formats on a page, but keeping one main method usually makes editing easier.

## Configure the shared appearance

Use `theme_settings` in `_config.yml` to set colours, fonts, logos, and defaults. The primary, secondary, background, and surface colours each have matching text and link colours. Alerts also have their own background, text, link, and border colours.

```yaml
theme_settings:
  content_alignment: left
  block_separator_style: none
  page_card_columns: 3
  page_card_link_text: "Read more"
  image_gallery_max_items_per_row: 3
  partner_logo_max_items_per_row: 3
  partner_logo_max_height: "6rem"
```

`content_alignment` accepts `left` or `center`. Standard page separators accept `none`, `line`, `accent`, or `band`. Grid column settings describe desktop layouts; cards and columns stack or reduce their column count on narrower screens. Partner-logo and gallery counts are maximums rather than fixed counts on every screen.

[Inspect the configured colours]({{ "/sample-content/configured-colours/" | relative_url }}) or [browse the working content samples]({{ "/sample-content/" | relative_url }}).

## Images and links

Store images in `assets/images/` or another assets folder. Use descriptive alternative text and link labels that identify the destination. YAML image and URL fields are site paths such as `/assets/sample-images/card-cassowary.svg`; the theme handles the site's `baseurl` where those fields are rendered through its path filter.

In Markdown body content, use Liquid's `relative_url` filter for internal site paths so links also work when hosted under a repository name:

{% raw %}
```markdown
[View samples]({{ "/sample-content/" | relative_url }})
![Southern cassowary]({{ "/assets/sample-images/card-cassowary.svg" | relative_url }})
```
{% endraw %}

Liquid expressions are evaluated in the page body, including inside code fences unless protected with `raw`. Do not put Liquid expressions in YAML text fields; use normal Markdown with a relative link such as `[Overview](../)` instead. Partner URL fields are output directly, so prefer a complete external URL for an organisation's website, or include the site's base path explicitly for an internal partner link.
