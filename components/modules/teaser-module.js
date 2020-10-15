export default function TeaserModule(module) {
  return (
    <>
      <div className="teaser">
        <p>{module.headline}</p>
      </div>

      <style jsx>{`
        .teaser {
          padding: 80px 3%;
          width: 100%;
          font-size: 40px;
          color: white;
          background: linear-gradient(to bottom, #005bff, blue);
        }
      `}</style>
    </>
  );
}
