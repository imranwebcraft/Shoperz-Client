import Swal from "sweetalert2";
import addProduct1 from "../../assets/images/addproduct(1).webp";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const AddProduct = () => {
	// use location hook
	const location = useLocation();
	// Prevent auto scroll at the bottom
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	// Add product event handler
	const handleAddProduct = e => {
		e.preventDefault();
		const form = e.target;

		const product_name = form.product_name.value;
		const brand_name = form.brand_name.value;
		const image = form.image.value;
		const price = form.price.value;
		const rating = form.rating.value;
		const type = form.type.value;
		const description = form.description.value;

		const newProduct = {
			product_name,
			brand_name,
			image,
			price,
			rating,
			type,
			description,
		};
		console.log(newProduct);

		fetch(
			"https://shoperz-server-side-ls55uye2x-imran-it1.vercel.app/products",
			{
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(newProduct),
			}
		)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.insertedId) {
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: "Product added to the database",
						showConfirmButton: false,
						timer: 1000,
					});
					form.reset();
				}
			});
	};

	return (
		<div className=" dark:bg-gray-950 py-12 lg:py-20">
			<Helmet>
				<title>Shoperz | Add Product</title>
			</Helmet>
			<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
				{/* Section Title */}
				<div className=" flex flex-col justify-center items-center text-center">
					<h1 className=" text-3xl font-bold text-gray-900 dark:text-white ">
						Add product to the <span className=" text-blue-500 ">Database</span>
					</h1>
					<p className=" max-w-md text-gray-500  dark:text-gray-200 text-sm mt-2">
						Enter product details and click Add Product button to add the
						product to the database
					</p>
					<img src={addProduct1} alt="" />
				</div>

				<form onSubmit={handleAddProduct} className="pb-16">
					<div className="grid gap-6 mb-6 md:grid-cols-2">
						{/* Product name */}
						<div>
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Product name
							</label>
							<input
								type="text"
								name="product_name"
								id="product_name"
								className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Enter product name"
								required
							/>
						</div>

						{/* Brand Name */}
						<div>
							<label
								htmlFor="countries"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Brand Name
							</label>
							<select
								name="brand_name"
								id="countries"
								className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								defaultValue="Select Brand"
							>
								<option value="Select Brand">Select Brand</option>
								<option value="Apple">Apple</option>
								<option value="Google">Google</option>
								<option value="Samsung">Samsung</option>
								<option value="Sony">Sony</option>
								<option value="Intel">Intel</option>
								<option value="Microsoft">Microsoft</option>
							</select>
						</div>
						{/* Product Image */}
						<div>
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Product image
							</label>
							<input
								type="text"
								name="image"
								id="company"
								className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
								name="price"
								id="price"
								className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Enter price"
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
								name="rating"
								id="rating"
								className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
								Product Type
							</label>
							<select
								name="type"
								id="countries"
								className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								defaultValue="Product type"
							>
								<option value="Product type">Product type</option>
								<option value="Smart Phone">Smart Phone</option>
								<option value="Head Phone">Headphone</option>
								<option value="Laptop">Laptop</option>
								<option value="Play Station">Play Station</option>
								<option value="Camera">Camera</option>
								<option value="Processor">Processor</option>
								<option value="Others">Others</option>
							</select>
						</div>
					</div>
					<div className=" mb-6">
						<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Product description
						</label>
						<textarea
							name="description"
							rows="4"
							className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Write your product description here..."
						></textarea>
					</div>

					<input
						className="w-full mt-5 text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800 hover:cursor-pointer transition-all duration-300 ease-linear"
						type="submit"
						value="Add Product"
					/>
				</form>
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default AddProduct;
