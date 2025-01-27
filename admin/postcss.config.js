import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(), // 使用 import 加载插件
    autoprefixer(),
  ],
};