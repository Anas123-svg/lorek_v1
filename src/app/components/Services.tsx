import { useState } from "react";
import { ContactModal } from "./ContactModal";

export function Services() {
  const [contactOpen, setContactOpen] = useState(false);

  const services = [

    {
      number: "01",
      name: "Strategy and Organisation",
      outcome: "Long-Term Competitiveness",
      description:
        "We help enterprises stay ahead of the curve, focusing on operating model review, digital optimisation, AI utilisation, portfolio rebalancing, sustainability and access to future talent.",
    },
    {
      number: "02",
      name: "Operational Transformation",
      outcome: "EBITDA Margin Improvement",
      description:
        "We launch effective transformations, resulting in EBITDA margin improvement, minimized cost and time overruns, and increased win rates.",
    },
    {
      number: "03",
      name: "Commercialisation and Sales",
      outcome: "Profitable Growth",
      description:
        "We lead multi-year journeys with tangible impact, including improved win-rates, increased delivered margin, targeted portfolios, higher resource efficiency, and more profitable and sustainable growth.",
    },

    {
      number: "04",
      name: "Investment Sourcing",
      outcome: "Smart Capital Access",
      description:
        "We prepare companies for the investment process, source the funding and participate with our private equity partners in joint ventures while keeping operations streamlined.",
    },

  ];

  const [, setHovered] = useState<number | null>(null);
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setContactOpen(true);
  };
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fahkwang:wght@400;500;600;700&family=Ranade:wght@200;300;400;500&display=swap');

        .svc-root {
          background: #0d0d0d;
          padding: 96px 80px;
          border-top: 0.5px solid rgba(200,16,46,0.12);
          position: relative;
          overflow: hidden;
        }
        .svc-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(200,16,46,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,16,46,0.025) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }
        .svc-root::after {
          content: '';
          position: absolute;
          top: -120px; right: -180px;
          width: 520px; height: 520px;
          background: radial-gradient(ellipse, rgba(200,16,46,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .svc-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Fahkwang', sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.3em; text-transform: uppercase;
          color: #C8102E;
          margin-bottom: 14px;
        }
        .svc-eyebrow-line { width: 24px; height: 1px; background: #C8102E; }

        .svc-h2 {
          font-family: 'Fahkwang', sans-serif;
          font-weight: 500;
          font-size: clamp(22px, 3.2vw, 38px);
          line-height: 1.08;
          color: #FFFFFF;
          margin-bottom: 48px;
          letter-spacing: -0.01em;
        }
        .svc-h2 em { font-style: normal; color: #C8102E; }

        /* ── Service rows — desktop 4-col grid ── */
        .svc-row {
          display: grid;
          grid-template-columns: 56px 1fr 1fr 40px;
          grid-template-rows: auto;
          align-items: start;
          gap: 0 28px;
          padding: 32px 0;
          cursor: pointer;
          position: relative;
          transition: background 0.2s;
        }
        .svc-row::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 0.5px;
          background: rgba(255,255,255,0.06);
        }
        .svc-row:last-child::after { display: none; }
        .svc-row::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: #C8102E;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.25s ease;
        }
        .svc-row:hover::before { transform: scaleY(1); }

        .svc-num {
          grid-column: 1;
          grid-row: 1;
          font-family: 'Fahkwang', sans-serif;
          font-size: 11px; font-weight: 700;
          color: rgba(200,16,46,0.35);
          padding-top: 4px;
          letter-spacing: 0.05em;
          transition: color 0.2s;
        }
        .svc-row:hover .svc-num { color: #C8102E; }

        .svc-name {
          grid-column: 2;
          grid-row: 1;
          font-family: 'Fahkwang', sans-serif;
          font-size: clamp(15px, 1.8vw, 19px);
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          line-height: 1.15;
          letter-spacing: -0.01em;
          transition: color 0.2s;
        }
        .svc-row:hover .svc-name { color: #FFFFFF; }

        .svc-right {
          grid-column: 3;
          grid-row: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .svc-outcome {
          font-family: 'Fahkwang', sans-serif;
          font-size: 9px; font-weight: 700;
          letter-spacing: 0.26em; text-transform: uppercase;
          color: #C8102E;
          display: flex; align-items: center; gap: 8px;
        }
        .svc-outcome::before { content: ''; width: 14px; height: 1px; background: #C8102E; }

        .svc-desc {
          font-family: 'Ranade', sans-serif;
          font-size: 14px; font-weight: 300;
          line-height: 1.72;
          color: rgba(255,255,255,0.45);
          transition: color 0.2s;
        }
        .svc-row:hover .svc-desc { color: rgba(255,255,255,0.65); }

        .svc-arrow {
          grid-column: 4;
          grid-row: 1;
          font-size: 18px;
          color: rgba(255,255,255,0.15);
          padding-top: 3px;
          transition: color 0.2s, transform 0.2s;
        }
        .svc-row:hover .svc-arrow { color: #C8102E; transform: translateX(4px); }

        /* ── Bottom CTA band ── */
        .svc-cta-band {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-top: 48px;
          padding: 22px 24px;
          background: #0a0a0a;
          border: 0.5px solid rgba(200,16,46,0.14);
          border-left: 2px solid #C8102E;
          position: relative;
          overflow: hidden;
        }
        .svc-cta-band::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, #C8102E, transparent);
          opacity: 0.3;
        }
        .svc-cta-label {
          font-family: 'Ranade', sans-serif;
          font-size: 14px; font-weight: 300;
          color: rgba(255,255,255,0.55);
        }
        .svc-cta-btn {
          flex-shrink: 0;
          font-family: 'Fahkwang', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: #FFFFFF;
          background: #C8102E;
          border: none;
          padding: 11px 26px;
          cursor: pointer;
          transition: background 0.2s;
          clip-path: polygon(9px 0%,100% 0%,calc(100% - 9px) 100%,0% 100%);
        }
        .svc-cta-btn:hover { background: #a50d25; }

        /* ── Tablet: collapse to 2-col, description below name ── */
        @media (max-width: 1024px) {
          .svc-root { padding: 64px 40px; }

          .svc-row {
            grid-template-columns: 40px 1fr;
            grid-template-rows: auto auto;
            row-gap: 12px;
            column-gap: 16px;
            padding: 24px 0;
          }

          .svc-num  { grid-column: 1; grid-row: 1; }
          .svc-name { grid-column: 2; grid-row: 1; font-size: clamp(14px, 2.2vw, 18px); }
          .svc-right { grid-column: 2; grid-row: 2; }
          .svc-arrow { display: none; }

          .svc-h2 { font-size: clamp(20px, 3.5vw, 28px); margin-bottom: 32px; }
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .svc-root { padding: 48px 20px; }

          .svc-row {
            grid-template-columns: 28px 1fr;
            row-gap: 10px;
            column-gap: 12px;
            padding: 20px 0;
          }

          .svc-num  { grid-column: 1; grid-row: 1; font-size: 10px; }
          .svc-name { grid-column: 2; grid-row: 1; font-size: clamp(13px, 4vw, 16px); }
          .svc-right { grid-column: 2; grid-row: 2; gap: 6px; }

          .svc-h2 { font-size: clamp(18px, 5.5vw, 24px); margin-bottom: 24px; }
          .svc-desc { font-size: 13px; line-height: 1.65; }
          .svc-outcome { font-size: 8px; letter-spacing: 0.2em; }

          .svc-cta-band {
            flex-direction: column;
            align-items: flex-start;
            padding: 18px 16px;
            margin-top: 32px;
          }
          .svc-cta-label { font-size: 13px; }
          .svc-cta-btn { width: 100%; text-align: center; }
        }

        /* ── Small mobile ── */
        @media (max-width: 380px) {
          .svc-root { padding: 36px 16px; }
          .svc-h2 { font-size: 16px; }
          .svc-name { font-size: 13px; }
          .svc-desc { font-size: 12px; }
        }
      `}</style>

      <section id="services" className="svc-root">
        <div className="max-w-[1440px] mx-auto relative">
          {/* Header */}
          <div className="svc-eyebrow">
            <span className="svc-eyebrow-line" />
            Services
          </div>
          <h2 className="svc-h2">
            What <em>We Do</em>
          </h2>

          {/* Rows */}
          <div>
            {services.map((s, i) => (
              <div
                key={i}
                className="svc-row"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="svc-num">{s.number}</div>
                <div className="svc-name">{s.name}</div>
                <div className="svc-right">
                  <div className="svc-outcome">{s.outcome}</div>
                  <p className="svc-desc">{s.description}</p>
                </div>
                {/* <div className="svc-arrow">→</div> */}
              </div>
            ))}
          </div>

          {/* CTA band */}
          <div className="svc-cta-band">
            <span className="svc-cta-label">
              Ready to transform your organisation?
            </span>

            <button
              type="button"
              className="svc-cta-btn"
              onClick={handleContactClick}
            >
              Schedule a Consultation
            </button>
                            <ContactModal
                  open={contactOpen}
                  onClose={() => setContactOpen(false)}
                />
          </div>
        </div>
      </section>
    </>
  );
}