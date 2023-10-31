/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			primary: ["Matter-Regular", "sans-serif"],
		},
		extend: {
			keyframes: {
				popUp: {
					"0%": { opacity: 0, transform: "translateY(0px)" },
					"50%": { opacity: 0.5, transform: "translateY(-30px)" },
					"100%": {
						opacity: 1,
						transform: "translateY(-80px)",
					},
				},
			},
			animation: {
				popUp: "popUp .3s ease-in",
			},
		},
	},
	plugins: [],
};
