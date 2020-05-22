import Client from "storyblok-js-client";
import siteSettings from "../constants/site-settings";

let storyblok = new Client({
  accessToken: siteSettings.storyblokToken,
});

export default storyblok;
