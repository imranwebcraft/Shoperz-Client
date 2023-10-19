import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/SVG/logo.svg";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

function Navbar() {
	// Use context data
	const { user, logOut } = useContext(AuthContext);

	// Logout event handler
	const handleLogOut = () => {
		logOut()
			.then(() => {
				toast.success("Log out successfull!");
			})
			.catch(error => {
				console.log(error);
			});
	};

	// Navlinks all are here
	const navLinks = (
		<ul className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
			<li className="px-3 py-2 mx-3 mt-2 text-black transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 ">
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? " text-blue-500" : "")}
				>
					Home
				</NavLink>
			</li>
			<li className="px-3 py-2 mx-3 mt-2 text-black transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 ">
				<NavLink
					to="/addproduct"
					className={({ isActive }) => (isActive ? " text-blue-500" : "")}
				>
					Add Product
				</NavLink>
			</li>
			<li className="px-3 py-2 mx-3 mt-2 text-black transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 ">
				<NavLink
					to={"/mycart"}
					className={({ isActive }) => (isActive ? " text-blue-500" : "")}
				>
					My Cart
				</NavLink>
			</li>
		</ul>
	);
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="relative bg-white shadow-md ">
			<div className="container px-6 py-4 mx-auto">
				<div className="lg:flex lg:items-center lg:justify-between">
					<div className="flex items-center justify-between">
						<Link to={"/"}>
							<img src={logo} alt="" />
						</Link>
						<div className="flex lg:hidden">
							<button
								onClick={toggleMenu}
								type="button"
								className="text-gray-500  hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 "
								aria-label="toggle menu"
							>
								{!isOpen ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 8h16M4 16h16"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>

					<div
						className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
							isOpen
								? "translate-x-0 opacity-100"
								: "opacity-0 -translate-x-full"
						}`}
					>
						{navLinks}

						<div className="flex items-center mt-4 lg:mt-0">
							{user ? (
								<>
									<p className=" text-sm bg-indigo-100 px-2 py-1 rounded ">
										{user.displayName}
									</p>
									<div className="h-8 w-h-8 mx-2">
										<img
											className="h-full w-full rounded-full object-cover object-center"
											src={user.photoURL}
											alt=""
										/>
									</div>
									<Link
										onClick={handleLogOut}
										className="inline-flex items-center justify-center h-10 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-blue-500 hover:bg-blue-400 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none"
									>
										<span>Log Out</span>
									</Link>
								</>
							) : (
								<Link
									to={"/login"}
									className="inline-flex items-center justify-center h-10 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-blue-500 hover:bg-blue-400 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none"
								>
									<span>Login</span>
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
