export function Testimonial() {
  const testimonials = [
    {
      name: 'Sarah Williams',
      title: 'Managing Director, Global Portfolio Company',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'Effective, experienced and agile. Lorek reduced our costs and significantly improved performance of our portfolio.',
    },
    {
      name: 'James Patel',
      title: 'CEO, Tech Innovators',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: "Lorek's strategic insight and hands-on approach helped us scale internationally and secure key partnerships.",
    },
    {
      name: 'Elena Rossi',
      title: 'CFO, European Real Estate Group',
      photo: 'https://randomuser.me/api/portraits/women/65.jpg',
      text: 'Their team is responsive, knowledgeable, and truly invested in our success. Highly recommended.',
    },
    {
      name: 'David Chen',
      title: 'Partner, Private Equity Firm',
      photo: 'https://randomuser.me/api/portraits/men/76.jpg',
      text: 'Lorek delivered measurable results and built lasting value for our portfolio companies.',
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@600;700&family=DM+Sans:wght@200;300;400;500&display=swap');

        .tst-root {
          background: #0d0d0d;
          padding: 96px 80px;
          border-top: 0.5px solid rgba(200,16,46,0.12);
          position: relative;
          overflow: hidden;
        }
        .tst-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(200,16,46,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,16,46,0.025) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }
        .tst-root::after {
          content: '';
          position: absolute;
          top: -100px; right: -120px;
          width: 500px; height: 400px;
          background: radial-gradient(ellipse, rgba(200,16,46,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Header ── */
        .tst-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 48px;
          gap: 24px;
          flex-wrap: wrap;
        }
        .tst-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Rajdhani', sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.3em; text-transform: uppercase;
          color: #C8102E;
          margin-bottom: 14px;
        }
        .tst-eyebrow-line { width: 24px; height: 1px; background: #C8102E; }

        .tst-h2 {
          font-family: 'Orbitron', monospace;
          font-weight: 700;
          font-size: clamp(22px, 3.2vw, 38px);
          line-height: 1.08;
          color: #FFFFFF;
          letter-spacing: -0.01em;
        }
        .tst-h2 em { font-style: normal; color: #C8102E; }

        /* ── Desktop/tablet: normal grid ── */
        .tst-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        /* ── Card ── */
        .tst-card {
          background: #0a0a0a;
          border: 0.5px solid rgba(200,16,46,0.1);
          border-left: 2px solid #C8102E;
          padding: 28px 22px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s, background 0.2s;
          clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);
        }
        .tst-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, #C8102E, transparent);
          opacity: 0.3;
        }
        .tst-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -55deg, transparent, transparent 6px,
            rgba(200,16,46,0.012) 6px, rgba(200,16,46,0.012) 7px
          );
          pointer-events: none;
        }
        .tst-card:hover {
          background: #0e0e0e;
          border-left-color: #e01535;
        }

        /* Avatar + name row */
        .tst-avatar-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }
        .tst-avatar-wrap {
          position: relative;
          flex-shrink: 0;
        }
        .tst-avatar {
          width: 48px; height: 48px;
          border-radius: 0;
          object-fit: cover;
          display: block;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
          filter: grayscale(0.3);
        }
        .tst-avatar-wrap::after {
          content: '';
          position: absolute;
          bottom: -3px; left: -3px;
          width: 14px; height: 2px;
          background: #C8102E;
        }
        .tst-name {
          font-family: 'Rajdhani', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #FFFFFF;
          line-height: 1.2;
        }
        .tst-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px; font-weight: 300;
          color: rgba(255,255,255,0.35);
          line-height: 1.4;
          margin-top: 2px;
        }

        .tst-quote-mark {
          font-family: 'Orbitron', monospace;
          font-size: 32px; font-weight: 700;
          color: rgba(200,16,46,0.25);
          line-height: 1;
          margin-bottom: 8px;
          letter-spacing: -0.05em;
        }
        .tst-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 300;
          line-height: 1.75;
          color: rgba(255,255,255,0.65);
          flex: 1;
        }

        /* ── Scroll hint dots (mobile only) ── */
        .tst-scroll-hint {
          display: none;
          align-items: center;
          gap: 6px;
          margin-top: 20px;
        }
        .tst-dot {
          width: 18px; height: 2px;
          background: #C8102E;
          opacity: 0.35;
          transition: opacity 0.2s, width 0.2s;
        }
        .tst-dot:first-child { opacity: 1; width: 28px; }

        /* ── Bottom divider ── */
        .tst-bottom-bar {
          margin-top: 48px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(200,16,46,0.3) 30%, rgba(200,16,46,0.15) 70%, transparent);
        }

        /* ── Tablet: 2-col grid ── */
        @media (max-width: 1200px) {
          .tst-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 1024px) {
          .tst-root { padding: 64px 40px; }
          .tst-header { margin-bottom: 36px; }
        }

        /* ── Mobile: kill grid, go horizontal scroll ── */
        @media (max-width: 640px) {
          .tst-root {
            padding: 48px 0;
            /* allow the scroll track to bleed edge-to-edge */
          }

          /* Re-scope header and bottom bar inside padding */
          .tst-header {
            padding: 0 20px;
            margin-bottom: 28px;
          }
          .tst-bottom-bar { margin: 28px 20px 0; }

          /* Horizontal scroll track */
          .tst-grid {
            display: flex;
            flex-direction: row;
            gap: 12px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            padding: 4px 20px 16px;
            /* hide scrollbar but keep scroll */
            scrollbar-width: none;
          }
          .tst-grid::-webkit-scrollbar { display: none; }

          /* Cards: fixed width so exactly ~1.1 peek on right */
          .tst-card {
            flex: 0 0 82vw;
            max-width: 320px;
            scroll-snap-align: start;
          }

          /* Show dots */
          .tst-scroll-hint {
            display: flex;
            padding: 0 20px;
          }

          .tst-h2 { font-size: clamp(18px, 5.5vw, 24px); }
        }

        @media (max-width: 380px) {
          .tst-card { flex: 0 0 88vw; }
        }
      `}</style>

      <section className="tst-root">
        <div className="max-w-[1440px] mx-auto relative">

          {/* Header */}
          <div className="tst-header">
            <div>
              <div className="tst-eyebrow">
                <span className="tst-eyebrow-line" />
                Testimonials
              </div>
              <h2 className="tst-h2">What Clients <em>Say</em></h2>
            </div>
          </div>

          {/* Cards */}
          <div className="tst-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="tst-card">
                <div className="tst-avatar-row">
                  <div className="tst-avatar-wrap">
                    <img src={t.photo} alt={t.name} className="tst-avatar" />
                  </div>
                  <div>
                    <div className="tst-name">{t.name}</div>
                    <div className="tst-title">{t.title}</div>
                  </div>
                </div>
                <div className="tst-quote-mark">"</div>
                <p className="tst-text">{t.text}</p>
              </div>
            ))}
          </div>

          {/* Scroll hint dots — visible on mobile only */}
          <div className="tst-scroll-hint">
            {testimonials.map((_, i) => (
              <div key={i} className="tst-dot" />
            ))}
          </div>

          <div className="tst-bottom-bar" />

        </div>
      </section>
    </>
  );
}