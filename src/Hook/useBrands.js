import { useEffect, useState } from "react";

const useBrands = () => {
	const [brands, setBrands] = useState([]);

	useEffect(() => {
		fetch("/brands.json")
			.then(res => res.json())
			.then(data => setBrands(data));
	}, []);

	return brands;
};

export default useBrands;
