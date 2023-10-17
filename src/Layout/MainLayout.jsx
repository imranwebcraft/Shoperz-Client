import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";

const MainLayout = () => {
	return (
		<div className="font-poppins">
			<Navbar />
			<Outlet></Outlet>
			<footer>Footer</footer>
		</div>
	);
};

export default MainLayout;
