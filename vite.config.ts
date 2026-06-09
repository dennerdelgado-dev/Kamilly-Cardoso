import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

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
      cssCodeSplit: true,
      assetsInlineLimit: 4096,
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        treeshake: {
          preset: 'recommended' as const,
          propertyReadSideEffects: false,
        },
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom'],
            'vendor-motion': ['motion'],
            'vendor-lucide': ['lucide-react'],
          },
        },
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
