export default function PreviewIndicator({ dev }) {
  return (
    <>
      {!dev ? (
        <a href="/api/preview/exit" className="preview-indicator">
          🕶 Preview
          <span className="hover">EXIT</span>
        </a>
      ) : (
        <div className="preview-indicator">🔧 development</div>
      )}

      <style jsx>{`
        .preview-indicator {
          position: fixed;
          bottom: 16px;
          left: 16px;
          border-radius: 4px;
          box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
          background: #fff;
          color: #333;
          padding: 8px;
          text-transform: uppercase;
          font-size: 10px;
          letter-spacing: 1px;
          text-decoration: none;
          overflow: hidden;
        }
        .hover {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transform: scale(1.5);
          transition: all 0.1s ease;
        }
        .preview-indicator:hover .hover {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </>
  );
}
