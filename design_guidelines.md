# JeeHub Landing Page Design Guidelines

## Design Approach
**Selected Approach:** Reference-Based with Productivity Focus

Drawing inspiration from Linear's clean typography, Notion's card-based feature showcases, and Todoist's focused aesthetic. The design emphasizes clarity and purposeful energy to resonate with JEE aspirants while reinforcing the distraction-free philosophy.

**Core Principles:**
- Clarity above all: Information hierarchy that guides users effortlessly
- Purposeful animation: Smooth, meaningful transitions that enhance rather than distract
- Trust through polish: Professional execution that builds confidence in the product

## Color Palette

**Light Mode:**
- Primary Brand: 220 85% 55% (Deep blue - conveys focus and intelligence)
- Primary Hover: 220 85% 48%
- Accent: 142 70% 45% (Green - represents progress and growth)
- Background: 0 0% 98%
- Card Background: 0 0% 100%
- Text Primary: 220 15% 15%
- Text Secondary: 220 10% 45%
- Border: 220 15% 90%

**Dark Mode:**
- Primary Brand: 220 75% 60%
- Primary Hover: 220 75% 68%
- Accent: 142 60% 50%
- Background: 220 20% 8%
- Card Background: 220 18% 12%
- Text Primary: 0 0% 98%
- Text Secondary: 220 10% 70%
- Border: 220 15% 20%

## Typography

**Font Families:**
- Headings: 'Inter', sans-serif (700, 600 weights)
- Body: 'Inter', sans-serif (400, 500 weights)
- UI Elements: 'Inter', sans-serif (500, 600 weights)

**Hierarchy:**
- Hero Headline: 3.5rem (desktop) / 2.25rem (mobile), font-weight 700, tracking -0.02em
- Section Headers: 2.5rem (desktop) / 1.75rem (mobile), font-weight 700
- Feature Titles: 1.5rem, font-weight 600
- Body Text: 1.125rem, font-weight 400, line-height 1.7
- Captions: 0.875rem, font-weight 500

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Component padding: p-6, p-8
- Section spacing: py-16 (mobile), py-24 (desktop)
- Card gaps: gap-6, gap-8
- Container max-width: max-w-7xl

**Grid System:**
- Features: 3-column grid (lg:grid-cols-3, md:grid-cols-2, grid-cols-1)
- Kiosk instructions: 2-column alternating layout (image-text pairs)
- Stats: 4-column grid for metrics

## Component Library

**Hero Section:**
- Full-width gradient background (subtle blue-to-purple gradient overlay)
- Centered content with max-w-4xl
- Large hero headline emphasizing "Distraction-Free JEE Preparation"
- Subheading explaining the OS concept
- Dual CTA buttons: "Launch JeeHub" (primary) + "Learn About Kiosk Mode" (outline)
- Animated dashboard preview mockup below CTAs

**Feature Cards:**
- Elevated cards with subtle shadow and border
- Icon at top (using Heroicons)
- Title in font-weight 600
- 2-3 line description
- Hover effect: Lift with increased shadow
- Icons: Clock (Timer), CheckSquare (Tasks), BarChart (Progress), Calendar (Schedule), BookOpen (Resources), Shield (Distraction-Free)

**Kiosk Setup Guide:**
- Numbered step cards with alternating image-text layout
- Left-aligned step number in large accent color
- Clear instruction text with code snippets in monospace
- Visual indicators for Windows shortcuts (Win+X, etc.)
- Collapsible FAQ accordion at bottom

**Benefits Section:**
- 3-column grid showcasing transformation
- "Before vs After" contrast cards
- Focus, Time Management, Progress Tracking themes
- Statistics integration (e.g., "3x more focused study time")

**CTA Section:**
- Full-width gradient background
- Centered content with urgency messaging
- Single prominent button to launch app
- Trust indicators: "Used by 1000+ JEE aspirants"

## Animations

**Page Load:**
- Stagger fade-in for hero elements (headline → subheading → buttons → mockup)
- Delay: 0.1s between each element

**Scroll Triggers:**
- Feature cards: Slide up and fade in when entering viewport
- Stats/numbers: Count-up animation when visible
- Kiosk steps: Fade in from left/right alternating

**Interactions:**
- Button hover: Subtle scale (1.02) with color shift
- Card hover: Translate Y (-4px) with shadow increase
- Smooth scrolling for anchor links
- Tab switching in features showcase (if implemented)

**Technical Implementation:**
- Use intersection observer for scroll triggers
- CSS transforms for performance (translate, scale)
- Transition durations: 200-300ms for micro-interactions, 600ms for scroll animations

## Images

**Hero Image:**
- Large hero image showcasing JeeHub dashboard interface
- Position: Below hero text, centered, max-w-5xl
- Style: Elevated with subtle shadow, slight perspective tilt
- Alt text: "JeeHub Study OS Dashboard Interface"

**Feature Illustrations:**
- Screenshot or illustration for each major feature (6 images total)
- Position: Within feature cards or dedicated showcase section
- Style: Consistent border-radius (12px), subtle shadows

**Kiosk Setup Visuals:**
- 4-5 annotated screenshots showing Windows kiosk setup process
- Position: Alternating left-right layout with instruction text
- Style: Bordered with callout arrows/highlights for key UI elements

**Benefit Section:**
- 3 illustrative images showing student focus, time management, progress
- Can use abstract illustrations or photography
- Style: Circular crops or rounded rectangles

## Responsive Behavior

**Breakpoints:**
- Mobile: < 640px (single column, stacked elements)
- Tablet: 640px - 1024px (2-column grids)
- Desktop: > 1024px (full multi-column layouts)

**Mobile Optimizations:**
- Hero headline reduced to 2.25rem
- Feature grid collapses to single column
- Kiosk steps stack vertically
- Navigation becomes hamburger menu
- Touch-friendly button sizes (min 44px height)

## Accessibility

- WCAG AA contrast ratios maintained in both modes
- Focus indicators with accent color ring
- Skip navigation link for keyboard users
- Semantic HTML structure (main, section, article tags)
- Alt text for all images with meaningful descriptions
- Reduced motion option respecting prefers-reduced-motion