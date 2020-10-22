# Storyblok + Next.js boilerplate

A small boilerplate to kickstart a Storyblok + Next.js project.

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
```sh
yarn next --port PORT
```

### Caveats:
  - Forcing preview mode on localhost, this is not "true" preview, but enables live editing for easier development
  - 404 errors use a `noindex` meta-header rather than providing a correct status code (https://github.com/vercel/next.js/discussions/10960)

# Ideas
- Storyblok base template script  
  A one-time script that adds the basic outline of the Storyblok content using the Content Management API