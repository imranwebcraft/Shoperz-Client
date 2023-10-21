import banner from "../../assets/images/banner-image.jpg";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Banner = () => {
	return (
		<div className="px-6 py-12 lg:py-28 mx-auto text-center dark:bg-gray-950">
			<div className="max-w-4xl mx-auto flex flex-col justify-center items-center">
				<h1
					className="
				 w-full bg-gradient-to-r from-green-300 via-blue-500 to-blue-500 bg-clip-text text-transparent sm:text-5xl text-3xl font-bold  lg:text-6xl"
					data-aos="fade-up"
					data-aos-easing="ease-in"
					data-aos-duration="1000"
				>
					Tech Trends Unleashed.
				</h1>
				<p
					className=" max-w-lg mx-auto mt-6 text-gray-500 dark:text-gray-300"
					data-aos="fade-up"
					data-aos-easing="ease-in"
					data-aos-duration="1200"
				>
					Discover the gadgets that redefine convenience, and the electronics
					that shape our future.
				</p>
				<button
					data-aos="fade-up"
					data-aos-easing="ease-in"
					data-aos-duration="1400"
					className="px-4 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-500 rounded-md hover:bg-blue-500/90 lg:mx-0 lg:w-auto focus:outline-none transition duration-300 flex gap-1"
				>
					<span>Start shopping now</span>
					<span>
						<HiOutlineShoppingBag className="text-lg" />
					</span>
				</button>
				<p
					data-aos="fade-up"
					data-aos-easing="ease-in"
					data-aos-duration="1600"
					className="mt-3 font-medium text-gray-600 text-sm dark:text-gray-400"
				>
					No credit card required
				</p>
			</div>

			<div
				data-aos="fade-up"
				data-aos-easing="ease-in"
				data-aos-duration="1500"
				className="flex justify-center mt-10"
			>
				<img
					className="object-cover w-full h-96 rounded-xl lg:w-4/5"
					src={banner}
				/>
			</div>
		</div>
	);
};

export default Banner;
