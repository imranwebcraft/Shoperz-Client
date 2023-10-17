const Banner = () => {
	return (
		<div className="container px-6 py-16 mx-auto text-center">
			<div className="max-w-lg mx-auto">
				<h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-blue-500 bg-clip-text text-transparent sm:text-5xl text-3xl font-bold dark:text-white lg:text-4xl">
					Tech Trends Unleashed.
				</h1>
				<p className="mt-6 text-gray-500 dark:text-gray-300">
					Discover the gadgets that redefine convenience, and the electronics
					that shape our future.
				</p>
				<button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-md hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none transition duration-300 ">
					Start shopping now
				</button>
				<p className="mt-3 text-sm text-gray-400 ">No credit card required</p>
			</div>

			<div className="flex justify-center mt-10">
				<img
					className="object-cover w-full h-96 rounded-xl lg:w-4/5"
					src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2094"
				/>
			</div>
		</div>
	);
};

export default Banner;
