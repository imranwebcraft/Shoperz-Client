import { useLoaderData, useParams } from "react-router-dom";
import useBrands from "../../Hook/useBrands";
import BrandProductCard from "../../components/BrandProductCard/BrandProductCard";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";

const BrandProduct = () => {
	const { id } = useParams();
	// Load all brand data
	const brands = useBrands();

	// Load all product from database
	const products = useLoaderData();

	// Find the clicked Brand name
	const findBrnadName = brands?.find(brand => brand.id === parseInt(id));

	// Filter all data from the database base on the clciked barnd
	const filterProducts = products.filter(
		product => product.brand_name === findBrnadName?.brand_name
	);

	return (
		<div className="container px-6 py-4 mx-auto mt-5">
			{/* Section Title */}
			<div className=" mt-8 flex flex-col justify-center items-center text-center">
				<h1 className=" text-3xl font-bold text-gray-900 ">
					<span className=" text-blue-500 ">{findBrnadName?.brand_name}</span>{" "}
					Store
				</h1>
				<p className=" max-w-md text-gray-500 text-sm mt-2">
					Get $200–$650 in credit toward iPhone 15 or iPhone 15 Pro when you
					trade in an iPhone 11 or higher.
				</p>
				<img src="" alt="" />
			</div>
			{/* Slider */}
			<Slider />

			{/* Product Card */}
			<div className=" mt-20 grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 max-w-7xl mx-auto">
				{filterProducts?.map(product => (
					<BrandProductCard
						key={product._id}
						product={product}
					></BrandProductCard>
				))}
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default BrandProduct;
