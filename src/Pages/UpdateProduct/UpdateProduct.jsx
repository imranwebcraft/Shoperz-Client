import Footer from "../../components/Footer/Footer";

const UpdateProduct = () => {
	return (
		<>
			<div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
				{/* Section Title */}
				<div className=" flex flex-col justify-center items-center text-center">
					<h1 className=" text-3xl font-bold text-gray-900 ">
						Add product to the <span className=" text-blue-500 ">Database</span>
					</h1>
					<p className=" max-w-md text-gray-500 text-sm mt-2">
						Enter product details and click Add Product button to add the
						product to the database
					</p>
					<img alt="" />
				</div>

				<form>
					<div className="grid gap-6 mb-6 md:grid-cols-2">
						{/* Product name */}
						<div>
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Product name
							</label>
							<input
								type="text"
								id="product_name"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Enter product name"
								required
							/>
						</div>

						{/* Brand Name */}
						<div>
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Brand name
							</label>
							<input
								type="text"
								id="brand_name"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Enter brand name"
								required
							/>
						</div>
						{/* Product Image */}
						<div>
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Product image
							</label>
							<input
								type="text"
								id="company"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Product image"
								required
							/>
						</div>
						{/* Pice */}
						<div>
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Price
							</label>
							<input
								type="number"
								id="price"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="...TK"
								required
							/>
						</div>
						{/* Rating */}

						<div>
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Rating
							</label>
							<input
								type="number"
								id="price"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Rating"
								max={5}
								required
							/>
						</div>
						{/* Type select */}
						<div>
							<label
								htmlFor="countries"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Select an option
							</label>
							<select
								id="countries"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							>
								<option value="Choose a country" selected>
									Choose a country
								</option>
								<option value="US">United States</option>
								<option value="CA">Canada</option>
								<option value="FR">France</option>
								<option value="DE">Germany</option>
							</select>
						</div>
					</div>
					<div className=" mb-6">
						<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Product description
						</label>
						<textarea
							rows="4"
							className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Write your product description here..."
						></textarea>
					</div>

					<input
						className="w-full text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800 hover:cursor-pointer transition-all duration-300 ease-linear"
						type="submit"
						value="Add Product"
					/>
				</form>
			</div>

			{/* Footer */}
			<Footer />
		</>
	);
};

export default UpdateProduct;
