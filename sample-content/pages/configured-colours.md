---
title: Configured colours
permalink: /sample-content/configured-colours/
order: 4
image: "/assets/sample-images/card-green-turtle.svg"
summary: "A visual reference for the colour settings configured in this theme."
---

This page shows the background colours and their matching text and link colours from `_config.yml`. Warning alerts use a light tint of `warning_color`, shown below.

{% assign colour_pairs = "primary:Primary:#354F52:#FFFFFF:#FFFFFF,secondary:Secondary:#C3D5C7:#354F52:#354F52,background:Background:#F4F6F3:#354F52:#354F52,surface:Surface:#FFFFFF:#354F52:#354F52,warning:Warning:#86466E:#354F52:#354F52" | split: "," %}

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
    <article class="colour-sample colour-sample--pair" id="colour-{{ prefix }}">
      <div class="colour-swatch colour-swatch--pair" style="background-color: {% if prefix == 'warning' %}color-mix(in srgb, {{ colour_value }} 10%, #fff){% else %}{{ colour_value }}{% endif %}; color: {{ text_value }};">
        <span>Sample text</span>
        <a href="#colour-{{ prefix }}" style="color: {{ link_value }};">Sample link</a>
      </div>
      <div class="colour-sample-body">
        <h2>{{ parts[1] }} colours</h2>
        <dl>
          <dt>Background</dt>
          <dd><code>{{ colour_key }}</code></dd>
          <dt>Value</dt>
          <dd><code>{{ colour_value }}</code></dd>
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

- **Primary** is used for the shared header, highlight bands, primary buttons, and structural rules.
- **Secondary** is used for feature bands, coloured content blocks, secondary buttons, and table headers.
- **Background** is used for the main page and open content areas.
- **Surface** is used for cards, panels, menus, and neutral buttons.
- **Warning** is used for the left border and tinted background of Warning alerts.

`heading_color` controls headings on the normal page background, and `border_color` controls subtle borders. The older `text_color` setting remains a fallback for `background_text_color` in existing site configurations.
