import { Link } from "react-router-dom";
import useBrands from "../../Hook/useBrands";

const Brand = () => {
	// Get data from hook
	const brands = useBrands();

	return (
		<div className=" dark:bg-gray-900 py-12 lg:py-24">
			<section className="px-4 mx-auto max-w-7xl  sm:px-6">
				{/* Section Title */}
				<div
					data-aos="zoom-in"
					data-aos-duration="1000"
					className=" mb-10 text-center"
				>
					<h1 className=" text-3xl font-bold text-gray-900 dark:text-white ">
						Explore Leading Tech Brands
					</h1>
					<p className=" text-gray-600 dark:text-gray-200 font-medium  mt-2">
						Where Quality Meets Innovation
					</p>
				</div>
				{/* Show brand dynamically */}
				<div className="grid grid-cols-2 gap-5 text-center lg:grid-cols-6">
					{brands?.map(brand => {
						return (
							<Link
								to={`/brand/${brand.id}`}
								key={brand.id}
								className="flex flex-col items-center justify-center p-6 bg-opacity-25 bg-blue-100 hover:bg-none rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-100 hover:border-blue-500 border border-transparent
								dark:bg-gray-800 dark:hover:shadow-gray-700/50
								"
							>
								<img
									src={brand.brand_image}
									alt="Brand Logo"
									className="block object-contain h-16"
								/>
								<p className="font-medium dark:text-white">
									{brand.brand_name}
								</p>
							</Link>
						);
					})}
				</div>
			</section>
		</div>
	);
};

export default Brand;
