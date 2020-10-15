import contentConstants from "../../constants/content-constants";

export default function StoryblokBridge() {
  return (
    <>
      <script
        src={`//app.storyblok.com/f/storyblok-latest.js?t=${contentConstants.storyblokToken}`}
      ></script>
    </>
  );
}
