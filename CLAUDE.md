# adkivo accent

## Project Overview
# Project
High-impact, conversion-focused landing page for Adkivo - a performance marketing agency that helps Moroccan e-commerce brands escape the "cheap lead trap" and build profitable ad campaigns.

This is NOT a traditional agency site. This is a statement. Bold, direct, and unapologetically focused on one thing: making clients money.

# Design Philosophy
DARK. BOLD. EDGY. CONFIDENT.

Think: High-end tech startup meets rebellious marketing agency. We're not here to be "professional" and boring. We're here to call out the BS in the industry and show a better way.

Vibe: Cyberpunk meets premium SaaS. Spotify meets Stripe. Dark mode, neon accents, bold typography, smooth animations.

# Target Audience
COD e-commerce brand owners in Morocco who are:
- Tired of agencies that overpromise and underdeliver
- Sick of "cheap CPL" that never converts
- Ready to work with someone who tells the truth (even when it hurts)
- Want results, not excuses
- Skeptical of marketing BS

# Primary Goal
Convert visitors into booked strategy calls. But make them WANT to work with us because we're different, not because we're desperate.

# Stack
- HTML5 / CSS3 / Vanilla JavaScript
- GSAP for smooth scroll animations (or pure CSS if keeping lightweight)
- Three.js for subtle 3D background effects (optional - only if doesn't hurt performance)
- Intersection Observer for scroll-triggered animations
- Lottie for micro-animations (optional)
- NO frameworks - pure speed

# Color Palette - DARK MODE DOMINANCE
```css
/* Backgrounds */
--bg-primary: #0A0A0A;        /* Deep black */
--bg-secondary: #111111;      /* Slightly lighter black */
--bg-card: #1A1A1A;          /* Card backgrounds */
--bg-elevated: #222222;       /* Hover states */

/* Accent Colors - NEON VIBES */
--accent-primary: #00FF88;    /* Neon green - CTAs, success */
--accent-secondary: #00D9FF;  /* Electric blue - highlights */
--accent-warning: #FF3366;    /* Hot pink - urgency, warnings */
--accent-purple: #A855F7;     /* Purple - premium elements */

/* Text */
--text-primary: #FFFFFF;      /* Pure white */
--text-secondary: #B0B0B0;    /* Light gray */
--text-muted: #666666;        /* Muted gray */

/* Gradients */
--gradient-primary: linear-gradient(135deg, #00FF88 0%, #00D9FF 100%);
--gradient-secondary: linear-gradient(135deg, #FF3366 0%, #A855F7 100%);
--gradient-dark: linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%);
```

# Typography - BOLD AND MODERN

Primary Font: 
- Headings: "Space Grotesk" or "Inter" (bold, geometric, modern)
- Body: "Inter" (clean, readable)

Font Sizes:
- Hero Headline: 72-96px desktop / 40-56px mobile (MASSIVE)
- Section Headlines: 48-64px desktop / 32-40px mobile
- Subheadlines: 24-32px desktop / 20-24px mobile
- Body: 18-20px desktop / 16-18px mobile
- Small text: 14-16px

Font Weights:
- Headlines: 700-900 (extra bold)
- Subheads: 600-700 (semi-bold to bold)
- Body: 400-500 (regular to medium)

# Layout System

Max Width: 1400px (wider than typical for modern feel)
Padding: 120px vertical sections desktop / 80px mobile
Grid: 12-column for flexibility

Spacing Scale:
- xs: 8px
- sm: 16px
- md: 24px
- lg: 48px
- xl: 96px
- 2xl: 160px

# Design Elements

## Cards
- Dark background (#1A1A1A)
- Subtle border: 1px solid rgba(255,255,255,0.1)
- Border radius: 16px
- Padding: 40px
- Hover: Lift effect + glow (box-shadow with accent color)
- Backdrop blur for glassmorphism effect (optional)

## Buttons
Primary CTA:
- Background: Neon green (#00FF88)
- Text: Black (#0A0A0A) - high contrast
- Padding: 18px 36px
- Border radius: 12px
- Font: Bold, 16-18px
- Hover: Scale(1.05) + glow effect
- Active: Scale(0.98)

Secondary CTA:
- Border: 2px solid #00FF88
- Background: Transparent
- Text: #00FF88
- Same padding/radius
- Hover: Fill with #00FF88, text black

## Animations

Scroll Animations:
- Fade up (elements appear from bottom)
- Stagger delay (cards appear one by one)
- Parallax on background elements (subtle)
- Smooth scroll (ease-out)

Hover Effects:
- Cards: Lift + glow
- Buttons: Scale + brightness
- Links: Underline slide-in from left
- Images: Zoom + brightness increase

Micro-animations:
- Numbers count up when in viewport
- Progress bars fill on scroll
- Pulse effect on CTA buttons
- Gradient shift on hover

## Background Effects

Option 1: Animated Gradient Mesh
- Subtle moving gradients in background
- Dark base with neon accent colors
- Slow, smooth animation

Option 2: Particle Effect
- Small dots/particles floating
- Connect when close (constellation effect)
- Neon green/blue colors
- Very subtle, not distracting

Option 3: Grid Pattern
- Cyberpunk-style grid lines
- Fade in/out based on scroll
- Neon accent color
- Perspective effect

Use ONLY ONE background effect. Keep it subtle. Performance > flashiness.

# Page Structure - COMPLETELY DIFFERENT LAYOUT

=======================================================
HERO SECTION - FULL SCREEN IMPACT
=======================================================

Layout: Full viewport height, centered content

Background: 
- Animated gradient or particle effect
- Dark base with neon accents moving slowly

Content (Center aligned):

Pre-headline (small, neon green):
"For Moroccan E-commerce Brands Tired of BS"

Main Headline (HUGE, white, bold):
"Stop Buying Leads.
Start Buying Customers."

Subheadline (light gray, 24px):
"Most agencies sell you dreams and dashboards. We sell you revenue. No fluff. No excuses. Just results."

Two CTAs (side by side):
[Primary] "Show Me How" (neon green button)
[Secondary] "See The Proof" (outline button, scrolls to case studies)

Scroll Indicator:
Small animated arrow or text: "Scroll to see why we're different ↓"
Bouncing animation

Trust Bar (bottom of hero, subtle):
"30+ Brands | 3.2x Avg ROI | 94% Retention | Casablanca"

NO image in hero. Pure typography + background effect. Bold statement.

=======================================================
MANIFESTO SECTION - BRAND POSITIONING
=======================================================

Layout: Single column, centered, max-width 900px

Background: Solid black

Content:

Small Label (neon blue):
"Our Philosophy"

Headline (white, 48px):
"Everyone Promises You Leads.
We Promise You Truth."

Body Copy (large, 20px, light gray, generous line height):

"Here's what most agencies won't tell you:

Cheap leads are expensive. A 10 DH lead that never buys costs you more than a 30 DH lead that converts.

Meta doesn't care about your business. It cares about engagement. So it sends you everyone who clicks cheaply—regardless of buying intent.

Targeting won't save you. If your message attracts the wrong people, no amount of exclusions will fix it.

We don't play that game.

At Adkivo, we optimize for one metric: cost per customer. Not cost per lead. Not cost per click. Cost per actual, revenue-generating customer.

Everything else is noise."

CTA (neon green button, centered):
"I Want This Honesty →"

=======================================================
THE PROBLEM - VISUAL GRID LAYOUT
=======================================================

Layout: 3 columns desktop, 1 column mobile

Background: Dark with subtle grid pattern

Section Label (neon pink):
"What's Broken"

Headline (white, 56px):
"Why Your Ads Aren't Working"

3 Problem Cards (dark cards with hover glow):

CARD 1:
Icon: ❌ (or custom icon, neon red)
Title: "You're Optimizing for Vanity"
Body: "500 leads at 8 DH CPL looks amazing in reports. But if only 15 convert, you just paid 266 DH per customer. Your agency celebrates. Your bank account doesn't."

CARD 2:
Icon: 🎯 (or custom icon, neon red)
Title: "Your Message is Generic"
Body: "'Amazing product! Order now!' speaks to everyone. Which means it speaks to no one. You attract browsers, not buyers. That's not a targeting problem. That's a messaging problem."

CARD 3:
Icon: 📊 (or custom icon, neon red)
Title: "You're Measuring Wrong Things"
Body: "Impressions, clicks, CPL—all meaningless if they don't translate to revenue. Your current agency tracks what makes THEM look good. Not what makes YOU money."

Bottom Text (centered, neon green):
"Sound familiar? You're not alone. 87% of brands we audit have these exact problems."

=======================================================
THE SOLUTION - ASYMMETRIC LAYOUT
=======================================================

Layout: Split screen - 40% text / 60% visual

Background: Black with neon green accent line separating

LEFT SIDE (Text):

Label (neon blue):
"The Adkivo Method"

Headline (white, 48px):
"How We Actually Fix This"

3-Step Process (vertical timeline with neon green connector line):

STEP 1:
Number: "01" (large, neon green)
Title: "Audit the Truth"
Body: "We find where you're bleeding money. Not what you think is wrong—what the data shows is wrong. Most agencies skip this because it takes actual work."

STEP 2:
Number: "02" (large, neon green)
Title: "Fix the Message"
Body: "We rewrite your ads to speak to buyers at each stage of awareness. Not one generic message. Five specific messages. Each designed to convert a specific mindset."

STEP 3:
Number: "03" (large, neon green)
Title: "Track What Matters"
Body: "We measure cost per customer, not cost per lead. If it doesn't make you money, we don't optimize for it. Simple."

CTA: "I Want This →"

RIGHT SIDE (Visual):
- Animated data visualization showing transformation
- OR: Before/after dashboard comparison
- OR: 3D floating cards showing the process
- Make it visually striking, modern, tech-forward

=======================================================
CASE STUDIES - CARD CAROUSEL/GRID
=======================================================

Background: Dark with subtle gradient

Section Label (neon purple):
"The Receipts"

Headline (white, 56px):
"Results That Actually Matter"

Subheadline (gray):
"Not cherry-picked wins. Not inflated numbers. Just what actually happened."

3 Case Study Cards (large, dark cards with neon accent borders):

CARD 1:
Header: "Youssef M. | Supplement Brand"
Location: Casablanca

Visual Stat Comparison (large, bold):
Before: "500 Leads → 15 Customers" (red/muted)
After: "180 Leads → 58 Customers" (neon green)

Result (huge number, neon green): "+287% ROI"

Quote:
"I thought 12 DH CPL was good. Adkivo showed me I was paying 333 DH per customer. They got it down to 69 DH. Same budget, 4x more customers."

Bottom: [Read Full Story →]

CARD 2:
Header: "Amina K. | Fashion Brand"
Location: Marrakech

Before: "450 Leads → 40 Sales" (red/muted)
After: "220 Leads → 118 Sales" (neon green)

Result: "+195% Revenue"

Quote:
"Six months with my old agency: nothing. Six weeks with Adkivo: tripled sales. The difference? They actually know what they're doing."

CARD 3:
Header: "Mehdi R. | Electronics"
Location: Rabat

Before: "510 Leads → 46 Sales" (red/muted)
After: "240 Leads → 73 Sales" (neon green)

Result: "+58% More Sales, -20% Ad Spend"

Quote:
"They fixed my messaging in one week. Results in three. That's it. No BS. No excuses. Just work."

Interactive Element:
- Hover to see full details
- Click to expand full case study
- Carousel on mobile

=======================================================
STATS SECTION - FULL WIDTH GRID
=======================================================

Background: Pure black with neon green top border

Layout: 4 columns desktop, 2 columns mobile

4 Large Stat Blocks (minimal design):

STAT 1:
Number: "3.2x" (huge, neon green, animated count-up)
Label: "Average ROI Improvement"
Subtext: "Across 30+ brands, 6-month average"

STAT 2:
Number: "68%" (huge, neon blue)
Label: "Reduction in Wasted Ad Spend"
Subtext: "By fixing messaging, not tweaking targeting"

STAT 3:
Number: "94%" (huge, neon purple)
Label: "Client Retention Rate"
Subtext: "They stay because it works"

STAT 4:
Number: "87%" (huge, neon pink)
Label: "First-Month Improvement Rate"
Subtext: "Most see results in 30 days"

Bottom Text (centered, muted):
"Updated monthly with real client data. No inflated numbers."

=======================================================
ANTI-PITCH SECTION - UNIQUE POSITIONING
=======================================================

Background: Dark gray (#111111)

Layout: Centered, max-width 1000px

Label (neon red):
"The Part Where We're Supposed to Pitch You"

Headline (white, 56px):
"We Don't Want Everyone"

Body (large, 20px, generous spacing):

"Most agencies take anyone with a credit card. We don't.

If you:
❌ Want 5 DH leads (doesn't exist with quality)
❌ Only care about vanity metrics
❌ Expect magic in 48 hours
❌ Won't implement what we recommend

We're not for you. And that's fine.

But if you:
✅ Want actual ROI, not dashboard theater
✅ Are willing to test for 60-90 days
✅ Understand quality > quantity
✅ Want someone who tells the truth

Let's talk."

CTA (neon green, centered):
"See If We're a Fit →"

=======================================================
FAQ - ACCORDION WITH TWIST
=======================================================

Background: Black

Section Label (neon blue):
"Questions"

Headline (white, 48px):
"What You're Probably Wondering"

FAQ Accordion (dark cards, expand on click):

Q1: "Why are you so aggressive/confident?"
A: "Because we have the receipts. 30+ brands. 3.2x average ROI. 94% retention. When you deliver results, you don't need to be modest. False humility wastes everyone's time."

Q2: "What if I'm already working with an agency?"
A: "Great. We'll audit what they're doing and tell you the truth. If they're doing good work, we'll tell you. If they're milking you while delivering nothing, we'll tell you that too. Free 30-min audit. No pitch."

Q3: "How much do you charge?"
A: "Two options:

One-Time Audit: 3,500 DH (refunded if you sign up for management)
Full-time: You get the strategy, we show you what's broken, you implement.

Monthly Management: 8,500 DH/month + ad budget
We handle everything. Minimum 3 months because real results take time.

Why more than typical agencies? Because we focus on ROI, not cheap CPL. And results cost more than excuses."

Q4: "Do you guarantee results?"
A: "We guarantee effort and honesty. We can't guarantee specific numbers because every business is different.

But here's what we CAN say: We've never had a client implement our strategy correctly and NOT see improvement. 

The question isn't if it works. The question is if you'll actually do it."

Q5: "What makes you different from every other agency?"
A: "Most agencies want you to succeed just enough to keep paying them.

We want you to succeed so much that you'd be stupid to leave.

That's the difference."

Q6: "I'm in [city]. Do you work outside Casablanca?"
A: "Yes. Everything is remote. Casa, Marrakech, Rabat, Tanger, wherever. Location doesn't matter. Results do."

=======================================================
FINAL CTA - BOLD CLOSE
=======================================================

Background: Neon green to black gradient (top to bottom)

Layout: Centered, full-width

Content (black text on neon green, top section):

Headline (huge, bold, black):
"Ready to Stop Wasting Money?"

Subheadline (black, 24px):
"Book a free strategy call. We'll show you what's broken. No pitch. No BS."

Primary CTA (black button on green background):
"Book Your Free Audit"

Alternative (smaller, below):
"Or message us on WhatsApp: +212 754 197 546"

Bottom Section (black background):

Small text (gray):
"Next available slot: [Dynamic date 3-4 days out]"
"Limited to 5 audits per month. We're selective about who we work with."

=======================================================
FOOTER - MINIMAL
=======================================================

Background: Pure black (#0A0A0A)

Layout: 3 columns desktop, stacked mobile

COLUMN 1:
Logo: "Adkivo" (neon green)
Tagline: "Performance marketing for brands who want results, not excuses."

COLUMN 2:
Contact:
Email: adkivo2030@gmail.com
WhatsApp: +212 754 197 546
Location: Casablanca, Morocco

COLUMN 3:
Links:
- Case Studies
- Free Audit
- LinkedIn

Social Icons (neon green on hover):
LinkedIn

Bottom Bar:
"© 2025 Adkivo. We fix lead quality. | Casablanca, Morocco"

=======================================================
SPECIAL FEATURES - MAKE IT MEMORABLE
=======================================================

# 1. Cursor Effect
Custom cursor that leaves a neon green trail on desktop
OR cursor changes to "→" when hovering CTAs

# 2. Scroll Progress Bar
Thin neon green line at top showing scroll progress

# 3. Smooth Page Transitions
Sections fade/slide in smoothly as you scroll

# 4. Interactive Stats
Numbers count up when scrolled into view
Progress bars fill with animation

# 5. Parallax Backgrounds
Subtle parallax effect on background elements

# 6. Glowing Effects
Cards glow with neon accent color on hover
CTAs have subtle pulse animation

# 7. Micro-interactions
Buttons respond to hover with scale + brightness
Links underline slides in from left

=======================================================
PERFORMANCE REQUIREMENTS
=======================================================

# Critical Rules
- Page load under 3 seconds (even with animations)
- Mobile-first (80% of traffic)
- Animations are ENHANCEMENT, not requirement
- If animation hurts performance, kill it
- Test on 3G connection

# Optimization
- Lazy load everything below fold
- Compress images to WebP
- Defer non-critical JavaScript
- Inline critical CSS
- Use CSS animations over JavaScript when possible

# Accessibility
- Proper heading hierarchy
- Alt text on all images
- Keyboard navigable
- High contrast (already covered with dark mode + neon)
- Reduced motion media query (disable animations for users who prefer)

=======================================================
DESIGN DONT'S
=======================================================

❌ Don't make it look like every other agency site
❌ Don't use stock photos (illustrations/graphics only)
❌ Don't use more than 4 accent colors
❌ Don't add animations that don't serve a purpose
❌ Don't make text too small (accessibility matters)
❌ Don't sacrifice performance for flashiness
❌ Don't use light mode (this is DARK MODE ONLY)

=======================================================
TONE & VOICE
=======================================================

This site should feel:
- Confident (borderline cocky, but backed by results)
- Direct (no corporate speak, no fluff)
- Honest (brutally so)
- Modern (cutting-edge, tech-forward)
- Exclusive (we don't want everyone)

Copy should:
- Use short sentences
- Call out BS directly
- Show, don't tell (data over claims)
- Be conversational but professional
- Not apologize for being expensive/selective

Avoid:
- Corporate jargon
- Fake humility
- Overpromising
- Being "too nice"
- Generic marketing speak

=======================================================
INSPIRATION REFERENCES
=======================================================

Design Vibe:
- Spotify (dark mode, bold typography, neon accents)
- Stripe (clean, modern, confident)
- Linear (minimalist, high-quality animations)
- Apple (premium, focused)
- Cyberpunk aesthetic (neon, dark, edgy)

NOT like:
- Traditional agency sites (boring, corporate)
- Cluttered dashboards
- Stock photo heavy sites
- Generic blue/white corporate sites

=======================================================
BUILD PRIORITY
=======================================================

Build in this order:
1. Hero (first impression is everything)
2. Manifesto (brand positioning)
3. Problem (pain agitation)
4. Solution (how we fix it)
5. Case Studies (proof)
6. Stats (social proof)
7. Anti-Pitch (unique positioning)
8. Final CTA (conversion)
9. FAQ (objection handling)
10. Footer

Test after each section. Make sure it looks fire before moving to next.

=======================================================
CONTACT INFO
=======================================================

Phone/WhatsApp: +212 754 197 546
Email: adkivo2030@gmail.com
LinkedIn: https://www.linkedin.com/company/adkivo/
Location: Casablanca, Morocco

WhatsApp Link:
https://wa.me/212754197546?text=Hi%20Adkivo,%20I%20want%20to%20stop%20wasting%20money%20on%20bad%20leads

=======================================================
FINAL NOTES
=======================================================

This is NOT a safe, corporate website.

This is a statement.

Every element should scream: "We're different. We're confident. We deliver."

Make it IMPOSSIBLE to confuse us with any other agency in Morocco.

Bold. Dark. Neon. Direct. Results-focused.

Let's build something that makes people say: "Damn, who made this?"

GO.
<!-- Describe what this project does and its purpose -->

## Architecture

<!-- Describe the high-level architecture, key components, and how they interact -->

## Development Setup

<!-- List prerequisites and steps to set up the development environment -->

## Commands

<!-- List common commands used in this project, e.g.: -->
<!-- npm install       — install dependencies -->
<!-- npm run dev       — start development server -->
<!-- npm run build     — build for production -->
<!-- npm test          — run tests -->

## Conventions

<!-- Document coding conventions, naming patterns, or style rules specific to this project -->

## Notes for Claude

<!-- Add any specific instructions or context for Claude when working on this project -->
