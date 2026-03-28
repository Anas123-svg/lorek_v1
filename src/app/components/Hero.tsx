export function Hero() {
  const companies = [
    'MICROSOFT', 'AMAZON', 'GOLDMAN SACHS', 'BLACKROCK',
    'JP MORGAN', 'DELOITTE', 'MCKINSEY', 'BOSTON CONSULTING',
    'MICROSOFT', 'AMAZON', 'GOLDMAN SACHS', 'BLACKROCK',
    'JP MORGAN', 'DELOITTE', 'MCKINSEY', 'BOSTON CONSULTING',
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;900&family=DM+Sans:wght@200;300;400;500&display=swap');

        .hero-root {
          position: relative;
          width: 100%;
          overflow: hidden;
          min-height: min(1100px, 100svh);
          background-color: #050505;
        }

        /* ── Video BG ── */
        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          pointer-events: none;
          z-index: 0;
        }

        /* Primary dark overlay */
        .hero-overlay-base {
          position: absolute;
          inset: 0;
          background: rgba(3, 3, 5, 0.60);
          z-index: 1;
          pointer-events: none;
        }

        /* Red diagonal beam — mirrors client texture */
        .hero-beam {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 50% 26% at 63% 50%,
            rgba(180,10,30,0.20) 0%,
            rgba(140,0,20,0.07) 52%,
            transparent 78%
          );
          transform: rotate(-18deg) scale(1.5);
          z-index: 2;
          pointer-events: none;
        }

        /* Diagonal scanlines */
        .hero-scanlines {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -55deg,
            transparent,
            transparent 3px,
            rgba(200,16,46,0.016) 3px,
            rgba(200,16,46,0.016) 4px
          );
          z-index: 3;
          pointer-events: none;
        }

        /* Subtle red-tinted grid */
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(200,16,46,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,16,46,0.035) 1px, transparent 1px);
          background-size: 80px 80px;
          z-index: 3;
          pointer-events: none;
        }

        /* Edge vignette — darkens corners */
        .hero-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 110% 100% at 50% 50%, transparent 28%, rgba(0,0,0,0.78) 100%);
          z-index: 4;
          pointer-events: none;
        }

        /* Bottom fade into page */
        .hero-bottom-fade {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 30%;
          background: linear-gradient(to bottom, transparent, #050505);
          z-index: 5;
          pointer-events: none;
        }

        /* ── Eyebrow ── */
        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(9px, 1.5vw, 11px);
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C8102E;
          margin-bottom: 18px;
        }
        .hero-eyebrow-line {
          width: 28px;
          height: 1px;
          background: #C8102E;
          flex-shrink: 0;
        }

        /* ── Headline ── */
        .hero-h1 {
          font-family: 'Orbitron', monospace;
          font-weight: 700;
          font-size: clamp(30px, 5.5vw, 62px);
          line-height: 1.06;
          color: #FFFFFF;
          max-width: min(680px, 95%);
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }
        .hero-h1 em {
          font-style: normal;
          color: #C8102E;
        }

        /* ── Sub ── */
        .hero-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(14px, 1.8vw, 16px);
          font-weight: 300;
          line-height: 1.7;
          color: rgba(255,255,255,0.52);
          max-width: min(500px, 100%);
          margin-bottom: 34px;
        }

        /* ── Buttons ── */
        .hero-btn-primary {
          font-family: 'Rajdhani', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #FFFFFF;
          background: #C8102E;
          border: none;
          padding: 13px 30px;
          cursor: pointer;
          transition: background 0.2s;
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
        }
        .hero-btn-primary:hover { background: #a50d25; }

        .hero-btn-secondary {
          font-family: 'Rajdhani', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.68);
          background: transparent;
          border: 1px solid rgba(255,255,255,0.22);
          padding: 13px 30px;
          cursor: pointer;
          transition: all 0.2s;
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
        }
        .hero-btn-secondary:hover {
          border-color: #C8102E;
          color: #C8102E;
        }

        /* ── Trusted / Ticker ── */
        .trusted-label {
          font-family: 'Rajdhani', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.22);
          margin-bottom: 14px;
        }
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          gap: 40px;
          animation: ticker-scroll 35s linear infinite;
        }
        .ticker-item {
          font-family: 'Rajdhani', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.20);
          white-space: nowrap;
        }
        .ticker-item::before {
          content: '/ ';
          color: rgba(200,16,46,0.38);
          margin-right: 2px;
        }

        /* ── Stat cards — frosted glass over footage ── */
        .stat-card {
          background: rgba(6,6,8,0.72);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 0.5px solid rgba(200,16,46,0.14);
          border-left: 2px solid #C8102E;
          padding: 18px 16px;
          position: relative;
          overflow: hidden;
        }
        .stat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, #C8102E, transparent);
          opacity: 0.32;
        }
        .stat-number {
          font-family: 'Orbitron', monospace;
          font-size: clamp(22px, 4vw, 30px);
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 4px;
          letter-spacing: -0.02em;
        }
        .stat-label {
          font-family: 'Rajdhani', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.36);
        }

        /* ── Testimonial card ── */
        .testimonial-card {
          background: rgba(6,6,8,0.72);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 0.5px solid rgba(255,255,255,0.055);
          border-left: 2px solid rgba(200,16,46,0.38);
          padding: 22px 20px;
        }
        .testimonial-quote {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 300;
          line-height: 1.72;
          color: rgba(255,255,255,0.70);
          margin-bottom: 14px;
        }
        .testimonial-attr {
          font-family: 'Rajdhani', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.26);
        }

        /* ── Bottom accent bar ── */
        .hero-bottom-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #C8102E 30%, rgba(200,16,46,0.45) 70%, transparent 100%);
          z-index: 10;
        }
      `}</style>

      <section className="hero-root">

        {/* ── Video — city skyline / financial district at night ── */}
        {/*
          Primary:  Pexels #3827392 — slow aerial drift over lit city towers (free licence)
          Fallback: Pexels #2053855 — financial district skyline timelapse
          Poster:   Unsplash dark city skyline — loads instantly before video
        */}
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2560&auto=format&fit=crop"
        >
          <source
            src="https://videos.pexels.com/video-files/3827392/3827392-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
          <source
            src="https://videos.pexels.com/video-files/2053855/2053855-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* ── Atmosphere layers ── */}
        <div className="hero-overlay-base" />
        <div className="hero-beam" />
        <div className="hero-scanlines" />
        <div className="hero-grid" />
        <div className="hero-vignette" />
        <div className="hero-bottom-fade" />

        {/* ── Content ── */}
        <div className="relative px-8 sm:px-16 xl:px-20" style={{ zIndex: 6 }}>
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 pt-28 sm:pt-32 pb-16 sm:pb-20">

              {/* LEFT */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="hero-eyebrow">
                  <span className="hero-eyebrow-line" />
                  STRATEGIC ADVISORY & PRIVATE EQUITY
                </div>

                <h1 className="hero-h1">
                  Strategic<br />
                  Partners<br />
                  <em>Globally</em>
                </h1>

                <p className="hero-sub">
                  We elevate organisations through disciplined strategy, meaningful stewardship, and long-term value creation.
                </p>

                <div className="flex flex-wrap items-center gap-3 mb-10">
                  <button className="hero-btn-primary">Services</button>
                  <button className="hero-btn-secondary">Contact</button>
                </div>

                <div className="trusted-label">Trusted by leading organizations</div>

                <div style={{ overflow: 'hidden', width: '100%', maxWidth: '560px' }}>
                  <div className="ticker-track">
                    {companies.map((co, i) => (
                      <span key={i} className="ticker-item">{co}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="lg:col-span-5 flex flex-col justify-center" style={{ gap: '12px' }}>
                <div className="grid grid-cols-2 gap-3 mb-1">
                  {[
                    { n: '$2.5B+', l: 'Assets Managed' },
                    { n: '50+',   l: 'Global Clients' },
                    { n: '15+',   l: 'Years Experience' },
                    { n: '12',    l: 'Industries Served' },
                  ].map((s, i) => (
                    <div key={i} className="stat-card">
                      <div className="stat-number">{s.n}</div>
                      <div className="stat-label">{s.l}</div>
                    </div>
                  ))}
                </div>

                <div className="testimonial-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                    <div style={{ width: '16px', height: '2px', background: '#C8102E' }} />
                    <span style={{
                      fontFamily: 'Rajdhani, sans-serif',
                      fontSize: '9px',
                      fontWeight: 600,
                      letterSpacing: '0.2em',
                      color: '#C8102E',
                      textTransform: 'uppercase' as const,
                    }}>
                      Client Feedback
                    </span>
                  </div>
                  <p className="testimonial-quote">
                    Effective, experienced and agile. Lorek reduced our costs and significantly improved performance of our portfolio.
                  </p>
                  <div className="testimonial-attr">CEO, Fortune 500 Company</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="hero-bottom-bar" />
      </section>
    </>
  );
}