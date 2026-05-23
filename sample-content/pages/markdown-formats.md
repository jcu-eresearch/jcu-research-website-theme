---
title: Markdown formatting
permalink: /sample-content/markdown-formats/
order: 1
image: "/assets/sample-images/card-project-setting.svg"
summary: "This page shows the Markdown formatting available with this template."
---
## Headings

# Heading 1
## Heading 2
### Heading 3
#### Heading 4

````markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
````
{: .jcu-alert .jcu-alert--note}

## Heading IDs

## Heading with an ID {#custom-id}

````markdown
## Heading with an ID {#custom-id}
````
{: .jcu-alert .jcu-alert--note}

## Paragraph

Quisque egestas convallis ipsum, ut sollicitudin risus tincidunt a. Maecenas interdum malesuada egestas. Duis consectetur porta risus, sit amet vulputate urna facilisis ac. Phasellus semper dui non purus ultrices sodales. Aliquam ante lorem, ornare a feugiat ac, finibus nec mauris. Vivamus ut tristique nisi. Sed vel leo vulputate, efficitur risus non, posuere mi. Nullam tincidunt bibendum rutrum. Proin commodo ornare sapien. Vivamus interdum diam sed sapien blandit, sit amet aliquam risus mattis. Nullam arcu turpis, mollis quis laoreet at, placerat id nibh. Suspendisse venenatis eros eros.

````markdown
Quisque egestas convallis ipsum, ut sollicitudin risus tincidunt a. Maecenas interdum
malesuada egestas. Duis consectetur porta risus, sit amet vulputate urna facilisis ac.
Phasellus semper dui non purus ultrices sodales. Aliquam ante lorem, ornare a feugiat
ac, finibus nec mauris. Vivamus ut tristique nisi. Sed vel leo vulputate, efficitur
risus non, posuere mi. Nullam tincidunt bibendum rutrum. Proin commodo ornare sapien.
Vivamus interdum diam sed sapien blandit, sit amet aliquam risus mattis. Nullam arcu
turpis, mollis quis laoreet at, placerat id nibh. Suspendisse venenatis eros eros.
````
{: .jcu-alert .jcu-alert--note}

## Inline text formats

**bold text**;
*italicized text*;
`code`;
~~strikethrough~~;
<mark>very important words</mark>;
Subscript example: H<sub>2</sub>O;
Superscript example: X<sup>2</sup>

````markdown
**bold text**;
*italicized text*;
`code`;
~~strikethrough~~;
<mark>very important words</mark>;
Subscript example: H<sub>2</sub>O;
Superscript example: X<sup>2</sup>
````
{: .jcu-alert .jcu-alert--note}

## Block quote

> Once upon a midnight dreary, while I pondered, weak and weary,\
> Over many a quaint and curious volume of forgotten lore,\
> While I nodded, nearly napping, suddenly there came a tapping,\
> As of some one gently rapping, rapping at my chamber door.\
> "'Tis some visitor," I muttered, "tapping at my chamber door-\
>                  Only this, and nothing more."

````markdown
> Once upon a midnight dreary, while I pondered, weak and weary,\
> Over many a quaint and curious volume of forgotten lore,\
> While I nodded, nearly napping, suddenly there came a tapping,\
> As of some one gently rapping, rapping at my chamber door.\
> "'Tis some visitor," I muttered, "tapping at my chamber door-\
>                  Only this, and nothing more."
````
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

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

````markdown
Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.
````
{: .jcu-alert .jcu-alert--note}

## Lists

### Ordered list

1. first item
   - indented bullet point
2. second item
   1. indented numbered item
3. third item

````markdown
1. first item
   - indented bullet point
2. second item
   1. indented numbered item
3. third item
````
{: .jcu-alert .jcu-alert--note}

### Unordered list

* top level item 1
  * indented once
    * indented twice
* top level item 2

````markdown
* top level item 1
  * indented once
    * indented twice
* top level item 2
````
{: .jcu-alert .jcu-alert--note}

### Unordered list alternate

- first list item
  - indented item
    - further indent
- second list item

````markdown
- first list item
  - indented item
    - further indent
- second list item
````
{: .jcu-alert .jcu-alert--note}

### Task list

- [x] item 1
- [ ] item 2
- [ ] item 3

````markdown
- [x] item 1
- [ ] item 2
- [ ] item 3
````
{: .jcu-alert .jcu-alert--note}

## Horizontal rule

---

````markdown
---
````
{: .jcu-alert .jcu-alert--note}

## Definition list

term 1
: definition 1

term 2
: definition 2

````markdown
term 1
: definition 1

term 2
: definition 2
````
{: .jcu-alert .jcu-alert--note}

## Link

[link title](https://www.example.com)

````markdown
[link title](https://www.example.com)
````
{: .jcu-alert .jcu-alert--note}

## Image

![Biscuit]({{ "/assets/sample-images/my-cat_750x750.jpg" | relative_url }})

````markdown
![Biscuit]({{ "/assets/sample-images/my-cat_750x750.jpg" | relative_url }})
````
{: .jcu-alert .jcu-alert--note}

## Linked image

[![Southern cassowary]({{ "/assets/sample-images/card-cassowary.svg" | relative_url }})]({{ "/sample-content/content-blocks/southern-cassowary/" | relative_url }})

````markdown
[![Southern cassowary]({{ "/assets/sample-images/card-cassowary.svg" | relative_url }})]({{ "/sample-content/content-blocks/southern-cassowary/" | relative_url }})
````
{: .jcu-alert .jcu-alert--note}

## Table

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

````markdown
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |
````
{: .jcu-alert .jcu-alert--note}
