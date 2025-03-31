import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // 기본 경로 설정
  server: {
    port: 5173,
    open: true, // 서버 시작 시 브라우저 자동 실행
  },
});
