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
  block_separator_style: none
  page_card_columns: 3
  page_card_link_text: "Read more"
  image_gallery_max_items_per_row: 3
  partner_logo_max_items_per_row: 3
  partner_logo_max_height: "6rem"
```

`content_alignment` accepts `left` or `center`. Standard page separators accept `none`, `line`, `accent`, or `band`. Grid column settings describe desktop layouts; cards and columns stack or reduce their column count on narrower screens. Partner-logo and gallery counts are maximums rather than fixed counts on every screen.

[Inspect the configured colours]({{ "/sample-content/configured-colours/" | relative_url }}) or [browse the working content samples]({{ "/sample-content/" | relative_url }}).

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
