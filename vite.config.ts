import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		modules: {
			localsConvention: 'camelCase',
		},
		preprocessorOptions: {
			scss: {
				additionalData: `@use "sass:color";`,
			},
		},
	},
	build: {
		minify: 'esbuild',
	},
	base: '', // здесь пусто?
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
});
