import { useState, useEffect, useRef } from "react";

export default function LoadingSpinner({ show }) {
  return (
    <>
      <div
        className="loading-spinner"
        style={{
          opacity: show ? 1 : 0,
        }}
      >
        <div className="spinner"></div>
      </div>

      <style jsx>{`
        .loading-spinner {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #fff;
          z-index: 200;

          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .spinner {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid #005bff;
          border-left: 2px solid transparent;

          margin-top: -20px;
          margin-left: -20px;

          animation: spin 0.5s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(359deg);
          }
        }
      `}</style>
    </>
  );
}
