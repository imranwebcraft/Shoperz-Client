import Footer from "../../components/Footer/Footer";
import updateDBImage from "../../assets/images/addproduct(3).webp";
import { useLoaderData, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const UpdateProduct = () => {
	// Get desire product details from database
	const loadededProduct = useLoaderData();

	// use location hook
	const location = useLocation();
	// Prevent auto scroll at the bottom
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	const {
		_id,
		product_name,
		brand_name,
		image,
		price,
		rating,
		type,
		description,
	} = loadededProduct || {};

	// Update product event handler
	const handleUpdateProduct = e => {
		e.preventDefault();
		const form = e.target;

		const updatedProductName = form.product_name.value;
		const updatedBrandName = form.brand_name.value;
		const updatedImage = form.image.value;
		const updatedPrice = form.price.value;
		const updatedRating = form.rating.value;
		const updatedType = form.type.value;
		const updatedDescription = form.description.value;

		console.log("Price", updatedPrice);

		const updateProduct = {
			updatedProductName,
			updatedBrandName,
			updatedImage,
			updatedPrice,
			updatedRating,
			updatedType,
			updatedDescription,
		};

		console.log(updateProduct);

		fetch(
			`https://shoperz-server-side-ls55uye2x-imran-it1.vercel.app/products/${_id}`,
			{
				method: "PUT",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(updateProduct),
			}
		)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.modifiedCount) {
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: "Product update successfull",
						showConfirmButton: false,
						timer: 1000,
					});
				}
			});
	};

	return (
		<div className=" dark:bg-gray-950">
			{/* Helmet */}
			<Helmet>
				<title> Update Product </title>
			</Helmet>
			<div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
				{/* Section Title */}
				<div className=" flex flex-col justify-center items-center text-center">
					<h1 className=" text-3xl font-bold text-gray-900 dark:text-white">
						Update <span className=" text-blue-500 ">{product_name}</span>
					</h1>
					<p className=" max-w-md text-gray-500 dark:text-gray-200 text-sm mt-2">
						Enter product details and click Add Product button to add the
						product to the database
					</p>
					<img src={updateDBImage} alt="" />
				</div>

				<form onSubmit={handleUpdateProduct} className="pb-16">
					<div className="grid gap-6 mb-6 md:grid-cols-2">
						{/* Product name */}
						<div>
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Product name
							</label>
							<input
								type="text"
								name="product_name"
								defaultValue={product_name}
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
								id="brand_name"
								className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								defaultValue={brand_name}
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
								defaultValue={image}
								id="image"
								className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Product image"
								required
							/>
						</div>
						{/* Rating */}
						<div>
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Price
							</label>
							<input
								type="number"
								name="price"
								defaultValue={price}
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
								defaultValue={rating}
								id="rating"
								className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Rating"
								max={5}
								required
							/>
						</div>
						{/* Type select */}
						<div>
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Product Type
							</label>
							<select
								name="type"
								id="type"
								className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								defaultValue={type}
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
							defaultValue={description}
							rows="4"
							className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Write your product description here..."
						></textarea>
					</div>

					<input
						className="w-full mt-5 text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800 hover:cursor-pointer transition-all duration-300 ease-linear"
						type="submit"
						value="Submit"
					/>
				</form>
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default UpdateProduct;
