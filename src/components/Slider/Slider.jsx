import { useEffect } from "react";
import Glide from "@glidejs/glide";
import { useLocation } from "react-router-dom";

const Slider = () => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	useEffect(() => {
		const slider = new Glide(".glide", {
			type: "carousel",
			focusAt: "center",
			perView: 3,
			autoplay: 3000,
			animationDuration: 700,
			gap: 24,
			classNames: {
				nav: {
					active: "[&>*]:bg-blue-700",
				},
			},
			breakpoints: {
				1024: {
					perView: 2,
				},
				640: {
					perView: 1,
				},
			},
		}).mount();

		return () => {
			slider.destroy();
		};
	}, []);

	return (
		<>
			{/*<!-- Component: Carousel with indicators & controls inside --> */}
			<div className="glide relative w-full mt-10">
				{/*    <!-- Slides --> */}
				<div className="overflow-hidden" data-glide-el="track">
					<ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
						<li>
							<img
								src="https://i.ibb.co/z7KJnQv/mockup-free-b6-X3-7-UIf-V4-unsplash.jpg"
								className="m-auto max-h-full w-full max-w-full"
							/>
						</li>
						<li>
							<img
								src="https://i.ibb.co/6bZWxL1/ervo-rocks-Zam8-Tv-Eg-N5o-unsplash.jpg"
								className="m-auto max-h-full w-full max-w-full"
							/>
						</li>

						<li>
							<img
								src="https://i.ibb.co/BTrbzMP/samer-khodeir-Rc4-fg9-Hg-CU-unsplash.jpg"
								className="m-auto max-h-full w-full max-w-full"
							/>
						</li>
						<li>
							<img
								src="https://i.ibb.co/XJ22YmZ/brent-ninaber-6qesn-UQce-JA-unsplash.jpg"
								className="m-auto max-h-full w-full max-w-full"
							/>
						</li>
						<li>
							<img
								src="https://i.ibb.co/QngCWsN/simon-daoudi-2w-Foa040m8g-unsplash.jpg"
								className="m-auto max-h-full w-full max-w-full"
							/>
						</li>
						<li>
							<img
								src="https://i.ibb.co/YDpNBpN/ian-powell-l-Bafub-VUk-Do-unsplash.jpg"
								className="m-auto max-h-full w-full max-w-full"
							/>
						</li>
					</ul>
				</div>
				{/*    <!-- Controls --> */}
				<div
					className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
					data-glide-el="controls"
				>
					<button
						className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
						data-glide-dir="<"
						aria-label="prev slide"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-5 w-5"
						>
							<title>prev slide</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
							/>
						</svg>
					</button>
					<button
						className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
						data-glide-dir=">"
						aria-label="next slide"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-5 w-5"
						>
							<title>next slide</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
							/>
						</svg>
					</button>
				</div>
			</div>
			{/*<!-- End Carousel with indicators & controls inside --> */}
		</>
	);
};

export default Slider;
