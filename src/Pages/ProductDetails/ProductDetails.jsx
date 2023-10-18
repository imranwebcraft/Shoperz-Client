import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const ProductDetails = () => {
	const { user } = useContext(AuthContext);
	const userEmail = user.email;

	const product = useLoaderData();
	const { product_name, description, brand_name, image, price, rating, type } =
		product || {};

	const cartItem = {
		product_name,
		description,
		brand_name,
		image,
		price,
		rating,
		type,
		userEmail,
	};

	console.log(cartItem);

	const handleAddToCart = () => {
		fetch("http://localhost:5000/carts", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(cartItem),
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.insertedId) {
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: "Product added to the Cart",
						showConfirmButton: false,
						timer: 1000,
					});
				}
			});
	};

	return (
		<section className=" px-4 pb-6 pt-16 sm:px-6 lg:px-8">
			{/* Section Title */}
			<div className=" flex flex-col justify-center items-center text-center">
				<h1 className=" text-3xl font-bold text-gray-900 ">
					Details of <span className=" text-blue-500 ">{product_name}</span>
				</h1>
				<p className=" max-w-md text-gray-500 text-sm mt-2">
					Explore the details of this amazing product.
				</p>
			</div>
			<div className="mx-auto max-w-screen-xl px-6 mt-10">
				<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
					<div className="col-span-4 ">
						{/* <div>
							<figure>
								<img src={image} alt="" />
							</figure>
							<div>
								<p>Name: {product_name}</p>
							</div>
						</div> */}

						<div className="mx-auto max-w-md overflow-hidden bg-white ">
							<img
								src={image}
								className="w-full object-cover rounded-t-lg rounded-b-md"
								alt="product image"
							/>
							<div>
								<h3 className="text-xl font-medium text-gray-900">
									{product_name}
								</h3>
								<p className="mt-1 text-gray-500">{description}</p>
								<div className="mt-4 flex flex-col md:flex-row gap-2">
									<span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-sm font-semibold text-gray-900">
										{brand_name}{" "}
									</span>
									<span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-sm font-semibold text-blue-600">
										Price$: {price}{" "}
									</span>
									<span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-sm font-semibold text-indigo-600">
										Type: {type}{" "}
									</span>
									<span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-sm font-semibold text-orange-600">
										Rating {rating} /5
									</span>
								</div>
							</div>
						</div>

						<button
							onClick={handleAddToCart}
							className="inline-flex mt-5 h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-blue-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-blue-400 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none"
						>
							<span>Add To Cart</span>
						</button>
					</div>
					<div className="col-span-4 lg:col-span-8">
						<section className="dark:bg-gray-800 dark:text-gray-100">
							<div className="container max-w-5xl px-4 py-12 mx-auto">
								<div className="grid gap-4 mx-4 sm:grid-cols-12">
									<div className="col-span-12 sm:col-span-3">
										<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
											<h3 className="text-3xl font-semibold">Order Process</h3>
											<span className="text-sm font-bold tracki uppercase dark:text-gray-400">
												Follow these steps to get your product
											</span>
										</div>
									</div>
									<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
										<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
											<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
												<h3 className="text-xl font-semibold tracki">
													Step 1: Browse Products
												</h3>
												<p className="mt-3">
													Explore our wide range of products. Browse through
													different categories and find the product that suits
													your needs.
												</p>
											</div>
											<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
												<h3 className="text-xl font-semibold tracki">
													Step 2: Add to Cart
												</h3>
												<p className="mt-3">
													Once you&apos;ve found the product you want, simply
													click &lsquo;Add to Cart&lsquo; and your selected
													items will be saved for checkout.
												</p>
											</div>
											<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
												<h3 className="text-xl font-semibold tracki">
													Step 3: Place Your Order
												</h3>
												<p className="mt-3">
													Review your cart, provide shipping details, and place
													your order. We&apos;ll take care of the rest and
													deliver your product to you.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>

			{/* Footer */}
			<Footer />
		</section>
	);
};

export default ProductDetails;
