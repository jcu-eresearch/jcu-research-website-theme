---
layout: page
title: "Site appearance"
permalink: /reference/site-appearance/
order: 3.5
summary: "Site appearance"
---

Set the shared appearance once, then let individual pages reuse it. Start with the default colours and fonts; make changes in small steps and check real content on a phone and desktop.

## Configure the shared appearance

Use `theme_settings` in `_config.yml` to set colours, fonts, logos, and defaults. The primary, secondary, background, and surface colours each have matching text and link colours. Alerts also have their own background, text, link, and border colours.

```yaml
theme_settings:
  content_alignment: left
  bullet_style: line
  block_separator_style: none
  page_card_columns: 3
  page_card_link_text: "Read more"
  image_gallery_max_items_per_row: 3
  partner_logo_max_items_per_row: 3
  partner_logo_max_height: "6rem"
```

`content_alignment` accepts `left` or `center`. Standard page separators accept `none`, `line`, `accent`, or `band`. Grid column settings describe desktop layouts; cards and columns stack or reduce their column count on narrower screens. Partner-logo and gallery counts are maximums rather than fixed counts on every screen.

[Inspect the configured colours]({{ "/sample-content/configured-colours/" | relative_url }}) or [browse the working content samples]({{ "/sample-content/" | relative_url }}).

## Fonts

Set font families and the stylesheets that supply them together under `theme_settings`. The family settings select fonts; `font_stylesheets` loads them. Changing a family name does not download that font automatically. The theme loads only the font stylesheets you list; omitting the list or setting it to `[]` loads no text fonts. SVG images and the favicon keep their own fonts. The optional catalogue layout manages its icon font separately.

### Simple system fonts

For fonts already installed on visitors' devices, no font server is needed. This example uses Arial for both body text and headings, with compatible fallbacks:

```yaml
theme_settings:
  font_family: "Arial, Helvetica, sans-serif"
  heading_font_family: "Arial, Helvetica, sans-serif"
  font_stylesheets: []
  font_weight_regular: 400
  font_weight_bold: 700
  font_weight_emphasis: 700
  font_weight_heavy: 700
  heading_font_weight: 700
```

Add these settings to your existing `theme_settings` block rather than creating a second block. Each visitor uses the first available font in the comma-separated list. Different devices may therefore display a different fallback font.

### Fonts used by this theme website

This documentation website uses Lato for body text and Lora for headings. Its `_config.yml` contains:

```yaml
theme_settings:
  font_family: "Lato, Arial, Helvetica, sans-serif"
  heading_font_family: "Lora, Georgia, serif"
  font_stylesheets:
    - "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
  font_weight_regular: 400
  font_weight_bold: 700
  font_weight_emphasis: 700
  font_weight_heavy: 900
  heading_font_weight: 700
```

The Google Fonts stylesheet supplies Lato at weights 400 (regular), 700 (bold), and 900 (heavy), and Lora across weights 400–700. It includes upright and italic styles. `display=swap` allows fallback text to appear while the fonts load. If the service is unavailable, the browser uses the remaining fonts in each family list.

Regular body text uses `font_weight_regular`. Bold Markdown text and ordinary bold labels use `font_weight_bold`. Navigation, buttons, and other prominent labels use `font_weight_emphasis`; the strongest display labels use `font_weight_heavy`. Headings use `heading_font_weight`. Some card titles deliberately use the body font and its heavy weight.

When choosing another hosted font, copy its provider's stylesheet URL and change the family names and weights to match. Several stylesheets can be listed. The theme does not infer a provider or supported weights from the family name. Existing sites upgrading from the fixed Lato/Lora loader must add the stylesheet list above to continue downloading those fonts.

### Serve font files from your own website

For a locally served font, store its licensed font files and a stylesheet in your site's assets folder. For example:

```yaml
theme_settings:
  font_family: '"Project Sans", Arial, sans-serif'
  heading_font_family: '"Project Sans", Arial, sans-serif'
  font_stylesheets:
    - "/assets/fonts/fonts.css"
  font_weight_regular: 400
  font_weight_bold: 700
  font_weight_emphasis: 700
  font_weight_heavy: 700
  heading_font_weight: 700
```

A simple `assets/fonts/fonts.css` for two upright WOFF2 files would contain:

```css
@font-face {
  font-family: "Project Sans";
  src: url("./project-sans-regular.woff2") format("woff2");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "Project Sans";
  src: url("./project-sans-bold.woff2") format("woff2");
  font-style: normal;
  font-weight: 700;
  font-display: swap;
}
```

Replace these example filenames and family name with your actual font. Add italic faces if your font provides them; otherwise the browser may synthesise italics. Local stylesheet paths receive the site's `baseurl` automatically, and relative font-file URLs resolve from the stylesheet's folder.

### Adjust sizes and spacing

These are the typography settings used by this website, and the defaults when omitted:

```yaml
theme_settings:
  font_size_scale: 1
  body_font_size: "1rem"
  body_line_height: 1.65
  body_letter_spacing: "0"
  heading_line_height: 1.15
  heading_letter_spacing: "0"
  compact_line_height: 1.4
  hero_heading_line_height: 1.1
  hero_text_line_height: 1.55
  display_line_height: 1
  card_heading_line_height: 1.2
  label_letter_spacing: "0.09em"
```

| Setting | Purpose |
| --- | --- |
| `font_size_scale` | Multiplies the browser's root text size. `1.1` increases rem-based sizes by 10%; rem-based layout spacing also grows. Responsive headings keep their viewport-based scaling and scaled minimum/maximum sizes. |
| `body_font_size` | Sets the body text size. Component sizes retain their own rem-based proportions. |
| `body_line_height` | Spacing between ordinary text lines, expressed as a multiple of the text size. |
| `body_letter_spacing` | Default spacing between characters in body text. |
| `heading_line_height`, `heading_letter_spacing` | Spacing for ordinary headings and heading-style labels. |
| `compact_line_height` | Line spacing for small supporting text such as breadcrumbs. |
| `hero_heading_line_height`, `hero_text_line_height` | Line spacing for landing-page hero headings and introductory text. |
| `display_line_height` | Tight line spacing for large display figures. |
| `card_heading_line_height` | Line spacing for compact body-font card titles. |
| `label_letter_spacing` | Extra character spacing for small uppercase labels. |

Sizes and letter spacing accept CSS values such as `1rem` and `0.02em`; weights, scale, and line heights accept numbers. Use positive sizes, scale, and line heights. Component size ratios and responsive heading formulas remain part of the theme's design; these settings provide shared controls rather than a separate option for every element.

Different fonts have different apparent sizes, character widths, and vertical proportions. Start with these defaults, choose weights that your font actually supplies, then check long headings, bold and italic text, navigation, cards, and line wrapping on mobile and desktop. Adjust line heights or spacing when real content needs it; changing a font does not automatically calculate new values.

## List markers

Set `theme_settings.bullet_style` to `line` (the default) or `circle` for solid unordered-list markers. The same marker is used at every nesting level, including lists inside footnotes and alerts. Indentation shows the hierarchy. Numbered lists, task-list checkboxes, and navigation controls keep their existing behaviour.

## Table styling

On ordinary page backgrounds, table headers use the secondary background and text colours. In coloured panels, cards, and alerts, the header reverses the surrounding colours: the panel text colour supplies the header background, and the panel background supplies the header text colour. Nested containers use their own colour pair.

Tables automatically receive subtle alternating row stripes on light backgrounds and remain unshaded on dark backgrounds. The theme classifies the existing page, primary, secondary, surface, and alert background colours at build time; nested cards and alerts use their own background rather than the outer panel. Stripe colours mix 94% of the background with 6% of its matching text colour. No additional configuration is needed. Use opaque three- or six-digit hex colours for build-time classification (`white` and `black` also work). Other colour expressions remain unshaded because their brightness cannot be resolved by this build-time helper.

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

## Check your colour pairs

Use [Accessibility and colour choices]({{ "/check-and-maintain/accessibility/" | relative_url }}) to check text, links, and table headers against their actual backgrounds.

[HTML and Markdown page content]({{ "/reference/html-markdown-page-content/" | relative_url }}) [Navigation and links]({{ "/reference/navigation-and-links/" | relative_url }})
{: .jcu-page-navigation}
