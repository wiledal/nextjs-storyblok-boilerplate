import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import contentConstants from "../constants/content-constants";

const useEditableContent = (content) => {
  const [pageContent, setPageContent] = useState(content);
  const router = useRouter();

  const handleSetPageContent = (newContent) => {
    setPageContent({ ...pageContent, ...newContent });
  };

  useEffect(() => {
    setPageContent(content);
  }, [content]);

  useEffect(() => {
    if (window.storyblok) {
      // available only in preview mode
      window.storyblok.init({
        accessToken: contentConstants.storyblokToken,
      });

      window.storyblok.on(["change", "published"], (event) => {
        if (!event.slugChanged) {
          router.reload();
        }
      });

      window.storyblok.pingEditor(() => {
        if (window.storyblok.inEditor) {
          window.storyblok.enterEditmode();
        }
      });

      window.storyblok.on("input", (event) => {
        console.log(event);
        if (event.story.content._uid === pageContent._uid) {
          window.storyblok.addComments(event.story.content, event.story.id);
          handleSetPageContent(event.story.content);
        }
      });
    }
  }, [router.reload]);

  return pageContent;
};

export default useEditableContent;
