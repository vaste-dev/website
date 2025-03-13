import tailwind from '@astrojs/tailwind'
import astroExpressiveCode from 'astro-expressive-code'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    astroExpressiveCode({
      themes: ['poimandres', 'light-plus'],
      styleOverrides: {
        borderRadius: '0.5rem',
        borderWidth: '0px',
      },
    }),
  ],
})
