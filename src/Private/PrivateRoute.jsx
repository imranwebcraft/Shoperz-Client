import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	// Auth context data
	const { user, loading } = useContext(AuthContext);
	if (loading) {
		return <div>Loading</div>;
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
