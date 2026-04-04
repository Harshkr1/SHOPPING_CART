import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

/**
 * App Component
 * -------------------------
 * Root component of the application
 * Handles global state (products, cart, loading, etc.)
 * Provides data to child routes using Outlet context
 */
function App() {
  // Stores total number of items in cart
  const [cartCount, setCartCount] = useState(0);

  // Stores fetched product list
  const [products, setProducts] = useState([]);

  // Stores any error during API call
  const [error, setError] = useState(null);

  /**
   * Cart structure:
   * {
   *   id: {
   *     product,
   *     quantity
   *   }
   * }
   */
  const [cartProduct, setCartProduct] = useState({});

  // Stores total price of cart
  const [cartTotal, setCartTotal] = useState(0);

  // Loading state for API fetch
  const [loading, setLoading] = useState(true);

  /**
   * useEffect: Fetch product data on initial render
   */
  useEffect(() => {
    const fetchProductList = () => {
      fetch("https://dummyjson.com/products?limit=12")
        .then((res) => res.json())
        .then((data) => {
          // Check for API error status
          if (data.status >= 400) {
            throw new Error();
          }

          console.log(data); // Debug log
          setProducts(data.products); // Store products
        })
        .catch((error) => {
          setError(error); // Store error if any
        })
        .finally(setLoading(false)); // Stop loading
    };

    fetchProductList();
  }, []);

  return (
    <>
      {/* Show loading state */}
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {/* Navbar with cart count */}
          <Navbar cartCount={cartCount} />

          {/* Outlet renders child routes (Home, Shop, Cart, etc.) */}
          <Outlet
            context={{
              products,
              setProducts,
              cartProduct,
              setCartProduct,
              cartTotal,
              setCartTotal,
              setCartCount,
            }}
          />
        </>
      )}
    </>
  );
}

export default App;
