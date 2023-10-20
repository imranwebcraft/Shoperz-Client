import { useState, useEffect } from "react";
import Switch from "react-switch";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";

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
		<div className="mx-2 flex gap-2 justify-center items-center">
			<BsFillSunFill className="dark:text-white"></BsFillSunFill>
			<Switch
				onChange={toggleDarkMode}
				checked={isDarkMode}
				checkedIcon={null}
				uncheckedIcon={null}
				offHandleColor="#FFF"
				onHandleColor="#FFF"
				offColor="#60A5FA"
				onColor="#36454F"
			/>
			<BsMoonStarsFill className="dark:text-white"></BsMoonStarsFill>
		</div>
	);
};

export default ThemeToggle;
