import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [VantResolver()],
        })
    ],
    build: {
        target: "es2015",
        outDir: 'dist',
        assetsDir: 'assets'
    },
    server: {
        port: 5173,
        open: true
    },
    resolve: {
        alias: {
            "@": "/src"
        }
    },
    extensions: ['.js', '.vue', '.ts']
})
