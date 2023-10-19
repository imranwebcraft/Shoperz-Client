import { useState } from "react";
import Switch from "react-switch";

const ThemeToggle = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = checked => {
		setIsDarkMode(checked);
		document.documentElement.classList.toggle("dark", checked);
	};

	return (
		<div className="mx-2 flex justify-center items-center space-x-2">
			<Switch onChange={toggleDarkMode} checked={isDarkMode} />
		</div>
	);
};

export default ThemeToggle;
