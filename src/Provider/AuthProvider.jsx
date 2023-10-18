import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Config/Firebase.config";

export const AuthContext = createContext();

// Provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	// State
	// eslint-disable-next-line no-unused-vars
	const [user, setUser] = useState(null);
	// eslint-disable-next-line no-unused-vars
	const [loading, setLoading] = useState(true);

	// Google SIGN IN
	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	// Context value
	const authInfo = {
		googleSignIn,
	};

	return (
		<AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
