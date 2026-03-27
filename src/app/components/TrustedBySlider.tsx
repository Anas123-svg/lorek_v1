export function TrustedBySlider() {
  const logos = [
    { name: 'Fortune 500', text: 'FORTUNE 500' },
    { name: 'Global Partners', text: 'GLOBAL PARTNERS' },
    { name: 'Tech Leaders', text: 'TECH LEADERS' },
    { name: 'Industry Pioneers', text: 'INDUSTRY PIONEERS' },
    { name: 'Market Leaders', text: 'MARKET LEADERS' },
    { name: 'Innovation Hub', text: 'INNOVATION HUB' },
    { name: 'Enterprise Elite', text: 'ENTERPRISE ELITE' },
    { name: 'Strategic Ventures', text: 'STRATEGIC VENTURES' },
  ];

  return (
    <section
      style={{
        backgroundColor: '#141414',
        padding: '60px 0',
        borderTop: '0.5px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '0.5px solid rgba(255, 255, 255, 0.06)',
        overflow: 'hidden',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-20 mb-8">
        <div className="text-center">
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '10px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#5C5C5C',
              marginBottom: '8px',
            }}
          >
            TRUSTED BY
          </div>
          <h3
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '24px',
              fontWeight: 400,
              color: '#FFFFFF',
            }}
          >
            Leading Companies Worldwide
          </h3>
        </div>
      </div>

      {/* Continuous Scrolling Logos */}
      <div style={{ position: 'relative' }}>
        <style>
          {`
            @keyframes scroll-continuous {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .logo-track {
              display: flex;
              gap: 80px;
              animation: scroll-continuous 40s linear infinite;
            }
            .logo-track:hover {
              animation-play-state: paused;
            }
          `}
        </style>

        <div className="logo-track">
          {/* First set */}
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '200px',
                height: '80px',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                {/* Logo Symbol */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    margin: '0 auto 8px',
                    borderRadius: '6px',
                    border: '1.5px solid rgba(200, 16, 46, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(200, 16, 46, 0.05)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#C8102E',
                    }}
                  >
                    {logo.text.charAt(0)}
                  </div>
                </div>
                {/* Logo Text */}
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    color: '#5C5C5C',
                  }}
                >
                  {logo.text}
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '200px',
                height: '80px',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                {/* Logo Symbol */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    margin: '0 auto 8px',
                    borderRadius: '6px',
                    border: '1.5px solid rgba(200, 16, 46, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(200, 16, 46, 0.05)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#C8102E',
                    }}
                  >
                    {logo.text.charAt(0)}
                  </div>
                </div>
                {/* Logo Text */}
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    color: '#5C5C5C',
                  }}
                >
                  {logo.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
