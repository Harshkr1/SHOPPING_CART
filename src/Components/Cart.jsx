import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card.jsx";
import { useEffect } from "react";

/* ===========================
   Styled Components
=========================== */

// Grid container for cart items (3 items per row)
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

// Cart total box styling
const CartTotal = styled.div`
  font-weight: 700;
  color: #e41594;
  background: #f0fafa;
  padding: 15px 25px;
  margin: 30px 70px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
`;

/**
 * Cart Component
 * -------------------------
 * Displays all items added to cart
 * Calculates total price dynamically
 */
export default function Cart() {
  // Extract global cart state from Outlet context
  const { cartProduct, setCartProduct, cartTotal, setCartTotal, setCartCount } =
    useOutletContext();

  /**
   * useEffect: Recalculate cart total whenever cart changes
   * - Loops through all cart items
   * - Ignores items with quantity <= 0
   * - Updates total price
   */
  useEffect(() => {
    const total = Object.values(cartProduct).reduce(
      (sum, item) =>
        item?.quantity > 0 ? sum + item.product.price * item.quantity : sum,
      0,
    );

    setCartTotal(total);
  }, [cartProduct]);

  return (
    <>
      {/* If cart is empty */}
      {cartTotal === 0 ? (
        <>
          <Title>Your Cart is Empty</Title>
        </>
      ) : (
        <>
          {/* Cart heading */}
          <Title>Your Cart :</Title>

          {/* Product grid */}
          <Container>
            {Object.values(cartProduct)
              // Ensure product exists (safety check)
              .filter((item) => item?.product)
              .map(({ product, quantity }) => {
                return (
                  <Card
                    key={product.id} // unique key for React list
                    product={product}
                    quantity={quantity}
                    source={1} // indicates this is from cart
                    cartProduct={cartProduct}
                    setCartProduct={setCartProduct}
                    setCartTotal={setCartTotal}
                    setCartCount={setCartCount}
                  />
                );
              })}
          </Container>

          {/* Total price display */}
          <CartTotal>Your Total: {cartTotal}</CartTotal>
        </>
      )}
    </>
  );
}
