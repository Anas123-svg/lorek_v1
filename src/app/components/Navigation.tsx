import { useState, useEffect } from "react";

interface NavigationProps {
  openContactModal: (e?: React.MouseEvent) => void;
}

export function Navigation({ openContactModal }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["About", "Industries", "Services", "Values"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);
  const handleContactClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    openContactModal(e);
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fahkwang:wght@300;400;500;600;700&family=Ranade:wght@200;300;400;500;600;700&display=swap');

        /* ── Nav links ── */
        .nav-link {
          position: relative;
          font-family: 'Fahkwang', sans-serif;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.38);
          text-decoration: none;
          transition: color 0.22s;
          padding-bottom: 3px;
          white-space: nowrap;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0;
          height: 1px;
          background: #C8102E;
          transition: width 0.25s ease;
        }
        .nav-link:hover { color: #FFFFFF; }
        .nav-link:hover::after { width: 100%; }

        /* ── CTA button ── */
        .nav-cta-btn {
          font-family: 'Fahkwang', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #C8102E;
          background: transparent;
          border: 1px solid rgba(200,16,46,0.45);
          padding: 9px 22px;
          cursor: pointer;
          transition: all 0.22s;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .nav-cta-btn:hover {
          background: #C8102E;
          color: #FFFFFF;
          border-color: #C8102E;
        }

        /* ── Scan line (appears on scroll) ── */
        .nav-scan-line {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(200,16,46,0.15) 15%,
            #C8102E 40%,
            rgba(200,16,46,0.25) 70%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.35s;
        }
        .nav-scrolled .nav-scan-line { opacity: 1; }

        /* ── Logo ── */
        .nav-logo-wrap {
          display: flex;
          align-items: center;
          gap: 11px;
          flex-shrink: 0;
          text-decoration: none;
          user-select: none;
        }
        .nav-logo-svg {
          flex-shrink: 0;
          transition: opacity 0.22s;
        }
        .nav-logo-wrap:hover .nav-logo-svg { opacity: 0.82; }
        .nav-wordmark {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .nav-wordmark-main {
          font-family: 'Fahkwang', sans-serif;
          font-weight: 500;
          font-size: clamp(14px, 1.5vw, 19px);
          letter-spacing: 0.40em;
          color: #FFFFFF;
          line-height: 1;
          text-transform: uppercase;
        }
        .nav-wordmark-sub {
          font-family: 'Fahkwang', sans-serif;
          font-weight: 600;
          font-size: clamp(6.5px, 0.55vw, 8px);
          letter-spacing: 0.22em;
          color: #C8102E;
          text-transform: uppercase;
          line-height: 1;
        }

        /* ── Divider between nav and cta ── */
        .nav-divider {
          width: 1px;
          height: 16px;
          background: rgba(200,16,46,0.20);
          flex-shrink: 0;
        }

        /* ── Mobile hamburger ── */
        .nav-mobile-btn {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 36px;
          height: 36px;
          background: transparent;
          border: none;
          cursor: pointer;
          gap: 5px;
          padding: 0;
          flex-shrink: 0;
        }
        .nav-mobile-bar {
          width: 20px;
          height: 1.5px;
          background: rgba(255,255,255,0.65);
          border-radius: 0;
          transition: all 0.28s ease;
          transform-origin: center;
        }
        .nav-mobile-btn.open .bar1 {
          transform: rotate(45deg) translate(4.6px, 4.6px);
          background: #C8102E;
        }
        .nav-mobile-btn.open .bar2 {
          opacity: 0;
          transform: scaleX(0);
        }
        .nav-mobile-btn.open .bar3 {
          transform: rotate(-45deg) translate(4.6px, -4.6px);
          background: #C8102E;
        }

        /* ── Mobile overlay ── */
        .nav-mobile-menu {
          position: fixed;
          left: 0; right: 0; bottom: 0;
          background: rgba(4,4,4,0.97);
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow-y: auto;
        }
        .nav-mobile-item {
          font-family: 'Fahkwang', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.38);
          text-decoration: none;
          width: 100%;
          text-align: center;
          padding: 16px 0;
          transition: color 0.2s, background 0.2s;
          border-bottom: 0.5px solid rgba(200,16,46,0.07);
        }
        .nav-mobile-item:hover { color: #fff; background: rgba(200,16,46,0.04); }

        /* ── Responsive visibility ── */
        @media (min-width: 1024px) {
          .nav-mobile-btn  { display: none !important; }
          .nav-mobile-menu { display: none !important; }
        }
        @media (max-width: 1023px) {
          .nav-desktop-only { display: none !important; }
        }
        @media (max-width: 1023px) {
          .nav-px { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-scrolled" : ""}`}
        style={{
          backgroundColor: scrolled ? "rgba(4,4,4,0.97)" : "rgba(4,4,4,0.80)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "0.5px solid rgba(200,16,46,0.09)",
        }}
      >
        <div
          className="nav-px"
          style={{ paddingLeft: "clamp(16px, 5vw, 80px)", paddingRight: "clamp(16px, 5vw, 80px)" }}
        >
          <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "clamp(56px, 7vw, 68px)",
                gap: "12px",
              }}
            >

              {/* ── LOGO ── */}
              <a href="/" className="nav-logo-wrap">
                <svg
                  className="nav-logo-svg"
                  width="24"
                  height="24"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer diamond */}
                  <polygon
                    points="14,1 27,14 14,27 1,14"
                    fill="none"
                    stroke="#C8102E"
                    strokeWidth="1.2"
                  />
                  {/* Inner diamond — faint fill */}
                  <polygon
                    points="14,7 21,14 14,21 7,14"
                    fill="#C8102E"
                    opacity="0.15"
                  />
                  {/* Diagonal slash */}
                  <line
                    x1="7" y1="21" x2="21" y2="7"
                    stroke="#C8102E"
                    strokeWidth="1"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                  {/* Cardinal ticks */}
                  <line x1="14" y1="1"  x2="14" y2="5"  stroke="#C8102E" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="14" y1="23" x2="14" y2="27" stroke="#C8102E" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="1"  y1="14" x2="5"  y2="14" stroke="#C8102E" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="23" y1="14" x2="27" y2="14" stroke="#C8102E" strokeWidth="1.2" strokeLinecap="round" />
                </svg>

                <div className="nav-wordmark">
                  <span className="nav-wordmark-main">Lorek</span>
                  <span className="nav-wordmark-sub">Advisory</span>
                </div>
              </a>

              {/* ── DESKTOP CENTER NAV ── */}
              <div
                className="nav-desktop-only"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(20px, 3vw, 40px)",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="nav-link"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* ── DESKTOP RIGHT: divider + CTA ── */}
              <div
                className="nav-desktop-only"
                style={{ display: "flex", alignItems: "center", gap: "18px" }}
              >
                <div className="nav-divider" />
                <button className="nav-cta-btn" onClick={handleContactClick}>
                  Contact
                </button>
              </div>

              {/* ── MOBILE HAMBURGER ── */}
              <button
                className={`nav-mobile-btn${menuOpen ? " open" : ""}`}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
                type="button"
              >
                <span className="nav-mobile-bar bar1" />
                <span className="nav-mobile-bar bar2" />
                <span className="nav-mobile-bar bar3" />
              </button>

            </div>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        {menuOpen && (
          <div
            className="nav-mobile-menu"
            style={{ top: "clamp(56px, 7vw, 68px)", height: `calc(100vh - clamp(56px, 7vw, 68px))` }}
          >
            {/* Subtle grid bg */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(rgba(200,16,46,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(200,16,46,0.025) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "relative",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "36px",
                paddingBottom: "40px",
                gap: 0,
              }}
            >
              {/* Section eyebrow */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "28px",
                }}
              >
                <div style={{ width: "20px", height: "1px", background: "#C8102E", opacity: 0.6 }} />
                <span
                  style={{
                    fontFamily: "'Fahkwang', sans-serif",
                    fontSize: "7.5px",
                    fontWeight: 600,
                    letterSpacing: "0.30em",
                    color: "rgba(200,16,46,0.7)",
                    textTransform: "uppercase",
                  }}
                >
                  Menu
                </span>
                <div style={{ width: "20px", height: "1px", background: "#C8102E", opacity: 0.6 }} />
              </div>

              {/* Nav items */}
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-mobile-item"
                  onClick={handleNavClick}
                >
                  {item}
                </a>
              ))}

              {/* CTA */}
              <button
                className="nav-cta-btn"
                style={{ marginTop: "32px" }}
                onClick={handleContactClick}
              >
                Contact
              </button>

              {/* Watermark logo */}
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "48px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  opacity: 0.10,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 28 28" fill="none">
                  <polygon points="14,1 27,14 14,27 1,14" fill="none" stroke="#C8102E" strokeWidth="1.5" />
                  <line x1="7" y1="21" x2="21" y2="7" stroke="#C8102E" strokeWidth="1" strokeLinecap="round" />
                </svg>
                <span
                  style={{
                    fontFamily: "'Fahkwang', sans-serif",
                    fontWeight: 500,
                    fontSize: "11px",
                    letterSpacing: "0.40em",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                  }}
                >
                  Lorek
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="nav-scan-line" />
      </nav>
    </>
  );
}