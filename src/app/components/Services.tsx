import { useState } from 'react';

export function Services() {
  const services = [
    {
      number: '01',
      name: 'Commercialisation and Sales',
      outcome: 'PROFITABLE GROWTH',
      description:
        'Lead multi-year journeys with tangible impact, including improved win-rates, increased delivered margin, targeted portfolios, higher resource efficiency, and more profitable and sustainable growth.',
    },
    {
      number: '02',
      name: 'Operational Transformation',
      outcome: 'EBITDA MARGIN IMPROVEMENT',
      description:
        'Launch effective transformations, resulting in EBITDA margin improvement, minimized cost and time overruns, and increased win rates.',
    },
    {
      number: '03',
      name: 'Investment Sourcing',
      outcome: 'SMART CAPITAL ACCESS',
      description:
        'We prepare companies for the investment process, source the funding and participate with our private equity partners in joint ventures while keeping operations streamlined.',
    },
    {
      number: '04',
      name: 'Strategy and Organisation',
      outcome: 'LONG-TERM COMPETITIVENESS',
      description:
        'We help enterprises stay ahead of the curve, focusing on operating model review, digital optimisation, AI utilisation, portfolio rebalancing, sustainability and access to future talent.',
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      style={{
        backgroundColor: '#141414',
        padding: '80px 80px',
        borderTop: '0.5px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Label */}
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
          SERVICES
        </div>

        {/* Section Headline */}
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '36px',
            fontWeight: 400,
            color: '#FFFFFF',
            marginBottom: '40px',
          }}
        >
          What We Do
        </h2>

        {/* Services List */}
        <div>
          {services.map((service, index) => (
            <div key={index}>
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  padding: '28px 0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {/* Left Block */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', flex: 1 }}>
                  {/* Number */}
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '11px',
                      fontWeight: 300,
                      color: '#5C5C5C',
                      minWidth: '32px',
                    }}
                  >
                    {service.number}
                  </div>

                  {/* Service Name */}
                  <div
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '22px',
                      fontWeight: 400,
                      color: hoveredIndex === index ? '#C8102E' : '#FFFFFF',
                      maxWidth: '280px',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {service.name}
                  </div>
                </div>

                {/* Right Block */}
                <div style={{ maxWidth: '580px', flex: 1 }}>
                  {/* Outcome Tag */}
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '10px',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: '#C8102E',
                      marginBottom: '10px',
                    }}
                  >
                    {service.outcome}
                  </div>

                  {/* Description */}
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '14px',
                      fontWeight: 300,
                      lineHeight: '1.7',
                      color: '#A8A8A8',
                    }}
                  >
                    {service.description}
                  </div>
                </div>

                {/* Arrow */}
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '18px',
                    color: hoveredIndex === index ? '#C8102E' : '#5C5C5C',
                    marginLeft: '32px',
                    transition: 'color 0.2s ease',
                  }}
                >
                  →
                </div>
              </div>

              {/* Separator Line */}
              {index < services.length - 1 && (
                <div style={{ height: '0.5px', backgroundColor: 'rgba(255, 255, 255, 0.06)' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
