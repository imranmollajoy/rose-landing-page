import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		},
		paths: {
			// YOUR github repository name
			base: '/rose-landing-page'
		}
	}
};

export default config;
