import { Link, useLoaderData, useParams } from "react-router-dom";
import useBrands from "../../Hook/useBrands";
import BrandProductCard from "../../components/BrandProductCard/BrandProductCard";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import noProduct from "../../assets/images/noProduct.webp";
import { Helmet } from "react-helmet-async";

const BrandProduct = () => {
	const { id } = useParams();
	// Load all brand data
	const brands = useBrands();
	console.log(brands);

	// Load all product from database
	const products = useLoaderData();

	// Find the clicked Brand name
	const findBrnadName = brands?.find(brand => brand.id === parseInt(id));

	// Filter all data from the database base on the clciked barnd
	const filterProducts = products.filter(
		product => product.brand_name === findBrnadName?.brand_name
	);

	console.log("Filter", filterProducts);

	return (
		<div className=" dark:bg-gray-950 py-5 lg:py-16">
			<div className="container px-6 mx-auto">
				{/* Helmet */}
				<Helmet>
					<title> Brand Product </title>
				</Helmet>
				{/* Section Title */}
				<div className=" mt-8 flex flex-col justify-center items-center text-center">
					<h1 className=" text-3xl font-bold text-gray-900 dark:text-white ">
						<span className=" text-blue-500  ">
							{findBrnadName?.brand_name}
						</span>{" "}
						Store
					</h1>
					<p className=" max-w-2xl text-gray-500 dark:text-gray-200 text-sm mt-2">
						Get $200–$650 in credit toward your next purchase when you trade in
						your existing device, whether it&apos;s a smartphone, headphone,
						PlayStation, or camera.
					</p>
					<img src="" alt="" />
				</div>
				{/* Slider */}
				<Slider />
				{/* Product Card */}
				{filterProducts.length === 0 ? (
					<div className="w-full flex flex-col justify-center items-center mt-20">
						<p className="  text-3xl font-bold text-gray-900 dark:text-white">
							No product added yet
						</p>
						<p className=" max-w-md text-gray-500 dark:text-gray-200 text-sm mt-2">
							Please add some{" "}
							<span className=" bg-neutral-50 dark:bg-gray-900 px-1 hover:bg-neutral-100 text-blue-500 underline hover:decoration-blue-400 hover:decoration-2 hover:underline-offset-2 mx-1 font-medium">
								{" "}
								<Link to={"/addproduct"}> Product </Link>{" "}
							</span>
							in this category
						</p>
						<figure>
							<img src={noProduct} alt="" />
						</figure>
					</div>
				) : (
					<div className=" my-20 grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 max-w-7xl mx-auto">
						{filterProducts?.map(product => (
							<BrandProductCard
								key={product._id}
								product={product}
							></BrandProductCard>
						))}
					</div>
				)}
			</div>
			{/* Footer */}
			<Footer />
		</div>
	);
};

export default BrandProduct;
