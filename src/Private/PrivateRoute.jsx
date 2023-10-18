import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
	// Auth context data
	const { user, loading } = useContext(AuthContext);
	if (loading) {
		return (
			<div className=" h-screen flex justify-center items-center">
				<ClimbingBoxLoader color="#2857cd" />
			</div>
		);
	}

	if (user) {
		return children;
	}

	return <Navigate to={"/login"} />;
};

PrivateRoute.propTypes = {
	children: PropTypes.node,
};

export default PrivateRoute;
