# JeeHub Landing Page

## Overview
A modern, animated landing page for JeeHub - a distraction-free study operating system designed for JEE (Joint Entrance Examination) aspirants. The page showcases all features of the study OS and provides comprehensive Windows Kiosk mode setup instructions.

**Live App URL**: https://jeehub.onrender.com/

## Purpose
- Introduce JeeHub to JEE aspirants
- Showcase all study OS features (task management, subject progress, study timer, scheduling, resources)
- Provide detailed Windows Kiosk mode setup instructions for distraction-free studying
- Drive conversions to the main JeeHub application

## Recent Changes (October 18, 2025)
- Initial landing page implementation with modern design
- Configured Inter font family for clean typography
- Added SEO meta tags for better discoverability
- Implemented dark/light mode theme toggle
- Created comprehensive sections: Hero, Features, Kiosk Setup, Benefits, FAQ, CTA
- Added smooth scroll-triggered animations throughout the page
- Implemented responsive design for mobile, tablet, and desktop

## Project Architecture

### Frontend Stack
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Shadcn UI component library
- **State Management**: React Query (TanStack Query v5)
- **Icons**: Lucide React
- **Theme**: Dark/Light mode with localStorage persistence

### Design System
- **Primary Color**: Deep Blue (220 85% 55%) - Conveys focus and intelligence
- **Accent Color**: Green (142 70% 45%) - Represents progress and growth
- **Typography**: Inter font family (400, 500, 600, 700 weights)
- **Spacing**: Consistent use of Tailwind spacing scale (4, 6, 8, 12, 16, 20, 24)
- **Animations**: Custom keyframe animations for fade-in, slide-in, scale, and gradient effects

### Key Components
1. **Hero Section**: Animated gradient background with stats, CTAs
2. **Features Grid**: 6 feature cards showcasing JeeHub capabilities
3. **Kiosk Setup Guide**: 4-step guide with code snippets and visual indicators
4. **Benefits Section**: 3 key benefits with icons and descriptions
5. **FAQ Accordion**: 6 common questions about JeeHub and Kiosk mode
6. **CTA Section**: Final call-to-action with gradient background
7. **Theme Toggle**: Fixed position toggle for dark/light mode switching

### Page Sections
- **Hero**: Main headline, description, CTAs, and key statistics
- **Features (#features)**: Comprehensive feature showcase grid
- **Kiosk Setup (#kiosk-setup)**: Step-by-step Windows Kiosk mode instructions
- **Benefits**: Why JeeHub works for JEE preparation
- **FAQ (#faq)**: Common questions and answers
- **CTA**: Final conversion section
- **Footer**: Branding and copyright

## Features Highlighted

### Study OS Features
1. **Task Management**: Smart task tracking across Physics, Chemistry, Mathematics
2. **Subject Progress**: Detailed analytics and completion tracking
3. **Study Timer**: Pomodoro timer with customizable durations (25/45/60 min)
4. **Smart Scheduling**: Integrated calendar for planning study sessions
5. **Resource Library**: Centralized access to study materials
6. **Distraction-Free Mode**: Windows Kiosk mode for maximum focus

### Windows Kiosk Mode Setup
- **Step 1**: Enable Kiosk Mode via Windows settings
- **Step 2**: Configure auto-launch with browser kiosk flag
- **Step 3**: Lock down Windows with assigned access
- **Step 4**: Exit instructions (Ctrl+Alt+Del, Alt+F4)

## User Experience

### Animations
- Page load: Staggered fade-in for hero elements
- Scroll triggers: Cards and sections animate into view on scroll
- Hover effects: Subtle elevation on interactive cards
- Gradient animation: Continuous background gradient shift

### Responsive Design
- **Mobile** (< 640px): Single column, stacked elements, touch-friendly
- **Tablet** (640px - 1024px): 2-column grids where appropriate
- **Desktop** (> 1024px): Full multi-column layouts with optimal spacing

### Accessibility
- Semantic HTML structure (main, section, article tags)
- WCAG AA contrast ratios in both light and dark modes
- Focus indicators with accent color rings
- Alt text for all meaningful images (when added)
- Reduced motion support via CSS

## Development Guidelines

### Code Organization
- Components: `/client/src/components/` (UI primitives, theme provider/toggle)
- Pages: `/client/src/pages/` (home.tsx, not-found.tsx)
- Styles: `/client/src/index.css` (CSS variables, utility classes)
- Config: `tailwind.config.ts` (design tokens, animations)

### Styling Approach
- Use Shadcn UI components for consistency
- Follow design_guidelines.md for color contrast, spacing, typography
- Leverage Tailwind utility classes for responsive design
- Custom animations defined in tailwind.config.ts
- Dark mode: CSS class-based toggling on document root

### Key Files
- `client/src/pages/home.tsx`: Main landing page component
- `client/src/components/theme-provider.tsx`: Theme context and state management
- `client/src/components/theme-toggle.tsx`: Dark/light mode toggle button
- `client/src/App.tsx`: Root component with routing and providers
- `client/index.html`: SEO meta tags, font imports
- `design_guidelines.md`: Comprehensive design specifications

## Running the Application
```bash
npm run dev
```
This starts both the Express backend server and Vite frontend development server on the same port.

## SEO Implementation
- **Title**: "JeeHub - Distraction-Free Study OS for JEE Aspirants"
- **Description**: Comprehensive meta description highlighting key features
- **Open Graph**: OG tags for social media sharing
- **Structured**: Semantic HTML for better search engine understanding

## Future Enhancements (Not in MVP)
- Video tutorial for Kiosk mode setup
- Interactive demo/preview of JeeHub features
- Testimonials from JEE aspirants
- Comparison table: JeeHub vs traditional study methods
- Analytics integration for tracking conversions
