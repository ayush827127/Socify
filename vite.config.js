import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://socifybackend-yt66.onrender.com', // Adjust this to match your backend server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
