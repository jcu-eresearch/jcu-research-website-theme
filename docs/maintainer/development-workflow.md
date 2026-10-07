# Working with development branches

An administrator guide for the JCU Research Website Theme. Use a short-lived branch to develop and test one related set of changes, open a pull request for review, and merge completed work into main. This guide includes updating the GitHub Pages build dependencies.

### Understand the workflow

main contains completed, tested work. A development branch is a separate line of work in the same repository. Commits save changes locally; pushing copies them to GitHub. A pull request proposes merging the branch into main and provides a record of the changes and checks.

Merging into main and publishing a theme release are separate tasks. A release tag identifies a tested snapshot. If the documentation website deploys from main, merging may publish its updated content before a theme release is created.

### Start from an updated main branch

Open the repository in VS Code and use its integrated terminal. Check your branch and working files first. Commit unfinished work on its existing branch or save it safely before switching branches.

```bash
cd /Users/jc350584/github/jcu-research-website-theme
git status
git switch main
git pull --ff-only
```

If pull reports that the branches have diverged, stop and inspect the history. Do not discard local commits to force the update.

### Create a branch for the work

```bash
git switch -c maintenance/update-build-dependencies
git branch --show-current
```

The example uses a dependency update. Choose another descriptive name for other work, such as feature/improve-card-spacing. Create separate branches for unrelated tasks. VS Code shows the current branch in its status bar.

## Develop and test the changes

### Make and review changes

Edit the required files on the development branch. Use VS Code Source Control to inspect each changed file, or review the differences in the terminal. Keep generated site files, local caches and credentials out of the commit.

```bash
git status
git diff
```

### Update dependencies when needed

Follow the [dependency update guide](dependency-updates.md), then return here to build, test, commit and review the changes.

### Build and preview

```bash
bundle exec jekyll build
bundle exec jekyll serve
```

Open the local address printed by Jekyll, including any configured base path. Check Markdown rendering, headings and footnotes, tables, content blocks, colours, links and menus at wide and mobile widths. Stop the server with Ctrl+C. For theme changes, also test a separate consuming site with representative content and local overrides.

Each consuming website has its own Gemfile and lockfile. Updating this repository does not update those sites. Standard GitHub Pages hosting uses its managed build environment; a custom workflow may install the site’s own dependencies.

## Save work and create a pull request

### Commit and push the branch

Stage the intended files explicitly. For a dependency update, include both the Gemfile and lockfile. Use other file paths when working on another feature.

```bash
git add Gemfile Gemfile.lock
git diff --cached
git commit -m "Update GitHub Pages build dependencies"
git push -u origin maintenance/update-build-dependencies
```

A commit saves only staged changes. The first push sets the upstream branch; later pushes can use git push. Continue making focused commits as needed. Before committing later work, run git status and confirm that you are still on the intended branch.

### Open the pull request on GitHub

Open the repository on GitHub. Use Compare and pull request if the branch banner appears, or select Pull requests, New pull request. Set base to main and compare to maintenance/update-build-dependencies. Check these selections carefully: the base receives the changes.

Review Files changed, give the request a clear title, and describe the problem, final changes, validation and any setup requirements. Select Create pull request when ready, or create a draft if work is still in progress.

### Example pull request description

Use the actual old and new versions and results in your description. For example: “Updates the GitHub Pages build dependency from [old version] to [new version] and refreshes Gemfile.lock. Validation: [build result], [preview checks] and [consuming site checks]. Setup changes: [requirements, or none].”

### Review and address feedback

Read the complete diff, confirm that only intended files changed, and check any automated checks configured for the repository. Request a review when another reviewer is available. For solo work, review the request yourself; GitHub does not allow you to approve your own pull request.

Commit and push fixes on the same development branch. The existing pull request updates automatically. Repeat relevant checks after changes, and mark a draft ready for review before merging.

## Keep the branch current and merge the pull request

### Bring in main changes if necessary

If main has advanced and the branch needs updating, first commit your work and confirm that the working tree is clean. Then merge the latest remote main into your development branch:

```bash
git switch maintenance/update-build-dependencies
git fetch origin
git merge origin/main
```

If conflicts occur, review both versions and edit each conflicted file to retain the correct final behaviour. Remove conflict markers, stage the resolved files, and run git merge --continue. Use git merge --abort to cancel an in-progress merge if you need to reconsider. Retest and push the resulting branch. Do not blindly choose one whole file over another.

### Confirm the request is ready

On the GitHub pull request, confirm base is main, the latest changes are reviewed, required checks pass, any required approvals are present, and conflicts are resolved. If repository rules block merging, satisfy those requirements before proceeding.

### Merge from the pull request

At the bottom of the pull request, choose an available merge method from the merge dropdown. Squash and merge is a useful default for one focused change: it creates one commit on main from the branch’s work. Create a merge commit preserves the individual branch commits and adds a merge commit. Rebase and merge preserves separate commits with new commit IDs.

Click the selected merge button. For a squash merge, review the proposed commit title and description so they describe the complete final change. Click Confirm squash and merge, or the corresponding confirmation for your chosen method.

Confirm that GitHub marks the pull request Merged. main now contains the changes. You do not need to perform another local merge of the development branch into main.

### Verify the website deployment

If merging triggers a website deployment, inspect its GitHub Actions run or Pages deployment and then check the published website. A successful merge does not guarantee a successful deployment. If a problem appears, diagnose it and use a follow-up fix or reviewed revert rather than rewriting main history.

## Synchronise clean up and continue

### Update your local main branch

After the GitHub merge, return to main and download the merged result. Start with a clean working tree.

```bash
git switch main
git pull --ff-only
bundle install
bundle exec jekyll build
git status
```

bundle install installs the versions recorded in the updated lockfile. Check the merged result, especially if conflict resolution changed behaviour. If the build fails, investigate before tagging a release.

### Remove the completed branch

Use Delete branch on the merged GitHub pull request if the remote branch was not deleted automatically. Then clean up your local branch:

```bash
git fetch --prune
git branch -d maintenance/update-build-dependencies
```

After a squash or rebase merge, Git may refuse -d because the original branch commits are not ancestors of main. Confirm the pull request is Merged, all intended changes are present on main, and no uncommitted or unpushed work remains. Only then use git branch -D maintenance/update-build-dependencies to remove the local branch. This deliberately overrides the ancestry check.

### Begin the next task or prepare a release

Create a fresh branch from updated main for the next task. Avoid continuing work on a branch whose pull request has already merged. When a release is ready, follow the [release guide](creating-a-release.md): choose the theme version, test the exact release commit, create an immutable tag and publish release notes.

### Official references

GitHub flow[GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow)

Merging a pull request[Merging a pull request](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/merging-a-pull-request)

GitHub Pages dependencies and updates[GitHub Pages dependencies and updates](https://github.com/github/pages-gem)

Bundler dependency management[Bundler dependency management](https://bundler.io/guides/using_bundler_in_applications.html)
