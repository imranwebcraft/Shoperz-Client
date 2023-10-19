import { Helmet } from "react-helmet-async";
import Brand from "../../components/Brand/Brand";
import FeatureTwo from "../../components/FeatureTwo/FeatureTwo";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Header/Banner";
import FeatureThree from "../../components/FeatureThree/FeatureThree";
import FeatureOne from "../../components/FeatureOne/FeatureOne";

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Shoperz | Home</title>
			</Helmet>
			<Banner />
			<Brand />
			<FeatureOne />
			<FeatureTwo />
			<FeatureThree />
			<Footer />
		</div>
	);
};

export default Home;
