import StoryblokClient from "storyblok-js-client";
import contentConstants from "../constants/content-constants";

class StoryblokService {
  constructor() {
    this.preview = false;
    this.token = contentConstants.storyblokToken;
    this.client = new StoryblokClient({
      accessToken: this.token,
      cache: {
        clear: "auto",
        type: "memory",
      },
    });
  }

  getCacheVersion() {
    return this.client.cacheVersion;
  }

  get(slug, params, preview) {
    params = params || {};

    if (preview || (typeof window !== "undefined" && window.storyblok)) {
      params.version = "draft";
    }

    if (
      typeof window !== "undefined" &&
      typeof window.StoryblokCacheVersion !== "undefined"
    ) {
      params.cv = window.StoryblokCacheVersion;
    }

    return this.client.get(slug, params);
  }
}

const storyblok = new StoryblokService();

export default storyblok;
