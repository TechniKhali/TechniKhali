# Design Guidelines: Data Engineer Portfolio Website

## Design Approach
**Selected Approach:** Reference-Based with Custom Aesthetic  
Blend the clean card-based layouts of modern portfolio sites (Dribbble, Behance) with the warmth and elegance of boutique branding sites. Draw inspiration from minimal portfolio layouts but infuse with distinctive Sulking Room Pink accent and faith-aligned aesthetic.

**Key Design Principles:**
- Warm sophistication: Professional yet gentle visual identity
- Restrained elegance: Subtle Islamic geometric patterns as accents, not overwhelming
- Content clarity: Data visualizations and technical content presented cleanly
- Faith-conscious refinement: Integrated spiritual elements that enhance rather than distract

## Color Palette
**Primary Accent:** Sulking Room Pink (Farrow & Ball - #C896A4 / rgb(200, 150, 164))  
**Neutrals:** Warm off-white (#FAF9F7), Soft grey (#E8E6E3), Warm taupe (#D4CFC9)  
**Secondary:** Muted gold accent (#C9B899) for highlights and decorative elements  
**Text:** Charcoal grey (#3A3A3A) for primary text, medium grey (#6B6B6B) for secondary

Use Sulking Room Pink for: hero banners, section headers, CTA buttons, link hovers, card accents, and decorative geometric patterns.

## Typography
**Primary Font:** Inter or Plus Jakarta Sans (modern, professional, excellent for data-focused content)  
**Headings:** Font weights 600-700, sizes ranging from 2.5rem (hero) to 1.25rem (section headers)  
**Body Text:** Font weight 400-500, size 1rem with 1.6 line-height for readability  
**Accent Typography:** Optional Arabic calligraphic element for decorative section dividers (use web-safe decorative font or SVG)

Establish clear hierarchy: Hero titles (48-56px) → Section headers (32-36px) → Card titles (20-24px) → Body (16px)

## Layout System
**Spacing Primitives:** Use Tailwind units: 2, 4, 6, 8, 12, 16, 20, 24 (consistent rhythm)  
**Section Padding:** py-20 to py-32 for desktop sections, py-12 to py-16 for mobile  
**Container Max-Width:** max-w-7xl for full sections, max-w-4xl for content-focused areas  
**Grid System:** 12-column responsive grid, projects use 3-column on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)

## Component Specifications

### Navigation
Sticky header with logo/name on left, navigation links centered/right. Include Home | Portfolio | CV | Blog | About | Contact. Subtle underline animation on hover using Sulking Room Pink. Mobile: hamburger menu with smooth slide-in drawer.

### Hero Section (Homepage)
Full-width banner with subtle Sulking Room Pink gradient overlay. Professional headshot on left (circular frame), name and title on right. Tagline: "Using data with intention, clarity, and integrity." Three CTA buttons with blurred backgrounds: View My Work, Download CV, Read My Blog. Height: 70-80vh.

### Skill Cards (Homepage)
Grid of 6-8 skill cards (2 columns mobile, 3-4 desktop). Each card: icon, skill name, brief description. Soft shadows, rounded corners (8px), hover lift effect. Background: warm off-white with Sulking Room Pink accent border on hover.

### Project Cards (Portfolio)
Masonry or equal-height grid layout. Each card includes: thumbnail image, project title, 2-line description, tech stack tags (pill-shaped, muted colors). Hover: gentle scale and shadow increase. Link to dedicated project detail page.

### Project Detail Pages
Hero image banner, project title overlay. Content sections: Overview, Challenge/Solution, Tools & Technologies (icon grid), Screenshots/Diagrams (2-column gallery), GitHub/Demo buttons. Use Islamic geometric pattern as subtle section divider.

### CV Page
Two-column layout (desktop): left sidebar with profile photo, contact info, skills bars; right main content with experience timeline, education, certifications. Mobile: stack vertically. Use Sulking Room Pink for section headers and skill bars. Download CV button prominently placed.

### Blog Section
Blog homepage: Featured post (large card) + grid of recent posts (2-3 columns). Each preview: image, title, date, excerpt, tags. Individual blog template: full-width banner image, title overlay, content in centered max-w-prose container, sidebar with tags/categories. Faith-friendly tags styled with muted gold accents.

### About Me Page
Personal photo (left or right), bio text (opposite side), professional journey timeline, faith-integration section with decorative Islamic geometric divider. Warm, narrative-focused layout.

### Contact Page
Two-column: contact form (left), info/social links (right). Form fields with Sulking Room Pink focus states. Islamic geometric pattern as decorative divider between sections.

### Footer
Three columns: Quick links, Blog categories, Social icons. Subtle Islamic pattern border on top. Copyright and optional faith quote in smaller text.

## Islamic Geometric Elements
Use as subtle accents: section dividers (thin line patterns), card corner decorations, background watermarks (very low opacity), header/footer borders. Keep patterns minimal and elegant – suggest 2-3 repeating geometric motifs maximum. Never overwhelm content.

## Images
**Hero Section:** Professional headshot (circular crop, ~400px diameter)  
**Project Cards:** Project thumbnails/screenshots (16:9 aspect ratio, ~800x450px)  
**Project Details:** Full-width banner + 4-6 detail images per project  
**Blog Posts:** Featured image per post (16:9, ~1200x675px)  
**About Page:** Personal photo (vertical orientation, professional setting)  

## Animations & Interactions
Minimal, purposeful animations: Smooth hover lifts on cards (2-4px), gentle fade-ins on scroll, subtle button scale on press. Navigation underlines slide in on hover. Avoid distracting motion – prioritize calm, professional feel.

## Accessibility
Maintain 4.5:1 contrast ratios for all text. Ensure Sulking Room Pink meets contrast requirements when used for text/buttons. Semantic HTML throughout, proper heading hierarchy, form labels, alt text for all images.