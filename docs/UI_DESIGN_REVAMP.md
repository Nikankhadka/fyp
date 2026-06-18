# MeroGhar UI Design Revamp

This document records the UI audit, library decision, design direction, and Stitch prompt material for the full frontend redesign.

## Library Research Decision

Recommended foundation: **replace the premade/ad hoc UI with shadcn/ui-style owned components built on Radix primitives, Tailwind CSS, Zustand, and lucide-react**.

Why this fits MeroGhar:

- The app already uses Tailwind and component-level ownership, so copied/owned UI components fit better than a heavy theme framework.
- shadcn/ui is a code distribution approach, not a locked npm component library, so components can be customized directly for MeroGhar.
- Radix primitives provide accessible behavior for dialogs, dropdowns, selects, tabs, tooltips, and alert dialogs while leaving styling under our control.
- Zustand already handles app state well for modals, booking, listing, account tabs, and confirmation flows; keep it.
- lucide-react should replace most react-icons over time for consistent icon style and smaller, predictable imports.

Important interpretation:

- “Use shadcn” means use the shadcn architecture: owned source components, Radix behavior primitives, Tailwind styling, `cva` variants, and direct customization.
- Do not install a large opaque UI kit that controls the design language.
- Do not replace Zustand. Zustand remains the app state layer for modal, booking, account, listing, and confirmation state.
- Migrate feature screens incrementally, but the end state should be that most visible controls and layouts are built from the owned shadcn-style `components/ui` layer.

Official references used:

- shadcn/ui docs: https://ui.shadcn.com/docs
- shadcn/ui CLI/config docs: https://ui.shadcn.com/docs/cli and https://ui.shadcn.com/docs/components-json
- Radix primitives docs: https://www.radix-ui.com/primitives/docs
- Radix styling guide: https://www.radix-ui.com/primitives/docs/guides/styling
- Headless UI docs: https://headlessui.com/
- Mantine docs: https://mantine.dev/

Short comparison:

| Option | Fit | Reason |
| --- | --- | --- |
| shadcn/ui + Radix + Tailwind | Best | Owned components, accessible primitives, high customization, fits current stack |
| Radix primitives only | Good | Accessible and flexible, but slower because every component style must be built from scratch |
| Headless UI | Good | Tailwind-friendly and accessible, but smaller primitive set than Radix for this app |
| Mantine | Mixed | Very complete, but brings a full design system that would fight the existing Tailwind app |
| MUI/Chakra | Lower | Faster for dashboards, but heavier visual/design opinion and less portfolio-custom feel |

## Current UI Implementation Audit

Current strengths:

- Core flows are present across public, guest, host, and admin roles.
- Tailwind is already in place.
- Zustand modal/state stores are simple and understandable.
- `SafeImage` prevents broken image crashes.
- Existing color tokens exist: `mainColor`, `themeColor`, and `hoverColor`.

Current issues:

- Global CSS forced all text black and added global letter spacing.
- Many components repeat large Tailwind strings instead of using reusable primitives.
- Cards, modals, tables, forms, and buttons use inconsistent border radius, shadow, spacing, and font sizes.
- Heavy account/listing modules are imported eagerly.
- Admin tables are functional but visually dense and not consistently responsive.
- Room page and marketplace pages need a more polished rental-marketplace hierarchy.
- Several controls rely on text where icon buttons with labels/tooltips would be cleaner.

## Design Direction

Keep the current color identity for now:

- Primary: `themeColor` / `#54A2C9`
- Dark primary: `mainColor` / `#22546D`
- Soft hover: `hoverColor` / `#cee4ef`
- Neutral foundation: white, neutral grays, subtle borders
- Status colors: emerald for success, amber for pending, red for destructive/error, sky for info

Typography:

- Use one modern sans font stack through Tailwind.
- Body text: `text-sm`/`text-base`, `leading-6`.
- Page titles: `text-2xl` or `text-3xl`, bold.
- Section titles: `text-lg`/`text-xl`, semibold.
- Table text: compact `text-sm`, predictable row height.
- No global letter spacing.

Shape and spacing:

- Default radius: `rounded-md`.
- Cards: `rounded-md`, subtle border, restrained shadow only on hover.
- Modals: `rounded-md`, fixed max width, sticky footer when content scrolls.
- Buttons: stable min height, no layout shift on loading.
- Inputs: 44px height, clear focus ring, consistent label/error/helper text.

## Target Component System

Owned primitives live under `apps/web/src/components/ui`.

Current foundation:

- `Button`
- `LinkButton`
- `Field`
- `SelectField`
- `TextArea`
- `StatusBadge`
- `EmptyState`
- `PageHeader`
- `Surface`
- `PaginationBar`
- Radix `Dialog`
- Radix `AlertDialog`
- Radix `DropdownMenu`
- Radix `Tabs`
- Radix `Select`
- Radix `Tooltip`
- `DataTable`

Next components to add:

- `ListingCard` and `HostCard`
- `BookingPanel`
- `ImageGallery`
- `FormField`
- `Sheet` for mobile filters/navigation
- `Toast` wrapper if replacing `react-hot-toast` later

## Replacement Strategy

Use this order so the app keeps working while the UI becomes shadcn-based:

1. Replace global primitives first: buttons, fields, badges, modals, dropdowns, tabs, selects, tooltips, tables.
2. Replace shared shells: navbar, sidebar, modal registry, account shell, admin shell.
3. Replace repeated domain components: listing cards, booking panel, image gallery, review card, user card, admin data table.
4. Replace route surfaces: Home, room detail, account/profile, host listings, admin dashboard, KYC/listing queues.
5. Remove old one-off Tailwind variants and unused icon packages once screens no longer import them.

Performance rules:

- Keep Server Components for data-heavy pages whenever interaction is not required.
- Dynamic import heavy editors and providers: KYC, Firebase phone OTP, property form, PayPal, PDF generation.
- Prefer lucide-react icons in new shadcn-style components.
- Avoid bringing in shadcn blocks wholesale if they add unused dependencies.
- Measure `pnpm build:web` after each route group migration.

## Route-Level Redesign Goals

### Marketplace Home

- Image-first listing grid.
- Strong hierarchy: image, city/state, property name, rating, price.
- Search/filter as a polished modal or sheet.
- Empty and loading states.
- Keep cards dense enough for browsing.
- Current implementation progress: the shared listing `Card` now uses shadcn-style primitives, stable image ratio, status badges, lucide icons, accessible carousel controls, and preserved wishlist/moderation actions.

### Room Detail

- Larger gallery with stable aspect ratio.
- Host summary with trust cues.
- Amenities in clean two-column list.
- Booking panel sticky on desktop and full-width on mobile.
- Clear unavailable state for banned/unverified listings.
- Reviews with empty state and reported/review actions separated.
- Current implementation progress: the room detail surface now uses shadcn-style `Surface`, `Button`, `Field`, `StatusBadge`, `EmptyState`, lucide icons, and the shared wishlist button. The gallery has stable responsive aspect ratios, the booking panel is sticky on desktop, review cards/input use shared controls, and null-safe listing status checks prevent banned/verification data from crashing the route.

### Account/Profile

- Public profile should show only public details.
- Private account settings should be tabbed and lazy-loaded.
- KYC/phone/email/password editors should not load until opened.
- Verification states should use badges, not long text.

### Host Listings and Reservations

- Listing cards show status, rejection reason, image, price, and actions.
- Reservation tables use status badges and consistent action buttons.
- Empty states guide the host to next action.

### Admin

- Operations-first dashboard, not marketing layout.
- Metric cards compact and scannable.
- Tables with search, status, and actions.
- KYC/property review queues as cards or table rows with approve/reject flows.

## Stitch Prompt Pack

Use these prompts in Stitch to generate visual directions. Keep the same colors and rental-marketplace domain.

### Marketplace Home Prompt

Design a modern Airbnb-style rental marketplace home screen for MeroGhar. Use a clean white interface with sky blue accents `#54A2C9`, dark teal `#22546D`, subtle neutral borders, and image-led property cards. Show a sticky top navbar with logo, search control, auth/profile menu, and a responsive listing grid. Cards should show property image, city/state, title, rating, and nightly price. Keep the design polished, practical, and portfolio-ready.

### Room Detail Prompt

Design a room detail page for MeroGhar. Include a large image gallery, title, location, save action, host profile summary, amenities, house rules, reviews, and a sticky booking panel. Use the existing sky blue and dark teal brand colors, clean spacing, accessible type sizes, and a premium rental marketplace feel. Include mobile and desktop responsive behavior.

### Account/Profile Prompt

Design a user profile and account settings experience for a rental marketplace. Separate public profile from private settings. Include verification badges, profile image, public listings, tabs for edit profile, identity/KYC, email, phone, and password. Use restrained cards, subtle borders, and the MeroGhar sky blue/dark teal palette.

### Host Dashboard Prompt

Design a host listing management dashboard for MeroGhar. Include listing cards with images, verification status, rejection messages, edit/delete actions, and a reservation table with check-in, check-out, cancel, and status badges. Make it dense but clear, optimized for repeated use.

### Admin Dashboard Prompt

Design an operations admin dashboard for a property rental platform. Include compact metrics, searchable user/property tables, booking management, KYC review queue, listing approval queue, approve/reject modals, and ban/unban actions. Use a quiet professional SaaS/admin style with MeroGhar sky blue accents.

## Implementation Rules

- Preserve route and API contracts unless a specific task says otherwise.
- Keep Zustand for cross-component UI state.
- Prefer Radix/shadcn-style owned components for new UI.
- Replace legacy premade/ad hoc controls on touched screens instead of adding parallel one-off styles.
- Prefer lucide-react icons for new or touched controls.
- Avoid nested cards and decorative gradients.
- Use `next/image` with stable dimensions.
- Keep text inside buttons short and non-wrapping where possible.
- Dynamic import heavy editors/providers.
- Verify `pnpm lint:web` and `pnpm build:web` after each UI slice.
