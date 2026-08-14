# Changelog

All notable changes to this project are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org) (pre-1.0: MINOR = new features/user-facing
behaviour, PATCH = fixes/docs/housekeeping).

## [0.8.4] - 2026-08-14

### Security
- Bumped `next`/`eslint-config-next` 16.2.11 -> 16.3.0 and ran `npm audit fix`, clearing all
  6 high-severity transitive advisories (`brace-expansion`, `js-yaml`, `nanoid`, `postcss`,
  `next`, `sharp`) (closes #36)
- Added baseline HTTP security headers via `next.config.ts`'s `headers()`: X-Frame-Options,
  X-Content-Type-Options, Referrer-Policy, Permissions-Policy, Strict-Transport-Security, and
  a CSP scoped to this static page's actual same-origin footprint (self-hosted next/font
  Google fonts, local images, same-origin Vercel Analytics/Speed Insights beacons) (closes #36)

tag: `v0.8.4`

## [0.8.3] - 2026-08-11

### Added
- ESLint now runs as its own independently-gated CI check (`lint` job in
  `.github/workflows/e2e.yml`), rather than only running manually — a lint
  regression that didn't break the build could previously merge unnoticed.
  Enabled Dependabot vulnerability alerts and automated security updates,
  both of which were off at the repo level. (closes #30)

tag: `v0.8.3`

## [0.8.2] - 2026-08-10

### Fixed

- Synced `package.json`'s `"version"` field, which had drifted to `0.8.0` while `VERSION` and
  the CHANGELOG had already moved on to `0.8.1` (closes #28)

tag: `v0.8.2`

## [0.8.1] - 2026-08-07

### Fixed

- Standardised American spelling to British spelling in prose text
  ("centered" → "centred", "optimized"/"optimizing" → "optimised"/"optimising")

tag: `v0.8.1`

## [0.8.0] - 2026-08-05

### Added

- Added VayAnsZweiDrei, the team's mascot vehicle, as its own entry at the
  bottom of the team section, pinned to the middle column (closes #24)

tag: `v0.8.0`

## [0.7.0] - 2026-08-04

### Added

- Two new team member profiles: El Nino and d3eikei (closes #22)
- Team member modals now lead with a Moniker field showing each member's real
  name, above Code Name

tag: `v0.7.0`

## [0.6.0] - 2026-08-04

### Added

- Partners section now opens a detail modal on click (logo or name), reusing
  the same modal chrome as team members. Adds an intro paragraph above the
  partner list, and shows each partner's description with any links (e.g.
  Instagram, Facebook) last. Partners without info get an empty modal
  (closes #20)

tag: `v0.6.0`

## [0.5.0] - 2026-08-04

### Added

- Team cards are now clickable and open a modal with each member's full profile
  (Code Name, Education, White Collar Career, Blue Collar Passion, Defining
  Quote), skipping any category a member hasn't filled in. Closes on the X
  button, a backdrop click, or Esc (closes #18)

tag: `v0.5.0`

## [0.4.1] - 2026-08-04

### Fixed

- Contact button now emails `gitonga@gmail.com` instead of the placeholder
  `hello@enmascaradores.example` it shipped with (closes #15)

tag: `v0.4.1`

## [0.4.0] - 2026-08-04

### Changed

- "Kioge Spares" replaced with the Finch Auto logo (`public/partners/finch-auto.png`) in the
  partners section, linked to [@finchautoparts](https://www.instagram.com/finchautoparts/) on
  Instagram (closes #13)

tag: `v0.4.0`

## [0.3.0] - 2026-08-04

### Added

- Logo in the hero section, to the left of the headline and vertically centred on the banner —
  sourced from the gitignored `extras/Logo.png`, resized to 512x512 and optimised into
  `public/logo.png` for web use (closes #11)

### Changed

- Header wordmark ("En Mascaradores") sized up from `text-lg` to `text-2xl`

tag: `v0.3.0`

## [0.2.0] - 2026-08-04

### Added

- Two new team profiles, "Herb" and "The Tinkerer", written as the same succinct one-line bio
  the rest of the team already uses (closes #7)

tag: `v0.2.0`

## [0.1.0] - 2026-08-03

Retroactive baseline — this project shipped for a few weeks before `VERSION`/`CHANGELOG.md`/tags
were introduced. This entry consolidates everything merged before that point into one release
rather than inventing version numbers that were never actually cut at the time.

### Added

- Next.js landing page scaffold: hero, services, working hours, team, partners, and contact
  sections (closes #1)
- Playwright E2E smoke suite gated on every PR to `main` via `.github/workflows/e2e.yml`
  (closes #3)
- Vercel Web Analytics + Speed Insights instrumentation (closes #5)

tag: `v0.1.0`
