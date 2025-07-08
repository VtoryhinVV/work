import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
export default defineConfig({
	server: {
		proxy: {
			'/api': {
				target: 'https://admin.aff7o.com',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''),
			},
		},
	},
	plugins: [react(), svgr()],
})
