import { useState, useEffect } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const navItems = ['Home', 'About', 'Industries', 'Services', 'Values'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.97)' : '#0D0D0D',
        borderBottom: scrolled ? '0.5px solid rgba(200, 16, 46, 0.2)' : '0.5px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-3">
            {/* Logo */}
            <div className="flex items-center shrink-0">
              <span
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontStyle: 'italic',
                  fontSize: 'clamp(13px, 2.1vw, 16px)',
                  color: '#FFFFFF',
                  letterSpacing: '0.24em',
                  fontWeight: 700,
                }}
              >
                L O R E K
              </span>
            </div>

            {/* Center Nav Links */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition-colors duration-200"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    color: '#A8A8A8',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#A8A8A8')}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Contact Button */}
            <button
              className="transition-all duration-200"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                color: '#FFFFFF',
                border: '1px solid #FFFFFF',
                borderRadius: '0px',
                padding: '8px 16px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C8102E';
                e.currentTarget.style.borderColor = '#C8102E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = '#FFFFFF';
              }}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
