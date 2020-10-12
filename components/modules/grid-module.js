import { useState, useEffect, useRef } from "react";

export default function GridModule({ columns }) {
  return (
    <>
      <div className="grid-module">
        <div className="content">
          {columns.map((col, i) => (
            <div key={i} className="column">
              {col.name}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .grid-module {
          margin: 24px 3%;
        }
        .content {
          display: flex;
          margin: 0 -8px;
        }

        .column {
          width: 100%;
          margin: 8px;
          border-radius: 12px;
          padding: 16px;
          min-height: 360px;
          background: linear-gradient(to bottom right, #00ff63, #00d9fa);
        }
      `}</style>
    </>
  );
}
