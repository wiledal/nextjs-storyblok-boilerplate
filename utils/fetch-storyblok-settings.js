import storyblok from "../lib/storyblok";
import fetchStoryblokStory from "./fetch-storyblok-page";

export default async function fetchStoryblokSettings(lang, version) {
  return fetchStoryblokStory(lang, "settings", version);
}
