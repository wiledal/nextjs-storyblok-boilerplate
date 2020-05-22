# React Storyblok Boilerplate

Install with `npx degit https://github.com/wiledal/nextjs-storyblok-boilerplate your-project-name`

Assumes you have set up Storyblok in this structure:
```
- en/
|- settings (story; settings)
|- landing (story; page)
|- blog/
  |- blog-post-1 (story; blog-post)
  |- blog-post-2 (story; blog-post)
|- some-folder/
  |- nested-page-1 (story; page)

- de/
|- settings (story; settings)
|- landing (story; page)
|- blog/
  |- blog-post-1 (story; blog-post)

etc...
```

Run with `npx next --port YOUR_PORT`

Replace the token in the `contstants/site-settings.js` with your Storyblok Token.