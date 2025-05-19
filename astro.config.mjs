// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import alpinejs from '@astrojs/alpinejs';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://intercambios.rotary4240.org',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap(),
    alpinejs(),
    partytown({
      config: { forward: ['dataLayer.push'] },
    })
  ]
});
