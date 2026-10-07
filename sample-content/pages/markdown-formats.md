---
title: Markdown formatting
card_title: "Plain Markdown"
card_category: "Page content"
permalink: /sample-content/markdown-formats/
order: 2.5
image: "/assets/sample-images/sample-markdown-formatting.svg"
summary: "A reference to Markdown syntax supported by the theme’s configured parser."
---

This page demonstrates the Markdown features available with this theme's current **Kramdown, GFM-input configuration**. It covers document structure, text, links, images, lists, tables, and Kramdown extensions. Each example separates its rendered output under an Example subheading from the Markdown source shown in a note box. Equivalent punctuation variants are included where useful; this is a feature reference rather than a catalogue of every parser edge case.

You can combine these features with the theme's layout blocks. Ordinary Markdown needs no layout classes. The source examples use an alert class only to style their code containers; you do not need that class in your own content.

## Contents
{:.no_toc}

- Contents
{:toc}

The contents list above is generated from this page's headings. See [Automatic contents lists](#automatic-contents-lists) for its source.

## Headings

Headings organise the page into sections and subsections. Start a heading with one to six `#` characters followed by a space; more characters create a lower heading level. The theme supplies the page title, so normally begin body sections with `##` and keep the heading hierarchy in order.

### Example
{:.no_toc}

# Heading 1
{:.no_toc}

## Heading 2
{:.no_toc}

### Heading 3
{:.no_toc}

#### Heading 4
{:.no_toc}

##### Heading 5
{:.no_toc}

###### Heading 6
{:.no_toc}

```markdown
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
```
{: .jcu-alert .jcu-alert--note}

## Heading IDs

A heading ID gives a section a stable link destination. Add `{#your-id}` after the heading text, then link to it with `#your-id`. Choose a unique ID without spaces; ordinary headings also receive automatically generated IDs. For a custom ID, the small chain-link button appears when you hover over the heading or focus the button with the keyboard. Activate it to copy the full section URL; a brief “Copied” message confirms success and is also announced to screen readers.

### Example
{:.no_toc}

## Heading with an ID {#custom-id}
{:.no_toc}

[Return to the Link section](#link-section).

```markdown
## Heading with an ID {#custom-id}

[Return to the Link section](#link-section).
```
{: .jcu-alert .jcu-alert--note}

## Paragraph

Paragraphs group related sentences. To start a new paragraph, leave a blank line after the preceding text, then write the next paragraph. No special marker is needed. Ordinary line breaks in the source stay within the same paragraph and do not create visible line breaks, so you can split long text across source lines for easier editing.

### Example
{:.no_toc}

Quisque egestas convallis ipsum, ut sollicitudin risus tincidunt a.
Maecenas interdum malesuada egestas. Duis consectetur porta risus, sit amet
vulputate urna facilisis ac. Phasellus semper dui non purus ultrices sodales.

Aliquam ante lorem, ornare a feugiat ac, finibus nec mauris. Vivamus ut
tristique nisi. Sed vel leo vulputate, efficitur risus non, posuere mi. Nullam
tincidunt bibendum rutrum. Proin commodo ornare sapien. Vivamus interdum diam
sed sapien blandit, sit amet aliquam risus mattis. Nullam arcu turpis, mollis
quis laoreet at, placerat id nibh. Suspendisse venenatis eros eros.

```markdown
Quisque egestas convallis ipsum, ut sollicitudin risus tincidunt a.
Maecenas interdum malesuada egestas. Duis consectetur porta risus, sit amet
vulputate urna facilisis ac. Phasellus semper dui non purus ultrices sodales.

Aliquam ante lorem, ornare a feugiat ac, finibus nec mauris. Vivamus ut
tristique nisi. Sed vel leo vulputate, efficitur risus non, posuere mi. Nullam
tincidunt bibendum rutrum. Proin commodo ornare sapien. Vivamus interdum diam
sed sapien blandit, sit amet aliquam risus mattis. Nullam arcu turpis, mollis
quis laoreet at, placerat id nibh. Suspendisse venenatis eros eros.
```
{: .jcu-alert .jcu-alert--note}

End a line with two spaces or a backslash to request an explicit line break within the same paragraph. Unlike a blank line, this does not start a new paragraph.

### Example: Explicit line break
{:.no_toc}

First line
Second line

A new paragraph with an explicit break.\
Another line in the same paragraph.

```markdown
First line
Second line

A new paragraph with an explicit break.\
Another line in the same paragraph.
```
{: .jcu-alert .jcu-alert--note}

## Inline text formats

Inline formats can be embedded within any sentence or paragraph, and can also be combined. Use bold for emphasis, italics for a term or title, inline code for literal commands or field names, and strikethrough for text marked as removed. Surround just the words you want to format with the matching markers.

### Example: Individual formats
{:.no_toc}

**bold text**;
_italicized text_;
`code`;
~~strikethrough~~

```markdown
**bold text**;
_italicized text_;
`code`;
~~strikethrough~~
```
{: .jcu-alert .jcu-alert--note}

### Example: Formatting within a sentence
{:.no_toc}

In our **fieldwork**, we record _habitat conditions_ using the `sample_id` field.
The ~~draft~~ final protocol includes **_important sampling guidance_**.

```markdown
In our **fieldwork**, we record _habitat conditions_ using the `sample_id` field.
The ~~draft~~ final protocol includes **_important sampling guidance_**.
```
{: .jcu-alert .jcu-alert--note}

Combine bold and italic, or emphasise part of a sentence. Underscores are an alternative to asterisks.

### Example: Combined emphasis
{:.no_toc}

**_Bold and italic_**

**Bold with an _italic phrase_ inside.**

_Italic_ and __bold__ using underscores.

```markdown
**_Bold and italic_**

**Bold with an _italic phrase_ inside.**

_Italic_ and __bold__ using underscores.
```
{: .jcu-alert .jcu-alert--note}

You can also embed inline HTML tags in Markdown text: `<mark>` highlights text,
`<sub>` creates subscript, and `<sup>` creates superscript. These are HTML tags,
not Markdown markers; each needs a matching closing tag. More examples are on
the [HTML with Markdown page](../html-markdown-content-blocks/).

### Example: Inline HTML
{:.no_toc}

The <mark>sampling period</mark> is important. Water is H<sub>2</sub>O, and
we measure the study area in km<sup>2</sup>.

```markdown
The <mark>sampling period</mark> is important. Water is H<sub>2</sub>O, and
we measure the study area in km<sup>2</sup>.
```
{: .jcu-alert .jcu-alert--note}

## Block quote

A block quote distinguishes quoted material from your own writing. Start each quoted line with `>`, and include a `>` on blank lines between quoted paragraphs. Add attribution when quoting another source.

### Example
{:.no_toc}

> Once upon a midnight dreary, while I pondered, weak and weary,\
> Over many a quaint and curious volume of forgotten lore,\
> While I nodded, nearly napping, suddenly there came a tapping,\
> As of some one gently rapping, rapping at my chamber door.\
> "'Tis some visitor," I muttered, "tapping at my chamber door-\
>  Only this, and nothing more."

```markdown
> Once upon a midnight dreary, while I pondered, weak and weary,\
> Over many a quaint and curious volume of forgotten lore,\
> While I nodded, nearly napping, suddenly there came a tapping,\
> As of some one gently rapping, rapping at my chamber door.\
> "'Tis some visitor," I muttered, "tapping at my chamber door-\
>  Only this, and nothing more."
```
{: .jcu-alert .jcu-alert--note}

### Example: Quotation with a citation
{:.no_toc}

Put the attribution in its own paragraph within the quote. Include the author and
work title, plus publication details or a source link when needed. A block quote
formats the quotation and citation; it does not generate references automatically.

> Once upon a midnight dreary, while I pondered, weak and weary,\
> Over many a quaint and curious volume of forgotten lore,
>
> — Edgar Allan Poe, _The Raven_.

```markdown
> Once upon a midnight dreary, while I pondered, weak and weary,\
> Over many a quaint and curious volume of forgotten lore,
>
> — Edgar Allan Poe, _The Raven_.
```
{: .jcu-alert .jcu-alert--note}

Quotes can contain nested quotes, paragraphs, lists, and other Markdown. These ordinary quotes do not become layout blocks unless you add the classes described in the [Markdown with layout classes guide](../../reference/markdown-page-content/).

### Example: Nested quotations
{:.no_toc}

> A fieldwork observation.
>
> > A supporting observation from the team.
>
> - Record the location.
> - Explain the context.

```markdown
> A fieldwork observation.
>
> > A supporting observation from the team.
>
> - Record the location.
> - Explain the context.
```
{: .jcu-alert .jcu-alert--note}

## Fenced code block

A fenced code block displays code or literal text without interpreting its Markdown formatting. Place matching fences of at least three backticks or three tildes before and after the content.

An optional language name, such as `json`, enables syntax highlighting **if an appropriate syntax-highlighting stylesheet is added and loaded by the site**. Jekyll generates the syntax classes, but this theme does not currently include colours for them. See [Jekyll’s guide to syntax-highlighting stylesheets](https://jekyllrb.com/docs/liquid/tags/#stylesheets-for-syntax-highlighting) and [Rouge’s stylesheet-generation instructions](https://github.com/rouge-ruby/rouge#usage) for how to obtain the CSS. The stylesheet must then be included in the site’s styles or loaded by its layout.

### Example
{:.no_toc}

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

````markdown
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
````
{: .jcu-alert .jcu-alert--note}

## Footnotes

Footnotes are automatically collected at the bottom of the page's Markdown content, no matter where you write their definitions in the source. On this page, that is the bottom of the page. If a page also uses YAML content blocks, those blocks appear after the Markdown content and its footnotes. Click the superscript number to jump to the note; the selected note is highlighted, and its return arrow takes you back to the original sentence.

Footnote content can use Markdown, including **bold**, _italic_, links, inline code, lists, and multiple paragraphs. Indent continuation paragraphs and lists by four spaces to keep them in the footnote. The examples below show a simple note and a richer note with Markdown formatting.

### Example: Simple and Markdown footnotes
{:.no_toc}

This sentence has a simple footnote.[^1]

This sentence has a footnote containing Markdown.[^methods-note]

[^1]: This is a simple, single-paragraph footnote.

[^methods-note]:
    Footnotes can include **bold**, _italic_, a [link to the Markdown guide](../../reference/plain-markdown/), and inline code such as `sample_id`.

    This second paragraph belongs to the same footnote.

    - Record the observation date.
    - Describe the sampling conditions.

```markdown
This sentence has a simple footnote.[^1]

This sentence has a footnote containing Markdown.[^methods-note]

[^1]: This is a simple, single-paragraph footnote.

[^methods-note]:
    Footnotes can include **bold**, _italic_, a [link to the Markdown guide](../../reference/plain-markdown/), and inline code such as `sample_id`.

    This second paragraph belongs to the same footnote.

    - Record the observation date.
    - Describe the sampling conditions.
```
{: .jcu-alert .jcu-alert--note}

## Lists

Lists make related items easier to scan. Use an ordered list when sequence matters, an unordered list when it does not, or a task list to show completion status.

### Ordered list

Start each item with a number, a full stop, and a space. You can use `1.` for every source item; the rendered list numbers them in sequence. Indent nested items and continuation lines beneath their parent item.

#### Example
{:.no_toc}

1. First item
   - Indented bullet point
1. Second item
   1. Indented numbered item with long text - Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
1. Third item

```markdown
1. First item
   - Indented bullet point
1. Second item
   1. Indented numbered item with long text - Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
1. Third item
```
{: .jcu-alert .jcu-alert--note}

### Unordered list

Start each item with a marker and a space. The markers `-`, `*`, and `+` all create bullets; the example below mixes markers at different nesting levels. Indent child items beneath their parent, and keep the same marker within each level of a continuous list. The theme displays the same solid marker at every level: a line by default, or a circle when `theme_settings.bullet_style` is set to `circle`.

#### Example
{:.no_toc}

- Top level item 1
  * Indented once
    - Indented twice
- Top level item 2

```markdown
- Top level item 1
  * Indented once
    - Indented twice
- Top level item 2
```
{: .jcu-alert .jcu-alert--note}

### Task list

Task lists show completed and incomplete items. Use `- [x]` for a checked item and `- [ ]` for an unchecked item. These checkboxes show the status written in the source; visitors cannot change them on the published website.

#### Example
{:.no_toc}

- [x] Item 1
- [ ] Item 2
- [ ] Item 3

```markdown
- [x] Item 1
- [ ] Item 2
- [ ] Item 3
```
{: .jcu-alert .jcu-alert--note}

### Lists with paragraphs and code

Indent continuation paragraphs and code beneath the list item they belong to.

#### Example
{:.no_toc}

1. Prepare the observations.

   This paragraph belongs to the first item.

   ```text
   site,date,observation
   ```

2. Review the results.

````markdown
1. Prepare the observations.

   This paragraph belongs to the first item.

   ```text
   site,date,observation
   ```

2. Review the results.
````
{: .jcu-alert .jcu-alert--note}

## Horizontal rule

A horizontal rule creates a visual divider between sections. Put three hyphens on their own line, with blank lines before and after. Asterisks or underscores can also form a rule; keep the divider separate from text to avoid creating an underlined heading.

### Example
{:.no_toc}

---

```markdown
---
```
{: .jcu-alert .jcu-alert--note}

## Definition list

A definition list pairs a term with its explanation. Write the term on one line, followed by a line beginning with a colon and a space. This Kramdown extension is useful for glossaries and short descriptions.

### Example
{:.no_toc}

term 1
: definition 1

term 2
: definition 2

```markdown
term 1
: definition 1

term 2
: definition 2
```
{: .jcu-alert .jcu-alert--note}

### Longer definitions

Definition lists can have multiple terms or definitions and indented continuation paragraphs.

#### Example
{:.no_toc}

Habitat
Study area
: The environment in which observations are recorded.

  Record its location and relevant characteristics.

: An alternative definition can be supplied for the same terms.

```markdown
Habitat
Study area
: The environment in which observations are recorded.

  Record its location and relevant characteristics.

: An alternative definition can be supplied for the same terms.
```
{: .jcu-alert .jcu-alert--note}

## Link {#link-section}

A link connects readers to another page, website, or section. Put meaningful link text in square brackets and the destination in parentheses. Use a full URL for an external website or a relative path for a page within your site.

### Example
{:.no_toc}

[View example.com](https://www.example.com)

```markdown
[View example.com](https://www.example.com)
```
{: .jcu-alert .jcu-alert--note}

### Example: Link to a section on this page
{:.no_toc}

Use `#` followed by a heading's ID to link within the current page. Follow this
link to the example heading, then use its return link to come back here.

[Visit the Heading IDs example](#custom-id).

```markdown
[Visit the Heading IDs example](#custom-id).
```
{: .jcu-alert .jcu-alert--note}

### Example: Link to a section on another page
{:.no_toc}

Add the section's ID after the destination page path to jump directly to that
section. This relative link opens the Theme purpose section on the homepage
landing page, which has the explicit ID `theme-overview`.

[Goto Theme purpose](../../#theme-overview).

```markdown
[Goto Theme purpose](../../#theme-overview).
```
{: .jcu-alert .jcu-alert--note}

Put a full URL inside angle brackets to create an automatic link whose label is the URL itself. Optional quoted titles are supported on links and images; make the visible label meaningful rather than relying on a hover tooltip.

### Example: Alternate link format and link titles
{:.no_toc}

<https://www.jcu.edu.au/>

[James Cook University](https://www.jcu.edu.au/ "University website")

```markdown
<https://www.jcu.edu.au/>

[James Cook University](https://www.jcu.edu.au/ "University website")
```
{: .jcu-alert .jcu-alert--note}

## Image

An image uses an exclamation mark, alternative text in square brackets, and the image path in parentheses. Describe the image’s relevant content in the alternative text. Relative paths are resolved from the page’s published address.

### Example
{:.no_toc}

![Biscuit](../../assets/sample-images/my-cat_750x750.jpg)

```markdown
![Biscuit](../../assets/sample-images/my-cat_750x750.jpg)
```
{: .jcu-alert .jcu-alert--note}

### Linked image

Wrap an image in link syntax to make it a clickable destination. The inner syntax defines the image and its alternative text; the outer parentheses contain the link destination.

#### Example
{:.no_toc}

[![Southern cassowary](../../assets/sample-images/card-cassowary.svg)](../../sample-content/content-blocks/southern-cassowary/)

```markdown
[![Southern cassowary](../../assets/sample-images/card-cassowary.svg)](../../sample-content/content-blocks/southern-cassowary/)
```
{: .jcu-alert .jcu-alert--note}

## Reference-style links and images

Define a destination once and reuse its label. Full, collapsed, and shortcut reference links are supported. Reference-style images use the same destination definitions. Definitions do not appear in the finished text. To make a reference-style image clickable, wrap it in a reference-style link: `[![Alternative text][image-reference]][destination-reference]`.

### Example
{:.no_toc}

[Visit JCU][university], [university][], or [university].

![Southern cassowary][cassowary-image]

[![View the southern cassowary profile][cassowary-image]][cassowary-profile]

[university]: https://www.jcu.edu.au/ "James Cook University"
[cassowary-image]: ../../assets/sample-images/card-cassowary.svg "Southern cassowary illustration"
[cassowary-profile]: ../content-blocks/southern-cassowary/ "Southern cassowary profile"

```markdown
[Visit JCU][university], [university][], or [university].

![Southern cassowary][cassowary-image]

[![View the southern cassowary profile][cassowary-image]][cassowary-profile]

[university]: https://www.jcu.edu.au/ "James Cook University"
[cassowary-image]: ../../assets/sample-images/card-cassowary.svg "Southern cassowary illustration"
[cassowary-profile]: ../content-blocks/southern-cassowary/ "Southern cassowary profile"
```
{: .jcu-alert .jcu-alert--note}

## Table

Tables organise comparable information into rows and columns. Separate cells with pipes, and place a separator row beneath the header. Keep each row on one source line; alignment and inline formatting are demonstrated later on this page.

### Example
{:.no_toc}

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

```markdown
| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |
```
{: .jcu-alert .jcu-alert--note}

Colons in the separator row select left, centre, or right alignment. Cells can contain inline Markdown. Escape a pipe when it is part of cell text, and keep each table row on one source line.

### Example: Alignment and cell formatting
{:.no_toc}

| Topic               |   Status    | Count |
| :------------------ | :---------: | ----: |
| **Fieldwork**       |  Complete   |    12 |
| Analysis            | In progress |     4 |
| Rainforest \| coast |   Planned   |     2 |

```markdown
| Topic               |   Status    | Count |
| :------------------ | :---------: | ----: |
| **Fieldwork**       |  Complete   |    12 |
| Analysis            | In progress |     4 |
| Rainforest \| coast |   Planned   |     2 |
```
{: .jcu-alert .jcu-alert--note}

## Abbreviations

Kramdown abbreviation definitions attach an explanation to matching words. Do not rely on a hover explanation alone; spell out unfamiliar terms in the surrounding text.

### Example
{:.no_toc}

Environmental DNA (eDNA) can help identify species. Our eDNA samples are reviewed alongside field observations.

*[eDNA]: Environmental DNA

```markdown
Environmental DNA (eDNA) can help identify species. Our eDNA samples are reviewed alongside field observations.

*[eDNA]: Environmental DNA
```
{: .jcu-alert .jcu-alert--note}

## Escaping characters and HTML entities

A backslash makes a formatting character literal. HTML entities can represent symbols, reserved characters, and nonbreaking spaces.

### Example
{:.no_toc}

\*These asterisks are visible\*, as is \# this hash.

Use &lt;sample&gt;, A &amp; B, and 10&nbsp;km.

```markdown
\*These asterisks are visible\*, as is \# this hash.

Use &lt;sample&gt;, A &amp; B, and 10&nbsp;km.
```
{: .jcu-alert .jcu-alert--note}

## Automatic contents lists

Attach `{:toc}` to a list to replace it with links to the document headings. This generates links within the page, not links to other pages. For a section overview, write an ordinary list of page links instead. Headings can be excluded using `{:.no_toc}` directly beneath them.

To exclude all headings below a chosen level, place `{::options toc_levels="1..2" /}` near the top of the page, before the contents list. This includes only H1 and H2 headings; use `"1..3"` to include H3 headings too. You can still use `{:.no_toc}` to exclude individual headings within the included levels.

This page uses H3 headings for both subsections and examples, so a heading-level limit cannot distinguish between them. Its Example headings use `{:.no_toc}` individually to keep the subsections in the contents list while excluding the examples.

### Example
{:.no_toc}

The generated list under [Contents](#contents) shows the output of this pattern.

```markdown
- Contents
{:toc}

## A section

Section text.

## A heading to omit
{:.no_toc}
```
{: .jcu-alert .jcu-alert--note}

### Example: Limit the heading levels
{:.no_toc}

```markdown
{::options toc_levels="1..2" /}

- Contents
{:toc}

## Included section

### Subsection omitted from the contents
```
{: .jcu-alert .jcu-alert--note}

## Attribute lists and reusable attributes

Kramdown attributes can assign IDs or existing CSS classes to an element. An attribute alone does not create a new style. The theme-specific layouts are displayed on the [Markdown-with-classes sample](../inline-content-blocks/) and how to use them is explained in [Markdown with layout classes](../../reference/markdown-page-content/). Span attributes follow the text element; block attributes follow the block on a new line.

### Example
{:.no_toc}

This is _important_{: .sample-emphasis}.

A paragraph with a custom ID.
{: #sample-paragraph}
{:research-note: .jcu-alert .jcu-alert--warning}
This paragraph uses a reusable attribute definition.
{:research-note}

```markdown
This is _important_{: .sample-emphasis}.

A paragraph with a custom ID.
{: #sample-paragraph}
{:research-note: .jcu-alert .jcu-alert--warning}
This paragraph uses a reusable attribute definition.
{:research-note}
```
{: .jcu-alert .jcu-alert--note}

## Separating adjacent blocks

The Kramdown end-of-block marker `^` separates constructs that would otherwise be combined. It is useful when two adjacent lists should remain separate.

### Example
{:.no_toc}

- First list.

^

- Second list.

```markdown
- First list.

^

- Second list.
```
{: .jcu-alert .jcu-alert--note}

## Parser comments and literal content

Kramdown comment extensions omit their contents. The `nomarkdown` extension passes content through without Markdown processing. These are advanced parser extensions; use ordinary code fences to show source code to readers.

### Example
{:.no_toc}

This source example illustrates a hidden comment and content passed through without Markdown processing.

```markdown
{::comment}
An editing note that will not appear in the page.
{:/comment}
{::nomarkdown}

<p>Literal HTML output with **unprocessed Markdown markers**.</p>
{:/nomarkdown}
```
{: .jcu-alert .jcu-alert--note}

## HTML alongside Markdown

Inline HTML can supply elements Markdown does not define, such as highlighting, subscript, superscript, or collapsible sections. See the [HTML with Markdown sample](../../sample-content/html-markdown-content-blocks/) for rendered examples and copyable source, and the [HTML and Markdown guide](../../reference/html-markdown-page-content/) for authoring instructions.

## Features requiring additional support

The parser recognises mathematical markup, but this theme does not load a mathematics renderer; parsing it is not enough to display equations. Mermaid fences remain code unless a diagram renderer is added. GitHub-specific alerts such as `[!NOTE]`, emoji shortcuts, mentions, and issue references are not enabled as GitHub features by this theme's configuration. Use the theme's alert blocks and actual Unicode emoji where appropriate.

This page covers the currently configured authoring features. Advanced Kramdown options can change parsing behaviour, and are not needed for normal content editing. Consult the [Kramdown syntax reference](https://kramdown.gettalong.org/syntax.html) and [GFM parser documentation](https://github.com/kramdown/parser-gfm) for detailed syntax rules. Changing the site's parser or plugins can change what is supported.
