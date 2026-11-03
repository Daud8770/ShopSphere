# 🛍️ ShopSphere – Modern E-Commerce Web Application

ShopSphere is a feature-rich, responsive, and modern e-commerce web application built using **React.js**, **Vite**, **Tailwind CSS**, and **Redux Toolkit**. It provides a seamless shopping experience allowing users to browse products, filter via a live search bar, manage their shopping cart and wishlist, and complete a simulated checkout process with instant notifications.

---

## ✨ Features

### 🛒 Customer Features
- **Product Catalog:** Fetches and displays a wide range of products dynamically from the Fake Store API.
- **Live Search Engine:** Instantly filters products by title as you type in the search bar.
- **Wishlist (Liked Products):** Users can like/unlike products and access them in a dedicated Wishlist page.
- **Shopping Cart Management:** Add or remove items, view live item counts, and calculate total cart amounts automatically.
- **Interactive Checkout Flow:** Enter shipping address details, choose payment methods (COD / Online Payment), and place orders successfully.
- **Toast Notifications:** Real-time feedback alerts using `react-hot-toast` for actions like adding/removing items and placing orders.

### 🎨 UI & Design
- Fully responsive layout optimized for mobile, tablet, and desktop screens.
- Modern styling implemented with **Tailwind CSS**.
- Smooth page navigation using **React Router DOM**.
- Custom loading spinners for seamless asynchronous data fetching.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend UI Component Library |
| Vite | Lightning-fast build tool and development server |
| Tailwind CSS | Utility-first CSS styling framework |
| Redux Toolkit (RTK) | Global state management for Cart & Wishlist |
| React Router DOM | Client-side multi-page navigation |
| React Hot Toast | User notification popups |
| Fake Store API | Mock product data source |

---

## 📂 Project Structure

```text
ShpoSphere/
├── public/
│   └── logo.png
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CartItem.jsx
│   │   ├── NavBar.jsx
│   │   ├── Product.jsx
│   │   └── Spinner.jsx
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Home.jsx
│   │   └── Wishlist.jsx
│   ├── redux/
│   │   ├── Slices/
│   │   │   ├── CartSlice.jsx
│   │   │   └── WishlistSlice.jsx
│   │   └── Store.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js

🚀 Getting Started
1. Clone the Repository
Bash
git clone [https://github.com/Daud8770/ShpoSphere.git](https://github.com/Daud8770/ShpoSphere.git)

2. Navigate to the Project Directory
Bash
cd ShpoSphere

3. Install Dependencies
Bash
npm install

4. Start the Development Server
Bash
npm run dev

Open the local development URL provided by Vite in your browser.

📦 Build for Production
To create an optimized production build, run:

Bash
npm run build
To preview the production build locally:

Bash
npm run preview
🌐 Deployment
You can deploy this frontend application easily on platforms like Vercel, Netlify, or GitHub Pages:

Push your latest code repository to GitHub.

Import the repository on Vercel or Netlify.

Keep the default build settings (npm run build).

Hit Deploy!

📌 Project Status
Completed Frontend Project

This project serves as a comprehensive portfolio application showcasing advanced React patterns, Redux Toolkit state management, custom hooks, form handling, and routing.

👨‍💻 Author
Mo. Daud Khan

GitHub: @Daud8770

📄 License
This project is open-source and available under the MIT License. Feel free to use, modify, and learn from it.