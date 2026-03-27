export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-10 lg:px-32 border-t border-white/10"
      style={{
        background: `linear-gradient(rgba(13,13,13,0.92), rgba(13,13,13,0.92)), url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
          {/* Headline */}
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '40px',
              fontWeight: 400,
              color: '#FFFFFF',
              textAlign: 'center',
            }}
          >
            Let's talk about your business.
          </h2>

          {/* Subtext */}
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: '1.7',
              color: '#A8A8A8',
              textAlign: 'center',
              marginTop: '16px',
              marginBottom: '40px',
            }}
          >
            Our experienced team will advise you on the potential way forward.
          </p>

          {/* CTA Button */}
          <button
            className="transition-all duration-200"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#FFFFFF',
              backgroundColor: '#C8102E',
              borderRadius: '0px',
              padding: '16px 48px',
              border: 'none',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#A50D25')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C8102E')}
          >
            Contact us
          </button>
        </div>
      </div>
      {/* Decorative overlay for visual effect */}
      <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none', background: 'radial-gradient(ellipse at 60% 40%, rgba(200,16,46,0.08) 0%, transparent 70%)' }} />
    </section>
  );
}
