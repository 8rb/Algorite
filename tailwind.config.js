module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./modules/**/*.{js,ts,jsx,tsx}',
		'./navigation/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#6767E7',
				'primary-200': '#5757DF',
				'light-gray-100': '#b0b4b8',
				'light-gray-200': '#969696',
				'dark-gray-100': '#181A1E',
				'dark-gray-200': '#1B1E20',
			},
		},
	},
	plugins: [],
}
