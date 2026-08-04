# Changelog

All notable changes to this project are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org) (pre-1.0: MINOR = new features/user-facing
behaviour, PATCH = fixes/docs/housekeeping).

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
