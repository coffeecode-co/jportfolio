# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # dev server with Turbopack
pnpm build        # production build
pnpm lint         # ESLint on src/**/*.{ts,tsx}
pnpm test:watch   # Vitest watch mode
pnpm test:coverage # Vitest with coverage report
```

Run a single test file:
```bash
pnpm exec vitest run src/path/to/file.test.tsx
```

Add a shadcn/ui component:
```bash
pnpm dlx shadcn@latest add <component>
```

## Environment Variables

Required in `.env.local` for the contact form to work:

```
NEXT_PUBLIC_EMAIL_SERVICE_ID=
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=
```

Validated at startup via Zod in `src/config/adapters/envs.ts`. Build fails fast if any are missing.

## Architecture

**Routing**: Next.js App Router with `next-intl`. All pages live under `src/app/[locale]/`. The middleware (`src/middleware.ts`) intercepts `/` and `/(es|en)/:path*` to enforce locale prefixes. Supported locales: `en`, `es` (default: `en`).

**i18n flow**: `src/i18n/request.ts` loads `messages/{locale}.json` per request. `src/i18n/routing.ts` exports typed navigation helpers (`Link`, `useRouter`, etc.) that replace Next.js' native ones — always import from there, not `next/navigation`.

**Pages**:
- `[locale]/page.tsx` — single-page portfolio (all sections)
- `[locale]/contact/page.tsx` — standalone contact page
- `[locale]/sctools/page.tsx` — tools page
- `[locale]/[...rest]/page.tsx` — catch-all 404

**Components**: Flat under `src/components/`. Section components (`HeroSection`, `AboutMe`, `MyExperience`, `MyProjects`, `MySkills`, `MyServices`, `ContactForm`) are composed directly in the home page. `src/components/ui/` holds shadcn/ui primitives — do not edit these manually, use the CLI.

**Styling**: Tailwind CSS with CSS variables (`cssVariables: true`), `neutral` base color, `new-york` shadcn style. Theme switching via `next-themes` (`ThemeProvider` wraps the app in the locale layout).

**Contact form**: `ContactForm` uses `react-hook-form` + `zod` for validation. Submission calls `emailSend()` from `src/config/adapters/email.ts`, which wraps EmailJS.

**Images**: Remote images from `pub-fda94ed7b1d0487db34447feefb77dbb.r2.dev` (Cloudflare R2) and `picsum.photos` are whitelisted in `next.config.ts`.

**Testing**: Vitest + jsdom + `@testing-library/react`. Setup file at `src/test/setup.ts`. Path alias `@` maps to `src/`.

**Fonts**: `Noto_Sans_Mono` and `Source_Code_Pro` loaded via `next/font/google`, exposed as CSS variables `--font-noto-sans-mono` and `--font-source-code-pro`.
