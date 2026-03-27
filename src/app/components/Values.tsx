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

  // Duplicate values for smooth marquee
  const marqueeValues = [...values, ...values];

  return (
    <section
      id="values"
      style={{
        backgroundColor: '#141414',
        padding: '32px 0',
        borderTop: '0.5px solid rgba(255, 255, 255, 0.06)',
        overflow: 'hidden',
      }}
    >
      <div className="w-full px-0">
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 z-10" style={{ background: 'linear-gradient(to right, #141414, transparent)' }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 z-10" style={{ background: 'linear-gradient(to left, #141414, transparent)' }} />
          <div className="overflow-hidden w-full">
            <div className="values-marquee flex w-max gap-3" style={{ alignItems: 'center', minHeight: 44 }}>
              {marqueeValues.map((value, index) => (
                <div
                  key={index}
                  style={{
                    background: '#141414',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '8px',
                    padding: '6px 18px',
                    minWidth: 260,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {/* Check Icon */}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C8102E"
                    strokeWidth="2"
                    style={{ flexShrink: 0 }}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                  {/* Value Text */}
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '13px',
                      fontWeight: 400,
                      color: '#E0E0E0',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes valuesMarquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .values-marquee {
              animation: valuesMarquee 60s linear infinite;
            }
            .values-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
