import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/';
  const homeAnchor = (hash: string) => (isHomePage ? hash : `/${hash}`);

  const quickLinks = [
    { label: 'Services',   href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Values',     href: '#values' },
    { label: 'Contact',    href: '#contact' },
    { label: 'About Us',   href: '#about' },
  ];

  const serviceLinks = [
    'Commercialisation & Sales',
    'Operational Transformation',
    'Investment Sourcing',
    'Strategy & Organisation',
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@600;700&family=DM+Sans:wght@200;300;400;500&display=swap');

        .ftr-root {
          background: #050505;
          border-top: 2px solid #C8102E;
          position: relative;
          overflow: hidden;
        }
        .ftr-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(200,16,46,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,16,46,0.025) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }
        .ftr-root::after {
          content: '';
          position: absolute;
          bottom: -80px; right: -100px;
          width: 420px; height: 320px;
          background: radial-gradient(ellipse, rgba(200,16,46,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Main grid ── */
        .ftr-main {
          max-width: 1440px;
          margin: 0 auto;
          padding: 64px 80px 48px;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 48px;
          position: relative;
        }

        /* ── Brand col ── */
        .ftr-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .ftr-logo-bar { width: 3px; height: 20px; background: #C8102E; flex-shrink: 0; }
        .ftr-logo-text {
          font-family: 'Orbitron', monospace;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.35em;
          color: #FFFFFF;
        }

        .ftr-brand-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 300;
          line-height: 1.75;
          color: rgba(255,255,255,0.4);
          margin-bottom: 24px;
        }

        .ftr-cert {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ftr-cert-line { width: 28px; height: 1px; background: #C8102E; flex-shrink: 0; }
        .ftr-cert-label {
          font-family: 'Rajdhani', sans-serif;
          font-size: 9px; font-weight: 700;
          letter-spacing: 0.26em; text-transform: uppercase;
          color: #C8102E;
        }

        /* ── Column headings ── */
        .ftr-col-heading {
          font-family: 'Rajdhani', sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: #FFFFFF;
          margin-bottom: 20px;
          display: flex; align-items: center; gap: 8px;
        }
        .ftr-col-heading::after {
          content: '';
          flex: 1;
          height: 0.5px;
          background: linear-gradient(90deg, rgba(200,16,46,0.3), transparent);
        }

        /* ── Links ── */
        .ftr-links-col { display: flex; flex-direction: column; gap: 2px; }

        .ftr-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 300;
          color: rgba(255,255,255,0.38);
          text-decoration: none;
          display: flex; align-items: center; gap: 8px;
          padding: 4px 0;
          transition: color 0.2s;
        }
        .ftr-link::before {
          content: '';
          width: 3px; height: 3px;
          background: transparent;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .ftr-link:hover { color: #FFFFFF; }
        .ftr-link:hover::before { background: #C8102E; }

        /* ── Contact items ── */
        .ftr-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 8px 0;
          border-bottom: 0.5px solid rgba(255,255,255,0.04);
        }
        .ftr-contact-item:last-child { border-bottom: none; }
        .ftr-contact-icon {
          width: 28px; height: 28px;
          border: 0.5px solid rgba(200,16,46,0.3);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
          clip-path: polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%);
        }
        .ftr-contact-main {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 400;
          color: #FFFFFF;
          text-decoration: none;
          display: block;
          transition: color 0.2s;
        }
        a.ftr-contact-main:hover { color: #C8102E; }
        .ftr-contact-sub {
          font-family: 'Rajdhani', sans-serif;
          font-size: 9px; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-top: 2px;
        }

        /* ── Bottom bar ── */
        .ftr-bottom {
          border-top: 0.5px solid rgba(255,255,255,0.06);
          position: relative;
        }
        .ftr-bottom-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 16px 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .ftr-copyright {
          font-family: 'Rajdhani', sans-serif;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(255,255,255,0.22);
        }
        .ftr-legal-links {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .ftr-legal-link {
          font-family: 'Rajdhani', sans-serif;
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(255,255,255,0.22);
          text-decoration: none;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .ftr-legal-link:hover { color: #C8102E; }
        .ftr-legal-sep {
          width: 1px; height: 10px;
          background: rgba(255,255,255,0.1);
        }

        /* ── Tablet: 2-col ── */
        @media (max-width: 1100px) {
          .ftr-main {
            grid-template-columns: 1fr 1fr;
            padding: 48px 40px 40px;
            gap: 40px 48px;
          }
          .ftr-bottom-inner { padding: 16px 40px; }
        }

        /* ── Mobile: single col, left-aligned ── */
        @media (max-width: 640px) {
          .ftr-main {
            grid-template-columns: 1fr;
            padding: 40px 20px 32px;
            gap: 36px;
          }

          /* Divider between sections */
          .ftr-main > div + div {
            padding-top: 28px;
            border-top: 0.5px solid rgba(255,255,255,0.06);
          }

          /* Keep heading left-aligned — the ::after line works naturally */
          .ftr-col-heading { margin-bottom: 14px; }

          /* Two-column link grid for quick links and services */
          .ftr-links-col {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0 16px;
          }

          .ftr-bottom-inner {
            padding: 16px 20px;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .ftr-legal-links { gap: 16px; }
        }

        /* ── Small mobile ── */
        @media (max-width: 380px) {
          .ftr-main { padding: 32px 16px 24px; }
          .ftr-bottom-inner { padding: 14px 16px; }
          .ftr-links-col { grid-template-columns: 1fr; }
          .ftr-logo-text { font-size: 13px; }
          .ftr-brand-desc { font-size: 12px; }
          .ftr-contact-main { font-size: 12px; }
        }
      `}</style>

      <footer className="ftr-root">
        <div className="ftr-main">

          {/* Brand */}
          <div>
            <div className="ftr-logo">
              <div className="ftr-logo-bar" />
              <span className="ftr-logo-text">LOREK</span>
            </div>
            <p className="ftr-brand-desc">
              Strategic advisory and private equity for ambitious organisations. We deliver sustainable growth, operational excellence, and capital access across industries.
            </p>
            <div className="ftr-cert">
              <div className="ftr-cert-line" />
              <span className="ftr-cert-label">Certified Experts</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="ftr-col-heading">Quick Links</div>
            <div className="ftr-links-col">
              {quickLinks.map((link) => (
                <a key={link.label} href={homeAnchor(link.href)} className="ftr-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="ftr-col-heading">Services</div>
            <div className="ftr-links-col">
              {serviceLinks.map((svc) => (
                <a key={svc} href={homeAnchor('#services')} className="ftr-link">
                  {svc}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="ftr-col-heading">Contact</div>
            <div>
              <div className="ftr-contact-item">
                <div className="ftr-contact-icon">
                  <Phone size={12} color="#C8102E" />
                </div>
                <div>
                  <a href="tel:+442079460999" className="ftr-contact-main">+44 20 7946 0999</a>
                  <div className="ftr-contact-sub">Mon–Fri 8am–6pm</div>
                </div>
              </div>
              <div className="ftr-contact-item">
                <div className="ftr-contact-icon">
                  <Mail size={12} color="#C8102E" />
                </div>
                <div>
                  <a href="mailto:info@lorek.com" className="ftr-contact-main">info@lorek.com</a>
                  <div className="ftr-contact-sub">24/7 email support</div>
                </div>
              </div>
              <div className="ftr-contact-item">
                <div className="ftr-contact-icon">
                  <MapPin size={12} color="#C8102E" />
                </div>
                <div>
                  <span className="ftr-contact-main">London, UK</span>
                  <div className="ftr-contact-sub">All boroughs covered</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="ftr-bottom">
          <div className="ftr-bottom-inner">
            <span className="ftr-copyright">© 2026 LOREK Strategic Partners. All Rights Reserved.</span>
            <div className="ftr-legal-links">
              <a href="#" className="ftr-legal-link">Privacy Policy</a>
              <div className="ftr-legal-sep" />
              <a href="#" className="ftr-legal-link">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}