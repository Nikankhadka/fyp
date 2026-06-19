---
name: Luminous Teal
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf4'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d4e4fc'
  on-surface: '#0d1c2e'
  on-surface-variant: '#3c4948'
  inverse-surface: '#223144'
  inverse-on-surface: '#eaf1ff'
  outline: '#6c7a78'
  outline-variant: '#bbc9c7'
  surface-tint: '#006a65'
  primary: '#006a65'
  on-primary: '#ffffff'
  primary-container: '#20b2aa'
  on-primary-container: '#003e3b'
  inverse-primary: '#59dad1'
  secondary: '#576060'
  on-secondary: '#ffffff'
  secondary-container: '#d8e1e1'
  on-secondary-container: '#5b6465'
  tertiary: '#555f71'
  on-tertiary: '#ffffff'
  tertiary-container: '#96a0b5'
  on-tertiary-container: '#2d3748'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#79f6ed'
  primary-fixed-dim: '#59dad1'
  on-primary-fixed: '#00201e'
  on-primary-fixed-variant: '#00504c'
  secondary-fixed: '#dbe4e4'
  secondary-fixed-dim: '#bfc8c8'
  on-secondary-fixed: '#151d1d'
  on-secondary-fixed-variant: '#404849'
  tertiary-fixed: '#d9e3f9'
  tertiary-fixed-dim: '#bdc7dc'
  on-tertiary-fixed: '#121c2c'
  on-tertiary-fixed-variant: '#3d4759'
  background: '#f8f9ff'
  on-background: '#0d1c2e'
  surface-variant: '#d4e4fc'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 48px
  margin-mobile: 20px
---

## Brand & Style
The design system focuses on a high-end, "Airbnb-style" aesthetic characterized by an airy, spacious, and premium feel. It targets professional yet lifestyle-oriented users who value clarity and effortless navigation. 

The style utilizes **Minimalism** with a touch of **Soft UI**. By leveraging heavy whitespace and a refined light-teal primary accent, the interface evokes a sense of calm, cleanliness, and modern hospitality. The focus is on content-first layouts where the UI recedes to let imagery and information stand out, using subtle tonal shifts instead of heavy borders or shadows.

## Colors
The palette is built around a "Light Sea Green" teal, providing a fresh and professional energy. 

- **Primary (#20B2AA):** Used for key actions, active states, and brand highlights.
- **Surface & Containers:** Surfaces utilize a hierarchy of whites and extremely desaturated teals. The base background is white (#FFFFFF), with secondary containers using a soft wash (#F0F9F9) to create subtle grouping without adding visual weight.
- **Typography & Icons:** Dark slate (#2D3748) is used for high-contrast text, while a cooler grey (#718096) handles secondary information.
- **Interactive States:** Hover states on primary elements should shift 10% darker; background washes should shift to a 5% opacity teal on hover.

## Typography
This design system uses **Inter** exclusively to maintain a systematic, utilitarian, yet modern look. 

- **Headlines:** Use tight letter-spacing and semi-bold to bold weights to create a strong visual anchor.
- **Body:** Standard weights with generous line-height ensure maximum readability and an "airy" feel.
- **Labels:** Used for buttons, tags, and small captions, often employing a slightly heavier weight for clarity at small sizes.

## Layout & Spacing
The layout follows a **Fluid Grid** philosophy with a strict 8px base unit. 

- **Desktop:** 12-column grid with 24px gutters. Page margins are generous (48px+) to reinforce the premium aesthetic.
- **Tablet:** 8-column grid with 20px gutters.
- **Mobile:** 4-column grid with 16px gutters and 20px side margins.
- **Spacing Logic:** Use larger padding (40px, 64px, 80px) between major sections to allow the design to "breathe." Internal component spacing should stick to 8px, 16px, or 24px.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and **Ambient Shadows** rather than harsh lines.

- **Level 0 (Base):** Pure white background.
- **Level 1 (Cards/Containers):** A very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.05)) or a 1px border in a light teal-tinted grey (#E2E8F0).
- **Level 2 (Dropdowns/Modals):** A more pronounced ambient shadow (0px 10px 30px rgba(0,0,0,0.08)) to lift the element significantly off the page.
- **Blur:** Use a 12px backdrop blur on navigation bars and sticky headers to maintain context while scrolling.

## Shapes
The design system utilizes a **Rounded** (8px/16px/24px) shape language. This softens the professional tone, making the interface feel more approachable and modern.

- **Standard Buttons/Inputs:** 8px (rounded)
- **Cards/Sections:** 16px (rounded-lg)
- **Feature Banners/Modals:** 24px (rounded-xl)

## Components
- **Buttons:** Primary buttons use the teal (#20B2AA) background with white text. Secondary buttons use a teal-tinted ghost style (transparent background, teal text, subtle border).
- **Chips/Badges:** Small, 12px font labels with a light teal background (#F0F9F9) and teal text (#20B2AA). Rounded-pill shape.
- **Inputs:** Clean, 8px rounded corners with a 1px #E2E8F0 border. On focus, the border transitions to Primary Teal with a subtle glow.
- **Lists:** High-density lists are avoided. Items are separated by generous vertical padding (16px+) and very faint horizontal dividers.
- **Cards:** White background, 16px corner radius, and a subtle Level 1 shadow. Content inside cards should have at least 24px of internal padding.
- **Cards (Interactive):** On hover, the shadow deepens slightly and the card may lift 2px to provide tactile feedback.