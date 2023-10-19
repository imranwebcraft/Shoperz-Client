import { useState, useEffect } from "react";
import Switch from "react-switch";

const ThemeToggle = () => {
	const [isDarkMode, setIsDarkMode] = useState(
		localStorage.getItem("darkMode") === "true"
	);

	useEffect(() => {
		// Check if dark mode is enabled in localStorage on component mount
		const storedDarkMode = localStorage.getItem("darkMode") === "true";
		if (storedDarkMode) {
			document.documentElement.classList.add("dark");
		}
	}, []);

	const toggleDarkMode = checked => {
		setIsDarkMode(checked);
		document.documentElement.classList.toggle("dark", checked);
		localStorage.setItem("darkMode", checked);
	};

	return (
		<div className="mx-2">
			<Switch onChange={toggleDarkMode} checked={isDarkMode} />
		</div>
	);
};

export default ThemeToggle;
