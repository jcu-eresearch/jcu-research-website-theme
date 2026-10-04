---
layout: page
title: "Accessibility and colour choices"
permalink: /using-the-theme/accessibility/
order: 6
summary: "Make content easier to read, navigate, and understand, and check your colour choices."
---

Accessible websites help people read and use your research content with different abilities, devices, and ways of navigating. Clear structure supports people using screen readers, while readable contrast helps people with low vision and readers viewing a screen in difficult lighting. Accessibility also improves the experience of navigating with a keyboard or reading on a small screen.

The theme provides a useful starting point. The content you write, images you choose, and colours you configure still need checking. Automated checks can identify many issues, but do not establish complete accessibility on their own.

## Write for screen readers

Screen readers use page structure and accessible names to help people navigate without relying on visual appearance.

- Give every page a descriptive title. The theme supplies its main heading; use `##` for sections and `###` for subsections. Keep heading levels in a logical order rather than choosing them just for their visual size.
- Write descriptive links such as “Read the southern cassowary profile” rather than repeated “Click here” labels. A destination should match what its label promises.
- Describe meaningful images in alt text. Explain their purpose in the surrounding content rather than listing every visual detail. Decorative images should have empty alt text where the authoring format supports it.
- Give important charts and diagrams a written explanation or accessible data table. A short image description alone may not communicate the findings.
- Use tables for data, with clear column headings. Use the layout blocks for arranging content into columns instead of using a table for page layout.
- Do not rely on colour alone to explain meaning. Include words, labels, or other visible cues for categories, warnings, and states.

A screen reader cannot judge whether a supplied image description is useful. Authors need to review that themselves. See [W3C's image guidance](https://www.w3.org/WAI/tutorials/images/) for choosing appropriate alternatives.

## Contrast levels

WCAG 2.2 Level AA requires ordinary text to have a contrast ratio of at least **4.5:1** against its background. Large text requires at least **3:1**: large means at least 24 CSS pixels, or approximately 18.7 CSS pixels when bold. Important visual information that identifies controls, their states, or meaningful graphics generally needs **3:1** against adjacent colours. Decorative borders do not automatically have that requirement.

Aim above the minimum where practical. Small text, thin fonts, and text over photographs are particularly worth checking. The actual foreground and background matter; a colour that works on white may fail on a dark panel. [W3C text contrast requirements](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [non-text contrast requirements](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).

## How the theme helps

The theme includes:

- A shared page structure with a main content region, navigation labels, and a “Skip to content” link for bypassing repeated navigation.
- Real buttons for opening the header menu and submenus, with expanded-state information and labels for assistive technology.
- Page titles and reusable heading structures, plus labelled carousel controls.
- Image alt-text fields in relevant blocks and meaningful labels for generated page-card links.
- Paired background, text, and link settings for primary, secondary, surface, ordinary page, and alert colours.
- Responsive layouts that adapt columns and cards to smaller screens.
- Table headers that reverse a coloured container's text and background pair. On ordinary page backgrounds, table headers use the secondary pair.
- Automatic subtle table stripes on light configured backgrounds, while dark backgrounds remain unshaded.

These features support accessibility; they do not guarantee it. The table brightness calculation decides when to apply stripes, **not whether colours pass WCAG contrast**. Check the rendered result, including striped rows, links, buttons, and nested cards. Empty alt fields, unsuitable colour pairs, or confusing content can still introduce barriers.

## Choose a colour scheme

Start with a small palette: a primary colour for the header and emphasis, a secondary colour for supporting panels, and background and surface colours for reading areas. Then choose a readable text and link colour for each background. Brand colours can be retained for accents even when they are unsuitable behind ordinary text.

| Settings | Check together |
| --- | --- |
| `primary_color` | `primary_text_color` and `primary_link_color` |
| `secondary_color` | `secondary_text_color` and `secondary_link_color` |
| `background_color` | `background_text_color`, `background_link_color`, and `heading_color` |
| `surface_color` | `surface_text_color` and `surface_link_color` |
| Each alert's `TYPE_background_color` | Its `TYPE_text_color` and `TYPE_link_color`, where `TYPE` is `note`, `important`, `warning`, or `caution` |

Use a [contrast checker](https://webaim.org/resources/contrastchecker/) to test each pair before applying it. Check normal text against the 4.5:1 requirement even if the palette also includes large headings. The reversed table header preserves the contrast ratio of its two colours, but striped body rows introduce a different background that also needs checking.

Keep links visibly identifiable through an underline or another non-colour cue. For custom hero backgrounds, check `text_color` and `link_color`; test the actual photograph and overlay, not just its nominal background colour. Avoid placing important text over busy images.

Preview [configured colours]({{ "/sample-content/configured-colours/" | relative_url }}) and the [content samples]({{ "/sample-content/" | relative_url }}), including tables on both ordinary and primary backgrounds. Use colour codes such as `#FFFFFF` in your settings so the theme can automatically add table stripes on light backgrounds. Other colour formats still work, but their tables will have no stripes.

## Check your website content

Check each page after changing content or colours, and repeat the checks after substantial updates. Inspect menus while open, as well as the initial page state.

| Tool | How to use it |
| --- | --- |
| [WAVE website](https://wave.webaim.org/) | Enter the URL of a published page to inspect issues without installing an extension. |
| [WAVE browser extension](https://wave.webaim.org/extension/) | Inspect the open page, including a local preview or a page behind a login. Available for Chrome, Firefox, and Edge. |
| [axe DevTools extension](https://www.deque.com/axe/devtools/extension/) | Run automated checks and inspect detailed findings. The free version tests one page at a time. |
| [Chrome Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) | Open Developer Tools, select Lighthouse and Accessibility, then run an audit. |
| [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/) | Enter foreground and background colours to check a specific pair. |

Start with WAVE if you prefer issues marked directly on the page. Review contrast errors, missing image alternatives, and heading structure. Some findings require human judgement; a warning is not always a confirmed failure.

Also carry out a few manual checks:

1. Navigate with Tab and Shift+Tab. Check that you can see the focused item, reach all links and controls, and operate menus with the keyboard.
2. Zoom to 200% and inspect a narrow screen. Check that text is readable and content is not clipped or hidden.
3. Try a screen reader, such as VoiceOver on macOS or NVDA on Windows. Check the page title, heading navigation, link labels, and image descriptions.
4. Check that instructions and important information remain understandable without distinguishing colours.
5. Review text over images and any charts, diagrams, or embedded content separately.

The theme does not currently run an accessibility audit during the build. A successful build or a perfect automated score is not proof of WCAG conformance. [W3C guidance on selecting evaluation tools](https://www.w3.org/WAI/test-evaluate/tools/selecting/).

[Return to Using the Theme]({{ "/using-the-theme/" | relative_url }}).
