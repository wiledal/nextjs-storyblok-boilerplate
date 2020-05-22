import { useState, useEffect, useRef } from "react";
import SbEditable from "storyblok-react";

export default function TeaserModule(props) {
  const { headline } = props;
  return (
    <>
      <SbEditable content={props}>
        <div className="teaser-module">{headline}</div>
      </SbEditable>

      <style jsx>{`
        .teaser-module {
          background: #ebebeb;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
          font-size: 40px;
        }
      `}</style>
    </>
  );
}
