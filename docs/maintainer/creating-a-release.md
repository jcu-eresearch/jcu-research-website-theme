# Creating a theme release

For everyday development and pull request steps, see the [development workflow](development-workflow.md).

Administrator instructions for the JCU Research Website Theme. Use this guide to develop and review changes, select a tested commit, publish a permanent version tag and GitHub Release, and help project sites adopt it. A release does not automatically rebuild consuming sites.

Repository: jcu-eresearch/jcu-research-website-theme. The release branch is currently main. Commands use v1.0.0 as an example; substitute the chosen version consistently. These are instructions only, not a record of a release already created.

## Prepare the release

### Choose the version

Use v1.0.0 for the first stable release once you are ready to support the current configuration and layouts. Use a patch release such as v1.0.1 for fixes, a minor release such as v1.1.0 for compatible features, and a major release such as v2.0.0 for changes requiring sites to adjust content or settings. Use v1.0.0-rc.1 for an optional release candidate.

Do not reuse a published version or move its tag. The theme release version is independent of the github-pages build dependency version in the Gemfile. The build dependency does not need to change for each theme release; see [dependency updates](dependency-updates.md).

### Review and commit the intended changes

In VS Code, open the theme repository and review Source Control. Commit the intended release files and complete any team review process. Include release documentation and upgrade instructions before testing the final snapshot. Do not include generated _site output, local settings, credentials, or temporary artifacts.

```bash
cd /Users/jc350584/github/jcu-research-website-theme
git status --short
git branch --show-current
git remote -v
```

Confirm that the branch is main and origin is the theme repository. An empty git status --short output means there are no uncommitted or untracked files. If there are changes, resolve them before switching branches or pulling.

### Synchronise with GitHub

With the working tree clean, synchronise main and retrieve existing tags. If the pull cannot fast-forward, stop and resolve the branch divergence; do not force-push.

```bash
git switch main
git pull --ff-only origin main
git fetch origin --tags
git tag --list
git log -1 --format=fuller
```

Confirm the chosen version is unused, including on GitHub’s Releases and Tags pages. Push any approved local commits with git push origin main before publishing. Record the full commit ID shown by git rev-parse HEAD; this is the release commit. If the code changes after testing, retest and record the new ID.

## Test the release candidate

### Build and preview the theme site

Use the Ruby environment that successfully builds this repository. The current local development environment uses Ruby 3.3.4; the GitHub Pages environment can change independently. Run from the theme repository:

```bash
bundle install
bundle exec jekyll build
bundle exec jekyll serve
```

Open the local address reported by Jekyll, including the configured base path /jcu-research-website-theme/. Stop the preview server with Ctrl+C. Investigate build errors and missing assets before releasing.

Gemfile defines build dependencies, and Gemfile.lock records resolved versions. A theme release normally needs no dependency change. Do not run a broad bundle update simply to create a release. If installation or dependency work changes the lockfile, review and commit it, then repeat the relevant checks.

### Check the features a consuming site depends on

Review the homepage and the sample pages on desktop and narrow screens. Check these areas:

- Standard pages and landing pages; Markdown content and YAML blocks.

- Headings, contents lists, custom heading links, footnotes, lists, tables, and alerts.

- Columns, image and text blocks, galleries, partner logos, cards, categories, and generated page cards.

- Wide-screen hover menus, burger and mobile click menus, breadcrumbs, and Previous and Next links.

- Primary and secondary backgrounds, matching text and link colours, table styling, and visible keyboard focus.

- Internal links, images, and site navigation under a repository base path.

### Test through a consuming site

Use a separate test copy or test branch of the starter, with its own Gemfile and configuration. Point remote_theme to the full release commit ID already pushed to GitHub, replacing RELEASE_COMMIT_SHA below:

```yaml
remote_theme: jcu-eresearch/jcu-research-website-theme@RELEASE_COMMIT_SHA
```

Run bundle install and bundle exec jekyll build in that test site, then preview it. Verify its pages and assets load through the remote theme. Inspect local _layouts, _includes, and assets overrides: they may hide changes in the theme. Test configuration changes or new required settings explicitly.

Remote themes do not copy the demonstration documentation pages, sample content, navigation data, Gemfile, or lockfile into consuming sites. Review starter changes separately. Once testing passes, check the theme working tree is clean and HEAD is still the recorded release commit.

## Publish the tag and GitHub Release

Choose one of the two tag-creation methods below. The terminal method pins the exact tested commit and is the recommended route. You need permission to push tags and create releases in the repository.

### Create and push an annotated tag

An annotated tag gives a name, such as `v1.0.0`, to the complete repository snapshot at a particular commit. It also records a message and the person who created the tag. It includes all tracked files at that commit, not just the files changed by that commit.

Run the following commands in the theme repository after the release checks pass. Replace `RELEASE_COMMIT_SHA` with the full commit ID you recorded and tested, and replace `v1.0.0` consistently with your chosen version.

First, create the tag locally and check which commit it identifies:

```bash
git tag -a v1.0.0 RELEASE_COMMIT_SHA -m "Release v1.0.0"
git rev-parse "v1.0.0^{commit}"
```

The second command prints the full commit ID identified by the tag. Compare it with your recorded release commit ID. They must match before you upload the tag. This check does not change any files.

If Git reports that the tag already exists, stop and inspect it with the same `git rev-parse` command. Do not delete or overwrite it to make the command succeed. If the name already identifies a different published release, choose a new version number.

Once the local check passes, upload that specific tag to GitHub:

```bash
git push origin v1.0.0
```

This uploads only `v1.0.0`. Avoid `git push --tags`, which could upload other local tags that you did not intend to publish. If Git rejects the upload because the tag already exists on GitHub, inspect the remote tag before proceeding; do not force-push over it.

Finally, check the tag stored on GitHub:

```bash
git ls-remote --tags origin refs/tags/v1.0.0 "refs/tags/v1.0.0^{}"
```

For an annotated tag, this normally prints two lines:

```text
TAG_OBJECT_ID      refs/tags/v1.0.0
RELEASE_COMMIT_ID  refs/tags/v1.0.0^{}
```

The first ID identifies the tag's own information, including its message. The second line, ending in `^{}`, identifies the actual repository commit. Compare the second ID with your recorded release commit ID; they must match. The placeholders above represent full IDs in the actual output. If the tag is missing or the commit differs, resolve that before creating the GitHub Release.

### Create the release in GitHub

Open the theme repository, select Releases, then Draft a new release. Select the existing v1.0.0 tag. Give the release the title v1.0.0 and enter the release notes. Preview them and save a draft until everything is ready.

For a stable release, leave the pre-release option off. For a release candidate, mark it as a pre-release. Publish the release when the notes and tag are correct. No RubyGem publication, compiled package, or manual source ZIP is required; GitHub supplies source archives for the tag.

### Alternative Create the tag in GitHub

As an alternative to creating and pushing an annotated tag in the terminal, create a new tag in the release form. Select the tested target commit if offered. If selecting main, confirm its head is still exactly the tested commit before publishing; a new commit on main would otherwise change the snapshot. A draft for a new tag is not a published version that consumers can rely on. After publication, fetch tags locally and inspect the selected tag’s commit.

### Release notes to include

- A short summary of the purpose of the release and its major features or fixes.

- Breaking changes, renamed fields or classes, and required configuration or content edits; state when there are none.

- The exact remote_theme line and instructions to rebuild and check the site.

- Any dependency or supported-environment changes, known limitations, and links to relevant guides.

```yaml
remote_theme: jcu-eresearch/jcu-research-website-theme@v1.0.0
```

Generated release notes can help list changes, but review them and add guidance for site owners. For the first release, describe the supported baseline rather than relying on a comparison with a previous tag.

## Verify adoption and handle problems

### Verify the published version

Check that the release and tag are visible on GitHub and that the tag points to the recorded commit. In the separate test site, change remote_theme from the commit ID to @v1.0.0, rebuild, and preview again. This verifies the exact reference users will copy.

Check the theme’s documentation website separately after publication. Publishing a release is not the same operation as deploying that website; its Pages settings determine which branch or workflow builds it.

### Update the starter and documentation

In the starter repository, change remote_theme to the stable tag. Build and preview the starter, commit the change, and verify its published site after deployment. New sites created from the starter will then begin with that version. Existing sites created earlier retain their own configuration until their owners update it.

Update setup examples that currently show an unpinned remote_theme so users see the recommended release reference. Explain upgrade steps and link to the release notes. This theme does not automatically transfer new config fields into consuming sites. Required config changes must be made in each site’s own _config.yml.

### Upgrade existing sites deliberately

Ask site owners to review the release notes, make any required content or configuration adjustments, and change their theme reference to the new tag. Build or deploy, then check the live site. The site uses its own Gemfile and lockfile; it does not inherit the theme repository’s dependency files.

Pinned sites remain on their chosen tag. Unpinned sites can pick up theme changes on their next build, even without a new Release being published. Merely publishing this release does not trigger all consuming sites to rebuild.

### Rollback and corrections

If a site has problems after an upgrade, restore its previous remote_theme tag and any related configuration or content changes, then rebuild and redeploy. For a first release, retain the previous known-good commit ID as a fallback if there is no older tag.

If the published theme needs a fix, make and test the correction, then release a new version such as v1.0.1. Do not move or replace v1.0.0: sites may depend on it. Correct explanatory release notes if needed, while keeping the tagged code unchanged.

### Release completion checklist

- The tested commit, permanent tag, and published release match.

- A separate consuming site builds successfully using the exact version tag.

- Release notes include the theme reference, compatibility information, and upgrade steps.

- The starter and setup guidance recommend the intended stable version.

- You have retained the previous known-good reference for rollback.

### Official reference instructions

Managing releases on GitHub[Managing releases on GitHub](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository)

Git tag documentation[Git tag documentation](https://git-scm.com/docs/git-tag)

Remote theme version references[Remote theme version references](https://github.com/benbalter/jekyll-remote-theme#usage)

## Develop changes on short lived branches

Use main for completed, tested work and short-lived branches for development. Tags identify published versions; main can contain completed work for the next release. Several merges can accumulate before you publish a version. A permanent develop branch is not needed for this project at present.

The following examples use feature/card-spacing, release/v1.1.0, and fix/v1.0.1-menu. Choose names describing the actual work. Run Git commands in the theme repository. Replace sample versions and commit IDs with the values you intend to use.

### Start a development branch

Check Source Control in VS Code and resolve uncommitted work before switching branches. Update main, then branch from it:

```bash
git status --short
git switch main
git pull --ff-only origin main
git switch -c feature/card-spacing
```

Make the changes on this branch. Follow [Build and preview the theme site](#build-and-preview-the-theme-site) and [Check the features a consuming site depends on](#check-the-features-a-consuming-site-depends-on), focusing on the affected functionality. Update documentation and examples with the change.

### Review commit and push the branch

In VS Code Source Control, inspect each changed file, stage only the intended changes, enter a meaningful commit message, and commit. The terminal equivalent below uses a sample filename; substitute your actual files:

```bash
git diff
git add assets/css/main.scss
git diff --cached
git commit -m "Improve spacing above landing cards"
git push -u origin feature/card-spacing
```

The push uploads the development branch; it does not merge it into main. You can keep editing, committing, and pushing this branch while the pull request is open.

### Open review and merge a pull request

On GitHub, open the theme repository and select Compare & pull request, or Pull requests then New pull request. Set base to main and compare to feature/card-spacing. Describe the problem, resulting behaviour, and tests. Inspect Files changed and resolve any reported conflicts.

If main changes while you work, bring it into your branch, resolve any conflicts carefully, and repeat affected checks before merging:

```bash
git fetch origin
git merge origin/main
git push
```

Once the change is reviewed and checks pass, merge the pull request. Squash and merge is a useful default for one focused change: it gives main one clear commit. Delete the merged branch on GitHub, then update your local main. If needed, select the old branch in VS Code and delete it only after confirming the work is merged; avoid force deletion.

```bash
git switch main
git pull --ff-only origin main
```

For a normal release, follow the sections from [Prepare the release](#prepare-the-release) through [Verify adoption and handle problems](#verify-adoption-and-handle-problems), and tag the tested commit on main. A merged pull request is not itself a published theme version.

## Prepare a release while development continues

Use a temporary release branch only when you need to finish testing one snapshot while other features continue entering main. Put only release fixes and release documentation on this branch. The final release tag can point to this branch’s tested commit rather than the latest main.

### Create the release branch

Update main, then create the branch at the intended starting point. If using an earlier selected commit, supply its full ID instead of starting from the current main:

```bash
git switch main
git pull --ff-only origin main
git switch -c release/v1.1.0
git push -u origin release/v1.1.0
```

For an earlier snapshot, use git switch -c release/v1.1.0 RELEASE_COMMIT_SHA instead. Subsequent changes to main will not automatically enter the release branch. Do not merge all of main into the release branch after it is frozen, because this would bring newer features into the candidate.

### Apply and test release fixes

Make the necessary fixes on release/v1.1.0. Review and commit the specific files, then push the branch. Follow [Test the release candidate](#test-the-release-candidate) on this branch, including the separate consuming-site test. Record its final commit ID:

```bash
git status --short
git push
git rev-parse HEAD
```

Use that full ID for RELEASE_COMMIT_SHA in [Create and push an annotated tag](#create-and-push-an-annotated-tag) and use v1.1.0 consistently. Follow [Create the release in GitHub](#create-the-release-in-github), then [Verify the published version](#verify-the-published-version) in a consuming site. If creating the tag in the GitHub form, select this tested release branch or commit, not main.

### Bring the fixes into main

Open a pull request with base main and compare release/v1.1.0. Confirm it brings only the release fixes that main still needs. Resolve conflicts and test the combined result, then merge. When a fix has already been included separately, check for duplication before merging.

Delete the temporary release branch after the release is published and all its fixes are represented in main. The permanent tag remains available to consuming sites even after the branch is deleted.

### Coordinate documentation publication

Check the theme repository’s Settings, Pages section. If it deploys from main, each eligible push or merge can update the documentation website before the next theme release. If Pages uses a custom Actions workflow, inspect its triggers and checkout reference.

For a simple workflow, allow the documentation site to show the latest completed work on main and label unreleased features clearly. Keep released-version documentation accessible through the tagged source. If the public documentation must describe only the latest stable version, plan a separate deployment workflow or publishing branch that builds the selected release tag. This requires an explicit hosting change; creating a tag alone does not switch the website to that version.

## Fix an older published version

When main contains newer features that should not enter a patch release, start from the old release tag. This preserves the older version’s scope while allowing a targeted correction. The example below fixes v1.0.0 and publishes v1.0.1.

### Create the patch branch from the old tag

Resolve any uncommitted work first, then retrieve the published tags and branch from the release to be corrected:

```bash
git fetch origin --tags
git switch -c fix/v1.0.1-menu v1.0.0
git push -u origin fix/v1.0.1-menu
```

Make only the required correction and its relevant tests or documentation. Do not merge main into this branch. Review, stage, commit, and push the fix. For example:

```bash
git add assets/js/main.js
git diff --cached
git commit -m "Fix submenu closing in the v1.0 release"
git push
git rev-parse HEAD
```

Substitute the files and commit description for the real fix. Record the fix commit ID as well as the final tested release commit if further commits follow.

### Test and publish the patch

Follow [Test the release candidate](#test-the-release-candidate) on the patch branch. Test a separate consuming site against its pushed commit, using configuration appropriate to the older release. Publish v1.0.1 using the exact tested commit, following [Publish the tag and GitHub Release](#publish-the-tag-and-github-release) and [Verify the published version](#verify-the-published-version). Keep v1.0.0 unchanged and explain the correction in the release notes.

A patch tag can be published from this branch even though the release instructions normally use main. Do not merge newer main work into the patch simply to make the tag appear on main. Owners of sites pinned to v1.0.0 choose when to update to v1.0.1.

### Apply the correction to main

If main still has the same problem, create a fresh branch from current main and bring across the relevant fix commit. Replace FIX_COMMIT_SHA with the full ID of that fix, not automatically the old release tag:

```bash
git switch main
git pull --ff-only origin main
git switch -c fix/menu-on-main
git cherry-pick FIX_COMMIT_SHA
git push -u origin fix/menu-on-main
```

If there are several fix commits, transfer each relevant commit in its original order. Cherry-pick copies the change onto the new branch. Resolve conflicts using the current code, test the result, then open a pull request into main. If the equivalent fix is already on main, no transfer is needed.

If cherry-pick stops on a conflict, VS Code Source Control shows the affected files. Resolve them, stage the resolved files, and run git cherry-pick --continue. To abandon that cherry-pick attempt, run git cherry-pick --abort. Never select one side blindly; check the intended behaviour before continuing.

### Branch and tag housekeeping

After the patch release is verified and the correction is merged into main, delete the finished development and patch branches. Retain published tags permanently. For repeated support of an older major version, a maintenance branch such as maintenance/v1 may be useful; otherwise temporary patch branches are sufficient.

GitHub flow branching and pull requests[GitHub flow branching and pull requests](https://docs.github.com/en/get-started/using-github/github-flow)

Git cherry pick documentation[Git cherry pick documentation](https://git-scm.com/docs/git-cherry-pick)
