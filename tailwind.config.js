module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				gray: {
					100: '#9ca3af', //header p tag
					200: '#4b5563', //date
					300: '#d5d5d5', //card-bg
				},
			},
		},
	},
	plugins: [],
};
