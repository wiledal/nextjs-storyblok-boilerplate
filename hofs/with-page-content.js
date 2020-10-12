export function withPageContent(getProps) {
  return async (ctx) => {
    let data = await getProps(ctx);

    let { params, preview } = ctx;

    let page = {};
    let storyblok = (await import("../lib/storyblok")).default;

    let slug = params?.slug || "home";

    try {
      let resp = await storyblok.get("cdn/stories/" + slug, {}, preview);
      page = resp?.data?.story?.content || {};
    } catch (err) {}

    data.props.page = page;

    return data;
  };
}
