import { useState } from 'react';
import { ContactModal } from './ContactModal';

export function About() {
  const [contactOpen, setContactOpen] = useState(false);
  const images = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1080",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1080",
  ];

  const cards = [
    {
      tag: "AI Operations",
      body: "Turning intelligent workflows into measurable outcomes through data, automation, and leadership alignment.",
      image: images[1],
    },
    {
      tag: "Tech Strategy",
      body: "Aligning digital bets with long-term enterprise value, operational resilience, and competitive advantage.",
      image: images[2],
    },
  ];

  const handleContactOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setContactOpen(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fahkwang:wght@400;500;600;700&family=Ranade:wght@300;400;500;600&display=swap');

        .about-root {
          background: #080808;
          padding: 96px 80px;
          border-top: 0.5px solid rgba(200,16,46,0.12);
          position: relative;
          overflow: hidden;
        }
        /* faint corner grid */
        .about-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(200,16,46,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,16,46,0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }

        .about-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Ranade', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #C8102E;
          margin-bottom: 14px;
        }
        .about-eyebrow-line { width: 24px; height: 1px; background: #C8102E; flex-shrink: 0; }

        .about-h2 {
          font-family: 'Fahkwang', sans-serif;
          font-weight: 500;
          font-size: clamp(24px, 3.5vw, 42px);
          line-height: 1.1;
          color: #FFFFFF;
          max-width: 700px;
          margin-bottom: 16px;
          letter-spacing: 0;
        }
        .about-h2 em { font-style: normal; color: #C8102E; font-weight: 700; }

        .about-sub {
          font-family: 'Ranade', sans-serif;
          font-size: clamp(14px, 1.6vw, 16px);
          font-weight: 400;
          line-height: 1.7;
          color: rgba(255,255,255,0.48);
          max-width: 640px;
          margin-bottom: 48px;
        }

        /* ── Main image card ── */
        .about-img-main {
          position: relative;
          border-radius: 0;
          overflow: hidden;
          border: 0.5px solid rgba(200,16,46,0.12);
          min-height: 360px;
          flex: 1;
        }
        .about-img-main img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          display: block;
        }
        .about-img-main:hover img { transform: scale(1.04); }
        .about-img-main-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.18) 55%, transparent 100%);
        }
        /* red left-edge accent on hover */
        .about-img-main::after {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: #C8102E;
        }
        .about-img-main-content {
          position: absolute;
          bottom: 22px; left: 22px; right: 22px;
        }
        .about-img-tag {
          font-family: 'Ranade', sans-serif;
          font-size: 9px; font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C8102E;
          margin-bottom: 8px;
          display: flex; align-items: center; gap: 8px;
        }
        .about-img-tag::before { content: ''; width: 14px; height: 1px; background: #C8102E; }
        .about-img-body {
          font-family: 'Ranade', sans-serif;
          font-size: 14px; font-weight: 400;
          line-height: 1.6; color: rgba(255,255,255,0.9);
          max-width: 460px;
        }
        .about-img-cta {
          margin-top: 12px;
          font-family: 'Ranade', sans-serif;
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.24em; text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .about-img-main:hover .about-img-cta { opacity: 1; }

        /* ── Purpose / Mission cards ── */
        .about-text-card {
          background: #0e0e0e;
          border: 0.5px solid rgba(200,16,46,0.1);
          border-left: 2px solid #C8102E;
          padding: 20px 18px;
          position: relative;
          overflow: hidden;
        }
        .about-text-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, #C8102E, transparent);
          opacity: 0.3;
        }
        .about-text-card-tag {
          font-family: 'Ranade', sans-serif;
          font-size: 9px; font-weight: 600;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: #C8102E; margin-bottom: 10px;
        }
        .about-text-card-body {
          font-family: 'Ranade', sans-serif;
          font-size: 13px; font-weight: 400;
          line-height: 1.65; color: rgba(255,255,255,0.65);
        }

        /* ── Small image cards ── */
        .about-img-sm {
          position: relative;
          overflow: hidden;
          border: 0.5px solid rgba(200,16,46,0.1);
          min-height: 190px;
        }
        .about-img-sm img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          display: block;
        }
        .about-img-sm:hover img { transform: scale(1.06); }
        .about-img-sm-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 65%);
        }
        .about-img-sm::after {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px; background: #C8102E;
        }
        .about-img-sm-content {
          position: absolute; bottom: 14px; left: 14px; right: 14px;
        }
        .about-img-sm-tag {
          font-family: 'Ranade', sans-serif;
          font-size: 9px; font-weight: 600;
          letter-spacing: 0.24em; text-transform: uppercase;
          color: #C8102E; margin-bottom: 5px;
        }
        .about-img-sm-body {
          font-family: 'Ranade', sans-serif;
          font-size: 12px; font-weight: 400;
          line-height: 1.5; color: rgba(255,255,255,0.85);
        }
        .about-img-sm-cta {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.45);
          display: flex; align-items: flex-end;
          padding: 14px;
          opacity: 0; transition: opacity 0.25s;
          font-family: 'Ranade', sans-serif;
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(255,255,255,0.7);
        }
        .about-img-sm:hover .about-img-sm-cta { opacity: 1; }

        /* ── Featured capability card ── */
        .about-feature-card {
          background: #0c0c0c;
          border: 0.5px solid rgba(200,16,46,0.12);
          border-left: 2px solid #C8102E;
          padding: 26px 22px;
          position: relative;
          overflow: hidden;
        }
        .about-feature-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, #C8102E 0%, rgba(200,16,46,0.2) 60%, transparent 100%);
        }
        .about-feature-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Ranade', sans-serif;
          font-size: 9px; font-weight: 600;
          letter-spacing: 0.24em; text-transform: uppercase;
          color: #C8102E;
          border: 0.5px solid rgba(200,16,46,0.35);
          padding: 4px 10px;
          margin-bottom: 14px;
        }
        .about-feature-pill::before { content: ''; width: 4px; height: 4px; background: #C8102E; }

        .about-feature-title {
          font-family: 'Fahkwang', sans-serif;
          font-size: clamp(18px, 2.2vw, 24px);
          font-weight: 600;
          color: #FFFFFF;
          line-height: 1.15;
          margin-bottom: 12px;
          letter-spacing: 0;
        }
        .about-feature-desc {
          font-family: 'Ranade', sans-serif;
          font-size: 13px; font-weight: 400;
          line-height: 1.65; color: rgba(255,255,255,0.6);
          margin-bottom: 16px;
          max-width: 500px;
        }
        .about-bullet-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px 18px;
          margin-bottom: 18px;
          max-width: 460px;
        }
        .about-bullet {
          display: flex; align-items: center; gap: 7px;
          font-family: 'Ranade', sans-serif;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.04em;
          color: rgba(255,255,255,0.65);
        }
        .about-bullet::before { content: ''; width: 4px; height: 4px; background: #C8102E; flex-shrink: 0; }

        .about-mini-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-bottom: 20px;
        }
        .about-mini-stat {
          background: rgba(255,255,255,0.025);
          border: 0.5px solid rgba(255,255,255,0.08);
          padding: 12px 10px;
          text-align: center;
          display: flex; flex-direction: column; align-items: center; gap: 3px;
        }
        .about-mini-stat-n {
          font-family: 'Fahkwang', sans-serif;
          font-size: 17px; font-weight: 600;
          color: #C8102E; letter-spacing: 0;
        }
        .about-mini-stat-label {
          font-family: 'Ranade', sans-serif;
          font-size: 9px; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #FFFFFF;
        }
        .about-mini-stat-desc {
          font-family: 'Ranade', sans-serif;
          font-size: 10px; font-weight: 400;
          color: rgba(255,255,255,0.38); line-height: 1.4;
        }

        .about-link {
          font-family: 'Ranade', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.24em; text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          display: inline-flex; align-items: center; gap: 8px;
          transition: color 0.2s;
          cursor: pointer;
          background: none; border: none; padding: 0;
        }
        .about-link::after { content: '→'; color: #C8102E; }
        .about-link:hover { color: #FFFFFF; }

        @media (max-width: 1024px) {
          .about-root { padding: 64px 24px; }
          .about-mini-stats { grid-template-columns: repeat(3,1fr); }
        }
        @media (max-width: 640px) {
          .about-root { padding: 48px 16px; }
          .about-mini-stats { grid-template-columns: 1fr; }
          .about-bullet-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="about" className="about-root">
        <div className="max-w-[1440px] mx-auto relative">

          {/* Header */}
          <div style={{ marginBottom: '48px' }}>
            <div className="about-eyebrow">
              <span className="about-eyebrow-line" />
              About Us
            </div>
            <h2 className="about-h2">
              Strategic advisory &<br />
              <em>private equity.</em>
            </h2>
            <p className="about-sub">
              We combine strategic advice with selective private equity participation to help organisations create sustainable, long-term value.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">

            {/* LEFT col */}
            <div className="lg:col-span-7 flex flex-col gap-4">

              {/* Main image */}
              <div className="about-img-main" style={{ minHeight: '340px' }}>
                <img src={images[0]} alt="Business partnership" />
                <div className="about-img-main-overlay" />
                <div className="about-img-main-content">
                  <div className="about-img-tag">Our Approach</div>
                  <p className="about-img-body">
                    Building lasting partnerships through disciplined strategy and meaningful stewardship, with an unwavering focus on measurable business impact.
                  </p>
                  {/* <div className="about-img-cta">View details →</div> */}
                </div>
              </div>

              {/* Purpose + Mission */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="about-text-card">
                  <div className="about-text-card-tag">Purpose</div>
                  <p className="about-text-card-body">
                    To tangibly improve and empower the environments we serve through pragmatic strategy, execution discipline, and long-term partnership.
                  </p>
                </div>
                <div className="about-text-card">
                  <div className="about-text-card-tag">Mission</div>
                  <p className="about-text-card-body">
                    To build a company that attracts and retains exceptional talent, enabling sustainable growth for clients and communities.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT col */}
            <div className="lg:col-span-5 flex flex-col gap-4">

              {/* Two small image cards */}
              <div className="grid grid-cols-2 gap-4">
                {cards.map((c, i) => (
                  <div key={i} className="about-img-sm">
                    <img src={c.image} alt={c.tag} />
                    <div className="about-img-sm-overlay" />
                    <div className="about-img-sm-content">
                      <div className="about-img-sm-tag">{c.tag}</div>
                      <p className="about-img-sm-body">{c.body}</p>
                    </div>
                    {/* <div className="about-img-sm-cta">View details →</div> */}
                  </div>
                ))}
              </div>

              {/* Featured capability */}
              <div className="about-feature-card" style={{ flex: 1 }}>
                <div className="about-feature-pill">Featured Capability</div>
                <div className="about-feature-title">Strategic Capital Advisory</div>
                <p className="about-feature-desc">
                  Helping leaders make confident capital decisions — from funding strategy to execution.
                </p>

                <div className="about-bullet-grid">
                  {['Growth funding strategy', 'Deal structuring', 'Portfolio prioritization', 'Post-deal value creation'].map((b, i) => (
                    <div key={i} className="about-bullet">{b}</div>
                  ))}
                </div>

                <p className="about-feature-desc" style={{ marginBottom: '18px', fontSize: '12px' }}>
                  We work side-by-side with founders and executives to turn strategy into clear, actionable plans with measurable impact.
                </p>

                <div className="about-mini-stats">
                  {[
                    { n: '12+', label: 'Advisory Mandates', desc: 'Across growth, transformation & capital strategy' },
                    { n: '$100M+', label: 'Capital Deployed', desc: 'For clients in diverse sectors' },
                    { n: '3–5×', label: 'Decision Velocity', desc: 'Faster, data-driven outcomes' },
                  ].map((s, i) => (
                    <div key={i} className="about-mini-stat">
                      <div className="about-mini-stat-n">{s.n}</div>
                      <div className="about-mini-stat-label">{s.label}</div>
                      <div className="about-mini-stat-desc">{s.desc}</div>
                    </div>
                  ))}
                </div>

                <button className="about-link" onClick={handleContactOpen}>Explore advisory model</button>
                <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}