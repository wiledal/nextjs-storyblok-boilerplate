export default function PreviewIndicator() {
  return (
    <>
      <a href="/api/preview/exit" className="preview-indicator">
        🕶 Preview mode
      </a>

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

          cursor: pointer;
        }
      `}</style>
    </>
  );
}
