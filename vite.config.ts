import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(() => {
  return {
    base: process.env.BASE_URL || './',
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'icon.svg'],
        manifest: {
          id: './',
          name: 'Deutsch Mussawi Akademie',
          short_name: 'DeutschMussawiAkademie',
          description: 'Deutsch lernen mit Deutsch Mussawi Akademie - A1 bis C2 mit Videos, Grammatik & Offline-Modus',
          theme_color: '#0f172a',
          background_color: '#0f172a',
          display: 'standalone',
          start_url: './',
          scope: './',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'pwa-maskable-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        workbox: {
          maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2,json}'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
        devOptions: {
          enabled: true,
          type: 'module',
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
            if (id.includes('src/data/curriculumA1') || id.includes('src/data/standardizedExamsDataA1')) {
              return 'data-a1';
            }
            if (id.includes('src/data/curriculumA2') || id.includes('src/data/standardizedExamsDataA2')) {
              return 'data-a2';
            }
            if (id.includes('src/data/curriculumB1') || id.includes('src/data/standardizedExamsDataB1')) {
              return 'data-b1';
            }
            if (id.includes('src/data/curriculumB2') || id.includes('src/data/standardizedExamsDataB2') || id.includes('src/data/standardizedExamsDataTelcB2')) {
              return 'data-b2';
            }
            if (id.includes('src/data/curriculumC1') || id.includes('src/data/standardizedExamsDataGoetheC1') || id.includes('src/data/standardizedExamsDataTelcC1')) {
              return 'data-c1';
            }
            if (id.includes('src/data/curriculumC2') || id.includes('src/data/standardizedExamsDataGoetheC2')) {
              return 'data-c2';
            }
            if (id.includes('src/data/verbs') || id.includes('src/data/curriculumGrammar')) {
              return 'data-grammar';
            }
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
