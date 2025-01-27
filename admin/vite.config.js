import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssConfig from './postcss.config.js'; // 使用 import

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: postcssConfig, // 显式添加 PostCSS 配置
  },
  server: { port: 5174 },
});