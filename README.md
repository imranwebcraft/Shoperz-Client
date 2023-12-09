# Shoperz - Your Online Shopping Destination 🛒

🚀 **Check out the live website**: [Shoperz](https://shoperz-3e0d8.web.app/)

## About the Project

Welcome to Shoperz, your one-stop online shopping destination! Here's what you need to know about this project in a nutshell:

🌐 **Tech Stack**: This project was built using React for the frontend. We harnessed the power of React Router DOM for seamless page navigation. To handle user authentication, Firebase was our go-to choice. We've also implemented private routes to ensure that certain parts of the website are only accessible to authenticated users.

👥 **User Authentication**: Users can create their accounts using their email and password. During registration, we automatically update user profiles with their provided information. But that's not all; we also offer the convenience of signing in with a Google account. Our registration form is equipped with validation to ensure users meet our website's requirements.

🛍️ **Adding Products**: Our website features a private route named "Add Product," where users can add new products effortlessly. All it takes is filling out a product information form. We've put privacy and security first, ensuring that this route is restricted to authenticated users only.

🛒 **Your Cart**: A dedicated route called "My Cart" is available for users who have signed in. This section displays all the products added to the user's cart. We dynamically load data from the database, filtered based on the currently signed-in user's email address.

🏷️ **Brand-Focused Shopping**: On the homepage, we proudly display six brand names sourced from JSON file data. When users click on a brand, they can browse products specifically associated with that brand. We've also created two additional routes for product details and updates, both of which are private routes. Users can add products to their carts, and the carted product information is stored in a database collection. To view their cart items, users can easily navigate to the "My Cart" route via the navbar.

🛠️ **Updating Products**: Users can effortlessly update product details from the "Product Details" route. This is yet another private route. We've implemented a smooth process: first, we load data from the database and populate the form fields with the product's previous data. Users can make their desired edits and submit the updated information to the database.

🎉 **Explore and Enjoy**: Experience the ease of online shopping with Shoperz! We hope you have a fantastic time exploring our wide range of products and features.

Your feedback and suggestions are invaluable to us. Feel free to reach out to us at [shoperz@gmail.com] with any questions or comments. We look forward to providing you with a seamless online shopping experience.

✨ **Happy Shopping!** 🛍️


## Technology Stack

### Frontend

- React
- Tailwind CSS
- Firebase
- React Router
- Axios

### Backend

- Express
- MongoDB
- CORS
- Dotenv
- Cookieparser


