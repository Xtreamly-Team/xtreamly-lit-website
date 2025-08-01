import nodeAdapter from '@sveltejs/adapter-node';
import autoAdapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import 'dotenv/config';

const devConfig = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: autoAdapter()
	}
};

const prodConfig = {
	kit: {
		adapter: nodeAdapter(),
	}
};

const config = process.env.mode == 'development' ? devConfig : prodConfig

export default config
