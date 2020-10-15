import ModuleDelegator from "../components/common/module-delegator";
import useEditableContent from "../hooks/use-editable-content";
import SbEditable from "storyblok-react";
import Layout from "../components/layout";
import { withDefaultProps } from "../hofs/with-default-props";
import { useRouter } from "next/router";
import LoadingSpinner from "../components/common/loading-spinner";
import Error from "../components/common/error";

export default function Index(props) {
  let { preview, page, settings } = props;

  let content = useEditableContent(page);
  let router = useRouter();

  return (
    <>
      <Layout {...props}>
        {content && (
          <SbEditable content={content} key={content?._uid}>
            <div className="page">
              <ModuleDelegator modules={content?.body} />
            </div>
          </SbEditable>
        )}
        {!content && <Error />}
      </Layout>

      <LoadingSpinner show={router.isFallback} />
    </>
  );
}

export const getStaticProps = withDefaultProps((ctx) => {
  return {
    props: {},
  };
});
