import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       chunkFileNames: 'src/assets/js/[name]-[hash].js',
  //       entryFileNames: 'src/assets/js/[name]-[hash].js',
        
  //       assetFileNames: ({name}) => {
  //         if (/\.(gif|jpe?g|png|svg|)$/.test(name ?? '')){
  //             return 'src/assets/images/[name]-[hash][extname]';
  //         }
          
  //         if (/\.css$/.test(name ?? '')) {
  //             return 'src/assets/css/[name]-[hash][extname]';   
  //         }

  //         if (/\.pdf$/.test(name ?? '')) {
  //           return 'src/assets/css/[name]-[hash][extname]';   
  //       }
 
  //         // default value
  //         // ref: https://rollupjs.org/guide/en/#outputassetfilenames
  //         return 'src/assets/[name]-[hash][extname]';
  //       },
  //     },
  //   }
  // },
}) //https://github.com/vitejs/vite/discussions/6552 -> Code obtained for the above configuration
