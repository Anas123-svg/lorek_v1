Lorek — Dark Futuristic Authority
Complete Figma Design Prompt

BRAND FOUNDATION
Logo

Wordmark: "LOREK" set in Trajan Pro 3, Italic
Letter-spacing: 0.25em (wide tracked)
Color: Off-white #F0EDE6 on dark backgrounds
Size on desktop nav: 16px
Do NOT use spaced "L O R E K" format — the Trajan Pro 3 italic is the identity itself
The logo texture reference (the deep red light-sweep image provided) should be used as a subtle fill texture clipped inside the logo letterforms — dark crimson to bright red sweep going diagonally left to right, applied via a clipping mask inside the "LOREK" text shape. This gives the logo a premium metallic-red quality rather than a flat color.

Color Palette

Background Primary: #0A0A0B (near black)
Background Secondary: #0D0D10 (very dark blue-black, cards)
Background Tertiary: #111114 (slightly lighter for bands)
Accent Gold: #C8B89A (warm sand gold — NOT yellow gold)
Accent Red: #8B1A1A (deep crimson — used very sparingly for hover states and micro-accents, referencing brand heritage)
Text Primary: #F0EDE6 (warm off-white)
Text Secondary: #A8A49E (medium muted warm gray)
Text Tertiary: #5A5854 (dark muted gray, labels)
Border Default: rgba(255,255,255,0.07)
Border Accent: rgba(200,184,154,0.25) — gold tint border
Card Background: #0D0D10
Card Border: #1E1E24

Typography

Display / Hero Headline: Trajan Pro 3, Italic, weight Regular (400) — same as logo family, creates cohesion
Section Headlines: Trajan Pro 3, Regular — for subheadings and section titles
Body / UI Text: DM Sans, weight 300 (Light) and 400 (Regular)
Labels / Eyebrows: DM Sans, weight 500, letter-spacing 0.18em, all uppercase, 10-11px
Testimonial: Trajan Pro 3, Italic, large scale
All font imports: Google Fonts for DM Sans; Trajan Pro 3 via Adobe Fonts or licensed file


FRAME SETUP
Desktop Frame

Width: 1440px
Frame name: "Lorek — Home — Desktop"
Auto Layout: Vertical, spacing 0, clip content ON
Background fill: #0A0A0B

Component Grid

12-column grid
Column width: 72px
Gutter: 24px
Margin: 80px left and right
Use layout grids on every section frame


SECTION 1 — NAVIGATION BAR
Frame specs

Width: 1440px, Height: 64px
Fill: #0A0A0B
Bottom border: 0.5px stroke, color #1E1E24
Position: sticky (annotate for dev)
Padding: 0 80px

Elements — left to right

Logo: "LOREK" in Trajan Pro 3 Italic, 18px, with red texture clipping mask applied. Horizontally left-aligned.
Spacer: auto (pushes nav links to center)
Nav links group (auto layout horizontal, gap 8px): "The Firm" / "Services" / "Industries" / "Insights" — each in DM Sans Regular 13px, color #8A8880, hover state color #F0EDE6 with transition annotation
Spacer: auto
CTA Button "Engage": DM Sans Medium 13px, color #0A0A0B, fill #C8B89A, border-radius 6px, padding 8px 20px, hover fill #B8A88A

States to design

Default nav
Scrolled nav (adds backdrop: blur annotation, slightly lighter background #111114)
Active link (color #C8B89A, no underline)


SECTION 2 — HERO
Frame specs

Width: 1440px, Height: 100vh (annotate as full viewport height — design at 900px)
Fill: #0A0A0B
No photography

Background texture layer

Create a geometric grid using a repeating line pattern
Horizontal lines: 1px height, fill rgba(200,184,154,0.045), spaced every 48px vertically
Vertical lines: 1px width, fill rgba(200,184,154,0.045), spaced every 48px horizontally
This creates a fine grid that is barely visible — atmosphere only, not structure
Layer name: "Grid Texture" — set to 100% opacity but lines themselves are extremely faint
Add a radial gradient overlay on top of grid: center point at 30% left, 40% top, inner color transparent, outer color #0A0A0B at 80% opacity — this vignettes the grid so it fades at edges

Left content column (cols 1–7)

Top padding from nav: 140px
Eyebrow label: DM Sans 500, 10px, letter-spacing 0.2em, uppercase, color #C8B89A — text: "STRATEGIC ADVISORY & PRIVATE EQUITY"
Margin below eyebrow: 24px
Hero headline: Trajan Pro 3 Italic, 64px, line-height 1.05, color #F0EDE6, max-width 580px

Line 1: "We elevate"
Line 2: "what others" — this line in color #C8B89A (gold), creating emphasis
Line 3: "leave behind."


Margin below headline: 24px
Subtext: DM Sans Light 300, 16px, line-height 1.7, color #7A7872, max-width 420px — "Lorek partners with companies globally — combining disciplined strategy with selective equity participation to create measurable, lasting value."
Margin below subtext: 40px
CTA row (auto layout horizontal, gap 16px, align center):

Primary CTA: "Begin the conversation" — DM Sans Medium 13px, fill #C8B89A, color #0A0A0B, border-radius 7px, padding 12px 26px
Secondary CTA: "Our services →" — DM Sans Regular 13px, color #8A8880, no border, no fill, hover color #F0EDE6



Right content column (cols 9–12)

Vertical gold divider line: 1px wide, fill #C8B89A at 20% opacity, full height of content area, positioned at left edge of right column
Three stacked metric callouts inside right column, each separated by a thin horizontal line (1px, rgba(255,255,255,0.06)):

Metric 1: Number "40+" in Trajan Pro 3 Regular 36px color #F0EDE6, label "Companies Served" in DM Sans 10px uppercase letter-spaced color #5A5854
Metric 2: Number "5" same style, label "Core Sectors"
Metric 3: Number "3" same style, label "Continents Active"


Metrics group starts at same top position as subtext

Decorative element

Subtle arc or quarter-circle in bottom-right of hero: stroke only, 1px, color rgba(200,184,154,0.08), radius approximately 600px — creates a barely-visible elegant curve in the corner


SECTION 3 — CREDENTIAL STRIP
Frame specs

Width: 1440px, Height: 80px
Fill: #111114
Top border: 0.5px #1A1A1F
Bottom border: 0.5px #1A1A1F

Layout

Four equal columns, each separated by a 1px vertical divider (rgba(255,255,255,0.06))
Each column: centered content, auto layout vertical, gap 4px
Stat number: Trajan Pro 3 Regular, 26px, color #F0EDE6
Stat label: DM Sans 500, 10px, uppercase, letter-spacing 0.12em, color #5A5854

Four stats

"40+" / Companies Served
"5" / Core Sectors
"3" / Active Continents
"100%" / Retained Clients


SECTION 4 — ABOUT THE FIRM
Frame specs

Width: 1440px, Height: auto (min 480px)
Fill: #0A0A0B
Padding: 96px 80px

Layout: two columns

Left column (cols 1–2): narrow

Section label: DM Sans 500, 10px, uppercase, letter-spacing 0.2em, color #C8B89A, rotated 0° (horizontal, left-aligned)
Text: "WHO WE ARE"


Right column (cols 3–12):

Section headline: Trajan Pro 3 Regular, 32px, color #F0EDE6, margin-bottom 24px — "Two capabilities. One partnership model."
Paragraph 1: DM Sans Light 300, 15px, line-height 1.75, color #6A6660, max-width 640px
Paragraph 2: same style
Margin below paragraphs: 36px
Two dark sub-cards in a row (auto layout horizontal, gap 12px):

Each card: fill #0D0D10, border 0.5px #1E1E24, border-radius 10px, padding 20px 22px, width 50%
Card label: DM Sans 500, 12px, color #C8B89A, margin-bottom 8px
Card body: DM Sans Light 300, 13px, color #4A4844, line-height 1.6
Card 1: "Advisory" — "Expert strategic guidance across the full business lifecycle."
Card 2: "Private Equity" — "Selective co-investment aligned with your operational goals."






SECTION 5 — SERVICES
Frame specs

Width: 1440px, Height: auto
Fill: #0D0D10
Padding: 80px 80px

Header

Section label: DM Sans 500, 10px, uppercase, letter-spacing 0.18em, color #C8B89A — "WHAT WE DO"
Margin below: 32px

Service grid

2 columns x 2 rows, gap 1px (gap itself acts as divider — the section background #1E1E24 shows through the gap)
Each card: fill #0D0D10, padding 32px 28px, no border-radius
On hover: fill transitions to #131318, top border 1px color #C8B89A appears (annotate as CSS transition)

Each card contains (top to bottom)

Service name: Trajan Pro 3 Regular, 18px, color #D4CFC8, with "↗" arrow in #C8B89A at far right (space-between layout)
Margin: 14px
Outcome line: DM Sans 500, 11px, uppercase, letter-spacing 0.1em, color #C8B89A — a one-line impact statement e.g., "EBITDA margin improvement"
Margin: 10px
Description: DM Sans Light 300, 13px, line-height 1.65, color #5A5854

Four services

Strategy & Organisation / "Long-term competitive positioning" / Operating model reviews, digital optimisation, AI utilisation, portfolio rebalancing and sustainable growth architecture.
Operational Transformation / "EBITDA margin improvement" / Launch effective transformations resulting in reduced cost overruns, increased win rates and measurable operational uplift.
Commercialisation & Sales / "Profitable, sustainable growth" / Lead multi-year revenue journeys with improved win rates, targeted portfolios and higher delivered margin.
Investment Sourcing / "Smart capital, streamlined operations" / Prepare, source and co-invest — ensuring day-to-day operations remain profitable throughout the process.


SECTION 6 — INDUSTRIES
Frame specs

Width: 1440px, Height: auto (min 140px)
Fill: #0A0A0B
Padding: 48px 80px
Top border: 0.5px #1A1A1F

Header

Section label: DM Sans 500, 10px, uppercase, letter-spacing 0.18em, color #C8B89A — "INDUSTRIES"
Margin below: 20px

Pills row

Auto layout horizontal, gap 10px, wrap
Each pill: border 0.5px #2A2A30, border-radius 40px, padding 10px 20px, fill transparent
Pill text: DM Sans Regular, 13px, color #6A6864
Hover state: border-color #C8B89A, text color #C8B89A, fill rgba(200,184,154,0.05)

Five pills

Real Estate & Construction
Engineering & Robotics
Media, Arts & Advertising
Consumer Goods
IT & Communication


SECTION 7 — TESTIMONIAL
Frame specs

Width: 1440px, Height: auto (min 280px)
Fill: #0F0F13
Padding: 80px 80px
Top border: 0.5px #1A1A1F
Bottom border: 0.5px #1A1A1F

Content (centered, max-width 640px, horizontally centered on page)

Opening quote mark: Trajan Pro 3 Italic, 64px, color #C8B89A at 30% opacity, margin-bottom -20px (overlaps into quote text slightly)
Quote text: Trajan Pro 3 Italic, 22px, line-height 1.6, color #D4CFC8, margin-bottom 28px

"Effective, experienced and agile. Lorek reduced our costs and significantly improved performance of our portfolio."


Attribution: DM Sans Regular, 11px, uppercase, letter-spacing 0.1em, color #5A5854

"Managing Director — Global Portfolio Company"




SECTION 8 — VALUES
Frame specs

Width: 1440px, Height: auto
Fill: #0A0A0B
Padding: 80px 80px

Header

Section label: DM Sans 500, 10px, uppercase, letter-spacing 0.18em, color #C8B89A — "HOW WE OPERATE"
Margin below: 32px

Values grid

3 columns x 2 rows, gap 10px
Each value card: fill transparent, border 0.5px #1E1E24, border-radius 8px, padding 20px
Value name: DM Sans 500, 13px, color #C8B89A, margin-bottom 8px
Value description: DM Sans Light 300, 12px, line-height 1.55, color #4A4844

Six values displayed (of nine)

Transparency — Manage resources openly and report measurable client outcomes.
Discretion — Serve with appropriate sensitivity across all client engagements.
Excellence — Maintain the highest standards in every service delivered.
Partnership — Build capability that sustains improvement after our engagement ends.
Global Network — Deliver solutions through our international partner relationships.
People — Create an unrivalled environment for exceptional talent to thrive.


Below grid: text link "View all nine principles →" in DM Sans Regular 12px, color #5A5854, hover #C8B89A


SECTION 9 — CONTACT
Frame specs

Width: 1440px, Height: auto
Fill: #111114
Padding: 96px 80px
Top border: 0.5px #1A1A1F

Layout: two columns, gap 80px
Left column (cols 1–5)

Section label: DM Sans 500, 10px, uppercase, letter-spacing 0.18em, color #C8B89A — "GET IN TOUCH"
Margin: 16px
Headline: Trajan Pro 3 Regular, 32px, color #F0EDE6, line-height 1.25 — "Let's talk about your business."
Margin: 16px
Body: DM Sans Light 300, 14px, color #5A5854, line-height 1.7 — "Our experienced team will advise on the potential way forward. No templates, no obligation — just a direct conversation."
Margin: 32px
Geography callout box: fill #0D0D10, border 0.5px #1E1E24, border-radius 8px, padding 16px 18px

Label: DM Sans 500, 10px, uppercase, letter-spacing 0.1em, color #3A3834 — "OUR REACH"
Text: DM Sans Regular, 13px, color #6A6864, line-height 1.7 — "Europe · Middle East · Asia Pacific"



Right column (cols 7–12)

Four inputs stacked, gap 10px:

Each input: fill #0A0A0B, border 0.5px #2A2A30, border-radius 7px, padding 11px 14px, font DM Sans Regular 13px, color #D4CFC8, placeholder color #3A3834
Focus state: border-color #C8B89A (annotate)
Fields: "Your name" / "Company" / "Email address" / "Tell us about your challenge..." (textarea, height 88px, resize none)


Submit button: full width, fill #C8B89A, color #0A0A0B, DM Sans Medium 13px, border-radius 7px, padding 13px, margin-top 6px — "Send message"
Hover state on button: fill #B8A88A


SECTION 10 — FOOTER
Frame specs

Width: 1440px, Height: 56px
Fill: #080808
Top border: 0.5px #111114
Padding: 0 80px

Layout: space-between, align center

Left: Logo "LOREK" in Trajan Pro 3 Italic, 14px, color #2A2824 (very dark, almost invisible — deliberate)
Center: Optional charity cause link — DM Sans Regular, 11px, color #2A2824, hover #5A5854
Right: "© 2025 Lorek Strategic Partners" — DM Sans Regular, 11px, color #2A2824


COMPONENT LIBRARY TO BUILD

Nav bar (default + scrolled states)
Logo with red texture clipping mask
Primary CTA button (default + hover)
Ghost CTA link (default + hover)
Service card (default + hover + expanded)
Industry pill (default + hover)
Value card
Dark input field (default + focus + error)
Credential stat unit
About dual card
Metric callout (hero right column)
Testimonial block
Geography callout box
Footer bar


DESIGN NOTES FOR FIGMA SETUP

Use Figma Variables for all color tokens listed above
Use Auto Layout on every frame — no absolute positioning except the hero grid texture
Create a "Styles" panel with all text styles named: Display/Hero, Heading/Section, Body/Regular, Body/Light, Label/Uppercase, Label/Muted
All sections should be separate top-level frames that stack inside a single parent "Homepage" frame using Auto Layout vertical
Annotate all hover and scroll states using Figma Prototyping connections or a separate annotation layer
The red texture image (provided by client) should be imported as an image fill, clipped to the logo letterforms using a vector mask on the text outline

