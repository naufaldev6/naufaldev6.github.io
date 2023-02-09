/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				primary: '#0ea5e9',
				dark: '#0f172a',
				moon: '#f1c40f',
				brightness: '#f39c12',
				light: '#94a3b8',
			},
			backgroundImage: {
				naufal: "url('../public/naufal.png')",
			},
			fontFamily: {
				burtons: 'burtons',
			},
		},
	},
	plugins: [],
};
