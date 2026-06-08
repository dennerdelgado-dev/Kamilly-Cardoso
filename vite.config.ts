import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

// Custom lightweight inline plugin to transform render-blocking CSS links into asynchronous non-blocking preloads
function asyncCssPlugin() {
  return {
    name: 'async-css-plugin',
    transformIndexHtml(html: string) {
      return html.replace(
        /<link rel="stylesheet"([^>]*?)href="([^"]+)"([^>]*?)>/g,
        (match, prefix, href, suffix) => {
          return `<link rel="preload" href="${href}" as="style" ${prefix.trim()} ${suffix.trim()} onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${href}" ${prefix.trim()} ${suffix.trim()}></noscript>`;
        }
      );
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss(),
      asyncCssPlugin()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      cssCodeSplit: true, // Split CSS into dynamic chunks relative to pages/components
      assetsInlineLimit: 4096, // Inline small assets (images/fonts <= 4KB) as base64 to minimize requests
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        treeshake: {
          preset: 'recommended' as const,
          propertyReadSideEffects: false,
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâ€”file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
