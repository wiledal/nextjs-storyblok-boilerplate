import storyblok from "../lib/storyblok";

export default async function fetchStoryblokPage(lang, slug, version) {
  return storyblok
    .get("cdn/stories/" + lang + "/" + slug, {
      version,
    })
    .then((resp) => [null, resp])
    .catch((err) => [err, null]);
}
