/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: "'Poppins', sans-serif",
			},
			borderWidth: {
				0.5: "0.5px",
			},
		},
	},
	plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
