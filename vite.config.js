import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: './src',
  build: {
    emptyOutDir: false,
    outDir: resolve(__dirname, 'dist'),
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'LayoutComposer',
      formats: ['iife', 'es'],
      fileName: (format) => {
        if (format === 'es') {
          return 'index.js'
        }
        return `index.${format}.js`
      },
    },
  },
})
