---
layout: page
title: "Create your first website"
permalink: /beginners/create-your-first-website/
order: 1.3
summary: "Create your first website"
---

Use a separate repository for your research site. If your team already has a working site or a prepared starter repository, use that and begin with [Write your first page]({{ "/beginners/write-your-first-page/" | relative_url }}). The theme repository also contains demonstration content; using it as your project would require replacing that content.

## Prepare the project repository

1. Sign in to GitHub and create a repository for your website under the account or organisation that will maintain it. For the simplest setup, use a public repository and initialise it with a README.
2. In the repository's browser interface, create `_config.yml` in the root folder. Copy the configuration below and replace the project title, description, username, and repository name.
3. Create `index.md` using the homepage example below.
4. Create `_data/navigation.yml` using the menu example below. Commit each file with a brief description.

The **root folder** means the top level of the repository. File and folder names beginning with `_` are significant to Jekyll; keep the spelling shown.

```yaml
# _config.yml
title: "Our research project"
description: "Research into healthier coastal ecosystems."
url: "https://USERNAME.github.io"
baseurl: "/REPOSITORY-NAME"
remote_theme: jcu-eresearch/jcu-research-website-theme
plugins:
  - jekyll-remote-theme
markdown: kramdown
kramdown:
  input: GFM
```

The `remote_theme` setting loads the shared theme. Your repository stores your content and settings, so you do not need to copy the theme's layouts or styles. See GitHub's [remote-theme instructions](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll) for details.

```markdown
---
layout: page
title: Our research project
permalink: /
---

Welcome to our project website.

## Our aim

We investigate how coastal ecosystems respond to environmental change.
```

A simple standard-page homepage is enough to start. You can replace it with a landing-page layout later.

```yaml
# _data/navigation.yml
- title: Home
  url: /
```

## Publish and check

In the repository settings, open **Pages**. Choose **Deploy from a branch**, select the branch containing your files (usually `main`), choose the root folder, and save. If your organisation manages publishing differently, follow its process. GitHub's [publishing-source guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) explains both branch and workflow options.

Check the deployment in the repository's **Actions** tab. After it succeeds, open the website address shown in Pages settings. Confirm that the homepage and menu appear. If they do not, use [Preview and troubleshoot]({{ "/check-and-maintain/preview-and-troubleshoot/" | relative_url }}).

[← Previous]({{ "/beginners/how-your-website-gets-online/" | relative_url }}) [Next →]({{ "/beginners/write-your-first-page/" | relative_url }})
{: .jcu-page-navigation}
