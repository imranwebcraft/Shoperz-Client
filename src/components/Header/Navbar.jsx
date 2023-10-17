import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	// Navlinks all are here
	const navLinks = (
		<ul className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
			<li className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover-bg-gray-700">
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? " text-blue-500" : "")}
				>
					Home
				</NavLink>
			</li>
			<li className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover-bg-gray-700">
				<NavLink
					to="/addproduct"
					className={({ isActive }) => (isActive ? " text-blue-500" : "")}
				>
					Add Product
				</NavLink>
			</li>
			<li className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover-bg-gray-700">
				<NavLink
					to="/mycart"
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
		<nav className="relative bg-white shadow-md dark:bg-gray-800">
			<div className="container px-6 py-4 mx-auto">
				<div className="lg:flex lg:items-center lg:justify-between">
					<div className="flex items-center justify-between">
						<a href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="128"
								height="36"
								viewBox="0 0 128 36"
								fill="none"
							>
								<path
									d="M6.67014 22.0696C5.75729 21.7577 4.92743 21.4459 4.18056 21.134C3.43369 20.8013 2.79054 20.4063 2.25114 19.9489C1.71173 19.4915 1.28642 18.951 0.975227 18.3273C0.684776 17.6827 0.539551 16.9031 0.539551 15.9883C0.539551 14.2211 1.21381 12.8073 2.56233 11.747C3.9316 10.6867 5.84028 10.1565 8.28836 10.1565C9.18046 10.1565 10.0103 10.2189 10.7779 10.3436C11.5456 10.4684 12.1991 10.6659 12.7385 10.9362C13.2986 11.1857 13.7343 11.5183 14.0455 11.9341C14.3567 12.3291 14.5123 12.7969 14.5123 13.3375C14.5123 13.878 14.3878 14.3458 14.1389 14.7409C13.8899 15.1151 13.5891 15.4373 13.2364 15.7076C12.78 15.4166 12.168 15.1671 11.4003 14.9592C10.6327 14.7305 9.79248 14.6161 8.87964 14.6161C7.94605 14.6161 7.26141 14.7513 6.82574 15.0215C6.39006 15.271 6.17222 15.5933 6.17222 15.9883C6.17222 16.3002 6.30707 16.56 6.57678 16.768C6.84648 16.9551 7.25104 17.1318 7.79045 17.2981L9.43979 17.8283C11.39 18.452 12.8837 19.2524 13.921 20.2296C14.9791 21.186 15.5081 22.4958 15.5081 24.159C15.5081 25.9263 14.8131 27.3608 13.4231 28.4627C12.0331 29.5438 9.98957 30.0844 7.29253 30.0844C6.33819 30.0844 5.44609 30.0012 4.61624 29.8349C3.80712 29.6894 3.09137 29.4711 2.46897 29.18C1.86733 28.8681 1.39016 28.4939 1.03747 28.0573C0.705523 27.5999 0.539551 27.0801 0.539551 26.498C0.539551 25.8951 0.715896 25.3857 1.06859 24.9699C1.42128 24.5333 1.80509 24.2006 2.22002 23.9719C2.80092 24.4293 3.5063 24.8243 4.33616 25.157C5.18676 25.4897 6.10998 25.656 7.10581 25.656C8.12239 25.656 8.83814 25.5 9.25307 25.1882C9.668 24.8763 9.87547 24.5125 9.87547 24.0967C9.87547 23.6809 9.7095 23.369 9.37755 23.1611C9.04561 22.9324 8.57881 22.7141 7.97717 22.5062L6.67014 22.0696Z"
									fill="#2563EB"
								/>
								<path
									d="M32.9906 29.5542C32.7832 29.6166 32.4512 29.679 31.9948 29.7413C31.5591 29.8037 31.1027 29.8349 30.6255 29.8349C30.1691 29.8349 29.7542 29.8037 29.3807 29.7413C29.028 29.679 28.7272 29.5542 28.4783 29.3671C28.2293 29.18 28.0322 28.9305 27.887 28.6186C27.7625 28.286 27.7003 27.8598 27.7003 27.34V20.4167C27.7003 19.5643 27.4824 18.9718 27.0468 18.6391C26.6318 18.2857 26.1132 18.109 25.4908 18.109C25.0758 18.109 24.6817 18.1609 24.3082 18.2649C23.9348 18.3688 23.634 18.4936 23.4057 18.6391V29.5542C23.1983 29.6166 22.8663 29.679 22.4099 29.7413C21.9742 29.8037 21.5178 29.8349 21.0406 29.8349C20.5842 29.8349 20.1693 29.8037 19.7959 29.7413C19.4432 29.679 19.1423 29.5542 18.8934 29.3671C18.6444 29.18 18.4473 28.9305 18.3021 28.6186C18.1776 28.286 18.1154 27.8598 18.1154 27.34V9.25212C18.3436 9.21054 18.6755 9.15856 19.1112 9.09619C19.5676 9.01302 20.0241 8.97144 20.4805 8.97144C20.9369 8.97144 21.3415 9.00263 21.6942 9.065C22.0676 9.12737 22.3788 9.25212 22.6277 9.43923C22.8767 9.62635 23.0634 9.88623 23.1879 10.2189C23.3331 10.5307 23.4057 10.9466 23.4057 11.4663V14.5226C23.6754 14.4186 24.08 14.3043 24.6194 14.1795C25.1796 14.034 25.7916 13.9612 26.4555 13.9612C28.5094 13.9612 30.1069 14.481 31.2479 15.5205C32.4097 16.5393 32.9906 18.0674 32.9906 20.1049V29.5542Z"
									fill="#2563EB"
								/>
								<path
									d="M51.9102 22.0072C51.9102 23.2962 51.7131 24.4501 51.3189 25.4689C50.9247 26.4668 50.3646 27.3088 49.6385 27.9949C48.9331 28.681 48.0825 29.2008 47.0866 29.5542C46.0908 29.9077 44.9809 30.0844 43.7568 30.0844C42.5328 30.0844 41.4228 29.8973 40.427 29.523C39.4312 29.1488 38.5702 28.6187 37.8441 27.9326C37.1387 27.2257 36.5889 26.3733 36.1947 25.3753C35.8006 24.3773 35.6035 23.2547 35.6035 22.0072C35.6035 20.7806 35.8006 19.6683 36.1947 18.6703C36.5889 17.6723 37.1387 16.8303 37.8441 16.1442C38.5702 15.4373 39.4312 14.8968 40.427 14.5226C41.4228 14.1483 42.5328 13.9612 43.7568 13.9612C44.9809 13.9612 46.0908 14.1587 47.0866 14.5537C48.0825 14.928 48.9331 15.4685 49.6385 16.1754C50.3646 16.8615 50.9247 17.7035 51.3189 18.7015C51.7131 19.6994 51.9102 20.8013 51.9102 22.0072ZM41.0183 22.0072C41.0183 23.2754 41.2569 24.2526 41.734 24.9387C42.232 25.604 42.9166 25.9367 43.7879 25.9367C44.6593 25.9367 45.3232 25.5936 45.7796 24.9075C46.2568 24.2214 46.4954 23.2547 46.4954 22.0072C46.4954 20.7598 46.2568 19.8034 45.7796 19.1381C45.3024 18.452 44.6282 18.109 43.7568 18.109C42.8855 18.109 42.2112 18.452 41.734 19.1381C41.2569 19.8034 41.0183 20.7598 41.0183 22.0072Z"
									fill="#2563EB"
								/>
								<path
									d="M61.4309 13.9612C62.6757 13.9612 63.8271 14.1275 64.8852 14.4602C65.964 14.772 66.8872 15.2606 67.6548 15.9259C68.4225 16.5912 69.0241 17.4333 69.4598 18.452C69.8955 19.45 70.1133 20.6454 70.1133 22.0384C70.1133 23.369 69.9266 24.5333 69.5531 25.5312C69.1797 26.5292 68.6507 27.3712 67.966 28.0573C67.2814 28.7226 66.4515 29.2216 65.4765 29.5542C64.5221 29.8869 63.4537 30.0532 62.2711 30.0532C61.379 30.0532 60.5492 29.9181 59.7815 29.6478V34.8247C59.5741 34.887 59.2421 34.9494 58.7857 35.0118C58.3293 35.095 57.8625 35.1365 57.3853 35.1365C56.9289 35.1365 56.514 35.1053 56.1405 35.043C55.7878 34.9806 55.487 34.8559 55.2381 34.6687C54.9891 34.4816 54.8024 34.2217 54.6779 33.8891C54.5534 33.5772 54.4912 33.1614 54.4912 32.6416V17.6723C54.4912 17.111 54.6053 16.6536 54.8335 16.3002C55.0825 15.9467 55.4144 15.6245 55.8293 15.3334C56.4725 14.9176 57.2712 14.5849 58.2256 14.3354C59.1799 14.086 60.2483 13.9612 61.4309 13.9612ZM61.4931 25.8743C63.63 25.8743 64.6985 24.5957 64.6985 22.0384C64.6985 20.7078 64.4288 19.7202 63.8893 19.0757C63.3707 18.4312 62.6134 18.109 61.6176 18.109C61.2234 18.109 60.8707 18.1609 60.5595 18.2649C60.2483 18.348 59.9786 18.452 59.7504 18.5767V25.4377C59.9994 25.5624 60.2691 25.6664 60.5595 25.7495C60.85 25.8327 61.1612 25.8743 61.4931 25.8743Z"
									fill="#2563EB"
								/>
								<path
									d="M80.6928 30.0844C79.4687 30.0844 78.3277 29.9181 77.2696 29.5854C76.2323 29.232 75.3194 28.7122 74.5311 28.0261C73.7635 27.34 73.1514 26.4772 72.695 25.4377C72.2593 24.3981 72.0415 23.1819 72.0415 21.7889C72.0415 20.4167 72.2593 19.242 72.695 18.2649C73.1514 17.2669 73.7427 16.4561 74.4688 15.8324C75.195 15.1879 76.0248 14.7201 76.9584 14.429C77.892 14.1171 78.8463 13.9612 79.8214 13.9612C80.921 13.9612 81.9168 14.1275 82.8089 14.4602C83.7218 14.7928 84.4998 15.2502 85.1429 15.8324C85.8068 16.4145 86.3151 17.111 86.6678 17.9218C87.0412 18.7327 87.2279 19.6163 87.2279 20.5727C87.2279 21.2795 87.0308 21.8201 86.6367 22.1943C86.2425 22.5686 85.6927 22.8077 84.9873 22.9116L77.3007 24.0655C77.5289 24.7516 77.9957 25.2713 78.7011 25.6248C79.4065 25.9574 80.2156 26.1238 81.1285 26.1238C81.9791 26.1238 82.7778 26.0198 83.5247 25.8119C84.2923 25.5832 84.9147 25.3233 85.3919 25.0323C85.7238 25.2402 86.0039 25.5312 86.2321 25.9055C86.4603 26.2797 86.5744 26.6747 86.5744 27.0905C86.5744 28.0261 86.1387 28.7226 85.2674 29.18C84.6035 29.5334 83.8566 29.7725 83.0268 29.8973C82.1969 30.022 81.4189 30.0844 80.6928 30.0844ZM79.8214 17.8283C79.3235 17.8283 78.8878 17.9114 78.5144 18.0778C78.1617 18.2441 77.8713 18.4624 77.6431 18.7327C77.4148 18.9822 77.2385 19.2732 77.114 19.6059C77.0103 19.9177 76.948 20.24 76.9273 20.5727L82.2488 19.6994C82.1865 19.2836 81.9583 18.8678 81.5641 18.452C81.17 18.0362 80.5891 17.8283 79.8214 17.8283Z"
									fill="#2563EB"
								/>
								<path
									d="M95.0648 29.5542C94.8573 29.6166 94.5253 29.679 94.0689 29.7413C93.6332 29.8037 93.1768 29.8349 92.6996 29.8349C92.2432 29.8349 91.8283 29.8037 91.4549 29.7413C91.1022 29.679 90.8013 29.5542 90.5524 29.3671C90.3034 29.18 90.1063 28.9305 89.9611 28.6186C89.8366 28.286 89.7744 27.8598 89.7744 27.34V17.9842C89.7744 17.506 89.8574 17.1006 90.0234 16.768C90.2101 16.4145 90.4694 16.1027 90.8013 15.8324C91.1333 15.5621 91.5378 15.323 92.015 15.1151C92.5129 14.8864 93.042 14.6889 93.6021 14.5226C94.1623 14.3562 94.7432 14.2315 95.3448 14.1483C95.9465 14.0444 96.5481 13.9924 97.1498 13.9924C98.1456 13.9924 98.934 14.1899 99.5149 14.5849C100.096 14.9592 100.386 15.5829 100.386 16.4561C100.386 16.7472 100.345 17.0382 100.262 17.3293C100.179 17.5996 100.075 17.8491 99.9505 18.0778C99.5149 18.0778 99.0688 18.0986 98.6124 18.1401C98.156 18.1817 97.7099 18.2441 97.2742 18.3273C96.8386 18.4104 96.4236 18.504 96.0295 18.6079C95.656 18.6911 95.3345 18.795 95.0648 18.9198V29.5542Z"
									fill="#2563EB"
								/>
								<path
									d="M103.189 29.5854C102.857 29.2943 102.587 28.9513 102.38 28.5563C102.193 28.1613 102.1 27.7143 102.1 27.2153C102.1 26.7995 102.193 26.394 102.38 25.999C102.587 25.5832 102.836 25.1986 103.127 24.8451L108.479 18.5456H102.753C102.629 18.3169 102.504 18.0258 102.38 17.6723C102.276 17.3189 102.224 16.9343 102.224 16.5185C102.224 15.7908 102.38 15.271 102.691 14.9592C103.023 14.6265 103.459 14.4602 103.998 14.4602H113.801C114.133 14.7513 114.392 15.0943 114.579 15.4893C114.786 15.8843 114.89 16.3313 114.89 16.8303C114.89 17.2461 114.786 17.662 114.579 18.0778C114.392 18.4728 114.153 18.847 113.863 19.2005L108.635 25.5H114.734C114.859 25.7287 114.973 26.0198 115.077 26.3733C115.201 26.7267 115.263 27.1113 115.263 27.5271C115.263 28.2548 115.097 28.785 114.765 29.1176C114.454 29.4295 114.029 29.5854 113.49 29.5854H103.189Z"
									fill="#2563EB"
								/>
								<path
									d="M111.727 2.93334C111.727 1.82176 112.629 0.920643 113.74 0.920643C114.852 0.920643 115.753 1.82176 115.753 2.93334V6.95874C115.753 8.07032 114.852 8.97144 113.74 8.97144C112.629 8.97144 111.727 8.07032 111.727 6.95874V2.93334Z"
									fill="#FFC045"
								/>
								<path
									d="M103.777 7.89362C102.991 7.10762 102.991 5.83324 103.777 5.04724C104.563 4.26123 105.837 4.26123 106.623 5.04724L109.47 7.89362C110.256 8.67963 110.256 9.954 109.47 10.74C108.684 11.526 107.409 11.526 106.623 10.74L103.777 7.89362Z"
									fill="#FFC045"
								/>
								<path
									d="M118.009 22.1255C117.223 21.3395 117.223 20.0651 118.009 19.2791C118.795 18.4931 120.07 18.4931 120.856 19.2791L123.702 22.1255C124.488 22.9115 124.488 24.1859 123.702 24.9719C122.916 25.7579 121.642 25.7579 120.856 24.9719L118.009 22.1255Z"
									fill="#FFC045"
								/>
								<path
									d="M121.791 17.0222C120.679 17.0222 119.778 16.1211 119.778 15.0095C119.778 13.898 120.679 12.9968 121.791 12.9968H125.816C126.928 12.9968 127.829 13.898 127.829 15.0095C127.829 16.1211 126.928 17.0222 125.816 17.0222H121.791Z"
									fill="#FFC045"
								/>
								<path
									d="M120.855 10.74C120.069 11.526 118.795 11.526 118.009 10.74C117.223 9.95401 117.223 8.67964 118.009 7.89363L120.855 5.04724C121.641 4.26123 122.916 4.26123 123.702 5.04724C124.488 5.83325 124.488 7.10762 123.702 7.89363L120.855 10.74Z"
									fill="#FFC045"
								/>
							</svg>
						</a>

						<div className="flex lg:hidden">
							<button
								onClick={toggleMenu}
								type="button"
								className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
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
						className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
							isOpen
								? "translate-x-0 opacity-100"
								: "opacity-0 -translate-x-full"
						}`}
					>
						{navLinks}

						<div className="flex items-center mt-4 lg:mt-0">
							<button className="inline-flex items-center justify-center h-10 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none">
								<span>Login</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;