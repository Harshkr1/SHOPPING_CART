import { useOutletContext } from "react-router-dom";
import Card from "./Card.jsx";
import styled from "styled-components";

/* ===========================
   Styled Components
=========================== */

// Grid container to display products (3 per row)
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 0 70px;
`;

// Page title styling
const Title = styled.h1`
  color: White;
  margin: 2.5rem;
`;

/**
 * Shop Component
 * -------------------------
 * Displays all available products
 * Allows users to add items to cart
 */
export default function Shop() {
  // Extract products and cart handlers from Outlet context
  const { products, setCartProduct, setCartCount } = useOutletContext();

  // Debug: logs all products fetched
  console.log(products);

  return (
    <>
      {/* Page heading */}
      <Title>Our Products:</Title>

      {/* Product grid */}
      <Container>
        {products.map((product, id) => {
          return (
            <Card
              key={id} // Unique key for each product (React list rendering)
              product={product} // Product data passed to Card
              setCartProduct={setCartProduct} // Function to update cart items
              source={2} // Indicates this card is from Shop page
              setCartCount={setCartCount} // Function to update cart count
            />
          );
        })}
      </Container>
    </>
  );
}
