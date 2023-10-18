import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
	return (
		<div className="font-poppins">
			<Toaster></Toaster>
			<Navbar />
			<Outlet></Outlet>
		</div>
	);
};

export default MainLayout;
