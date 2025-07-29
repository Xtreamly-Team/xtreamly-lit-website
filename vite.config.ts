import basicSsl from '@vitejs/plugin-basic-ssl'
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
	console.log(mode)
	process.env.mode = mode
	return {
		server: {
			host: '0.0.0.0',
			port: 4001,
		},
		preview: {
			host: '0.0.0.0',
			port: 4001,
		},
		plugins: [
			// ...(["development"].includes(mode) ? [basicSsl({})] : []),
			tailwindcss(),
			sveltekit()
		],
		ssr: {
			noExternal: [
				'@simplewebauthn/browser',
			],
			external: [
				'@lit-protocol/types',
				"@lit-protocol/auth-browser",
				"@lit-protocol/auth-helpers",
				"@lit-protocol/constants",
				"@lit-protocol/contracts-sdk",
				"@lit-protocol/lit-auth-client",
				"@lit-protocol/lit-node-client",
				"@lit-protocol/wrapped-keys"
			]

		}
	}
});
