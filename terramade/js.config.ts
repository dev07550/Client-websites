import { defineConfig } from 'vite';
import react from '@js/plugin-react';

// https://js.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
