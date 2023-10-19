import product_one from "../../assets/images/product(1).jpg";
import product_two from "../../assets/images/product(4).jpg";
import product_theree from "../../assets/images/product(5).jpg";
import product_four from "../../assets/images/product(2).jpg";

const FeatureOne = () => {
	return (
		<div className="dark:bg-gray-950 py-24">
			<div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-950  sm:px-6 lg:px-8">
				<div className="relative">
					<div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
						<div className="ml-auto lg:col-start-2 lg:max-w-2xl">
							<p
								data-aos="zoom-in"
								data-aos-duration="1000"
								className="text-base font-semibold leading-6 text-blue-500 uppercase"
							>
								Explore Our Products
							</p>
							<h4
								data-aos="zoom-in"
								data-aos-duration="1100"
								className="mt-2 text-2xl font-bold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9"
							>
								Discover a World of Innovation
							</h4>
							<p
								data-aos="zoom-in"
								data-aos-duration="1200"
								className="mt-4 leading-6 text-gray-500 dark:text-gray-300"
							>
								Welcome to our world of cutting-edge technology and innovation.
								Our platform offers a seamless and powerful collaborative space
								for your entire team to explore, track, and share the latest
								products from leading brands. With full control at your
								fingertips, you can enhance your shopping experience like never
								before.
							</p>
							<ul
								data-aos="zoom-in"
								data-aos-duration="1300"
								className="gap-6 mt-8 md:grid md:grid-cols-2"
							>
								<li className="mt-6 lg:mt-0">
									<div className="flex">
										<span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-blue-800 bg-blue-100 rounded-full dark:text-blue-500 dark:bg-transparent">
											<svg
												className="w-4 h-4"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												></path>
											</svg>
										</span>
										<span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
											Explore New Arrivals
										</span>
									</div>
								</li>
								<li className="mt-6 lg:mt-0">
									<div className="flex">
										<span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-blue-800 bg-blue-100 rounded-full dark:text-blue-500 dark:bg-transparent">
											<svg
												className="w-4 h-4"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												></path>
											</svg>
										</span>
										<span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
											Stay Updated with the Latest Tech
										</span>
									</div>
								</li>
								<li className="mt-6 lg:mt-0">
									<div className="flex">
										<span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-blue-800 bg-blue-100 rounded-full dark:text-blue-500 dark:bg-transparent">
											<svg
												className="w-4 h-4"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												></path>
											</svg>
										</span>
										<span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
											24/7 Customer Support
										</span>
									</div>
								</li>
								<li className="mt-6 lg:mt-0">
									<div className="flex">
										<span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-blue-800 bg-blue-100 rounded-full dark:text-blue-500 dark:bg-transparent">
											<svg
												className="w-4 h-4"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												></path>
											</svg>
										</span>
										<span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
											Enhance Your Shopping Experience
										</span>
									</div>
								</li>
							</ul>
						</div>
						<div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
							<div className="relative space-y-4">
								<div className="flex items-end justify-center space-x-4 lg:justify-start">
									<img
										className="w-32 rounded-lg shadow-lg md:w-56 hover:shadow-lg hover:shadow-blue-200 dark:hover:shadow-gray-900 transition duration-200 ease-in-out"
										width="200"
										src={product_one}
										alt="product_image"
									/>
									<img
										className="w-40 rounded-lg shadow-lg md:w-64 hover:shadow-lg hover:shadow-pink-200 dark:hover:shadow-gray-900 transition duration-200 ease-in-out"
										width="260"
										src={product_two}
										alt="product_image"
									/>
								</div>
								<div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
									<img
										className="w-24 rounded-lg shadow-lg md:w-40 hover:shadow-lg hover:shadow-green-200 dark:hover:shadow-gray-900 transition duration-200 ease-in-out"
										width="170"
										src={product_theree}
										alt="product_image"
									/>
									<img
										className="w-32 rounded-lg shadow-lg md:w-56 hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-gray-900 transition duration-200 ease-in-out"
										width="200"
										src={product_four}
										alt="product_image"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeatureOne;
