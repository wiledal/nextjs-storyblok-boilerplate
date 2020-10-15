import Index, { getStaticProps } from "../index";

export default Index;
export { getStaticProps };

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
