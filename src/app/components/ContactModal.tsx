import { useEffect, useState } from 'react';

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <style>{`
        .contact-modal-overlay {
          position: fixed !important;
          inset: 0;
          background: rgba(8,8,8,0.97);
          z-index: 2147483647 !important;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
        }
        .contact-modal-content {
          background: linear-gradient(120deg, #181818 80%, #1a0d0f 100%);
          border-radius: 18px;
          box-shadow: 0 12px 48px 0 rgba(0,0,0,0.45), 0 2px 12px rgba(200,16,46,0.13);
          padding: 44px 32px 36px 32px;
          max-width: 95vw;
          width: 410px;
          position: relative;
          color: #fff;
          border: 1.5px solid rgba(200,16,46,0.13);
          text-align: left;
        }
        .contact-modal-close {
          position: absolute;
          top: 14px;
          right: 18px;
          background: none;
          border: none;
          color: #fff;
          font-size: 26px;
          cursor: pointer;
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        .contact-modal-close:hover {
          opacity: 1;
        }
        .contact-modal-title {
          font-family: 'Orbitron', monospace;
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 8px;
          color: #C8102E;
          text-align: center;
          letter-spacing: 0.18em;
        }
        .contact-modal-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          text-align: center;
          margin-bottom: 22px;
        }
        .contact-modal-label {
          font-family: 'Rajdhani', sans-serif;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 4px;
          color: #C8102E;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          text-align: left;
          display: block;
        }
        .contact-modal-input, .contact-modal-textarea, .contact-modal-select {
          width: 100%;
          padding: 10px 12px;
          margin-bottom: 16px;
          border-radius: 6px;
          border: 1.2px solid #2a2a2a;
          background: #19191a;
          color: #fff;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          transition: border 0.2s;
          text-align: left;
        }
        .contact-modal-input:focus, .contact-modal-textarea:focus, .contact-modal-select:focus {
          border: 1.2px solid #C8102E;
          outline: none;
        }
        .contact-modal-textarea {
          min-height: 80px;
          resize: vertical;
        }
        .contact-modal-select {
          margin-bottom: 18px;
        }
        .contact-modal-submit {
          width: 100%;
          background: linear-gradient(90deg, #C8102E 60%, #a50d25 100%);
          color: #fff;
          border: none;
          padding: 13px 0;
          border-radius: 6px;
          font-family: 'Rajdhani', sans-serif;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          margin-top: 8px;
          box-shadow: 0 2px 8px rgba(200,16,46,0.08);
          transition: background 0.2s;
        }
        .contact-modal-submit:hover {
          background: linear-gradient(90deg, #a50d25 60%, #C8102E 100%);
        }
        .contact-modal-success {
          text-align: center;
          color: #C8102E;
          font-family: 'Orbitron', monospace;
          font-size: 18px;
          margin-top: 18px;
        }
      `}</style>
      <div className="contact-modal-content" onClick={e => e.stopPropagation()}>
        <button className="contact-modal-close" onClick={onClose} aria-label="Close">×</button>
        {submitted ? (
          <div>
            <div className="contact-modal-title">Thank You!</div>
            <div className="contact-modal-success">Your message has been sent.<br/>We'll get back to you soon.</div>
            <button className="contact-modal-submit" style={{marginTop: 24}} onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div className="contact-modal-title">Contact Us</div>
            <div className="contact-modal-desc">
              We'd love to hear from you. Fill out the form below and our team will respond promptly.<br/>
              <span style={{color:'#fff', fontWeight:600}}>info@lorek.com</span>
            </div>
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} autoComplete="off">
              <div>
                <label className="contact-modal-label">Name</label>
                <input className="contact-modal-input" type="text" required placeholder="Your Name" />
              </div>
              <div>
                <label className="contact-modal-label">Email</label>
                <input className="contact-modal-input" type="email" required placeholder="you@email.com" />
              </div>
              <div>
                <label className="contact-modal-label">Phone <span style={{color:'#666',fontWeight:400}}>(optional)</span></label>
                <input className="contact-modal-input" type="tel" placeholder="e.g. +44 20 7946 0999" />
              </div>
              <div>
                <label className="contact-modal-label">Message</label>
                <textarea className="contact-modal-textarea" required placeholder="How can we help you?" />
              </div>
              <button className="contact-modal-submit" type="submit">Send Message</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
