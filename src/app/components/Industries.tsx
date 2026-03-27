export function Industries() {
  const industries = [
    {
      name: 'Real Estate and Construction',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
    },
    {
      name: 'Engineering and Robotics',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070',
    },
    {
      name: 'Media, Arts and Advertising',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2070',
    },
    {
      name: 'Consumer Goods',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070',
    },
    {
      name: 'IT and Communication',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072',
    },
  ];

  const marqueeIndustries = [...industries, ...industries];

  return (
    <section id="industries" className="px-5 sm:px-8 lg:px-20 py-12 sm:py-14 border-t border-white/10" style={{ background: '#0D0D0D' }}>
      <div className="max-w-[1440px] mx-auto">
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '10px',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: '#C8102E',
            marginBottom: '8px',
          }}
        >
          INDUSTRIES
        </div>

        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(30px, 4.2vw, 40px)',
            fontWeight: 400,
            color: '#FFFFFF',
            marginBottom: '10px',
          }}
        >
          Industries
        </h2>

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '15px',
            fontWeight: 300,
            color: '#A8A8A8',
            maxWidth: '620px',
            marginBottom: '20px',
            lineHeight: '1.75',
          }}
        >
          We focus on delivering holistic service, covering all aspects of business life cycle, thus becoming reliable partners for
          companies, individuals and institutions.
        </p>

        <div className="relative">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10"
            style={{ background: 'linear-gradient(to right, #0D0D0D, transparent)' }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10"
            style={{ background: 'linear-gradient(to left, #0D0D0D, transparent)' }}
          />

          <div className="overflow-hidden">
            <div className="industries-marquee flex w-max gap-4">
              {marqueeIndustries.map((industry, index) => (
                <article
                  key={`${industry.name}-${index}`}
                  className="group w-[240px] sm:w-[270px] lg:w-[290px]"
                  style={{
                    backgroundColor: '#C8102E',
                    border: '0.5px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                  }}
                >
                  <div className="relative h-[170px] overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.38)' }} />
                    <div
                      className="absolute left-4 right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '10px',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: '#FFFFFF',
                      }}
                    >
                      Check details {'->'}
                    </div>
                  </div>

                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#FFFFFF',
                      padding: '15px 16px',
                      lineHeight: '1.5',
                    }}
                  >
                    {industry.name}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes industriesScroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .industries-marquee {
              animation: industriesScroll 42s linear infinite;
            }

            .industries-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>

        <a
          href="#contact"
          style={{
            display: 'inline-block',
            marginTop: '18px',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            color: '#C8102E',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
        >
          Message us {'->'}
        </a>
      </div>
    </section>
  );
}
