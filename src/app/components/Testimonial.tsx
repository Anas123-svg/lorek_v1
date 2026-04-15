import { useRef } from 'react';

export function Testimonial() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>('.tst-card');
    const baseGap = 18;
    const amount = card ? card.offsetWidth + baseGap : 320;

    track.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  const testimonials = [
    {
      name: 'Daniel',
      title: 'Chief Executive, Real Estate',
      photo:'https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=',
      text: 'We have had countless encounters and managed to work together on few occasions and Lorek’s Team is always punctual, prepared, professional and carries themselves in a polite and respectable manner.',
    },
    {
      name: 'Amira',
      title: 'Group CEO, Property Development',
      photo: 'https://media.istockphoto.com/id/831902150/photo/ive-solidified-my-name-in-the-business-world.jpg?s=612x612&w=0&k=20&c=GCkoeN4GXE9W3EgNmwnInZpvGEepUSPd7N8NMKGBGFs=',
      text: 'We can advise that Lorek provided highly professional consulting services across complex, multi-stakeholder initiatives. Their attitude and knowledge were exemplary, ensuring that these projects were delivered to plan and within budget.',
    },
    {
      name: 'Lucien',
      title: 'Managing Partner, Architecture & Design',
      photo: 'https://plus.unsplash.com/premium_photo-1661297460381-f75b8ae69a0f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29ycG9yYXRlJTIwbWFufGVufDB8fDB8fHww',
      text: 'Over the course of the past decade, Lorek have continuously delivered dozens of business transformation exercises, on time and within the budget. Their work ethic, honesty, and hard work are commendable.',
    },
    {
      name: 'Sophia',
      title: 'Chair, Property Development',
      photo: 'https://static.vecteezy.com/system/resources/thumbnails/046/850/078/small/confident-businesswoman-in-a-gray-suit-standing-with-arms-crossed-outside-an-office-building-professional-female-leader-in-the-business-district-photo.jpg',
      text: 'Their consulting teams, which comprise highly skilled, experienced consultants and project managers, are able to contend with all manner of challenges and complexities and do so effortlessly and without a modicum of fuss.',
    },
    {
      name: 'Noah',
      title: 'Founder, Real Estate Investment',
      photo: 'https://images.peopleimages.com/picture/202212/2564599-success-corporate-leadership-and-portrait-of-black-man-sitting-on-desk-in-modern-office-for-startup.-management-marketing-ceo-and-happy-male-entrepreneur-with-business-vision-in-creative-workplace-fit_400_400.jpg',
      text: "Lorek has been an indispensable asset to us in sourcing, building, maintaining, and managing our portfolio across the UK.",
    },
    {
      name: 'Isabel',
      title: 'Creative Director, Design & Branding',
      photo: 'https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=NF_IO6IEXY3HifRIhRqP0KDFJFdlFwaMwo3zfOOvKnQ=',
      text: 'As a management consultant, Jacob was attentive, knowledgeable with a great eye for detail. He manages a successful and profitable company whilst also providing a very fair and competitively priced service. A great combination.',
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fahkwang:wght@400;500;600;700&family=Ranade:wght@400;500;600&display=swap');

        .tst-root {
          background: #0d0d0d;
          padding: 96px 80px;
          border-top: 0.5px solid rgba(181,32,36,0.12);
          position: relative;
          overflow: hidden;
        }
        .tst-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(181,32,36,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(181,32,36,0.025) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }
        .tst-root::after {
          content: '';
          position: absolute;
          top: -100px; right: -120px;
          width: 500px; height: 400px;
          background: radial-gradient(ellipse, rgba(181,32,36,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Header ── */
        .tst-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 48px;
          gap: 24px;
          flex-wrap: wrap;
        }
        .tst-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Fahkwang', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #B52024;
          margin-bottom: 14px;
        }
        .tst-eyebrow-line { width: 24px; height: 1px; background: #B52024; }

        .tst-h2 {
          font-family: 'Fahkwang', sans-serif;
          font-weight: 500;
          font-size: clamp(26px, 3.2vw, 38px);
          line-height: 1.08;
          color: #FFFFFF;
          letter-spacing: -0.01em;
        }
        .tst-h2 em {
          font-style: normal;
          color: #B52024;
          font-family: 'Fahkwang', sans-serif;
          font-weight: 700;
        }

        /* ── Horizontal strip: all breakpoints ── */
        .tst-grid {
          display: flex;
          flex-direction: row;
          gap: 18px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding: 4px 0 8px;
          scrollbar-width: none; /* Firefox */
        }
        .tst-grid::-webkit-scrollbar { display: none; }

        /* ── Card ── */
        .tst-card {
          background: #0a0a0a;
          border: 0.5px solid rgba(181,32,36,0.1);
          border-left: 2px solid #B52024;
          padding: 28px 22px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s, background 0.2s;
          clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);
          flex: 0 0 320px;
          max-width: 360px;
          scroll-snap-align: start;
        }
        .tst-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, #B52024, transparent);
          opacity: 0.3;
        }
        .tst-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -55deg, transparent, transparent 6px,
            rgba(181,32,36,0.012) 6px, rgba(181,32,36,0.012) 7px
          );
          pointer-events: none;
        }
        .tst-card:hover {
          background: #0e0e0e;
          border-left-color: #8F1D21;
        }

        /* Avatar + name row */
        .tst-avatar-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }
        .tst-avatar-wrap {
          position: relative;
          flex-shrink: 0;
        }
        .tst-avatar {
          width: 48px; height: 48px;
          border-radius: 0;
          object-fit: cover;
          display: block;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
          filter: grayscale(0.3);
        }
        .tst-avatar-wrap::after {
          content: '';
          position: absolute;
          bottom: -3px; left: -3px;
          width: 14px; height: 2px;
          background: #B52024;
        }
        .tst-name {
          font-family: 'Fahkwang', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #FFFFFF;
          line-height: 1.2;
        }
        .tst-title {
          font-family: 'Ranade', sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: rgba(255,255,255,0.35);
          line-height: 1.4;
          margin-top: 2px;
        }

        .tst-quote-mark {
          font-family: 'Orbitron', monospace;
          font-size: 32px; font-weight: 700;
          color: rgba(181,32,36,0.25);
          line-height: 1;
          margin-bottom: 8px;
          letter-spacing: -0.05em;
        }
        .tst-text {
          font-family: 'Ranade', sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.7;
          color: rgba(255,255,255,0.65);
          flex: 1;
        }

        /* ── Scroll controls ── */
        .tst-scroll-hint {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 20px;
          color: rgba(255,255,255,0.45);
          font-family: 'Ranade', sans-serif;
          font-size: 12px;
        }

        .tst-arrow-btn {
          width: 32px;
          height: 32px;
          border-radius: 999px;
          border: 1px solid rgba(181,32,36,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          color: #B52024;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;
        }
        .tst-arrow-btn:hover {
          background: #B52024;
          color: #FFFFFF;
          border-color: #B52024;
          transform: translateY(-1px);
        }
        .tst-arrow-icon {
          font-size: 16px;
          line-height: 1;
        }

        /* ── Bottom divider ── */
        .tst-bottom-bar {
          margin-top: 48px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(181,32,36,0.3) 30%, rgba(181,32,36,0.15) 70%, transparent);
        }

        @media (max-width: 1024px) {
          .tst-root { padding: 64px 40px; }
          .tst-header { margin-bottom: 36px; }
        }

        /* ── Mobile: kill grid, go horizontal scroll ── */
        @media (max-width: 640px) {
          .tst-root {
            padding: 48px 0;
            /* allow the scroll track to bleed edge-to-edge */
          }

          /* Re-scope header and bottom bar inside padding */
          .tst-header {
            padding: 0 20px;
            margin-bottom: 28px;
          }
          .tst-bottom-bar { margin: 28px 20px 0; }

          /* Horizontal scroll track tweaks */
          .tst-grid {
            gap: 12px;
            padding: 4px 20px 16px;
          }

          /* Cards: fixed width so exactly ~1.1 peek on right */
          .tst-card {
            flex: 0 0 82vw;
            max-width: 320px;
            scroll-snap-align: start;
          }

          /* Controls padding on mobile */
          .tst-scroll-hint {
            padding: 0 20px;
          }

          .tst-h2 { font-size: clamp(18px, 5.5vw, 24px); }
        }

        @media (max-width: 380px) {
          .tst-card { flex: 0 0 88vw; }
        }
      `}</style>

      <section className="tst-root">
        <div className="max-w-[1440px] mx-auto relative">

          {/* Header */}
          <div className="tst-header">
            <div>
              <div className="tst-eyebrow">
                <span className="tst-eyebrow-line" />
                Testimonials
              </div>
              <h2 className="tst-h2">What Clients <em>Say</em></h2>
            </div>
          </div>

          {/* Cards */}
          <div className="tst-grid" ref={trackRef}>
            {testimonials.map((t, i) => (
              <div key={i} className="tst-card">
                <div className="tst-avatar-row">
                  <div className="tst-avatar-wrap">
                    <img src={t.photo} alt={t.name} className="tst-avatar" />
                  </div>
                  <div>
                    <div className="tst-name">{t.name}</div>
                    <div className="tst-title">{t.title}</div>
                  </div>
                </div>
                <div className="tst-quote-mark">"</div>
                <p className="tst-text">{t.text}</p>
              </div>
            ))}
          </div>

          {/* Scroll controls */}
          <div className="tst-scroll-hint">
            <button
              type="button"
              className="tst-arrow-btn"
              onClick={() => scrollByCard('left')}
              aria-label="Scroll testimonials left"
            >
              <span className="tst-arrow-icon">&#x2039;</span>
            </button>
            <span>Scroll testimonials</span>
            <button
              type="button"
              className="tst-arrow-btn"
              onClick={() => scrollByCard('right')}
              aria-label="Scroll testimonials right"
            >
              <span className="tst-arrow-icon">&#x203A;</span>
            </button>
          </div>

          <div className="tst-bottom-bar" />

        </div>
      </section>
    </>
  );
}