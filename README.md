# Sunidhi Kumari — Future Doctor

A cute, pastel, Korean-inspired personal website for Sunidhi Kumari — MBBS
student at Radha Govind Medical College, Meerut, future doctor, and proud BTS
ARMY. Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and
lucide-react. Single page, light-mode only, fully static-friendly and
deployable on Vercel's free tier.

Design takes inspiration from the soft pastel aesthetic of uniseoul.in:
cream background, blush / lavender / peach palette, cocoa-brown text,
sticker-style cards (white border + offset pastel shadow), floating
heart/sparkle/star doodles, wavy SVG section dividers, and playful rounded
typography (Baloo 2 + Nunito).

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Edit the content

All copy lives in one file: **`data/site.ts`** — name, tagline, bio
paragraphs, journey stops, ARMY corner copy, gallery captions, footer, nav
labels, and SEO strings. Nothing personal is hardcoded in the components.

Only facts Sunidhi/Veer provided are on the site: her name, MBBS at Radha
Govind Medical College (Meerut), future doctor, BTS ARMY fandom, and the
India Gate photo. No year is stated (it wasn't given) and no contact details
exist (none were given) — please don't invent any.

## Image assets (`public/images/`)

- `sunidhi.jpg` (878×1120) — Sunidhi's photo, used in the hero (sticker
  frame) and gallery ("India Gate nights" polaroid).
- `bts-plushie.webp` (1600×1600) — an original cute pastel-purple bear
  plushie with a knit scarf, used in the ARMY corner as her "study buddy".
  It is **not** official BTS merchandise and the site says so in its caption.

To swap a photo, replace the file (keep the same filename) or update the
`src` in `data/site.ts`.

## Project structure

```
app/
  layout.tsx      Root layout: fonts, SEO/OG metadata, skip link
  page.tsx        Home page — composes the sections
  globals.css     Tailwind v4 theme (pastel palette), sticker styles, float
                  animation, focus rings, reduced-motion support
  icon.svg        Favicon (cute heart)
components/
  Nav.tsx         Sticky pastel pill nav
  Hero.tsx        Sticker-framed photo, headline, badges, CTAs
  About.tsx       Bio in a sticker card (blush section)
  Journey.tsx     Pastel vertical timeline (3 stops, no dates)
  ArmyCorner.tsx  Purple-tinted ARMY card with the plushie
  Gallery.tsx     Polaroid frames + "more memories coming soon" slots
  Footer.tsx      Cocoa footer with credit line
  Doodles.tsx     Floating heart/sparkle/star SVGs + wavy divider
data/
  site.ts         All content — the only file you need to edit
public/
  images/         sunidhi.jpg, bts-plushie.webp
```

## Deploy on Vercel (free tier, zero config)

1. Push this project to a GitHub repository.
2. Go to https://vercel.com and sign in with GitHub.
3. Click **Add New → Project**, then **Import** your repository.
4. Leave every setting at its default (Vercel detects Next.js automatically).
5. Click **Deploy**, then add the custom domain `sunidhi.veervikram.top`
   under Project Settings → Domains.

That's it — no environment variables, no build settings to change.
