import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/addproduct",
				element: <AddProduct />,
			},
			{
				path: "/mycart",
				element: <MyCart />,
			},
			{
				path: "/login",
				element: <Login />,
			},
		],
	},
]);

export default router;
