import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': isProduction ? 'https://lwqbt.onrender.com/api' : 'http://localhost:10000'
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          wheel: ['react-custom-roulette'],
          icons: ['react-icons']
        }
      }
    }
  }
});
