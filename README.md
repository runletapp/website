<h1 align="center">
    <p align="center">Website</p>
    <a href="https://runletapp.github.io"><img src="https://repository-images.githubusercontent.com/278957744/e80a1300-e019-11ea-923d-06f63f37c36f" alt="Website"></a>
</h1>

<p align="center">
    <img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Frunletapp.github.io">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/runletapp/website/deploy">
    <img alt="David" src="https://img.shields.io/david/runletapp/website">
    <a href="https://github.com/runletapp/website/blob/dev/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/runletapp/website"></a>
    <a href= "https://github.com/prettier/prettier"><img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg"></a>
</p>

## Introduction

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```
$ yarn
```

## Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
$ yarn build
```

This command generates static content into the `build` directory.

## Deployment

The website is automatically deployed to the branch `gh-pages` on repository `runletapp.github.io` each time the `main` branch receives a new push. The GitHub Action workflow file is stored at `.github/workflows/deploy.yml.`

## Contributing

There are a couple of ways in which you can contribute to the website, for example:

- [Submit bugs and feature requests](https://github.com/runletapp/website/issues), and help us verify as they are checked in.
- Review the [website](https://runletapp.github.io) and make pull requests for anything from typos to new content suggestion.
