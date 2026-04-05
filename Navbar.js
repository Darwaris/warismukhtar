export default function Gallery() {
  return (
    <section className="section">
      <h2>Gallery</h2>
      <div className="grid">
        <img src="/images/gallery1.jpg" />
        <img src="/images/gallery2.jpg" />
      </div>

      <style jsx>{`
        img {
          width: 100%;
          border-radius: 20px;
          transition: 0.5s;
        }
        img:hover {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}

