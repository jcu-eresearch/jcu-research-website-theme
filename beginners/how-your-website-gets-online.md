---
layout: page
title: "How your website gets online"
permalink: /beginners/how-your-website-gets-online/
order: 1.2
summary: "How your website gets online"
---

**GitHub** stores your website's source files and keeps a history of changes. A **repository** is the project folder on GitHub. Your team can give collaborators permission to edit it.

**GitHub Pages** publishes the finished website from those files. The repository's GitHub address is where you edit; the published website address is where visitors read. They are different addresses.

## From an edit to a live page

1. Open a source file in your site's repository and edit it.
2. Save the edit as a **commit**, a recorded version of the change. Give it a short description, such as “Add project aims”.
3. If the change is on your publishing branch, GitHub starts the build and deployment. A branch is a named version of your files; a simple site often publishes from `main`.
4. Wait for the deployment to complete, then visit the published site and check the result.

A commit on another branch does not necessarily change the live site. A **pull request** asks your team to review and merge changes into another branch. Use your team's review process when one is in place.

A build converts Markdown and settings into web pages; deployment makes those pages available to visitors. Publishing is not instant. If an edit does not appear, check the deployment status before editing it again.

## Website addresses

A typical project website address is `https://USERNAME.github.io/REPOSITORY-NAME/`. In `_config.yml`, `url` is the address before the repository path, and `baseurl` is `/REPOSITORY-NAME`. A site published at the domain root uses an empty `baseurl`. A custom domain may need different settings.

Follow GitHub's [publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for the current setup options. The next guide uses the straightforward branch-publishing route.

Next: [Create your first website]({{ "/beginners/create-your-first-website/" | relative_url }}).
