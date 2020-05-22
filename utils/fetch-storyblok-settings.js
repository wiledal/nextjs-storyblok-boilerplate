import storyblok from "../lib/storyblok";

export default async function fetchStoryblokSettings(lang, version) {
  return storyblok
    .get("cdn/stories/" + lang + "/settings", {
      version,
    })
    .then((res) => [null, res])
    .catch((err) => [err, null]);
}
