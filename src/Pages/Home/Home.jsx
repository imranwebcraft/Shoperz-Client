import FeatureOne from "../../FeatureOne/FeatureOne";
import Brand from "../../components/Brand/Brand";
import FeatureTwo from "../../components/FeatureTwo/FeatureTwo";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Header/Banner";

const Home = () => {
	return (
		<div>
			<Banner />
			<Brand />
			<FeatureOne />
			<FeatureTwo />
			<Footer />
		</div>
	);
};

export default Home;
