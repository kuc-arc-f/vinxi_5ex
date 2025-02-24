import vue from '@vitejs/plugin-vue'
import { createApp } from "vinxi";

export default createApp({
	routers: [
		{
			name: "public",
			type: "static",
			dir: "./public",
		},
		{
			name: 'api',
			type: 'http',
			handler: './app/api.ts',
			base: '/api',
		},		
		{
			name: "client",
			type: "spa",
			handler: "./index.ts",
			target: "browser",
			plugins: () => [vue()],
		},
	],
});
