# Contributing to the theme

Use a separate development branch for each related set of changes and open a
pull request targeting `main`. Keep changes focused and explain the problem,
resulting behaviour and validation in the pull request.

Follow the [development workflow](docs/maintainer/development-workflow.md) for
branch creation, local testing, review, conflict resolution and merging through
the GitHub pull request.

Before submitting, build and preview the sample site. Check the features affected
by the change, including mobile behaviour and accessibility where relevant.
For reusable theme changes, also check a separate consuming website. Update
relevant samples and documentation alongside behaviour changes.

Stage only intended source files. Do not commit generated site output, local
caches or credentials. For dependency changes, review and commit the relevant
Gemfile and lockfile changes together; see [dependency updates](docs/maintainer/dependency-updates.md).

Maintainers can follow the [release guide](docs/maintainer/creating-a-release.md)
to publish a tested version. Merging a pull request does not itself create a
theme release.

The [maintainer guides](docs/maintainer/index.md) are maintained in Markdown with
the code and are excluded from the website build.
