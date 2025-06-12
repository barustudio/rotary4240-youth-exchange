// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import alpinejs from '@astrojs/alpinejs';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://intercambios.rotary4240.org',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    alpinejs(),
    mdx(),
    partytown({
      config: { forward: ['dataLayer.push'] },
    }),
    sitemap(),
  ],
});