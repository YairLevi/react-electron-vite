import react from '@vitejs/plugin-react';
import { UserConfig, ConfigEnv } from 'vite';
import { join } from 'path';

const srcRoot = join(__dirname, 'src');

export default ({ command }: ConfigEnv): UserConfig => {
  const isDev = command === 'serve'
  const base = isDev ? '/' : './'
  return {
    root: srcRoot,
    base: base,
    plugins: [react()],
    resolve: {
      alias: {
        '/@': srcRoot
      }
    },
    build: {
      outDir: '../build',
      emptyOutDir: true,
      rollupOptions: {}
    },
    server: {
      port: process.env.PORT === undefined ? 3000 : +process.env.PORT
    },
    optimizeDeps: {
      exclude: ['path']
    }
  }
}
