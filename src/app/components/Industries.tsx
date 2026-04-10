export function Industries() {
  const industries = [
    {
      name: 'Real Estate & Construction',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
    },
    {
      name: 'Advanced Engineering & Robotics',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070',
    },
    {
      name: 'Media, Arts & Advertising',
      image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070',
    },
    {
      name: 'Consumer & Retail Goods',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070',
    },
    {
      name: 'Technology, IT & Communications',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072',
    },
  ];

  const marquee = [...industries, ...industries];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fahkwang:wght@400;500;600;700&family=Ranade:wght@400;500;600&display=swap');

        .ind-root {
          background: #080808;
          padding: 96px 0;
          border-top: 0.5px solid rgba(200,16,46,0.12);
          position: relative;
          overflow: hidden;
        }
        .ind-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(200,16,46,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,16,46,0.025) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }
        .ind-root::after {
          content: '';
          position: absolute;
          bottom: -60px; left: -100px;
          width: 460px; height: 320px;
          background: radial-gradient(ellipse, rgba(200,16,46,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Header ── */
        .ind-header {
          padding: 0 80px;
          margin-bottom: 48px;
          position: relative;
        }

        .ind-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Fahkwang', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C8102E;
          margin-bottom: 14px;
        }
        .ind-eyebrow-line { width: 24px; height: 1px; background: #C8102E; }

        .ind-h2 {
          font-family: 'Fahkwang', sans-serif;
          font-weight: 500;
          font-size: clamp(26px, 3.2vw, 38px);
          line-height: 1.08;
          color: #FFFFFF;
          margin-bottom: 14px;
          letter-spacing: -0.01em;
        }
        .ind-h2 em {
          font-style: normal;
          color: #C8102E;
          font-family: 'Fahkwang', sans-serif;
          font-weight: 700;
        }

        .ind-sub {
          font-family: 'Ranade', sans-serif;
          font-size: clamp(14px, 1.5vw, 17px);
          font-weight: 400;
          line-height: 1.7;
          color: rgba(255,255,255,0.45);
          max-width: 580px;
        }

        /* ── Marquee ── */
        .ind-marquee-wrap {
          position: relative;
          overflow: hidden;
          padding: 4px 0;
        }
        .ind-fade-left {
          pointer-events: none;
          position: absolute; left: 0; top: 0; bottom: 0;
          width: 120px; z-index: 2;
          background: linear-gradient(to right, #080808, transparent);
        }
        .ind-fade-right {
          pointer-events: none;
          position: absolute; right: 0; top: 0; bottom: 0;
          width: 120px; z-index: 2;
          background: linear-gradient(to left, #080808, transparent);
        }
        @keyframes ind-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ind-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: ind-scroll 44s linear infinite;
          padding: 0 8px;
        }
        .ind-track:hover { animation-play-state: paused; }

        /* ── Card ── */
        .ind-card {
          width: 270px;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
          border: 0.5px solid rgba(200,16,46,0.12);
          cursor: pointer;
          background: #0c0c0c;
          clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);
        }
        .ind-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: #C8102E;
          z-index: 3;
        }

        .ind-card-img-wrap {
          height: 175px;
          overflow: hidden;
          position: relative;
        }
        .ind-card-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.55s ease;
          display: block;
          filter: brightness(0.75) saturate(0.7);
        }
        .ind-card:hover .ind-card-img-wrap img {
          transform: scale(1.08);
          filter: brightness(0.6) saturate(0.5);
        }
        .ind-card-img-wrap::after {
          content: '';
          position: absolute; inset: 0;
          background-image: repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 3px
          );
          pointer-events: none;
        }
        .ind-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%);
        }
        .ind-card-hover-cta {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.42);
          display: flex; align-items: flex-end;
          padding: 14px 16px;
          opacity: 0;
          transition: opacity 0.25s;
          font-family: 'Fahkwang', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
        }
        .ind-card:hover .ind-card-hover-cta { opacity: 1; }

        .ind-card-footer {
          background: #C8102E;
          padding: 13px 16px;
        }
        .ind-card-name {
          font-family: 'Fahkwang', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #FFFFFF;
          line-height: 1.3;
        }

        /* ── Footer link ── */
        .ind-footer {
          padding: 32px 80px 0;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .ind-footer-line { flex: 1; height: 0.5px; background: rgba(255,255,255,0.06); }
        .ind-footer-link {
          font-family: 'Fahkwang', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #C8102E;
          text-decoration: none;
          display: flex; align-items: center; gap: 8px;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .ind-footer-link::after { content: '→'; }
        .ind-footer-link:hover { color: #FFFFFF; }

        /* ── Tablet ── */
        @media (max-width: 1024px) {
          .ind-root { padding: 64px 0; }
          .ind-header { padding: 0 40px; margin-bottom: 36px; }
          .ind-footer { padding: 28px 40px 0; }

          .ind-h2 { font-size: clamp(20px, 3.5vw, 28px); }
          .ind-sub { font-size: clamp(13px, 1.8vw, 15px); }

          /* Slightly smaller cards — still readable */
          .ind-card { width: 220px; }
          .ind-card-img-wrap { height: 140px; }
          .ind-card-footer { padding: 11px 14px; }

          /* Narrower fades on tablet */
          .ind-fade-left,
          .ind-fade-right { width: 60px; }
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .ind-root { padding: 48px 0; }
          .ind-header { padding: 0 20px; margin-bottom: 28px; }
          .ind-footer { padding: 20px 20px 0; }

          .ind-h2 { font-size: clamp(18px, 5.5vw, 24px); margin-bottom: 10px; }
          .ind-sub { font-size: 13px; line-height: 1.65; }

          /* Cards comfortable to read on phone */
          .ind-card { width: 180px; }
          .ind-card-img-wrap { height: 110px; }
          .ind-card-footer { padding: 10px 12px; }
          .ind-card-name { font-size: 11px; letter-spacing: 0.08em; }

          /* Faster scroll at smaller card size so motion feels consistent */
          .ind-track { animation-duration: 32s; gap: 12px; }

          /* Tighter fades so cards aren't clipped too early */
          .ind-fade-left,
          .ind-fade-right { width: 40px; }

          .ind-marquee-wrap { padding: 0; }
        }

        /* ── Small mobile ── */
        @media (max-width: 380px) {
          .ind-card { width: 155px; }
          .ind-card-img-wrap { height: 95px; }
          .ind-track { animation-duration: 26s; gap: 10px; }
          .ind-h2 { font-size: 16px; }
        }
      `}</style>

      <section id="industries" className="ind-root">

        {/* Header */}
        <div className="ind-header">
          <div className="ind-eyebrow">
            <span className="ind-eyebrow-line" />
            Industries
          </div>
          <h2 className="ind-h2">Sectors We <em>Serve</em></h2>
          <p className="ind-sub">
            We deliver holistic service covering all aspects of business life cycle — becoming reliable partners for companies, individuals, and institutions.
          </p>
        </div>

        {/* Marquee */}
        <div className="ind-marquee-wrap">
          <div className="ind-fade-left" />
          <div className="ind-fade-right" />
          <div className="ind-track">
            {marquee.map((ind, i) => (
              <div key={`${ind.name}-${i}`} className="ind-card">
                <div className="ind-card-img-wrap">
                  <img src={ind.image} alt={ind.name} />
                  <div className="ind-card-overlay" />
                  {/* <div className="ind-card-hover-cta">Explore sector →</div> */}
                </div>
                <div className="ind-card-footer">
                  <div className="ind-card-name">{ind.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="ind-footer">
          <div className="ind-footer-line" />
          <a href="#contact" className="ind-footer-link">Get in touch</a>
        </div>

      </section>
    </>
  );
}