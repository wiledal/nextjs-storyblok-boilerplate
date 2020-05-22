import { useState, useEffect, useRef } from "react";

import Link from "./link";

export default function Navigation(props) {
  return (
    <>
      <div className="nav">
        <Link to="/en">
          <a>Home</a>
        </Link>
        <Link to="/en/resellers/reseller-1">
          <a>Test link</a>
        </Link>
      </div>
      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 72px;
          background: #fff;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        a:not(:last-child) {
          margin-right: 32px;
        }
      `}</style>
    </>
  );
}
