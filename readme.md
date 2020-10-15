# Storyblok + NextJS + Vercel boilerplate

A small boilerplate to kickstart a Storyblok + NextJS project.

### Features
  - Static first
  - Realtime Storyblok content editing out of the box
  - Preview mode, with in-site indicator
  - Small `ModuleDelegator` for a modern, quick way of adding page modules with little keystrokes
  - Using `hofs` for composable static prop fetching

### Install:

1, initiate a project:
```sh
npx degit wiledal/nextjs-storyblok-boilerplate your-project-name
cd your-project-name
yarn
```

2, add your Storyblok preview token in `constants/content-constants.js`

3, run with
```
yarn next --port PORT
```

### Caveats:
  - Preview mode does not work on `localhost` (https://github.com/vercel/next.js/issues/11356)
  - 404 errors use a `noindex` meta-header rather than providing a correct status code (https://github.com/vercel/next.js/discussions/10960)