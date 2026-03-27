
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const isHomePage = typeof window !== 'undefined' && window.location.pathname === "/";
  const homeAnchor = (hash: string) => (isHomePage ? hash : `/${hash}`);

  return (
    <footer className="bg-[#0A0A0A] text-white border-t-2 border-[#C8102E]">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontStyle: 'italic',
                  fontSize: '22px',
                  color: '#fff',
                  letterSpacing: '0.2em',
                  fontWeight: 700,
                }}
              >
                LOREK
              </span>
            </div>
            <p className="text-[#BFC3C8] text-sm leading-relaxed mb-6">
              Strategic advisory and private equity for ambitious organizations. We deliver sustainable growth, operational excellence, and capital access across industries.
            </p>
            <div className="flex items-center gap-2 max-w-full">
              <div className="h-px flex-1 bg-[#C8102E] max-w-[60px]"></div>
              <span className="text-[#C8102E] text-[10px] font-bold tracking-wide">CERTIFIED EXPERTS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black mb-4 text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              <li>
                <a href={homeAnchor("#services")} className="text-[#999999] hover:text-[#C8102E] transition-colors block text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href={homeAnchor("#industries")} className="text-[#999999] hover:text-[#C8102E] transition-colors block text-sm">
                  Industries
                </a>
              </li>
              <li>
                <a href={homeAnchor("#values")} className="text-[#999999] hover:text-[#C8102E] transition-colors block text-sm">
                  Values
                </a>
              </li>
              <li>
                <a href={homeAnchor("#contact")} className="text-[#999999] hover:text-[#C8102E] transition-colors block text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href={homeAnchor("#about")} className="text-[#999999] hover:text-[#C8102E] transition-colors block text-sm">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-black mb-4 text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              SERVICES
            </h4>
            <ul className="space-y-2">
              <li>
                <a href={homeAnchor("#services")} className="text-[#999999] hover:text-[#C8102E] transition-colors block text-sm">
                  Commercialisation &amp; Sales
                </a>
              </li>
              <li>
                <a href={homeAnchor("#services")} className="text-[#999999] hover:text-[#C8102E] transition-colors block text-sm">
                  Operational Transformation
                </a>
              </li>
              <li>
                <a href={homeAnchor("#services")} className="text-[#999999] hover:text-[#C8102E] transition-colors block text-sm">
                  Investment Sourcing
                </a>
              </li>
              <li>
                <a href={homeAnchor("#services")} className="text-[#999999] hover:text-[#C8102E] transition-colors block text-sm">
                  Strategy &amp; Organisation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-black mb-4 text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              CONTACT
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#C8102E] flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <a href="tel:+442079460999" className="text-white hover:text-[#C8102E] transition-colors font-bold block text-sm">
                    +44 20 7946 0999
                  </a>
                  <span className="text-[#777777] text-[10px]">Mon-Fri 8am-6pm</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#C8102E] flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <a href="mailto:info@lorek.com" className="text-white hover:text-[#C8102E] transition-colors font-bold block text-sm break-all">
                    info@lorek.com
                  </a>
                  <span className="text-[#777777] text-[10px]">24/7 email support</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C8102E] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block text-sm">London, UK</span>
                  <span className="text-[#777777] text-[10px]">All boroughs covered</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-center md:text-left">
            <p className="text-[#777777]">
              © 2026 LOREK Strategic Partners. All Rights Reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a href="#" className="text-[#777777] hover:text-[#C8102E] transition-colors">
                Privacy Policy
              </a>
              <span className="text-white/20">•</span>
              <a href="#" className="text-[#777777] hover:text-[#C8102E] transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}