# Research Project Website Theme

**[View the theme website and documentation](https://jcu-eresearch.github.io/jcu-research-website-theme/)**

A configurable Jekyll theme for research project websites hosted on GitHub Pages.
Research teams can write pages using Markdown and YAML, with shared layouts,
content blocks, navigation and colours. The documentation introduces the tools
for people who are unfamiliar with GitHub, static websites or writing web content.

This repository contains both the reusable theme and its demonstration website.
A project using it as a remote theme stores its own content and configuration in
its own repository. The demonstration pages and documentation are not copied into
that project automatically.

## Start here

The simplest starting point is the
[starter repository](https://github.com/jcu-eresearch/jcu-research-website-starter).
You can also [view the starter website](https://jcu-eresearch.github.io/jcu-research-website-starter/)
before creating your own copy.

Use the website guides to learn the theme:

- [Beginners](https://jcu-eresearch.github.io/jcu-research-website-theme/beginners/):
  understand the tools, create a website and write your first page.
- [Build your pages](https://jcu-eresearch.github.io/jcu-research-website-theme/build-your-pages/):
  choose a layout, understand content blocks and combine writing methods.
- [Content and styling reference](https://jcu-eresearch.github.io/jcu-research-website-theme/reference/):
  look up Markdown, YAML, cards, colours and navigation settings.
- [Check and maintain](https://jcu-eresearch.github.io/jcu-research-website-theme/check-and-maintain/):
  check accessibility, preview changes, troubleshoot and manage updates.
- [Sample content styles](https://jcu-eresearch.github.io/jcu-research-website-theme/sample-content/):
  see working examples of layouts, content blocks and Markdown formatting.

## Use the theme in a project

Create a separate Jekyll website repository, or use the starter. In that
website's `_config.yml`, set its identity and load the theme:

```yaml
title: "Our research project"
description: "A description of our research project."
url: "https://USERNAME.github.io"
baseurl: "/REPOSITORY-NAME"

remote_theme: jcu-eresearch/jcu-research-website-theme
plugins:
  - jekyll-remote-theme

markdown: kramdown
kramdown:
  input: GFM

defaults:
  - scope:
      path: ""
      type: "pages"
    values:
      layout: "page"
```

Replace `USERNAME` and `REPOSITORY-NAME` with your website's account and repository.
For an account homepage or a website served at a domain's root, use `baseurl: ""`.
See [Create your first website](https://jcu-eresearch.github.io/jcu-research-website-theme/beginners/create-your-first-website/)
for the files and GitHub Pages publishing steps.

GitHub Pages loads this public repository through `jekyll-remote-theme`.
The theme does not need to be published as a RubyGem.

### Select a theme version

For a production website, use an existing release tag when one is available:

```yaml
# Example only: replace v1.0.0 with an existing release tag.
remote_theme: jcu-eresearch/jcu-research-website-theme@v1.0.0
```

Check the repository's [releases](https://github.com/jcu-eresearch/jcu-research-website-theme/releases)
for available versions. A full commit ID can also identify a specific snapshot.
Without a version suffix, subsequent builds can pick up changes from the theme's
default branch. Publishing a theme release does not itself rebuild your website.
To upgrade a pinned site, change its theme reference, build, check and deploy it.
See [Keep your site current](https://jcu-eresearch.github.io/jcu-research-website-theme/check-and-maintain/keep-your-site-current/).

## Write pages and choose a layout

Select the layout in each page's YAML front matter. The `defaults` example above
uses `page` when a page does not specify its own layout.

- `page` provides a standard content page with a title, optional breadcrumbs,
  Markdown body and optional YAML content blocks.
- `landing-page` provides a hero and wider visual sections, suitable for a
  homepage or project introduction. It does not display breadcrumbs.

Either layout can be your homepage: give the page `permalink: /`.
See [Choose a layout](https://jcu-eresearch.github.io/jcu-research-website-theme/build-your-pages/choose-a-layout/).

A plain Markdown page needs only front matter and body content:

```markdown
---
layout: page
title: Project outputs
permalink: /outputs/
---

We share our findings, publications and datasets here.

## Publications

Add links to your publications.
```

Plain Markdown, YAML blocks, Markdown with layout classes and HTML wrappers with
Markdown can be mixed on the same page. They are writing methods, not four
separate page layouts. All use YAML front matter for page settings. Standard
pages render their body before YAML blocks; landing pages render the hero, body,
then YAML blocks.

Detailed guides and examples:

- [Plain Markdown](https://jcu-eresearch.github.io/jcu-research-website-theme/reference/plain-markdown/)
  and [Markdown formatting examples](https://jcu-eresearch.github.io/jcu-research-website-theme/sample-content/markdown-formats/).
- [YAML page content](https://jcu-eresearch.github.io/jcu-research-website-theme/reference/yaml-page-content/):
  text and images, columns, galleries, alerts, cards and partner logos.
- [Markdown with layout classes](https://jcu-eresearch.github.io/jcu-research-website-theme/reference/markdown-page-content/):
  Kramdown attributes for styled blocks, with a
  [reusable attributes file](sample-content/markdown-layout-attributes.md).
- [HTML and Markdown](https://jcu-eresearch.github.io/jcu-research-website-theme/reference/html-markdown-page-content/):
  HTML wrappers with the same classes and `markdown="1"`.
- [Landing-page styles](https://jcu-eresearch.github.io/jcu-research-website-theme/build-your-pages/landing-page-styles/):
  heroes, achievements, carousels, visual sections, cards and partner logos.
- [Combine writing methods](https://jcu-eresearch.github.io/jcu-research-website-theme/build-your-pages/combine-writing-methods/)
  and [content block recipes](https://jcu-eresearch.github.io/jcu-research-website-theme/reference/content-block-recipes/).

Manually written cards and generated page cards support an optional `card_category`
label above the title. Generated cards can also use `card_title` for a shorter
card heading. See [Cards and page collections](https://jcu-eresearch.github.io/jcu-research-website-theme/reference/cards-and-page-collections/).
Automatically collecting pages from a folder uses YAML `page-cards` blocks or
the Liquid `page-cards.html` include; ordinary Markdown does not collect pages.

## Configure appearance and navigation

Set colours, logos, fonts and other options under `theme_settings` in your site's
`_config.yml`. The theme supplies generic assets; replace them with your project's
own branding. It includes no institutional logo.

Each configurable background has matching text and link colours. Choose these
together and check their contrast. Tables receive subtle stripes on recognised
light backgrounds and remain unshaded on dark backgrounds. In coloured blocks,
table headers reverse the surrounding background and text colours.
These styling features do not constitute an accessibility audit.

See [Site appearance](https://jcu-eresearch.github.io/jcu-research-website-theme/reference/site-appearance/)
for configuration options and
[Accessibility and colour choices](https://jcu-eresearch.github.io/jcu-research-website-theme/check-and-maintain/accessibility/)
for choosing colours and checking your content.

Create `_data/navigation.yml` in your own website repository:

```yaml
- title: Home
  url: /
- title: Project
  url: /project/
  children:
    - title: Research context
      url: /project/research-context/
    - title: Project outputs
      url: /outputs/
```

Create pages matching those URLs. The menu supports two levels, with an Overview
link to the parent's page at the start of each submenu. On wide screens,
submenus open on mouse hover. Burger and mobile menus use click or tap controls
with chevrons. Keyboard users can open submenus with Arrow Down; Escape closes
them. See [Navigation and links](https://jcu-eresearch.github.io/jcu-research-website-theme/reference/navigation-and-links/)
for menu configuration and links that work under a repository path.

Keep your own navigation file: a consuming site can otherwise inherit the theme's
demonstration navigation. If no navigation data is available, the header falls
back to a Home link.

## Preview locally

Each website has its own Gemfile and lockfile. Referencing a remote theme does
not make a website inherit this repository's build dependencies. For a consuming
site, a Gemfile can start with:

```ruby
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
gem "webrick"
```

Use a Ruby version compatible with your dependencies and deployment environment.
This repository has been tested locally with Ruby `3.3.4`; GitHub Pages' managed
build environment can change independently.

```bash
bundle install
bundle exec jekyll build
bundle exec jekyll serve
```

Open the address printed by Jekyll, including the site's base path. Stop the
preview with Ctrl+C. See [Preview and troubleshoot](https://jcu-eresearch.github.io/jcu-research-website-theme/check-and-maintain/preview-and-troubleshoot/).

The `github-pages` package version in the Gemfile identifies build tools, not a
theme release. `Gemfile.lock` records the exact installed dependency versions.
See the [dependency update guide](docs/maintainer/dependency-updates.md) before
updating them.

## JavaScript catalogue integration

The specialised `jcudl-catalog` layout supplies the shared header and a
`<div id="jcudlc">` container for the JCU Digital Library catalogue. The catalogue
script and stylesheet must be supplied by your website; they are not bundled
with this theme. The theme currently has no shared footer.

Place the files at `assets/css/jcudl-style.css` and `assets/js/jcudl.js`, then create:

```yaml
---
layout: jcudl-catalog
title: Project catalogue
permalink: /catalog/
catalog_full_width: true
---
```

Omit `catalog_full_width` to use normal page margins. The layout loads Material
Symbols icons and the catalogue assets. Optional front matter overrides are
`jcudl_stylesheet`, `jcudl_script` and `jcudl_icon_stylesheet`; stylesheet and script
overrides accept local paths or full URLs.

## For maintainers

The [maintenance guides](docs/maintainer/index.md) cover
[development branches and pull requests](docs/maintainer/development-workflow.md),
[dependency updates](docs/maintainer/dependency-updates.md) and
[creating releases](docs/maintainer/creating-a-release.md).
See [CONTRIBUTING.md](CONTRIBUTING.md) for contributor instructions.
These repository guides are excluded from the website build.

Reusable theme files are in `_layouts`, `_includes` and `assets`. The repository's
`_data/navigation.yml` configures its demonstration website. Samples are in
`sample-content/`, with sample illustrations and placeholder logos in
`assets/sample-images/`. The beginner, page-building, reference and maintenance
pages document the theme for website authors; consuming sites provide their own
content, navigation and configuration.
