# En Mascaradores

Landing page for En Mascaradores — a group of white-collar professionals
who moonlight doing the blue-collar work they're actually passionate about
(car maintenance, plumbing, electrical). For now, this repo is just the
landing page; scope may grow later.

## Stack

Next.js (App Router, TypeScript, Tailwind CSS). Picked for a simple
content-driven page today with room to grow without a rewrite.

## Run locally

```bash
npm install
npm run dev
```

Opens on `http://localhost:3000`.

## Deployment

Runs on [Vercel](https://vercel.com), same general setup as
[merch-mockup](https://github.com/ericgitonga/merch-mockup): every PR gets
a Preview deployment, merging to `main` promotes to production.
