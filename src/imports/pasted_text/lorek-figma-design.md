Lorek — Dark Futuristic Authority
Complete Figma Design Prompt — Correct Brand Colors

BRAND COLOR PALETTE (Extracted from lorek.com)
Primary Background: #0D0D0D — near pure black, used across all sections as the base canvas
Secondary Background: #141414 — slightly lifted black for card surfaces and alternate section bands
Tertiary Background: #1A1A1A — used for hover states on cards and subtle section separations
Primary Accent — Brand Red: #C8102E — the exact Lorek crimson red. Used on the primary CTA button ("Services"), active states, section dividers, and hover indicators. This is the only color that breaks the monochrome scheme.
Red Hover / Deep Variant: #A50D25 — a darkened version of the brand red, used on button hover states and pressed states only
Red Bottom Bar: #B5102A — the thick red band visible at the very bottom of the current hero section. Used as a footer accent stripe.
Primary Text: #FFFFFF — pure white, used for all headlines and primary body copy on dark backgrounds
Secondary Text: #A8A8A8 — medium gray, used for subtext, nav links in default state, descriptions
Tertiary Text / Labels: #5C5C5C — dark gray, used for fine print, attribution lines, section labels
Border Default: rgba(255, 255, 255, 0.08) — barely visible white border for card edges and dividers
Border Accent: rgba(200, 16, 46, 0.35) — red-tinted border used on focused inputs and highlighted elements
Nav Background: rgba(10, 10, 10, 0.95) — near black with slight transparency when scrolled, solid #0D0D0D default
Overlay on Hero Photography: rgba(0, 0, 0, 0.55) — dark overlay used on top of the London street photo in the current hero
Quote Card Background: rgba(30, 30, 30, 0.75) — semi-transparent dark card used for the testimonial overlay on the current hero

TYPOGRAPHY (Corrected)
Logo: Trajan Pro 3, Italic — displayed as "L O R E K" with wide letter spacing on the current site. Color: #FFFFFF on dark. Apply client-provided red texture image as a clipping mask fill inside the letterforms for the upgraded version — the diagonal red light-sweep texture gives the logo a premium lit-metal quality.
Hero Headline: Trajan Pro 3, Regular or Italic — large, white. Current site uses a bold weight serif for "Strategic Partners Serving Companies Globally."
Section Headlines (H2): Trajan Pro 3, Regular — "About us", "Industries", "Values", "Let's talk about your business." All white.
Sub-headlines (H3/H4/H5): Trajan Pro 3 or matching serif — service names and purpose/mission lines
Body Copy: System serif or Georgia fallback on current site — upgrade to DM Sans Light 300 for body in redesign, keeping Trajan Pro 3 strictly for display and headings
Nav Links: DM Sans Regular, 14px, #A8A8A8 default, #FFFFFF hover
Labels / Eyebrows: DM Sans Medium 500, 10px, uppercase, letter-spacing 0.18em, color #C8102E (red) or #5C5C5C
CTA Buttons: DM Sans Medium 500, 14px — primary button: white text on #C8102E fill. Secondary/ghost button: white text with white border on transparent fill (as seen in the "Contact" button on current site)

FRAME SETUP
Desktop Frame: 1440px wide, Auto Layout vertical, background #0D0D0D, frame name "Lorek — Home — Desktop v2"
Grid: 12 columns, 72px column width, 24px gutter, 80px left/right margin

SECTION 1 — NAVIGATION BAR
Frame: 1440px × 64px, fill #0D0D0D, bottom border 0.5px rgba(255,255,255,0.08), padding 0 80px
Left: Logo "L O R E K" in Trajan Pro 3 Italic, 16px, color #FFFFFF. The red texture from client is applied as a vector mask fill on the text outline — diagonal crimson-to-bright-red light sweep going bottom-left to top-right, matching the supplied texture image exactly.
Center nav links (auto layout, gap 6px): Home / About / Industries / Services / Values — DM Sans Regular 13px, color #A8A8A8, hover color #FFFFFF
Right: "Contact" button — DM Sans Medium 13px, color #FFFFFF, border 1px solid #FFFFFF, border-radius 0px (square corners, matching current site), padding 10px 24px, hover: fill #C8102E, border-color #C8102E
Scrolled state: background rgba(10,10,10,0.97), bottom border becomes rgba(200,16,46,0.2) — subtle red tint

SECTION 2 — HERO
Frame: 1440px × 900px (full viewport height annotation), fill #0D0D0D
Background layer stack (bottom to top):
Layer 1 — Photography: London street / city architecture photo (Regent Street style as on current site). Fill entire frame. Object-fit: cover.
Layer 2 — Dark overlay: Rectangle full frame, fill rgba(0,0,0,0.58) — matches current site's dark photo treatment exactly
Layer 3 — Geometric grid texture (futuristic upgrade): Repeating horizontal and vertical lines, 1px stroke, rgba(200,16,46,0.04) — an extremely faint red grid, nearly invisible, that adds depth without competing with photography
Layer 4 — Bottom vignette: Rectangle at bottom 30% of frame, gradient from transparent at top to #0D0D0D at bottom — creates seamless blend into next section
Left content (cols 1–8), padding-top 180px:
Eyebrow label: DM Sans Medium 500, 10px, uppercase, letter-spacing 0.22em, color #C8102E — "STRATEGIC ADVISORY & PRIVATE EQUITY"
Margin below eyebrow: 20px
Hero headline: Trajan Pro 3 Italic, 72px, line-height 1.0, color #FFFFFF, max-width 640px

Line 1: "Strategic Partners"
Line 2: "Serving Companies"
Line 3: "Globally"
(Matching current site copy, but with tighter leading and futuristic spacing)

Margin below headline: 28px
Subtext: DM Sans Light 300, 17px, line-height 1.7, color rgba(255,255,255,0.75), max-width 520px — "We elevate and serve organisations through disciplined strategy, meaningful stewardship, and long-term value creation."
Margin below subtext: 44px
CTA row (auto layout horizontal, gap 16px):

Primary "Services": DM Sans Medium 500, 14px, color #FFFFFF, fill #C8102E, border-radius 0px (sharp, matching current), padding 14px 36px, hover fill #A50D25
Secondary "Contact": DM Sans Medium 500, 14px, color #FFFFFF, fill transparent, border 1.5px solid #FFFFFF, border-radius 0px, padding 14px 36px, hover border-color #C8102E, hover color #C8102E

Right bottom — Testimonial card (cols 9–12, bottom-aligned in hero):
Card fill: rgba(20,20,20,0.80), border 0.5px rgba(255,255,255,0.1), border-radius 4px, padding 24px 20px, width 320px
Quote icon: SVG double-quote mark, color #C8102E, size 20px, margin-bottom 12px
Quote text: DM Sans Light 300, 14px, line-height 1.65, color #FFFFFF — "Effective, experienced and agile. Lorek reduced our costs and significantly improved performance of our portfolio."
Bottom accent bar:
Thin red band at very bottom of hero: height 6px, fill #C8102E, full width — matches the red strip visible on current site bottom of hero

SECTION 3 — CREDENTIAL STRIP
Frame: 1440px × 88px, fill #141414, top border 0.5px rgba(255,255,255,0.06), bottom border 0.5px rgba(255,255,255,0.06)
Layout: 4 equal columns, separated by 1px vertical lines rgba(255,255,255,0.06), each column centered
Each stat:

Number: Trajan Pro 3 Regular, 28px, color #FFFFFF
Label: DM Sans Medium 500, 10px, uppercase, letter-spacing 0.14em, color #5C5C5C

Four stats:

"40+" / Companies Served
"5" / Core Sectors
"3" / Active Continents
"100%" / Client Retention


SECTION 4 — ABOUT THE FIRM
Frame: 1440px × auto, fill #0D0D0D, padding 96px 80px
Left column (cols 1–2):
Section label: DM Sans Medium 500, 10px, uppercase, letter-spacing 0.2em, color #C8102E — "ABOUT US"
Right column (cols 3–12):
Section headline: Trajan Pro 3 Regular, 36px, color #FFFFFF, margin-bottom 28px — "Lorek is a strategic advisory and private equity firm."
Paragraph 1: DM Sans Light 300, 15px, line-height 1.8, color #A8A8A8 — "We serve as both advisors and partners, combining expert guidance with selective private equity participation."
Margin: 20px
Purpose block: small label "Purpose" in DM Sans Medium 500, 11px, uppercase, letter-spacing 0.15em, color #C8102E. Below it: DM Sans Light 300, 14px, color #FFFFFF — "To tangibly improve, and empower the environments we serve."
Margin: 16px
Mission block: same structure — label "Mission" in red, text in white — "To build a company that attracts and retains exceptional talent, enabling us to grow through our people."
Margin: 40px
Two dark cards (auto layout horizontal, gap 12px):

Card fill: #141414, border 0.5px rgba(255,255,255,0.08), border-radius 6px, padding 22px
Left border accent: 2px solid #C8102E (red left rule on each card — key brand detail)
Card name: DM Sans Medium 500, 13px, color #FFFFFF, margin-bottom 8px
Card body: DM Sans Light 300, 13px, line-height 1.65, color #5C5C5C
Card 1: "Advisory" — "Expert strategic guidance across the full business lifecycle, from operating model to growth strategy."
Card 2: "Private Equity" — "Selective co-investment in joint ventures, staying operationally involved post-transaction."


SECTION 5 — INDUSTRIES
Frame: 1440px × auto, fill #141414, padding 80px 80px, top border 0.5px rgba(255,255,255,0.06)
Section headline: Trajan Pro 3 Regular, 36px, color #FFFFFF, margin-bottom 16px — "Industries"
Subtext: DM Sans Light 300, 15px, color #A8A8A8, max-width 580px, margin-bottom 40px — "We focus on delivering holistic service, covering all aspects of business life cycle, thus becoming reliable partners for companies, individuals and institutions."
Industry cards grid: 5 columns, gap 12px
Each card:

Fill #0D0D0D, border 0.5px rgba(255,255,255,0.08), border-radius 6px
Image placeholder: 100% width, height 180px, object-fit cover, with a dark overlay rgba(0,0,0,0.4)
Industry name: DM Sans Medium 500, 13px, color #FFFFFF, padding 16px, positioned below image
Hover state: left border becomes 2px solid #C8102E, image overlay lightens slightly

Five industry cards:

Real Estate and Construction
Engineering and Robotics
Media, Arts and Advertising
Consumer Goods
IT and Communication

Below grid: "Message us →" text link — DM Sans Regular 14px, color #C8102E, margin-top 32px, hover underline

SECTION 6 — SERVICES
Frame: 1440px × auto, fill #0D0D0D, padding 80px 80px, top border 0.5px rgba(255,255,255,0.06)
Section label: DM Sans Medium 500, 10px, uppercase, letter-spacing 0.18em, color #C8102E, margin-bottom 8px — "SERVICES"
Section headline: Trajan Pro 3 Regular, 36px, color #FFFFFF, margin-bottom 40px — "What We Do"
Services list: vertical stack of 4 rows, each separated by 0.5px horizontal line rgba(255,255,255,0.06)
Each service row (auto layout horizontal, space-between, padding 28px 0, align start):
Left block:

Number: DM Sans Light 300, 11px, color #5C5C5C, min-width 32px — "01", "02", "03", "04"
Service name: Trajan Pro 3 Regular, 22px, color #FFFFFF, max-width 280px
Hover: color transitions to #C8102E

Right block (max-width 580px):

Outcome tag: DM Sans Medium 500, 10px, uppercase, letter-spacing 0.12em, color #C8102E, margin-bottom 10px — short outcome phrase e.g. "EBITDA IMPROVEMENT"
Description: DM Sans Light 300, 14px, line-height 1.7, color #A8A8A8

Arrow far right: "→" DM Sans Regular 18px, color #5C5C5C, hover #C8102E
Four services:
01 — Commercialisation and Sales / "PROFITABLE GROWTH" / Lead multi-year journeys with tangible impact, including improved win-rates, increased delivered margin, targeted portfolios, higher resource efficiency, and more profitable and sustainable growth.
02 — Operational Transformation / "EBITDA MARGIN IMPROVEMENT" / Launch effective transformations, resulting in EBITDA margin improvement, minimized cost and time overruns, and increased win rates.
03 — Investment Sourcing / "SMART CAPITAL ACCESS" / We prepare companies for the investment process, source the funding and participate with our private equity partners in joint ventures while keeping operations streamlined.
04 — Strategy and Organisation / "LONG-TERM COMPETITIVENESS" / We help enterprises stay ahead of the curve, focusing on operating model review, digital optimisation, AI utilisation, portfolio rebalancing, sustainability and access to future talent.

SECTION 7 — TESTIMONIAL
Frame: 1440px × auto, fill #141414, padding 80px 80px, top border 0.5px rgba(255,255,255,0.06)
Content: centered, max-width 680px, horizontally centered on page
Quote icon: SVG double-quote glyph, color #C8102E, size 32px, margin-bottom 20px
Quote text: Trajan Pro 3 Italic, 24px, line-height 1.6, color #FFFFFF — "Effective, experienced and agile. Lorek reduced our costs and significantly improved performance of our portfolio."
Margin: 24px
Attribution: DM Sans Regular 11px, uppercase, letter-spacing 0.12em, color #5C5C5C — "Managing Director — Global Portfolio Company"
Red accent rule: 40px wide, 2px height, fill #C8102E, centered, margin-top 32px

SECTION 8 — VALUES
Frame: 1440px × auto, fill #0D0D0D, padding 80px 80px, top border 0.5px rgba(255,255,255,0.06)
Left column (cols 1–2): section label "VALUES" in DM Sans Medium 500, 10px, uppercase, letter-spacing 0.2em, color #C8102E
Right column (cols 3–12):
Section headline: Trajan Pro 3 Regular, 36px, color #FFFFFF, margin-bottom 32px — "How We Operate"
Values list: vertical stack of 10 items, each separated by 0.5px line rgba(255,255,255,0.05)
Each value row (auto layout horizontal, gap 16px, padding 14px 0):

Check icon: circle with checkmark, stroke color #C8102E, size 18px (matching current site's circle-check SVG style)
Value text: DM Sans Light 300, 14px, line-height 1.6, color #A8A8A8

All ten values from current site:

Maintain the highest standards in client service.
Serve with discretion and sensitivity.
Manage clients' and the firm's resources transparently and effectively.
Measurably improve our clients' performance.
Use our global network to deliver solutions and source partnerships for our clients.
Build clients' capabilities to sustain continuous improvement.
Create an unrivalled environment for exceptional people.
Listen to different perspectives with curiosity and respect.
Ensure financial stability and sustainability.
Develop one another through mentoring and continually encourage self-education.


SECTION 9 — CONTACT CTA BAND
Frame: 1440px × auto, fill #141414, padding 80px 80px, top border 2px solid #C8102E (red top rule — strong brand moment)
Content: centered, max-width 600px
Headline: Trajan Pro 3 Regular, 40px, color #FFFFFF, text-align center — "Let's talk about your business."
Subtext: DM Sans Light 300, 16px, line-height 1.7, color #A8A8A8, text-align center, margin-top 16px — "Our experienced team will advise you on the potential way forward."
Margin: 40px
CTA button "Contact us": DM Sans Medium 500, 14px, color #FFFFFF, fill #C8102E, border-radius 0px (sharp), padding 16px 48px, hover fill #A50D25

SECTION 10 — FOOTER
Frame: 1440px × auto, fill #0D0D0D, padding 40px 80px, top border 0.5px rgba(255,255,255,0.08)
Top row (space-between):
Left: Logo "L O R E K" Trajan Pro 3 Italic, 15px, color #FFFFFF — with red texture clipping mask
Center nav links (auto layout, gap 24px): About us / Industries / Services / Values / Contact — DM Sans Regular 12px, color #5C5C5C, hover #FFFFFF
Right: Social icons — Twitter and Instagram SVG icons, color #5C5C5C, hover #FFFFFF, size 16px
Bottom row (margin-top 32px, space-between, top border 0.5px rgba(255,255,255,0.06), padding-top 20px):
Left: "Copyright © 2025 of Lorek Strategic Partners" — DM Sans Regular 11px, color #3A3A3A
Right: "Charity Cause" text link — DM Sans Regular 11px, color #3A3A3A, hover color #C8102E
Red accent stripe: 6px height, fill #C8102E, full width — placed as the very last element at the absolute bottom of the page, matching the red bar visible on the current site

COMPONENT LIBRARY
Color tokens to set as Figma Variables:

color/bg/primary: #0D0D0D
color/bg/secondary: #141414
color/bg/tertiary: #1A1A1A
color/accent/red: #C8102E
color/accent/red-hover: #A50D25
color/accent/red-bar: #B5102A
color/text/primary: #FFFFFF
color/text/secondary: #A8A8A8
color/text/muted: #5C5C5C
color/border/default: rgba(255,255,255,0.08)
color/border/accent: rgba(200,16,46,0.35)

Text styles to create:

Display/Hero: Trajan Pro 3 Italic, 72px, #FFFFFF
Display/Section: Trajan Pro 3 Regular, 36px, #FFFFFF
Display/Card: Trajan Pro 3 Regular, 22px, #FFFFFF
Body/Regular: DM Sans Regular 400, 15px, #A8A8A8
Body/Light: DM Sans Light 300, 14px, #A8A8A8
Label/Red: DM Sans Medium 500, 10px, uppercase, ls 0.18em, #C8102E
Label/Muted: DM Sans Medium 500, 10px, uppercase, ls 0.18em, #5C5C5C
Nav/Link: DM Sans Regular 400, 13px, #A8A8A8
Button/Primary: DM Sans Medium 500, 14px, #FFFFFF

Components to build:

Navbar (default + scrolled)
Logo with red texture mask
Button/Primary Red (default + hover)
Button/Ghost White (default + hover)
Service row (default + hover)
Industry card (default + hover)
Value row with red check icon
Dark card with red left border
Testimonial block
Credential stat unit
Contact CTA band
Footer bar
Red bottom accent stripe

