import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import cartPhoto from "../../assets/images/cart(1).webp";
import Footer from "../../components/Footer/Footer";
import toast from "react-hot-toast";
import emptyCart from "../../assets/images/emptycart.webp";

const MyCart = () => {
	// Use context data
	const { user } = useContext(AuthContext);
	const allCarts = useLoaderData();
	// State
	const [carts, setCarts] = useState(allCarts);

	useEffect(() => {
		// Filter and set the carts based on user email
		const filterCartByUserEmail = allCarts?.filter(
			cart => cart.userEmail === user?.email
		);
		setCarts(filterCartByUserEmail);
	}, [allCarts, user]);

	// delete event handler
	const handleDelete = id => {
		console.log("Deleting this item", id);
		fetch(`http://localhost:5000/carts/${id}`, {
			method: "DELETE",
		})
			.then(res => res.json())
			.then(data => {
				if (data.deletedCount === 1) {
					toast.success("Delete successful");
					const remainingCartItems = carts?.filter(cart => cart._id !== id);
					setCarts(remainingCartItems);
				}
			});
	};

	return (
		<div>
			<div className=" max-w-7xl mx-auto mt-12">
				{/* Section Title */}
				<div className="flex flex-col justify-center items-center text-center">
					<h1 className=" text-3xl font-bold text-gray-900 ">
						My <span className=" text-blue-500 ">Cart</span>
					</h1>
					<p className=" max-w-md text-gray-500 text-sm mt-2">
						Review and manage the items in your shopping cart.
					</p>
					<img src={cartPhoto} alt="" />
				</div>
				<div
					className="relative w-full mx-auto bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
					aria-modal="true"
					role="dialog"
					tabIndex="-1"
				>
					<div className="mt-4 space-y-6">
						<ul className="space-y-4">
							{carts?.length === 0 ? (
								<div className=" w-full flex flex-col justify-center items-center">
									<p className=" text-3xl font-semibold text-gray-900">
										Your cart is empty
									</p>
									<p className=" text-sm mt-1">
										Please add some products to your cart to get started!
									</p>
									<img
										src={emptyCart}
										alt="empty cart illustration"
										className=" w-32 h-32 "
									/>
								</div>
							) : (
								<>
									{carts?.map(cart => {
										const { _id, image, brand_name, product_name, price } =
											cart || {};

										return (
											<li key={cart._id} className="flex items-center gap-4">
												<img
													src={image}
													alt="product image"
													className="h-16 w-16 rounded object-cover"
												/>
												<div>
													<h3 className="text-sm text-gray-900">
														{product_name}
													</h3>
													<dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
														<div>
															<dt className="inline">Brand:</dt>
															<dd className="inline">{brand_name}</dd>
														</div>

														<div>
															<dt className="inline">Price:</dt>
															<dd className="inline">{price}</dd>
														</div>
													</dl>
												</div>
												<div className="flex flex-1 items-center justify-end gap-2">
													<button
														onClick={() => handleDelete(_id)}
														className="text-gray-600 transition hover:text-red-600"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															strokeWidth="1.5"
															stroke="currentColor"
															className="h-5 w-5"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
															/>
														</svg>
													</button>
												</div>
											</li>
										);
									})}
									<div className="space-y-4 text-center">
										<a
											href="#"
											className="block rounded bg-blue-500 px-5 py-3 text-sm text-gray-100 transition hover:bg-blue-400 duration-300 ease-out"
										>
											Checkout
										</a>
										<a
											href="#"
											className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
										>
											Continue shopping
										</a>
									</div>
								</>
							)}
						</ul>
					</div>
				</div>
			</div>
			{/* Footer */}
			<Footer />
		</div>
	);
};

export default MyCart;
