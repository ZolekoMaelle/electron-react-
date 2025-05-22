
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import electron from 'vite-plugin-electron'


// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//     electron({
//       entry: 'electron/main.cjs',
      
//     })
//   ],
//   server: {
//     host: true,         
//     port: 5174,         
//     strictPort: true,   
//     hmr: {
//       protocol: 'ws',   
//       host: 'localhost',
//       clientPort: 5174,
//       overlay: false    
//     }
//   },
//   clearScreen: false 
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import electron from 'vite-plugin-electron';
import path from 'path'; // Required for path aliases

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    electron({
      entry: 'electron/main.cjs',
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/Pages'),
      '@events': path.resolve(__dirname, './src/Events')
    }
  },
  server: {
    host: true,
    port: 5174,
    strictPort: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      clientPort: 5174,
      overlay: false
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  clearScreen: false
});