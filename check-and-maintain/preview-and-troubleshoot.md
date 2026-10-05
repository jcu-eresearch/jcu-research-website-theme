---
layout: page
title: "Preview and troubleshoot"
permalink: /check-and-maintain/preview-and-troubleshoot/
order: 4.1
summary: "Preview and troubleshoot"
---

After committing a change, check that the build and deployment succeeded in GitHub's Actions tab. Then open the published website. GitHub's source-file preview is useful for basic Markdown, but it does not reproduce the full theme, Liquid includes, or all styled blocks.

## Check the finished page

- Read headings and links in order. Does the content tell the intended story?
- Open every new link and check its destination.
- Check images and their descriptions.
- Use a narrow browser window or phone to inspect stacked columns, cards, tables, and the menu.
- Use the keyboard to navigate and follow the [accessibility checklist]({{ "/check-and-maintain/accessibility/" | relative_url }}).

A published change is live to visitors. If your team needs review before publication, use a review branch or your team's preview process. Technical contributors can also run a local Jekyll preview using the instructions in the repository README.

## Common problems

| Symptom | What to check |
| --- | --- |
| Changes are missing | The commit is on the publishing branch, deployment succeeded, and you refreshed the page |
| Build fails after editing settings | YAML indentation, tabs, missing quotes, or duplicate fields; read the build log for the file and line |
| Page is missing | Front matter markers, a unique permalink, and the menu URL |
| Link or image works only on the homepage | Published relative paths and the `baseurl` setting; use the body `relative_url` pattern where appropriate |
| Layout class appears as text | Class line immediately follows the Markdown group with the correct quote depth |
| Markdown inside HTML is not formatted | `markdown="1"`, blank lines, and matching closing elements |
| YAML panel appears at the bottom | Expected behaviour: body content precedes YAML blocks |

Change one thing at a time and compare against a working example. GitHub's file history lets you inspect previous versions and recover earlier text without guessing what changed.

Next: [Keep your site current]({{ "/check-and-maintain/keep-your-site-current/" | relative_url }}).
