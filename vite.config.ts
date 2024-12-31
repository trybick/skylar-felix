import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_SITE_NAME': JSON.stringify(process.env.VITE_SITE_NAME),
  },
  server: {
    open: true,
    port: 4000,
  },
  build: {
    outDir: 'dist',
  },
});
