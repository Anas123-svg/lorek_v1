import { useState, useEffect } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const navItems = ['Home', 'About', 'Industries', 'Services', 'Values'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700&display=swap');

        .nav-link {
          position: relative;
          font-family: 'Rajdhani', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.42);
          text-decoration: none;
          transition: color 0.2s;
          padding-bottom: 2px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #C8102E;
          transition: width 0.25s ease;
        }
        .nav-link:hover {
          color: #FFFFFF;
        }
        .nav-link:hover::after {
          width: 100%;
        }

        .nav-cta-btn {
          font-family: 'Rajdhani', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #C8102E;
          background: transparent;
          border: 1px solid rgba(200,16,46,0.5);
          padding: 8px 20px;
          cursor: pointer;
          transition: all 0.2s;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
        }
        .nav-cta-btn:hover {
          background: #C8102E;
          color: #FFFFFF;
          border-color: #C8102E;
        }

        .nav-scan-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #C8102E 35%, rgba(200,16,46,0.3) 70%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .nav-scrolled .nav-scan-line {
          opacity: 1;
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled' : ''}`}
        style={{
          backgroundColor: scrolled ? 'rgba(8,8,8,0.98)' : 'rgba(8,8,8,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '0.5px solid rgba(200,16,46,0.12)',
        }}
      >
        <div className="px-8 sm:px-16 xl:px-20">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center justify-between h-14 sm:h-16 gap-3">

              {/* Logo */}
              <div className="flex items-center shrink-0" style={{ gap: '10px' }}>
                <div style={{ width: '3px', height: '18px', background: '#C8102E' }} />
                <span
                  style={{
                    fontFamily: 'Orbitron, monospace',
                    fontWeight: 700,
                    fontSize: 'clamp(12px, 1.6vw, 15px)',
                    letterSpacing: '0.35em',
                    color: '#FFFFFF',
                  }}
                >
                  L O R E K
                </span>
              </div>

              {/* Center Nav */}
              <div className="hidden lg:flex items-center gap-7 xl:gap-9">
                {navItems.map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                    {item}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <button className="nav-cta-btn">Contact</button>

            </div>
          </div>
        </div>
        <div className="nav-scan-line" />
      </nav>
    </>
  );
}