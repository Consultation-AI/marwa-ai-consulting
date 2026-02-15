# Planning Guide

A professional consulting service website that showcases EdConnect's expertise in helping companies, organizations, and schools implement AI solutions, featuring a client inquiry form and seamless integration with custom domain hosting.

**Experience Qualities**:
1. **Professional** - Establishes credibility and expertise through clean design and authoritative content
2. **Approachable** - Welcomes potential clients with warm, inviting language that demystifies AI adoption
3. **Trustworthy** - Builds confidence through clear value propositions and transparent communication channels

**Complexity Level**: Content Showcase (information-focused)
This is primarily a marketing/landing page with an integrated contact form, designed to present services and capture leads rather than provide complex interactive functionality.

## Essential Features

### Hero Section
- **Functionality**: Displays compelling headline, subheadline, and call-to-action
- **Purpose**: Immediately communicate value proposition and engage visitors
- **Trigger**: Page load
- **Progression**: Visitor lands on page → Sees hero message → Clicks CTA → Scrolls to contact form
- **Success criteria**: Clear messaging visible above the fold, CTA button prominent

### Services Overview
- **Functionality**: Displays key AI consulting services offered to different sectors
- **Purpose**: Educate visitors on specific offerings for companies, organizations, and schools
- **Trigger**: User scrolls or navigates to services section
- **Progression**: User reads hero → Scrolls down → Reviews service cards → Understands offerings
- **Success criteria**: 3-4 service categories clearly differentiated with icons and descriptions

### Contact Form
- **Functionality**: Collects client information (name, email, organization, service interest, message) and sends to info@marwa-ai.us
- **Purpose**: Convert visitors into leads by capturing their information and inquiry details
- **Trigger**: User clicks CTA or scrolls to form section
- **Progression**: User fills name → Enters email → Selects organization type → Describes needs → Submits → Sees confirmation
- **Success criteria**: Form validates inputs, provides clear feedback, and successfully emails submissions

### About/Why Choose Us
- **Functionality**: Presents credentials, approach, and differentiators
- **Purpose**: Build trust and credibility with potential clients
- **Trigger**: User scrolls through page
- **Progression**: User reads services → Wants validation → Reviews credentials → Gains confidence
- **Success criteria**: Clear, concise points about expertise and approach

## Edge Case Handling
- **Form Validation Errors**: Real-time inline validation with helpful error messages for each field
- **Email Delivery Failure**: User sees friendly error message with alternative contact methods displayed
- **Missing Required Fields**: Submit button disabled until all required fields are completed
- **Mobile Navigation**: Hamburger menu collapses navigation on small screens with smooth transitions
- **Slow Network**: Loading states on form submission prevent duplicate submissions

## Design Direction
The design should evoke innovation, professionalism, and forward-thinking expertise while remaining warm and accessible—avoiding the cold, sterile feel often associated with tech services.

## Color Selection
A sophisticated palette balancing technological authority with approachable warmth.

- **Primary Color**: Deep purple (oklch(0.45 0.15 290)) - Conveys innovation, intelligence, and creativity associated with AI
- **Secondary Colors**: 
  - Soft lavender (oklch(0.85 0.08 290)) for backgrounds and subtle accents
  - Warm slate (oklch(0.35 0.02 260)) for supporting text and borders
- **Accent Color**: Electric cyan (oklch(0.70 0.15 200)) - Creates striking contrast for CTAs and important interactive elements
- **Foreground/Background Pairings**: 
  - Background (Soft White oklch(0.98 0.005 290)): Deep slate text (oklch(0.25 0.02 260)) - Ratio 13.8:1 ✓
  - Primary (Deep Purple oklch(0.45 0.15 290)): White text (oklch(1 0 0)) - Ratio 7.2:1 ✓
  - Accent (Electric Cyan oklch(0.70 0.15 200)): Deep slate text (oklch(0.25 0.02 260)) - Ratio 6.8:1 ✓
  - Muted (Lavender oklch(0.85 0.08 290)): Medium slate text (oklch(0.40 0.02 260)) - Ratio 5.1:1 ✓

## Font Selection
Typography should communicate both technical expertise and human approachability, avoiding generic corporate feels.

- **Typographic Hierarchy**: 
  - H1 (Hero Headline): Space Grotesk Bold/48px/tight letter spacing (-0.02em) - Technical yet friendly
  - H2 (Section Headers): Space Grotesk Bold/36px/tight letter spacing
  - H3 (Service Titles): Space Grotesk SemiBold/24px/normal spacing
  - Body Text: Inter Regular/16px/relaxed line height (1.7)
  - Small Text (Form Labels): Inter Medium/14px/normal spacing
  - CTA Buttons: Inter SemiBold/16px/slight letter spacing (0.01em)

## Animations
Animations should feel intelligent and purposeful, like AI-assisted experiences—smooth, anticipatory, and never jarring.

- **Scroll Reveals**: Service cards and content sections fade up gently (200ms ease-out) as they enter viewport
- **Button Interactions**: Hover states scale subtly (1.02x) with color shift transition (150ms)
- **Form Focus**: Input fields glow softly on focus with smooth border color transition (200ms)
- **Success States**: Checkmark animation on form submission with satisfying bounce (500ms spring physics)
- **Navigation**: Mobile menu slides in from right with backdrop fade (300ms ease-in-out)

## Component Selection
- **Components**: 
  - Card (service offerings with hover states and subtle shadows)
  - Button (primary CTAs with filled accent color, secondary with outline)
  - Input, Textarea, Label (form elements with floating labels and validation states)
  - Select (dropdown for organization type selection)
  - Badge (service tags and features)
  - Separator (section dividers)
  - Sheet (mobile navigation drawer)
- **Customizations**: 
  - Hero gradient background using mesh gradients (multiple radial gradients with purple/cyan)
  - Custom service cards with icon containers featuring gradient backgrounds
  - Form with progressive validation and animated success state
  - Footer with social links and additional contact methods
- **States**: 
  - Buttons: Default with gradient, hover with scale and brightness increase, active with slight depression, disabled with reduced opacity
  - Inputs: Default with subtle border, focus with cyan glow ring, error with red accent, success with green checkmark
  - Cards: Default with soft shadow, hover with elevated shadow and slight lift
- **Icon Selection**: 
  - Brain (AI/intelligence) for hero or about section
  - Buildings (companies)
  - GraduationCap (schools)
  - UsersThree (organizations)
  - Lightbulb (ideas/innovation)
  - ChartLineUp (growth/results)
  - Envelope (contact)
  - CheckCircle (validation success)
  - ArrowRight (CTAs and navigation)
- **Spacing**: 
  - Section padding: py-16 md:py-24 (vertical rhythm)
  - Container max-width: max-w-7xl with px-4 md:px-8
  - Card gap: gap-6 md:gap-8
  - Form field spacing: space-y-4
  - Button padding: px-6 py-3 for primary, px-4 py-2 for secondary
- **Mobile**: 
  - Hero text scales down (32px on mobile)
  - Service cards stack vertically with full width
  - Navigation collapses to hamburger menu with Sheet component
  - Form fields expand to full width with increased touch targets (min-h-12)
  - Reduced section padding (py-12 on mobile)
