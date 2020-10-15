import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import head from "next/head";

export default function Error({}) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex nofollow" />
      </Head>

      <div className="error">
        <div className="content">
          <h1>404: This page cannot be found</h1>
        </div>
      </div>
      <style jsx>{`
        .error {
          min-height: 100vh;
          padding: 24px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 40px;
          background: linear-gradient(to bottom, #005bff, blue);
        }
        .content {
        }
      `}</style>
    </>
  );
}
