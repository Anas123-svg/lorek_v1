export function Hero() {
  const companies = [
    'MICROSOFT',
    'AMAZON',
    'GOLDMAN SACHS',
    'BLACKROCK',
    'JP MORGAN',
    'DELOITTE',
    'MCKINSEY',
    'BOSTON CONSULTING',
    'MICROSOFT',
    'AMAZON',
    'GOLDMAN SACHS',
    'BLACKROCK',
    'JP MORGAN',
    'DELOITTE',
    'MCKINSEY',
    'BOSTON CONSULTING',
  ];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: 'min(1100px, 100svh)', backgroundColor: '#0D0D0D' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070"
          alt="London street"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }} />
        
        {/* Geometric Grid Texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(200,16,46,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,16,46,0.04) 1px, transparent 1px)',
            backgroundSize: '100px 100px',
          }}
        />
        
        {/* Bottom Vignette */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '30%',
            background: 'linear-gradient(to bottom, transparent, #0D0D0D)',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative h-full px-20">
        <div className="max-w-[1440px] mx-auto h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 h-full pt-28 sm:pt-32 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 translate-y-4">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(9px, 1.8vw, 10px)',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.22em',
                color: '#C8102E',
                marginBottom: '16px',
              }}
            >
              STRATEGIC ADVISORY & PRIVATE EQUITY
            </div>

            {/* Hero Headline */}
            <h1
              style={{
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(38px, 8vw, 72px)',
                lineHeight: '1.02',
                color: '#FFFFFF',
                maxWidth: 'min(640px, 95%)',
                marginBottom: '20px',
              }}
            >
              Strategic Partners
              <br />
              Serving Companies
              <br />
              Globally
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(15px, 2.1vw, 17px)',
                fontWeight: 300,
                lineHeight: '1.65',
                color: 'rgba(255, 255, 255, 0.75)',
                maxWidth: 'min(520px, 100%)',
                marginBottom: '30px',
              }}
            >
              We elevate and serve organisations through disciplined strategy, meaningful stewardship, and long-term value creation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <button
                className="transition-all duration-200"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  backgroundColor: '#C8102E',
                  borderRadius: '0px',
                  padding: '12px 26px',
                  border: 'none',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#A50D25')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C8102E')}
              >
                Services
              </button>
              <button
                className="transition-all duration-200"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  backgroundColor: 'transparent',
                  borderRadius: '0px',
                  padding: '12px 26px',
                  border: '1.5px solid #FFFFFF',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#C8102E';
                  e.currentTarget.style.color = '#C8102E';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#FFFFFF';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                Contact
              </button>
            </div>

            {/* Trusted By Label */}
            <div
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '9px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'rgba(255, 255, 255, 0.4)',
                marginBottom: '16px',
              }}
            >
              TRUSTED BY LEADING ORGANIZATIONS
            </div>

            {/* Companies Slider */}
            <div className="relative overflow-hidden" style={{ width: '100%', maxWidth: '600px' }}>
              <div
                className="flex gap-8"
                style={{
                  animation: 'scroll 30s linear infinite',
                }}
              >
                {companies.map((company, index) => (
                  <div
                    key={index}
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'rgba(255, 255, 255, 0.3)',
                      whiteSpace: 'nowrap',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {company}
                  </div>
                ))}
              </div>
              <style>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
              `}</style>
            </div>
            </div>

            {/* Right Side - Stats & Testimonial */}
            <div className="lg:col-span-5 flex flex-col justify-center" style={{ gap: '16px' }}>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-2">
              <div
                style={{
                  backgroundColor: 'rgba(20, 20, 20, 0.75)',
                  border: '0.5px solid rgba(255, 255, 255, 0.1)',
                  borderTop: '2px solid #C8102E',
                  borderRadius: '4px',
                  padding: '20px 18px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(28px, 6.5vw, 36px)',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    marginBottom: '4px',
                  }}
                >
                  $2.5B+
                </div>
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '11px',
                    fontWeight: 300,
                    color: 'rgba(255, 255, 255, 0.6)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Assets Managed
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(20, 20, 20, 0.75)',
                  border: '0.5px solid rgba(255, 255, 255, 0.1)',
                  borderTop: '2px solid #C8102E',
                  borderRadius: '4px',
                  padding: '20px 18px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(28px, 6.5vw, 36px)',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    marginBottom: '4px',
                  }}
                >
                  50+
                </div>
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '11px',
                    fontWeight: 300,
                    color: 'rgba(255, 255, 255, 0.6)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Global Clients
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(20, 20, 20, 0.75)',
                  border: '0.5px solid rgba(255, 255, 255, 0.1)',
                  borderTop: '2px solid #C8102E',
                  borderRadius: '4px',
                  padding: '20px 18px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(28px, 6.5vw, 36px)',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    marginBottom: '4px',
                  }}
                >
                  15+
                </div>
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '11px',
                    fontWeight: 300,
                    color: 'rgba(255, 255, 255, 0.6)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Years Experience
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(20, 20, 20, 0.75)',
                  border: '0.5px solid rgba(255, 255, 255, 0.1)',
                  borderTop: '2px solid #C8102E',
                  borderRadius: '4px',
                  padding: '20px 18px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(28px, 6.5vw, 36px)',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    marginBottom: '4px',
                  }}
                >
                  12
                </div>
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '11px',
                    fontWeight: 300,
                    color: 'rgba(255, 255, 255, 0.6)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Industries Served
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div
              style={{
                backgroundColor: 'rgba(20, 20, 20, 0.80)',
                border: '0.5px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
                padding: '24px 20px',
              }}
            >
              {/* Quote Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginBottom: '12px' }}>
                <path
                  d="M3 21C3 17.134 6.13401 14 10 14V17C8.34315 17 7 18.3431 7 20C7 21.6569 8.34315 23 10 23H3V21Z"
                  fill="#C8102E"
                />
                <path
                  d="M14 21C14 17.134 17.134 14 21 14V17C19.3431 17 18 18.3431 18 20C18 21.6569 19.3431 23 21 23H14V21Z"
                  fill="#C8102E"
                />
              </svg>

              {/* Quote Text */}
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 300,
                  lineHeight: '1.65',
                  color: '#FFFFFF',
                  marginBottom: '16px',
                }}
              >
                Effective, experienced and agile. Lorek reduced our costs and significantly improved performance of our portfolio.
              </p>

              {/* Attribution */}
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                CEO, Fortune 500 Company
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Red Accent Bar */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: '6px', backgroundColor: '#C8102E' }} />
    </section>
  );
}