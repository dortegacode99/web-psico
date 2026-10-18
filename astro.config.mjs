import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://xn--jacobochamorro-psicologa-sic.es',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    icon({ include: { lucide: ['*'] } }),
  ],
});
