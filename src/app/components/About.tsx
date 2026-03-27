export function About() {
  const images = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1080",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1080",
  ];

  return (
    <section
      id="about"
      className="bg-[#0D0D0D] px-5 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <div
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "10px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#C8102E",
              marginBottom: "12px",
            }}
          >
            ABOUT US
          </div>

          <h2
            className="mx-auto"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(30px, 4vw, 44px)",
              fontWeight: 400,
              color: "#FFFFFF",
              maxWidth: "860px",
              marginBottom: "10px",
              lineHeight: "1.2",
            }}
          >
            Lorek is a strategic advisory and private equity firm.
          </h2>

          <p
            className="mx-auto"
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "clamp(14px, 1.8vw, 16px)",
              fontWeight: 300,
              lineHeight: "1.75",
              color: "#A8A8A8",
              maxWidth: "760px",
            }}
          >
            We combine strategic advice with selective private equity
            participation to help organizations create sustainable, long-term
            value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          <div className="lg:col-span-7 h-full flex flex-col gap-4">
            <div
              className="group flex-1"
              style={{
                minHeight: "340px",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative",
                border: "0.5px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <img
                src={images[0]}
                alt="Business partnership"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  right: "20px",
                }}
              >
                <div
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#C8102E",
                    marginBottom: "8px",
                  }}
                >
                  Our Approach
                </div>
                <div
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "14px",
                    fontWeight: 300,
                    color: "#FFFFFF",
                    lineHeight: "1.6",
                    maxWidth: "460px",
                  }}
                >
                  Building lasting partnerships through disciplined strategy and
                  meaningful stewardship, with an unwavering focus on measurable
                  business impact.
                </div>

                <div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    marginTop: "12px",
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#FFFFFF",
                  }}
                >
                  Check details {"->"}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                style={{
                  backgroundColor: "#141414",
                  border: "0.5px solid rgba(255, 255, 255, 0.08)",
                  borderLeft: "2px solid #C8102E",
                  borderRadius: "8px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#C8102E",
                    marginBottom: "8px",
                  }}
                >
                  Purpose
                </div>
                <div
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "14px",
                    fontWeight: 300,
                    color: "#FFFFFF",
                    lineHeight: "1.6",
                  }}
                >
                  To tangibly improve and empower the environments we serve
                  through pragmatic strategy, execution discipline, and
                  long-term partnership.
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#141414",
                  border: "0.5px solid rgba(255, 255, 255, 0.08)",
                  borderLeft: "2px solid #C8102E",
                  borderRadius: "8px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#C8102E",
                    marginBottom: "8px",
                  }}
                >
                  Mission
                </div>
                <div
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "14px",
                    fontWeight: 300,
                    color: "#FFFFFF",
                    lineHeight: "1.6",
                  }}
                >
                  To build a company that attracts and retains exceptional
                  talent, enabling sustainable growth for clients and
                  communities.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 h-full grid grid-cols-2 gap-4">
            <div
              className="group"
              style={{
                minHeight: "180px",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative",
                border: "0.5px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <img
                src={images[1]}
                alt="Team collaboration"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.35)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "14px",
                  right: "14px",
                  bottom: "14px",
                }}
              >
                <div
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "10px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#C8102E",
                    marginBottom: "6px",
                  }}
                >
                  AI Operations
                </div>
                <div
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "12px",
                    fontWeight: 300,
                    color: "#FFFFFF",
                    lineHeight: "1.5",
                  }}
                >
                  Turning intelligent workflows into measurable outcomes through
                  data, automation, and leadership alignment.
                </div>
              </div>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px",
                }}
              >
                <div
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#FFFFFF",
                  }}
                >
                  Check details {"->"}
                </div>
              </div>
            </div>

            <div
              className="group"
              style={{
                minHeight: "180px",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative",
                border: "0.5px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <img
                src={images[2]}
                alt="Strategic planning"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.35)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "14px",
                  right: "14px",
                  bottom: "14px",
                }}
              >
                <div
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "10px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#C8102E",
                    marginBottom: "6px",
                  }}
                >
                  Tech Strategy
                </div>
                <div
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "12px",
                    fontWeight: 300,
                    color: "#FFFFFF",
                    lineHeight: "1.5",
                  }}
                >
                  Aligning digital bets with long-term enterprise value,
                  operational resilience, and competitive advantage.
                </div>
              </div>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px",
                }}
              >
                <div
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#FFFFFF",
                  }}
                >
                  Check details {"->"}
                </div>
              </div>
            </div>

            <div
              className="col-span-2"
              style={{
                minHeight: "220px",
                borderRadius: "8px",
                border: "0.5px solid rgba(255, 255, 255, 0.12)",
                borderLeft: "2px solid #C8102E",
                background: "linear-gradient(135deg, #151515 0%, #101010 100%)",
                padding: "22px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                {/* Tag */}
                <div
                  style={{
                    display: "inline-block",
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "10px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#C8102E",
                    marginBottom: "12px",
                    padding: "4px 10px",
                    border: "0.5px solid rgba(200, 16, 46, 0.4)",
                    borderRadius: "999px",
                  }}
                >
                  Featured Capability
                </div>

                {/* Title */}
                <div
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "26px",
                    fontWeight: 400,
                    color: "#FFFFFF",
                    lineHeight: "1.2",
                    marginBottom: "12px",
                  }}
                >
                  Strategic Capital Advisory
                </div>

                {/* Short Intro */}
                <div
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#E5E5E5",
                    lineHeight: "1.6",
                    maxWidth: "580px",
                    marginBottom: "14px",
                  }}
                >
                  Helping leaders make confident capital decisions — from
                  funding strategy to execution.
                </div>

                {/* Highlights */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "8px 20px",
                    marginBottom: "16px",
                    maxWidth: "520px",
                  }}
                >
                  {[
                    "Growth funding strategy",
                    "Deal structuring",
                    "Portfolio prioritization",
                    "Post-deal value creation",
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontFamily: "DM Sans, sans-serif",
                        fontSize: "13px",
                        color: "#BFC3C8",
                      }}
                    >
                      <span style={{ color: "#C8102E", marginRight: "8px" }}>
                        •
                      </span>
                      {item}
                    </div>
                  ))}
                </div>

                {/* Supporting Line */}
                <div
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "13px",
                    color: "#9CA3AF",
                    lineHeight: "1.6",
                    maxWidth: "560px",
                    marginBottom: "16px",
                  }}
                >
                  We work side-by-side with founders and executives to turn
                  strategy into clear, actionable plans with measurable impact.
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    {
                      stat: "12+",
                      label: "Advisory Mandates",
                      desc: "Across growth, transformation, and capital strategy"
                    },
                    {
                      stat: "$2B+",
                      label: "Capital Raised / Deployed",
                      desc: "For clients in diverse sectors"
                    },
                    {
                      stat: "3-5x",
                      label: "Decision Velocity",
                      desc: "Faster, data-driven outcomes for leadership"
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        fontSize: "11px",
                        fontWeight: 500,
                        color: "#FFFFFF",
                        border: "0.5px solid rgba(255, 255, 255, 0.16)",
                        borderRadius: "4px",
                        padding: "12px 10px 10px 10px",
                        textAlign: "center",
                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2px",
                      }}
                    >
                      <span style={{ fontSize: "18px", fontWeight: 700, color: "#C8102E", letterSpacing: "0.04em", marginBottom: 2 }}>{item.stat}</span>
                      <span style={{ textTransform: "uppercase", fontWeight: 600, fontSize: "10px", color: "#fff", letterSpacing: "0.08em", marginBottom: 2 }}>{item.label}</span>
                      <span style={{ fontWeight: 400, fontSize: "10px", color: "#BFC3C8", letterSpacing: "0.01em" }}>{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
display: "inline-flex",
alignItems: "center",
gap: "6px",                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "#FFFFFF",
                  opacity: 0.95,
                }}
              >
                Explore advisory model {"->"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
