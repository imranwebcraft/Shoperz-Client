import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyA_G3eO_iyKGa18UPbwPfAD14YPwpLEU7c",
	authDomain: "shoperz-3e0d8.firebaseapp.com",
	projectId: "shoperz-3e0d8",
	storageBucket: "shoperz-3e0d8.appspot.com",
	messagingSenderId: "441872475727",
	appId: "1:441872475727:web:dcb04013b96711f95f2c3a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
