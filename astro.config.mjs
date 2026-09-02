import { defineConfig } from 'astro/config';

// GitHub Pages serves this repo from a subpath, so `base` has to match the repo
// name or every internal link resolves to the domain root. The deploy workflow
// passes --site/--base from the Pages API, which overrides these; they are here
// so local `astro dev` and `astro build` reproduce the deployed URL shape.
export default defineConfig({
  site: 'http://www.txttravels.com',
  base: '/',
});
