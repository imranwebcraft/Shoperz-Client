import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
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

	// Create new user
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// user login
	const userLogIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// Update user profile
	const userProfileUpdate = (name, photo) => {
		setLoading(true);
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	// Google SIGN IN
	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	// Handle Log out
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	// Get cureently sign In users
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			console.log("Obeserve", currentUser);
			setUser(currentUser);
			setLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	// Context value
	const authInfo = {
		user,
		loading,
		googleSignIn,
		logOut,
		createUser,
		userProfileUpdate,
		userLogIn,
	};

	return (
		<AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
