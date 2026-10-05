---
title: Markdown formatting
card_title: "Plain Markdown"
card_category: "Page content"
permalink: /sample-content/markdown-formats/
order: 2.5
image: "/assets/sample-images/sample-markdown-formatting.svg"
summary: "A reference to Markdown syntax supported by the theme’s configured parser."
---

This page demonstrates the Markdown features available with this theme's current **Kramdown, GFM-input configuration**. It covers document structure, text, links, images, lists, tables, and Kramdown extensions. Each example shows the result followed by its source. Equivalent punctuation variants are included where useful; this is a feature reference rather than a catalogue of every parser edge case.

You can combine these features with the theme's layout blocks. Ordinary Markdown needs no layout classes. The source examples use an alert class only to style their code containers; you do not need that class in your own content.

## Contents
{:.no_toc}

- Contents
{:toc}

The contents list above is generated from this page's headings. See [Automatic contents lists](#automatic-contents-lists) for its source.

## Headings

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

## Heading with an ID {#custom-id}
{:.no_toc}

```markdown
## Heading with an ID {#custom-id}
```
{: .jcu-alert .jcu-alert--note}

## Paragraph

Quisque egestas convallis ipsum, ut sollicitudin risus tincidunt a. Maecenas interdum malesuada egestas. Duis consectetur porta risus, sit amet vulputate urna facilisis ac. Phasellus semper dui non purus ultrices sodales. Aliquam ante lorem, ornare a feugiat ac, finibus nec mauris. Vivamus ut tristique nisi. Sed vel leo vulputate, efficitur risus non, posuere mi. Nullam tincidunt bibendum rutrum. Proin commodo ornare sapien. Vivamus interdum diam sed sapien blandit, sit amet aliquam risus mattis. Nullam arcu turpis, mollis quis laoreet at, placerat id nibh. Suspendisse venenatis eros eros.

```markdown
Quisque egestas convallis ipsum, ut sollicitudin risus tincidunt a. Maecenas interdum
malesuada egestas. Duis consectetur porta risus, sit amet vulputate urna facilisis ac.
Phasellus semper dui non purus ultrices sodales. Aliquam ante lorem, ornare a feugiat
ac, finibus nec mauris. Vivamus ut tristique nisi. Sed vel leo vulputate, efficitur
risus non, posuere mi. Nullam tincidunt bibendum rutrum. Proin commodo ornare sapien.
Vivamus interdum diam sed sapien blandit, sit amet aliquam risus mattis. Nullam arcu
turpis, mollis quis laoreet at, placerat id nibh. Suspendisse venenatis eros eros.
```
{: .jcu-alert .jcu-alert--note}

## Inline text formats

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

## Block quote

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

## Fenced code block

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

### Ordered list

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

* Top level item 1
  * Indented once
    * Indented twice
* Top level item 2

```markdown
* Top level item 1
  * Indented once
    * Indented twice
* Top level item 2
```
{: .jcu-alert .jcu-alert--note}

### Unordered list alternate

- First list item
  - Indented item
    - Further indent
- Second list item

```markdown
- First list item
  - Indented item
    - Further indent
- Second list item
```
{: .jcu-alert .jcu-alert--note}

### Task list

- [x] Item 1
- [ ] Item 2
- [ ] Item 3

```markdown
- [x] Item 1
- [ ] Item 2
- [ ] Item 3
```
{: .jcu-alert .jcu-alert--note}

## Horizontal rule

---

```markdown
---
```
{: .jcu-alert .jcu-alert--note}

## Definition list

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

## Link

[link title](https://www.example.com)

```markdown
[link title](https://www.example.com)
```
{: .jcu-alert .jcu-alert--note}

## Image

![Biscuit](../../assets/sample-images/my-cat_750x750.jpg)

```markdown
![Biscuit](../../assets/sample-images/my-cat_750x750.jpg)
```
{: .jcu-alert .jcu-alert--note}

## Linked image

[![Southern cassowary](../../assets/sample-images/card-cassowary.svg)](../../sample-content/content-blocks/southern-cassowary/)

```markdown
[![Southern cassowary](../../assets/sample-images/card-cassowary.svg)](../../sample-content/content-blocks/southern-cassowary/)
```
{: .jcu-alert .jcu-alert--note}

## Table

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

## Alternative heading syntax

Underlined headings provide another way to write H1 and H2. Prefer `#` headings when you want one consistent syntax; the page layout already supplies the main title.

Setext heading one
==================
{:.no_toc}

Setext heading two
------------------
{:.no_toc}

```markdown
Setext heading one
==================

Setext heading two
------------------
```
{: .jcu-alert .jcu-alert--note}

## Combined emphasis

Combine bold and italic, or emphasise part of a sentence. Underscores are an alternative to asterisks.

**_Bold and italic_**

**Bold with an _italic phrase_ inside.**

_Italic_ and __bold__ using underscores.

```markdown
**_Bold and italic_**

**Bold with an _italic phrase_ inside.**

_Italic_ and __bold__ using underscores.
```
{: .jcu-alert .jcu-alert--note}

## Line breaks

Blank lines start new paragraphs. With the current GFM configuration, a single newline also creates a line break. Two trailing spaces or a trailing backslash explicitly request a break; do not rely on editor line wrapping to separate paragraphs.

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

## Nested quotations

Quotes can contain nested quotes, paragraphs, lists, and other Markdown. These ordinary quotes do not become layout blocks unless you add layout classes.

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

## Lists with paragraphs and code

Indent continuation paragraphs and code beneath the list item they belong to. Task-list checkboxes shown earlier are static, disabled indicators on the published site.

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

## Indented and alternative fenced code

Four leading spaces create an indented code block. Tildes can delimit fenced code, and a language name enables syntax highlighting when that language is supported by the highlighter.

    This is indented code.
    Markdown markers such as **bold** stay literal.

~~~python
print("Research observations")
~~~

````markdown
    This is indented code.
    Markdown markers such as **bold** stay literal.

~~~python
print("Research observations")
~~~
````
{: .jcu-alert .jcu-alert--note}

## Backticks inside inline code

Use a longer run of backticks when the code itself contains a backtick.

Use `` `code` `` to show Markdown code syntax.

```markdown
Use `` `code` `` to show Markdown code syntax.
```
{: .jcu-alert .jcu-alert--note}

## Reference-style links and images

Define a destination once and reuse its label. Full, collapsed, and shortcut reference links are supported. Reference-style images use the same destination definitions. Definitions do not appear in the finished text.

[Visit JCU][university], [university][], or [university].

![Southern cassowary][cassowary-image]

[university]: https://www.jcu.edu.au/ "James Cook University"
[cassowary-image]: ../../assets/sample-images/card-cassowary.svg "Southern cassowary illustration"

```markdown
[Visit JCU][university], [university][], or [university].

![Southern cassowary][cassowary-image]

[university]: https://www.jcu.edu.au/ "James Cook University"
[cassowary-image]: ../../assets/sample-images/card-cassowary.svg "Southern cassowary illustration"
```
{: .jcu-alert .jcu-alert--note}

## Automatic links and link titles

Angle brackets create explicit automatic links. This GFM parser also links ordinary website URLs. Optional quoted titles are supported on links and images; make the visible label meaningful rather than relying on a hover tooltip.

<https://www.jcu.edu.au/>

https://www.jcu.edu.au/

[James Cook University](https://www.jcu.edu.au/ "University website")

```markdown
<https://www.jcu.edu.au/>

https://www.jcu.edu.au/

[James Cook University](https://www.jcu.edu.au/ "University website")
```
{: .jcu-alert .jcu-alert--note}

## Links to headings

Automatically generated heading IDs can be used as fragment destinations. For a stable destination independent of wording, use the explicit heading ID demonstrated near the top of this page.

[Go to the table example](#table).

[Go to the heading with a custom ID](#custom-id).

```markdown
[Go to the table example](#table).

[Go to the heading with a custom ID](#custom-id).
```
{: .jcu-alert .jcu-alert--note}

## Table alignment and cell formatting

Colons in the separator row select left, centre, or right alignment. Cells can contain inline Markdown. Escape a pipe when it is part of cell text, and keep each table row on one source line.

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

## Longer definitions

Definition lists can have multiple terms or definitions and indented continuation paragraphs.

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

## Abbreviations

Kramdown abbreviation definitions attach an explanation to matching words. Do not rely on a hover explanation alone; spell out unfamiliar terms in the surrounding text.

Environmental DNA (eDNA) can help identify species. Our eDNA samples are reviewed alongside field observations.

*[eDNA]: Environmental DNA

```markdown
Environmental DNA (eDNA) can help identify species. Our eDNA samples are reviewed alongside field observations.

*[eDNA]: Environmental DNA
```
{: .jcu-alert .jcu-alert--note}

## Escaping characters and HTML entities

A backslash makes a formatting character literal. HTML entities can represent symbols, reserved characters, and nonbreaking spaces.

\*These asterisks are visible\*, as is \# this hash.

Use &lt;sample&gt;, A &amp; B, and 10&nbsp;km.

```markdown
\*These asterisks are visible\*, as is \# this hash.

Use &lt;sample&gt;, A &amp; B, and 10&nbsp;km.
```
{: .jcu-alert .jcu-alert--note}

## Automatic typography

The default parser converts straight quotation marks and some punctuation into typographic characters. Code spans preserve the original characters.

"Research findings" -- an introduction --- followed by more detail...

<<A quoted phrase>>

`"Straight quotes" -- --- ...`

```markdown
"Research findings" -- an introduction --- followed by more detail...

<<A quoted phrase>>

`"Straight quotes" -- --- ...`
```
{: .jcu-alert .jcu-alert--note}

## Automatic contents lists

Attach `{:toc}` to a list to replace it with links to the document headings. This generates links within the page, not links to other pages. For a section overview, write an ordinary list of page links instead. Headings can be excluded using `{:.no_toc}` directly beneath them.

```markdown
- Contents
{:toc}

## A section

Section text.

## A heading to omit
{:.no_toc}
```
{: .jcu-alert .jcu-alert--note}

## Attribute lists and reusable attributes

Kramdown attributes can assign IDs or existing CSS classes to an element. An attribute alone does not create a new style. The theme-specific layouts are documented on the Markdown-with-classes sample. Span attributes follow the text element; block attributes follow the block on a new line.

This is _important_{: .sample-emphasis}.

A paragraph with a custom ID.
{: #sample-paragraph}
{:research-note: .jcu-alert .jcu-alert--note}
This paragraph uses a reusable attribute definition.
{:research-note}

```markdown
This is _important_{: .sample-emphasis}.

A paragraph with a custom ID.
{: #sample-paragraph}
{:research-note: .jcu-alert .jcu-alert--note}
This paragraph uses a reusable attribute definition.
{:research-note}
```
{: .jcu-alert .jcu-alert--note}

## Separating adjacent blocks

The Kramdown end-of-block marker `^` separates constructs that would otherwise be combined. It is useful when two adjacent lists should remain separate.

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
