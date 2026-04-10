export function Contact({ openContactModal }: { openContactModal: (e?: React.MouseEvent) => void }) {
  const handleContactClick = (e: React.MouseEvent) => {
    if (e) e.preventDefault();
    openContactModal(e);
  };
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fahkwang:wght@400;500;600;700&family=Ranade:wght@300;400;500;600&display=swap');

        .contact-root {
          position: relative;
          background: #050505;
          padding: 120px 80px;
          border-top: 0.5px solid rgba(200,16,46,0.14);
          overflow: hidden;
        }

        /* bg image layer */
        .contact-bg-img {
          position: absolute;
          inset: 0;
          background: url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat;
          opacity: 0.12;
          pointer-events: none;
        }

        /* dark base overlay */
        .contact-overlay {
          position: absolute; inset: 0;
          background: rgba(4,4,4,0.78);
          pointer-events: none;
        }

        /* diagonal beam */
        .contact-beam {
          position: absolute; inset: 0;
          background: radial-gradient(
            ellipse 60% 40% at 50% 55%,
            rgba(180,10,30,0.18) 0%,
            rgba(140,0,20,0.06) 50%,
            transparent 78%
          );
          pointer-events: none;
        }

        /* grid texture */
        .contact-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(200,16,46,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,16,46,0.04) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }

        /* scanlines */
        .contact-scanlines {
          position: absolute; inset: 0;
          background-image: repeating-linear-gradient(
            -55deg, transparent, transparent 3px,
            rgba(200,16,46,0.015) 3px, rgba(200,16,46,0.015) 4px
          );
          pointer-events: none;
        }

        /* vignette */
        .contact-vignette {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 110% 100% at 50% 50%, transparent 30%, rgba(0,0,0,0.7) 100%);
          pointer-events: none;
        }

        .contact-inner {
          position: relative;
          max-width: 680px;
          margin: 0 auto;
          text-align: center;
          z-index: 2;
        }

        /* eyebrow */
        .contact-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Fahkwang', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C8102E;
          margin-bottom: 24px;
          justify-content: center;
        }
        .contact-eyebrow-line { width: 24px; height: 1px; background: #C8102E; }

        .contact-h2 {
          font-family: 'Fahkwang', sans-serif;
          font-weight: 600;
          font-size: clamp(26px, 3.6vw, 44px);
          line-height: 1.08;
          color: #FFFFFF;
          margin-bottom: 20px;
          letter-spacing: -0.01em;
        }
        .contact-h2 em {
          font-style: normal;
          color: #C8102E;
          font-family: 'Fahkwang', sans-serif;
          font-weight: 700;
        }

        .contact-sub {
          font-family: 'Ranade', sans-serif;
          font-size: clamp(14px, 1.7vw, 17px);
          font-weight: 400;
          line-height: 1.7;
          color: rgba(255,255,255,0.48);
          margin-bottom: 44px;
        }

        /* CTA row */
        .contact-cta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .contact-btn-primary {
          font-family: 'Fahkwang', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #FFFFFF;
          background: #C8102E;
          border: none;
          padding: 14px 40px;
          cursor: pointer;
          transition: background 0.2s;
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
        }
        .contact-btn-primary:hover { background: #a50d25; }

        .contact-btn-secondary {
          font-family: 'Fahkwang', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 14px 32px;
          cursor: pointer;
          transition: all 0.2s;
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
          text-decoration: none;
          display: inline-block;
        }
        .contact-btn-secondary:hover {
          border-color: #C8102E;
          color: #C8102E;
        }

        /* detail chips below CTAs */
        .contact-details {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-top: 36px;
          flex-wrap: wrap;
        }
        .contact-detail-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Ranade', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }
        .contact-detail-dot {
          width: 4px; height: 4px;
          background: #C8102E;
          flex-shrink: 0;
        }
        .contact-detail-sep {
          width: 1px; height: 16px;
          background: rgba(255,255,255,0.1);
        }

        /* bottom bar */
        .contact-bottom-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #C8102E 30%, rgba(200,16,46,0.4) 70%, transparent);
        }

        @media (max-width: 1024px) { .contact-root { padding: 80px 24px; } }
        @media (max-width: 640px)  { .contact-root { padding: 64px 16px; } }
      `}</style>

      <section id="contact" className="contact-root">
        <div className="contact-bg-img" />
        <div className="contact-overlay" />
        <div className="contact-beam" />
        <div className="contact-grid" />
        <div className="contact-scanlines" />
        <div className="contact-vignette" />

        <div className="contact-inner">
          <div className="contact-eyebrow">
            <span className="contact-eyebrow-line" />
            Get In Touch
            <span className="contact-eyebrow-line" />
          </div>

          <h2 className="contact-h2">
            Let's talk about<br />
            your <em>business.</em>
          </h2>

          <p className="contact-sub">
            Our experienced team will advise you on the potential way forward — from capital strategy to full operational transformation.
          </p>

          <div className="contact-cta-row">
            <button className="contact-btn-primary" onClick={handleContactClick}>Contact Us</button>
            <a href="mailto:info@lorek.com" className="contact-btn-secondary">info@lorek.com</a>
          </div>
  {/* ContactModal is now rendered at App level */}

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-detail-dot" />
              London, UK
            </div>
            <div className="contact-detail-sep" />
            <div className="contact-detail-item">
              <div className="contact-detail-dot" />
              Mon–Fri 8am–6pm
            </div>
            <div className="contact-detail-sep" />
            <div className="contact-detail-item">
              <div className="contact-detail-dot" />
              +44 20 7946 0999
            </div>
          </div>
        </div>

        <div className="contact-bottom-bar" />
      </section>
    </>
  );
}