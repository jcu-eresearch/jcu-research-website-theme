---
title: Configured colours
card_title: "Configured colours"
card_category: "Theme settings"
permalink: /sample-content/configured-colours/
order: 4
image: "/assets/sample-images/sample-configured-colours.svg"
summary: "A visual reference for the colour settings configured in this theme."
---

This page shows the background colours and their matching text and link colours from `_config.yml`. Alert types have separate border, background, text, and link settings, shown below.

{% assign colour_pairs = "primary:Primary:#354F52:#FFFFFF:#FFFFFF,secondary:Secondary:#C3D5C7:#354F52:#354F52,background:Background:#F4F6F3:#354F52:#354F52,surface:Surface:#FFFFFF:#354F52:#354F52,note:Note:#354F52:#354F52:#354F52,important:Important:#527C66:#354F52:#354F52,warning:Warning:#C83B35:#354F52:#922C27,caution:Caution:#A86A2B:#354F52:#75471A" | split: "," %}

{% assign alert_types = "note,important,warning,caution" | split: "," %}

<div class="colour-samples">
  {% for colour_pair in colour_pairs %}
    {% assign parts = colour_pair | split: ":" %}
    {% assign prefix = parts[0] %}
    {% assign colour_key = prefix | append: "_color" %}
    {% assign text_key = prefix | append: "_text_color" %}
    {% assign link_key = prefix | append: "_link_color" %}
    {% assign colour_value = site.theme_settings[colour_key] | default: parts[2] %}
    {% assign text_value = site.theme_settings[text_key] | default: parts[3] %}
    {% assign link_value = site.theme_settings[link_key] | default: parts[4] %}
    {% assign display_colour_key = colour_key %}
    {% assign display_colour_value = colour_value %}
    {% if alert_types contains prefix %}
      {% assign display_colour_key = prefix | append: "_background_color" %}
      {% assign configured_background = site.theme_settings[display_colour_key] %}
      {% capture display_colour_value %}{% if configured_background %}{{ configured_background }}{% else %}color-mix(in srgb, {{ colour_value }} 10%, #fff){% endif %}{% endcapture %}
    {% endif %}
    <article class="colour-sample colour-sample--pair" id="colour-{{ prefix }}">
      <div class="colour-swatch colour-swatch--pair" style="background-color: {{ display_colour_value }}; color: {{ text_value }};">
        <span>Sample text</span>
        <a href="#how-these-colours-are-used" style="color: {{ link_value }};">How colours are used</a>
      </div>
      <div class="colour-sample-body">
        <h2>{{ parts[1] }} colours</h2>
        <dl>
          <dt>Background</dt>
          <dd><code>{{ display_colour_key }}</code></dd>
          <dt>Value</dt>
          <dd><code>{{ display_colour_value }}</code></dd>
          {% if alert_types contains prefix %}
            <dt>Left border</dt>
            <dd><code>{{ colour_key }}: {{ colour_value }}</code></dd>
          {% endif %}
          <dt>Text</dt>
          <dd><code>{{ text_key }}: {{ text_value }}</code></dd>
          <dt>Link</dt>
          <dd><code>{{ link_key }}: {{ link_value }}</code></dd>
        </dl>
      </div>
    </article>
  {% endfor %}
</div>

## How these colours are used

- **Primary** is used for the shared header, primary background bands, primary buttons, and structural rules.
- **Secondary** is used for secondary background bands, coloured content blocks, and table headers.
- **Background** is used for the main page and open content areas.
- **Surface** is used for cards, panels, menus, and neutral buttons.
- **Note, Important, Warning, and Caution** each have a configured background, left-border colour, and matching text and link colours. These settings are shared by YAML and Markdown alert blocks.

`heading_color` controls headings on the normal page background, and `border_color` controls subtle borders. The older `text_color` setting remains a fallback for `background_text_color` in existing site configurations.
