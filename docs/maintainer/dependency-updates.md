# Updating build dependencies

The Gemfile defines the Ruby tools used to build and preview the site. The theme version selected through `remote_theme` is independent of these tools. Each consuming website has its own Gemfile and lockfile; changing this repository does not update those websites.

## When to update

Review dependencies when GitHub Pages changes its supported build tools, when a relevant dependency fix is available, or when a compatibility requirement changes. There is no need to update them for every theme release.

Check the [GitHub Pages gem documentation and supported dependencies](https://github.com/github/pages-gem#dependency-versions). Standard GitHub Pages hosting uses its managed environment; a custom workflow can install dependencies from the site's own Gemfile and lockfile. Match the deployment environment when testing locally.

## Update on a development branch

Follow the [development workflow](development-workflow.md) to start from updated main and create a branch such as `codex/update-build-dependencies`.

The current constraint is:

```ruby
gem "github-pages", "~> 232", group: :jekyll_plugins
```

`~> 232` permits versions from 232 up to, but excluding, 233. `Gemfile.lock` records the exact selected versions. If the supported package version increases, change the constraint to the intended supported version. If it is still 232, leave the Gemfile unchanged.

Run a targeted update:

```bash
bundle update github-pages
git diff -- Gemfile Gemfile.lock
```

This updates github-pages and its required dependencies within the Gemfile constraints. Review the changes and compatibility requirements. Avoid a bare `bundle update`, which attempts to update all dependencies. Do not edit the lockfile version numbers manually.

If Bundler reports an incompatible Ruby version or dependency conflict, resolve the requirement and document any changed setup steps before proceeding. Do not bypass the error by deleting the lockfile without understanding the cause.

## Test and review

```bash
bundle exec jekyll build
bundle exec jekyll serve
```

Preview representative pages. Check Markdown, headings, footnotes, tables, content blocks, colours, links and wide-screen and mobile menus. Stop the server with Ctrl+C. Where appropriate, test a separate consuming site using the intended build environment.

Stage both files when both changed:

```bash
git add Gemfile Gemfile.lock
git diff --cached
git commit -m "Update GitHub Pages build dependencies"
git push
```

Open a pull request targeting main as described in the [development workflow](development-workflow.md). Include the old and new versions, validation results, any Ruby requirements and known compatibility limits. Merge only after reviewing the complete diff and satisfying repository checks.

After merging, update local main and run `bundle install` to install the locked versions. A theme tag remains a separate release decision; use the [release guide](creating-a-release.md) when publishing a theme release.

## References

- [Updating the GitHub Pages gem](https://github.com/github/pages-gem#updating)
- [Bundler dependency management](https://bundler.io/guides/using_bundler_in_applications.html)
