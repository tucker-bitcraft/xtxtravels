### Updates Todo list
[ ] Logo
[ ] Contact info
[ ] Formspree
[ ] About info (Home/About)
[ ] Redirect to paypal on trips
[ ] Add image spots in itinerary
[ ] Github access
[ ] Travel time update to days and nights on top

# Xtrordinary Travel Experiences

An Astro build of the agent-site template from `wta-agent-site-design-system.md`,
themed for Xtrordinary Travel Experiences (Romania / Ireland / Greece, off-the-beaten-path,
gothic-atmospheric, purple accent).

## Run it

```
npm install
npm run dev       # local dev server
npm run build     # static build -> dist/
npm run preview   # preview the build
```

## Structure

- `src/layouts/BaseLayout.astro` — page shell, fonts/meta
- `src/styles/global.css` — design tokens (color, type, spacing) — edit here to retheme
- `src/components/` — one file per reusable block from the design system doc
  (Header, Hero, Pillars, TripBrowser, HowItWorks, Testimonials, AboutAgent,
  FaqPreview, JournalTeaser, Newsletter, Footer)
- `src/pages/index.astro` — assembles the homepage

## Design notes

- Palette: near-black aubergine background, deep amethyst purple primary accent,
  oxblood secondary, warm "ember" gold used sparingly for the candlelight signature.
- Type: Fraunces (serif, display) + Work Sans (body) + IBM Plex Mono (eyebrows/labels).
- Signature element: a flickering candlelight glow + drifting fog behind the hero,
  and a "wax seal" divider mark used between major sections instead of the original
  site's wave/stamp motif.
- Trip content covers 6 sample itineraries (2 each for Romania, Ireland, Greece) —
  swap in real copy, pricing, and photography before launch.
- All copy (testimonials, guide bio, blog post titles) is placeholder — replace with
  real content, and swap the CSS gradient "photos" for real destination/traveler imagery.
