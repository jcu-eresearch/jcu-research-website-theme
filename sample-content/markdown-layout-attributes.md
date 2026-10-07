# Reusable attributes for Markdown layouts

These Kramdown attribute definitions cover the layouts and their nested parts in
the [Markdown with classes sample](pages/markdown-syntax-content-blocks.md).
Copy the definitions you need into the same Markdown page as your content.
They can appear near the beginning or end of that page. This file is a source
reference; the theme does not load its definitions into other pages automatically.

Replace a class line such as `{:.jcu-block .jcu-two-column}` with
`{:two-column}` immediately after the block it styles, without a blank line.
Keep the sample's nested blockquote structure and apply the appropriate named
attribute at each level. These names shorten the class lines; they do not create
the content or change its layout.

## Text blocks and two-column layouts

{:block: .jcu-block}
{:text-secondary: .jcu-block .jcu-bg-secondary}
{:two-column: .jcu-block .jcu-two-column}
{:two-column-primary: .jcu-block .jcu-two-column .jcu-bg-primary}
{:column: .jcu-column}

## Image and text layouts

{:image-left-small: .jcu-block .jcu-image-text .jcu-image-left .jcu-image-small}
{:image-left-small-secondary: .jcu-block .jcu-image-text .jcu-image-left .jcu-image-small .jcu-bg-secondary}
{:image-right-secondary: .jcu-block .jcu-image-text .jcu-image-right .jcu-bg-secondary}
{:text: .jcu-text}
{:media: .jcu-media}

## Image galleries and partner logos

Use `{:block}` for the outer gallery or standard-background partner-logo block.
Apply the gallery or logo attribute to the inner paragraph of images and links.
For the primary-background partner-logo example, use `{:block-primary}` on the
outer block and `{:partner-logos-two}` on its inner image paragraph.

{:gallery-four: .jcu-gallery .jcu-columns-4}
{:partner-logos-four: .jcu-partner-logos .jcu-columns-4}
{:partner-logos-two: .jcu-partner-logos .jcu-columns-2}
{:block-primary: .jcu-block .jcu-bg-primary}

## Cards and their nested parts

{:cards-three: .jcu-block .jcu-cards .jcu-columns-3}
{:cards-one: .jcu-block .jcu-cards .jcu-columns-1}
{:card: .jcu-card}
{:card-image: .jcu-card-image}
{:card-body: .jcu-card-body}
{:card-category: .jcu-card-category}
{:card-link: .jcu-card-link}

## Alerts

{:note: .jcu-alert .jcu-alert--note}
{:important: .jcu-alert .jcu-alert--important}
{:warning: .jcu-alert .jcu-alert--warning}
{:caution: .jcu-alert .jcu-alert--caution}

## Tables

Place a table inside a blockquote, as in the sample. Apply `{:block-primary}` to
the outer block for a primary background, or `{:block}` for the standard page
background. The theme chooses the table colours from the containing block.

## Previous and Next links

{:page-navigation: .jcu-page-navigation}

Copy this definition into your page, then use it immediately beneath two links:

```markdown
[← Previous](../previous-page/) [Next →](../next-page/)
{:page-navigation}
```

The first link sits on the left and the second on the right. Replace the example
destinations with your pages' published paths.

## Example: Two columns

```markdown
> ## Research areas
>
> > ### Rainforest
> >
> > Research into connected forest habitats.
> {:column}
>
> > ### Coast
> >
> > Research into coastal and marine habitats.
> {:column}
{:two-column}
```

Copy the `column` and `two-column` definitions above into the page too.

## Automatic page cards

The sample's automatic page cards use a Liquid include to collect information
from other pages. Reusable Kramdown attributes cannot replace that include.
Keep its `folder`, `columns`, and other options to generate the cards:

```liquid
{% include page-cards.html
  title="Species profiles"
  folder="sample-content/animals/"
  columns=4
  link_text="Read species profile"
%}
```

Use `columns=1` for the sample's single-column automatic page cards.
