---
layout: page
title: "Navigation and links"
permalink: /reference/navigation-and-links/
order: 3.4
summary: "Navigation and links"
---

A page can exist without being in the menu. Add important destinations to `_data/navigation.yml`, and use links within the text to connect related information.

## Menu entries

```yaml
- title: Home
  url: /
- title: Research
  url: /research/
  children:
    - title: Methods
      url: /methods/
    - title: Outputs
      url: /outputs/
```

Create pages with these permalinks before adding the example entries. Keep one navigation list and arrange its items in the order you want displayed. The header supports one level of children. A parent with children opens a submenu; its own destination appears as **Overview** within that submenu. Do not add another `children` level.

Menu URLs are site paths without the repository base path; the theme adds `baseurl`. Labels should be short and describe the destination. Changing a page's permalink also means updating its menu entries and incoming links.

## Links in page content

An external link uses its full address, such as `[JCU](https://www.jcu.edu.au/)`. For an internal body link, the `relative_url` filter adds your site's repository path:

{% raw %}
```markdown
[Read our methods]({{ "/methods/" | relative_url }})
```
{% endraw %}

Alternatively, use a relative path such as `[Methods](../methods/)`. This resolves from the published page address, which may differ from the source file's folder. Test it on the finished website.

YAML block URL fields generally accept site paths such as `/methods/` and handle `baseurl` when rendered by the theme. YAML text fields do not evaluate body-style Liquid expressions; use relative Markdown links in those text fields. Partner URL fields are output directly, so use full external addresses for partner websites.

## Previous and Next links

For pages with a clear reading order, put two Markdown links in one paragraph at the bottom of the page and add the `jcu-page-navigation` class immediately beneath it:

```markdown
[← Previous](../previous-page/) [Next →](../next-page/)
{: .jcu-page-navigation}
```

Replace the example destinations with your pages' published paths. The first link sits on the left and the second on the right, on the same row. Long labels can wrap within their own side on narrow screens. Write both links on the same source line, or separate them with an ordinary newline rather than an explicit line break or blank line. At the beginning or end of a sequence, an Overview link can replace the missing neighbour. The beginner, page-building, and maintenance guides demonstrate this pattern.

This is an optional Kramdown class attribute, rather than plain Markdown alignment syntax. You choose the destinations yourself; the theme does not generate Previous and Next links automatically. A single link remains left aligned. For related reference pages without a reading sequence, ordinary links are usually more useful.

## Check destinations

Use descriptive link text such as “Read our fieldwork methods”. Avoid placeholder `#` links or links back to the same page unless an in-page section link is intended. Check that every destination exists, matches the label, and works from the deployed site, including when opened from a phone menu.

Continue with [Preview and troubleshoot]({{ "/check-and-maintain/preview-and-troubleshoot/" | relative_url }}).

[Site appearance]({{ "/reference/site-appearance/" | relative_url }}) [Content and styling reference]({{ "/reference/" | relative_url }})
{: .jcu-page-navigation}
