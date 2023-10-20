import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
	// Get user location where he/she want to go
	const location = useLocation();

	// Auth context data
	const { user, loading } = useContext(AuthContext);
	if (loading) {
		return (
			<div className=" bg-white dark:bg-gray-950 h-screen flex justify-center items-center">
				<ClimbingBoxLoader color="#2857cd" />
			</div>
		);
	}

	if (user) {
		return children;
	}

	return <Navigate to={"/login"} state={location.pathname} />;
};

PrivateRoute.propTypes = {
	children: PropTypes.node,
};

export default PrivateRoute;
