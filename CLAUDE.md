# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm run dev          # Start dev server with Turbopack
pnpm run build        # Production build
pnpm run lint         # Lint src/**/*.{ts,tsx}
pnpm run test:watch   # Run tests in watch mode
pnpm run test:coverage # Run tests with coverage report
```

## Architecture

This is a personal portfolio site built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**. It supports English/Spanish localization and dark/light mode.

### Routing & i18n

All pages live under `src/app/[locale]/` — the `[locale]` segment is managed by **next-intl** middleware, which handles locale detection and routing. Supported locales are `en` and `es`. Translation strings live in `messages/en.json` and `messages/es.json`. Always use `useTranslations()` for text content in components.

For navigation, import `Link`, `useRouter`, and `usePathname` from `src/i18n/routing.ts` (not directly from Next.js) so locale context is preserved.

### Styling

Tailwind CSS utility-first. Custom theme tokens (colors, fonts) are defined in `tailwind.config.ts`. Dark mode is class-based via **next-themes** (`ThemeProvider` wraps the app in the root layout). Use the `cn()` utility from `src/lib/utils.ts` for conditional class merging.

### UI Components

Base UI components in `src/components/ui/` come from **ShadCN UI** (Radix UI primitives + Tailwind). Prefer extending these rather than creating new primitives.

### Forms

Contact form uses **React Hook Form** + **Zod** validation with `@hookform/resolvers`. Email sending is handled client-side via the EmailJS adapter at `src/config/adapters/email.ts`.

### Environment Variables

All env vars are validated at runtime using a Zod schema in `src/config/adapters/envs.ts`. Public keys must use the `NEXT_PUBLIC_` prefix. Required vars:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

### Testing

Tests use **Vitest** with jsdom and React Testing Library. Setup file is `src/test/setup.ts`.
