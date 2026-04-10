export function Values() {
  const values = [
    'Maintain the highest standards in client service.',
    'Serve with discretion and sensitivity.',
    "Manage clients' and the firm's resources transparently and effectively.",
    "Measurably improve our clients' performance.",
    'Use our global network to deliver solutions and source partnerships for our clients.',
    "Build clients' capabilities to sustain continuous improvement.",
    'Create an unrivalled environment for exceptional people.',
    'Listen to different perspectives with curiosity and respect.',
    'Ensure financial stability and sustainability.',
    'Develop one another through mentoring and continually encourage self-education.',
  ];

  const marqueeValues = [...values, ...values];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fahkwang:wght@500;600;700&family=Ranade:wght@400;500;600&display=swap');

        .val-root {
          background: #080808;
          padding: 48px 0;
          border-top: 0.5px solid rgba(200,16,46,0.12);
          position: relative;
          overflow: hidden;
        }
        /* scan-line texture */
        .val-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -55deg, transparent, transparent 4px,
            rgba(200,16,46,0.012) 4px, rgba(200,16,46,0.012) 5px
          );
          pointer-events: none;
        }

        /* header row */
        .val-header {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 0 80px;
          margin-bottom: 28px;
        }
        .val-header-label {
          font-family: 'Fahkwang', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C8102E;
          white-space: nowrap;
        }
        .val-header-line {
          flex: 1;
          height: 0.5px;
          background: linear-gradient(90deg, rgba(200,16,46,0.35), transparent);
        }

        /* fade edges */
        .val-fade-left {
          pointer-events: none;
          position: absolute; left: 0; top: 0; bottom: 0;
          width: 100px; z-index: 2;
          background: linear-gradient(to right, #080808, transparent);
        }
        .val-fade-right {
          pointer-events: none;
          position: absolute; right: 0; top: 0; bottom: 0;
          width: 100px; z-index: 2;
          background: linear-gradient(to left, #080808, transparent);
        }

        @keyframes val-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .val-track {
          display: flex;
          gap: 10px;
          width: max-content;
          align-items: center;
          animation: val-scroll 70s linear infinite;
        }
        .val-track:hover { animation-play-state: paused; }

        /* pill chip */
        .val-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #0e0e0e;
          border: 0.5px solid rgba(200,16,46,0.14);
          border-left: 2px solid rgba(200,16,46,0.5);
          padding: 8px 16px 8px 12px;
          white-space: nowrap;
          position: relative;
          /* chamfered right corner */
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
          transition: border-left-color 0.2s, background 0.2s;
          cursor: default;
        }
        .val-chip:hover {
          background: #131313;
          border-left-color: #C8102E;
        }
        .val-chip-icon {
          flex-shrink: 0;
          width: 14px; height: 14px;
          border: 1.5px solid #C8102E;
          border-radius: 0;
          display: flex; align-items: center; justify-content: center;
          clip-path: polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%);
        }
        .val-chip-text {
          font-family: 'Ranade', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.06em;
          color: rgba(255,255,255,0.6);
        }
        .val-chip:hover .val-chip-text { color: rgba(255,255,255,0.85); }

        /* bottom accent */
        .val-bottom-bar {
          margin-top: 28px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(200,16,46,0.25) 30%, rgba(200,16,46,0.1) 70%, transparent);
        }

        @media (max-width: 1024px) {
          .val-header { padding: 0 24px; }
        }
        @media (max-width: 640px) {
          .val-header { padding: 0 16px; }
        }
      `}</style>

      <section id="values" className="val-root">
        <div className="val-header">
          <span className="val-header-label">Our Values</span>
          <div className="val-header-line" />
        </div>

        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="val-fade-left" />
          <div className="val-fade-right" />
          <div className="val-track">
            {marqueeValues.map((value, i) => (
              <div key={i} className="val-chip">
                <div className="val-chip-icon">
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5.5L4 7.5L8 3" stroke="#C8102E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="val-chip-text">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-8 sm:px-16 xl:px-20">
          <div className="val-bottom-bar" />
        </div>
      </section>
    </>
  );
}