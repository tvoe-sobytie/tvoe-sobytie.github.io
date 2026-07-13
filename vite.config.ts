import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/tvoe-sobytie.github.io/',
    plugins: [react()],
    server: {
        host: true,           // ��������� ������ � �������� � ������ ��������� � ����
        port: 5173,           // ���� (����� �������� ��� �������������)
        strictPort: false,    // ���� ���� �����, ���������� ��������� ���������
    },
    optimizeDeps: {
        exclude: ['lucide-react'],
    },
});