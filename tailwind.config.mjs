/** @type {import('tailwindcss').Config} */
export default ({
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			brightness: {
				'50': '.5',
				'75': '.75',
				'90': '.9',
				'100': '1',
				'125': '1.25',
				'150': '1.5',
				'200': '2',
			  }
		},
	},
	plugins: [],
});
