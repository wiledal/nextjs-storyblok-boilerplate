import NextLink from "next/link";

export default function Link({ to, children }) {
  // This Link automatically links to the correct next-path,
  // based on the amount of slashes in the requested URL

  let href;
  if (to.split("/").length < 3) {
    href = "/[lang]";
  } else {
    href = "/[lang]/[...slug]";
  }

  return (
    <NextLink href={href} as={to}>
      {children}
    </NextLink>
  );
}
