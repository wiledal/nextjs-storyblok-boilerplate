import { useState, useEffect, useRef } from "react";

export default function Navigation({ page, preview }) {
  return (
    <>
      <div className="navigation">
        <div className="content">Next.js + Storyblok boilerplate</div>
      </div>

      <style jsx>{`
        .navigation {
          position: relative;
          width: 100%;
          height: 48px;
          background: #fff;
          box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
          z-index: 100;
        }
        .content {
          margin: 0 3%;
          height: 100%;
          display: flex;
          align-items: center;
        }
      `}</style>
    </>
  );
}
