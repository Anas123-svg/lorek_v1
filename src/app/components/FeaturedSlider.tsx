export function FeaturedSlider() {
  const publications = [
    'Forbes',
    'The Guardian', 
    'Luxurious Magazine',
    'Financial Times',
    'The Times',
    'Property Week',
    'Mansion Global',
    'Wallpaper*',
    'Bloomberg',
    'Architectural Digest',
  ];

  return (
    <section className="bg-gradient-to-b from-[#0D0D0D] to-[#111111] py-6 overflow-hidden relative">
      {/* Decorative line top */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(46, 156, 202, 0.2) 50%, transparent)',
        }}
      />

      {/* Infinite Scrolling Container */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, #0D0D0D, transparent)',
          }}
        />
        <div 
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, #111111)',
          }}
        />

        <div className="flex animate-scroll">
          {/* First set of logos */}
          {publications.map((pub, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center justify-center px-10 shrink-0 group"
            >
              <div className="relative">
                <span
                  className="text-[24px] whitespace-nowrap transition-all duration-300 group-hover:scale-110"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: pub === 'Forbes' || pub === 'The Guardian' || pub === 'Bloomberg' ? 600 : 300,
                    fontStyle: pub === 'Luxurious Magazine' || pub === 'Wallpaper*' || pub === 'Architectural Digest' ? 'italic' : 'normal',
                    color: 'rgba(255, 255, 255, 0.18)',
                    display: 'inline-block',
                  }}
                >
                  {pub}
                </span>
                {/* Accent underline on hover */}
                <div 
                  className="absolute -bottom-1 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    backgroundColor: '#2E9CCA',
                  }}
                />
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {publications.map((pub, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center justify-center px-10 shrink-0 group"
            >
              <div className="relative">
                <span
                  className="text-[24px] whitespace-nowrap transition-all duration-300 group-hover:scale-110"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: pub === 'Forbes' || pub === 'The Guardian' || pub === 'Bloomberg' ? 600 : 300,
                    fontStyle: pub === 'Luxurious Magazine' || pub === 'Wallpaper*' || pub === 'Architectural Digest' ? 'italic' : 'normal',
                    color: 'rgba(255, 255, 255, 0.18)',
                    display: 'inline-block',
                  }}
                >
                  {pub}
                </span>
                {/* Accent underline on hover */}
                <div 
                  className="absolute -bottom-1 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    backgroundColor: '#2E9CCA',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative line bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(200, 149, 90, 0.15) 50%, transparent)',
        }}
      />

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 35s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}