# MIT Science Olympiad Website

A basic site for competitors and coaches to get important information and official updates about the tournament.

## Getting Started

The site is constructed using [Hugo](https://gohugo.io/), a static site generator.
To get started, install Hugo by following [Hugo's installation guide](https://gohugo.io/installation/).
To build and serve the site locally, run `hugo server` from the root of this repository.
To generate the production build, run `hugo`.

## Deployment

The site is deployed with GitHub Pages through [`.github/workflows/hugo.yml`](/.github/workflows/hugo.yml).
In the repository settings, GitHub Pages should be configured to use `GitHub Actions` as the source.
Deployments run automatically on pushes to `master`.

## Contributing

To contribute to the site, you should get write access to the repo from the online logistics director.
If multiple people are working on the site, then it is advisable that you use a branch-rebase workflow.

Code style is dictated in the `.editorconfig` file.
If you are using VS Code, you can download the [extension](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) to automatically apply the right formatting settings.

See the [EditorConfig documentation](https://editorconfig.org/) for more information and for how to use EditorConfig on different editors.
