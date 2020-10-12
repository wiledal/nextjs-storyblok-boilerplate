import GlobalStyles from "../styles/global-styles";
import Navigation from "./common/navigation";
import PreviewIndicator from "./common/preview-indicator";
import StoryblokBridge from "./common/storyblok-bridge";

export default function Layout({ children, page, preview, settings }) {
  return (
    <>
      <GlobalStyles />

      <Navigation settings={settings} />

      <div className="layout">{children}</div>

      {preview && (
        <>
          <StoryblokBridge />
          <PreviewIndicator />
        </>
      )}
    </>
  );
}
