import { useState, useEffect, useRef } from "react";

import Head from "next/head";
import StoryblokClient from "../storyblok-client";

export default function AppHead({ title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <StoryblokClient />
    </>
  );
}
