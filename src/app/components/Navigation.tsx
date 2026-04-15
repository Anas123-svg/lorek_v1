import { useState, useEffect } from "react";

interface NavigationProps {
  openContactModal: (e?: React.MouseEvent) => void;
}

export function Navigation({ openContactModal }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Industries", href: "#industries" },
    { label: "Services", href: "#services" },
    { label: "MISSION", href: "#values" },
  ];

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
                .nav-mobile-btn {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  width: 38px;
                  height: 38px;
                  background: transparent;
                  border: none;
                  cursor: pointer;
                }
                .nav-mobile-bar {
                  width: 22px;
                  height: 3px;
                  background: #fff;
                  margin: 3px 0;
                  border-radius: 2px;
                  transition: all 0.3s;
                }
                .nav-mobile-btn.open .bar1 {
                  transform: rotate(45deg) translate(5px, 5px);
                }
                .nav-mobile-btn.open .bar2 {
                  opacity: 0;
                }
                .nav-mobile-btn.open .bar3 {
                  transform: rotate(-45deg) translate(5px, -5px);
                }
                .nav-mobile-menu {
                  position: fixed;
                  top: 0; left: 0; right: 0; bottom: 0;
                  background: rgba(8,8,8,0.98);
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  gap: 32px;
                  transition: opacity 0.3s;
                }
                .nav-mobile-link {
                  font-family: 'Fahkwang', sans-serif;
                  font-size: 18px;
                  font-weight: 700;
                  letter-spacing: 0.18em;
                  text-transform: uppercase;
                  color: #fff;
                  text-decoration: none;
                  margin: 0 0 0 0;
                  transition: color 0.2s;
                }
                .nav-mobile-link:active,
                .nav-mobile-link:hover {
                  color: #C8102E;
                }
                .nav-mobile-cta {
                  font-family: 'Fahkwang', sans-serif;
                  font-size: 15px;
                  font-weight: 700;
                  letter-spacing: 0.22em;
                  text-transform: uppercase;
                  color: #C8102E;
                  background: transparent;
                  border: 1.5px solid #C8102E;
                  padding: 12px 38px;
                  border-radius: 0;
                  margin-top: 18px;
                  transition: all 0.2s;
                }
                .nav-mobile-cta:hover {
                  background: #C8102E;
                  color: #fff;
                }
                @media (min-width: 1024px) {
                  .nav-mobile-btn { display: none; }
                  .nav-mobile-menu { display: none !important; }
                }
                @media (max-width: 1023px) {
                  .hidden-on-mobile { display: none !important; }
                }
        @import url('https://fonts.googleapis.com/css2?family=Fahkwang:wght@300;400;500;600;700&family=Ranade:wght@200;300;400;500;600;700&display=swap');

        .nav-link {
          position: relative;
          font-family: 'Fahkwang', sans-serif;
          font-size: 11px;
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
          font-family: 'Fahkwang', sans-serif;
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-scrolled" : ""}`}
        style={{
          backgroundColor: scrolled ? "rgba(8,8,8,0.98)" : "rgba(8,8,8,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "0.5px solid rgba(200,16,46,0.12)",
        }}
      >
        <div className="px-8 sm:px-16 xl:px-20 nav-bar-padding">
          <style>{`
                  @media (max-width: 1023px) {
                    .nav-bar-padding {
                      padding-left: 16px !important;
                      padding-right: 16px !important;
                    }
                  }
                `}</style>
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center justify-between h-14 sm:h-16 gap-3">
              {/* Logo - matching the uploaded image style */}
              <div
                className="flex items-center shrink-0"
                style={{ gap: "10px" }}
              >
                {/* <div style={{ width: '3px', height: '18px', background: '#C8102E' }} /> */}
<img
  src="logo.png" // replace with your actual logo path
  alt="Lorek Logo"
  style={{
    width: "clamp(80px, 10vw, 100px)", // responsive size
    height: "auto",
    objectFit: "contain",
  }}
/>
                {/* <span
                  style={{
                    fontFamily: '"Fahkwang" sans-serif',
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "clamp(12px, 2.2vw, 22px)",
                    letterSpacing: "0.35em",
                    color: "#FFFFFF",
                  }}
                >
                  LOREK
                </span> */}
              </div>

              {/* Hamburger Button (mobile) */}
              <button
                className={`nav-mobile-btn${menuOpen ? " open" : ""}`}
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
                type="button"
              >
                <span
                  className={`nav-mobile-bar bar1${menuOpen ? " open" : ""}`}
                ></span>
                <span
                  className={`nav-mobile-bar bar2${menuOpen ? " open" : ""}`}
                ></span>
                <span
                  className={`nav-mobile-bar bar3${menuOpen ? " open" : ""}`}
                ></span>
              </button>

              {/* Center Nav (desktop) */}
              <div className="hidden lg:flex items-center gap-7 xl:gap-9 hidden-on-mobile">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="nav-link"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* CTA (desktop) */}
              <button
                className="nav-cta-btn hidden-on-mobile"
                onClick={handleContactClick}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div
            className="nav-mobile-menu"
            style={{
              top: "56px",
              height: "calc(100vh - 56px)",
              paddingTop: 0,
              alignItems: "center",
              justifyContent: "flex-start",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0",
                width: "100%",
                paddingTop: "24px",
              }}
            >
              {navItems.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link"
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.42)",
                    width: "100%",
                    textAlign: "center",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    padding: "12px 0",
                    borderBottom: idx !== navItems.length - 1 ? "none" : "none",
                    position: "relative",
                  }}
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              ))}
              <button
                className="nav-cta-btn"
                style={{
                  marginTop: 24,
                  width: "auto",
                  fontSize: 11,
                  padding: "8px 20px",
                  borderRadius: 0,
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  alignSelf: "center",
                  clipPath:
                    "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                }}
                onClick={handleContactClick}
              >
                Contact
              </button>
            </div>
          </div>
        )}
        <div className="nav-scan-line" />
      </nav>
    </>
  );
}
