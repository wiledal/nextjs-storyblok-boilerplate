import siteSettings from "../constants/site-settings";

export default function StoryblokClient() {
  return (
    <>
      <script
        type="text/javascript"
        src="//app.storyblok.com/storyblok-latest.js"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        storyblok.init('${siteSettings.storyblokToken}')
        storyblok.on(['published', 'change'], function() {
          location.reload(true)
        })
        
        storyblok.pingEditor(function() {
          if (storyblok.inEditor) {
            storyblok.enterEditmode()
          }
        })
      `,
        }}
      ></script>
    </>
  );
}
