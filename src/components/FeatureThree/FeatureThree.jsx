// import Testimonial from "../Testimonials/Testimonials";

const FeatureThree = () => {
	return (
		<div className=" dark:bg-gray-950 py-12 lg:py-24">
			<section className=" dark:text-gray-100 container mx-auto">
				<div className="container px-6 mx-auto">
					<div className="grid items-center gap-4 xl:grid-cols-5">
						<div
							data-aos="zoom-in-up"
							data-aos-duration="1000"
							className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left"
						>
							<h2 className="text-3xl font-bold text-gray-900 dark:text-white">
								Hear from Our {""}
								<span className=" text-blue-500 ">Happy Clients</span>{" "}
							</h2>
							<p className="text-gray-600 font-medium dark:text-gray-400">
								Our satisfied customers share their experiences with us. Read
								what they have to say about our services.
							</p>
						</div>
						<div className="p-6 xl:col-span-3">
							<div className="grid gap-4 md:grid-cols-2">
								<div className="grid content-center gap-4">
									<div
										data-aos="zoom-in-up"
										data-aos-duration="1200"
										className="p-6 rounded shadow-md dark:shadow-none dark:border dark:border-blue-500  dark:bg-gray-900"
									>
										<p>
											&quot;I was truly amazed by the quality of service and
											products offered by this company. Their attention to
											detail and commitment to excellence is unparalleled.&quot;
										</p>
										<div className="flex items-center mt-4 space-x-4">
											<img
												src="https://source.unsplash.com/50x50/?portrait?1"
												alt=""
												className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
											/>
											<div>
												<p className="text-lg font-semibold">Sarah Johnson</p>
												<p className="text-sm dark:text-gray-400">
													CEO of Tech Solutions
												</p>
											</div>
										</div>
									</div>
									<div
										data-aos="zoom-in-up"
										data-aos-duration="1200"
										className="p-6 rounded shadow-md dark:shadow-none dark:border dark:border-blue-500 dark:bg-gray-900"
									>
										<p>
											&quot;The team at this company is not only professional
											but also incredibly friendly. They made our project a huge
											success and exceeded our expectations.&quot;
										</p>
										<div className="flex items-center mt-4 space-x-4">
											<img
												src="https://source.unsplash.com/50x50/?portrait?2"
												alt=""
												className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
											/>
											<div>
												<p className="text-lg font-semibold">John Williams</p>
												<p className="text-sm dark:text-gray-400">
													Marketing Manager at Innovate Corp
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="grid content-center gap-4">
									<div
										data-aos="zoom-in-up"
										data-aos-duration="1200"
										className="p-6 rounded shadow-md dark:shadow-none dark:border dark:border-blue-500 dark:bg-gray-900"
									>
										<p>
											&quot;Working with this company has been a pleasure. Their
											dedication to customer satisfaction is truly remarkable. I
											highly recommend their services.&quot;
										</p>
										<div className="flex items-center mt-4 space-x-4">
											<img
												src="https://source.unsplash.com/50x50/?portrait?3"
												alt=""
												className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
											/>
											<div>
												<p className="text-lg font-semibold">Alice Adams</p>
												<p className="text-sm dark:text-gray-400">
													CFO of Global Innovations
												</p>
											</div>
										</div>
									</div>
									<div
										data-aos="zoom-in-up"
										data-aos-duration="1200"
										className="p-6 rounded shadow-md dark:shadow-none dark:border dark:border-blue-500 dark:bg-gray-900"
									>
										<p>
											&quot;We&apos;ve been partners with this company for
											years, and they&apos;ve consistently delivered top-notch
											solutions. They truly understand our business needs.&quot;
										</p>
										<div className="flex items-center mt-4 space-x-4">
											<img
												src="https://source.unsplash.com/50x50/?portrait?4"
												alt=""
												className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
											/>
											<div>
												<p className="text-lg font-semibold">Michael White</p>
												<p className="text-sm dark:text-gray-400">
													CMO of Innovate Technologies
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <section className="my-8">
				<div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
					<h1 className="text-4xl font-semibold leadi text-center">
						What our customers are saying about us
					</h1>
				</div>
				<div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
					<div className="flex flex-col items-center mx-12 lg:mx-0">
						<div className="relative text-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								fill="currentColor"
								className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
							>
								<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
								<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
							</svg>
							<p className="px-6 py-1 text-lg italic">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Voluptatibus quibusdam, eligendi exercitationem molestias
								possimus facere.
							</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								fill="currentColor"
								className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
							>
								<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
								<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
							</svg>
						</div>
						<span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
						<p>Leroy Jenkins</p>
					</div>
					<div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
						<div className="relative text-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
							>
								<path
									fill="currentColor"
									d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
								></path>
								<path
									fill="currentColor"
									d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
								></path>
							</svg>
							<p className="px-6 py-1 text-lg italic">
								Accusantium illum cupiditate harum asperiores iusto quos quasi
								quis quae! Fugit doloribus, voluptatum quidem magnam velit
								excepturi nobis, reprehenderit ducimus incidunt quisquam quae
								veritatis, quos iure harum.
							</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
							>
								<path
									fill="currentColor"
									d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
								></path>
								<path
									fill="currentColor"
									d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
								></path>
							</svg>
						</div>
						<span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
						<p>Leroy Jenkins</p>
					</div>
				</div>
			</section> */}
		</div>
	);
};

export default FeatureThree;
