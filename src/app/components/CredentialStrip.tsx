export function CredentialStrip() {
  const stats = [
    { number: '40+', label: 'Companies Served' },
    { number: '5', label: 'Core Sectors' },
    { number: '3', label: 'Active Continents' },
    { number: '100%', label: 'Client Retention' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fahkwang:wght@600;700&family=Ranade:wght@300;400;500&display=swap');

        .cred-root {
          background: #0a0a0a;
          border-top: 1px solid rgba(200,16,46,0.18);
          border-bottom: 0.5px solid rgba(200,16,46,0.07);
          height: 84px;
          position: relative;
          overflow: hidden;
        }
        .cred-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(200,16,46,0.04) 50%, transparent 100%);
          pointer-events: none;
        }
        .cred-number {
          font-family: 'Fahkwang', sans-serif;
          font-size: clamp(18px, 2.5vw, 22px);
          font-weight: 700;
          color: #FFFFFF;
          letter-spacing: -0.01em;
        }
        .cred-label {
          font-family: 'Fahkwang', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          margin-top: 3px;
        }
        .cred-divider {
          width: 1px;
          height: 28px;
          background: linear-gradient(to bottom, transparent, rgba(200,16,46,0.3), transparent);
          flex-shrink: 0;
        }
      `}</style>

      <section className="cred-root">
        <div
          className="max-w-[1440px] mx-auto h-full px-8 sm:px-16 xl:px-20"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex items-center justify-center"
              style={{
                gap: '16px',
                borderRight: i < stats.length - 1
                  ? '1px solid transparent'
                  : 'none',
                position: 'relative',
              }}
            >
              {i > 0 && <div className="cred-divider" />}
              <div style={{ textAlign: 'center' }}>
                <div className="cred-number">{stat.number}</div>
                <div className="cred-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}