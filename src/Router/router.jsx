import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Private/PrivateRoute";
import BrandProduct from "../Pages/BrandProduct/BrandProduct";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/addproduct",
				element: (
					<PrivateRoute>
						<AddProduct />
					</PrivateRoute>
				),
			},
			{
				path: "/mycart",
				element: (
					<PrivateRoute>
						<MyCart />
					</PrivateRoute>
				),
				loader: () =>
					fetch(
						"https://shoperz-server-side-ls55uye2x-imran-it1.vercel.app/carts"
					),
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/brand/:id",
				element: <BrandProduct />,
				loader: () =>
					fetch(
						"https://shoperz-server-side-ls55uye2x-imran-it1.vercel.app/products"
					),
			},
			{
				path: "/product/:id",
				element: (
					<PrivateRoute>
						<ProductDetails />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(
						`https://shoperz-server-side-ls55uye2x-imran-it1.vercel.app/products/${params.id}`
					),
			},
			{
				path: "/updateproduct/:id",
				element: (
					<PrivateRoute>
						<UpdateProduct />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(
						`https://shoperz-server-side-ls55uye2x-imran-it1.vercel.app/products/${params.id}`
					),
			},
		],
	},
]);

export default router;
