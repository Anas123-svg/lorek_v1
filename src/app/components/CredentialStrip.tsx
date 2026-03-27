export function CredentialStrip() {
  const stats = [
    { number: '40+', label: 'Companies Served' },
    { number: '5', label: 'Core Sectors' },
    { number: '3', label: 'Active Continents' },
    { number: '100%', label: 'Client Retention' },
  ];

  return (
    <section
      style={{
        backgroundColor: '#141414',
        borderTop: '0.5px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '0.5px solid rgba(255, 255, 255, 0.06)',
        height: '88px',
      }}
    >
      <div className="max-w-[1440px] mx-auto h-full">
        <div className="grid grid-cols-4 h-full">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
              style={{
                borderRight: index < stats.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '28px',
                  fontWeight: 400,
                  color: '#FFFFFF',
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '10px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: '#5C5C5C',
                  marginTop: '4px',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
