import DefaultLayout from "../components/layouts/default-layout";
import ModuleFactory from "../components/common/module-factory";
import fetchStoryblokStory from "../utils/fetch-storyblok-page";
import fetchStoryblokSettings from "../utils/fetch-storyblok-settings";
import { isStoryblokInEditor } from "../lib/storyblok";

export default function Index({ page, settings }) {
  return (
    <>
      <DefaultLayout settings={settings} page={page}>
        {page && page.content.component == "page" && (
          <ModuleFactory settings={settings} modules={page.content.body} />
        )}
        {/* {!page && <ErrorPage settings={settings} />} */}
      </DefaultLayout>
    </>
  );
}

export async function getServerSideProps(ctx) {
  let lang = ctx.query.lang || "en";
  let slug = ctx.query.slug ? ctx.query.slug.join("/") : "/";

  let err = null;
  let page = null;
  let settings = null;
  let resp = null;
  let inEditor = isStoryblokInEditor(ctx.query);

  let version = inEditor ? "draft" : null;

  [err, resp] = await fetchStoryblokSettings(lang, version);
  if (err) {
    console.log("⚠️ COULD NOT FETCH SETTINGS!");
    console.log(err);
  } else {
    settings = resp.data.story;
  }

  [err, resp] = await fetchStoryblokStory(lang, slug, version);
  if (err) {
    ctx.res.statusCode = 404;
  } else {
    page = resp.data.story;
  }

  return {
    props: { page, settings },
  };
}
