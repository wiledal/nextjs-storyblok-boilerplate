import storyblok from "../lib/storyblok";

export default async function fetchStoryblokStory(lang, slug, version) {
  return storyblok
    .get("cdn/stories/" + lang + "/" + slug, {
      version,
    })
    .then((resp) => [null, resp])
    .catch((err) => [err, null]);
}
