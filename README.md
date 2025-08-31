# 🛒 Shop Backend (Express + MongoDB)

A simple **backend API** for managing products and orders in an e-commerce application. Built with **Express**, **MongoDB (Mongoose)**, and **Node.js**.

## 🚀 Features

* **Products API**:

  * `POST /api/products` → Add a new product
  * `GET /api/products` → Fetch all products

* **Orders API**:

  * `POST /api/orders` → Create a new order with customer & product details

* **MongoDB Models**:

  * `Product`: name, description, price, image
  * `Order`: customer info, receiver info, products, comment, payment method

* **Middlewares**:

  * `express.json()` with file size limit
  * `cors` for cross-origin requests
  * `morgan` for request logging

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB with Mongoose
* **Environment Variables:** dotenv
* **Logger:** morgan

## 📂 Project Structure

```
src/
 ├── models/
 │    ├── Product.js     # Product schema & model
 │    └── Order.js       # Order schema & model
 ├── routes/
 │    ├── productRoutes.js
 │    └── orderRoutes.js
 ├── server.js           # App entry point
 └── .env                # Environment variables (MONGO_URI, PORT)
```

## ⚙️ Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/lalkazaurus/south-server.git
   cd shop-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env` file in the root folder:

   ```env
   MONGO_URI=mongodb://localhost:27017/shopdb
   PORT=5000
   ```

4. Run the development server:

   ```bash
   node index.js

## 🔗 API Endpoints

### Products

* `POST /api/products`

  ```json
  {
    "name": "Laptop",
    "description": "High-performance laptop",
    "price": 1200,
    "image": "https://example.com/laptop.png"
  }
  ```
* `GET /api/products` → Returns an array of products

### Orders

* `POST /api/orders`

  ```json
  {
    "name": "John",
    "surname": "Doe",
    "phone_number": "+380987654321",
    "email": "john@example.com",
    "payment": "card",
    "receiver_phone_number": "+380987654322",
    "receiver_email": "receiver@example.com",
    "receiver_surname": "Smith",
    "comment": "Deliver after 6 PM",
    "products": {
      "productId": "64e1f4d2c21f",
      "quantity": 2
    }
  }
  ```

## 📜 License

This project is for educational purposes and not intended for production use.

---

👨‍💻 Developed with ❤️ using Node.js, Express, and MongoDB.
