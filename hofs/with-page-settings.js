export function withPageSettings(getProps) {
  return async (ctx) => {
    let data = await getProps(ctx);

    let { preview } = ctx;

    let storyblok = (await import("../lib/storyblok")).default;

    try {
      let resp = await storyblok.get("cdn/stories/page-settings", {}, preview);
      data.props.settings = resp.data.story.content;
    } catch (err) {}

    return data;
  };
}
