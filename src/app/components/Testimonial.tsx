export function Testimonial() {
  const testimonials = [
    {
      name: 'Sarah Williams',
      title: 'Managing Director, Global Portfolio Company',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'Effective, experienced and agile. Lorek reduced our costs and significantly improved performance of our portfolio.'
    },
    {
      name: 'James Patel',
      title: 'CEO, Tech Innovators',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'Lorek’s strategic insight and hands-on approach helped us scale internationally and secure key partnerships.'
    },
    {
      name: 'Elena Rossi',
      title: 'CFO, European Real Estate Group',
      photo: 'https://randomuser.me/api/portraits/women/65.jpg',
      text: 'Their team is responsive, knowledgeable, and truly invested in our success. Highly recommended.'
    },
    {
      name: 'David Chen',
      title: 'Partner, Private Equity Firm',
      photo: 'https://randomuser.me/api/portraits/men/76.jpg',
      text: 'Lorek delivered measurable results and built lasting value for our portfolio companies.'
    },
  ];

  return (
    <section
      style={{
        backgroundColor: '#141414',
        padding: '64px 0',
        borderTop: '0.5px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="mb-8 flex flex-col items-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ marginBottom: '20px' }}>
            <path d="M3 21C3 17.134 6.13401 14 10 14V17C8.34315 17 7 18.3431 7 20C7 21.6569 8.34315 23 10 23H3V21Z" fill="#C8102E" />
            <path d="M14 21C14 17.134 17.134 14 21 14V17C19.3431 17 18 18.3431 18 20C18 21.6569 19.3431 23 21 23H14V21Z" fill="#C8102E" />
          </svg>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', color: '#fff', fontWeight: 400, marginBottom: 0 }}>What Our Clients Say</h2>
        </div>
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
            <div className="flex gap-7 pb-2" style={{ minWidth: 600 }}>
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-between"
                  style={{
                    background: 'rgba(20,20,20,0.92)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    minWidth: 320,
                    maxWidth: 340,
                    padding: '32px 28px 24px 28px',
                    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)',
                  }}
                >
                  <img
                    src={t.photo}
                    alt={t.name}
                    style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', marginBottom: 18, border: '2px solid #C8102E' }}
                  />
                  <p
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontStyle: 'italic',
                      fontSize: '17px',
                      lineHeight: '1.7',
                      color: '#FFFFFF',
                      textAlign: 'center',
                      marginBottom: 18,
                    }}
                  >
                    “{t.text}”
                  </p>
                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#C8102E',
                        marginBottom: 2,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '11px',
                        fontWeight: 400,
                        color: '#BFC3C8',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {t.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
