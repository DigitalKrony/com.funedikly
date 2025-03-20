import { defineConfig } from "vite";
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      name: '@df/static-database',
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index'
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    },
    outDir: 'lib',
    emptyOutDir: true
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  }
});
