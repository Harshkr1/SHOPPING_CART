import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductList = () => {
      fetch("https://dummyjson.com/products?limit=12")
        .then((res) => res.json())
        .then((data) => {
          if (data.status >= 400) {
            throw new Error();
          }
          console.log(data);
          setProducts(data.products);
        })
        .catch((error) => {
          setError(error);
        });
    };
    fetchProductList();
  }, []);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Outlet context={[products, setProducts]} />
    </>
  );
}

export default App;
