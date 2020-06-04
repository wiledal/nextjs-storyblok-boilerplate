import Client from "storyblok-js-client";
import siteSettings from "../constants/site-settings";
import crypto from "crypto";

let storyblok = new Client({
  accessToken: siteSettings.storyblokToken,
});

export const isStoryblokInEditor = (query) => {
  if (!query["_storyblok_tk[space_id]"]) return false;
  let validationString =
    query["_storyblok_tk[space_id]"] +
    ":" +
    siteSettings.storyblokToken +
    ":" +
    query["_storyblok_tk[timestamp]"];
  let validationToken = crypto
    .createHash("sha1")
    .update(validationString)
    .digest("hex");
  if (
    query["_storyblok_tk[token]"] == validationToken &&
    query["_storyblok_tk[timestamp]"] > Math.floor(Date.now() / 1000) - 3600
  ) {
    // you're in edit mode
    return true;
  }

  return false;
};

export default storyblok;
