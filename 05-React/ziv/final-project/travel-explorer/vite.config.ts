import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0', // Allow external access
    port: 5503,
    proxy: {
      '/api': {
        target: 'http://localhost:5503',
        changeOrigin: true,
        secure: false
      },
      '/socket.io': {
        target: 'http://localhost:5503',
        ws: true,
      },
    },
  },
});