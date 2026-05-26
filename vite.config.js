import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Тестирование преподавателя ожидает адрес localhost:3000 (см. ТЗ).
// Для деплоя на GitHub Pages используется относительный base.
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    open: true
  },
  preview: {
    port: 3000,
    strictPort: true
  }
});
