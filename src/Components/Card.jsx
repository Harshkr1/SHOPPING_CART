import styled from "styled-components";
import { useState } from "react";

/* ===========================
   Styled Components
=========================== */

// Main card container
const CardContainer = styled.div`
  width: 250px;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: white;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

// Product title
const Title = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: black;
`;

// Product image
const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

// Product description
const Description = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 10px;
`;

// Price styling
const Price = styled.span`
  font-weight: bold;
  color: #2c7a7b;
  display: block;
`;

// Discount text
const Discount = styled.span`
  font-size: 0.85rem;
  color: #e53e3e;
`;

// Quantity count display
const Count = styled.span`
  font-size: 0.85rem;
  color: #000000;
  font-weight: 700;
`;

// Button styling
const Button = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.25s ease;

  &:hover {
    background-color: #ffffff;
    color: black;
    transform: scale(1.05);
  }
`;

// Wrapper for buttons
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

/**
 * Card Component
 * -------------------------
 * Displays a single product
 * Handles increment & decrement of cart items
 */
export default function Card({
  product,
  setCartProduct,
  source,
  setCartCount,
  cartProduct,
}) {
  // Local state (used only when source === 2)
  const [count, setCount] = useState(0);

  /**
   * Cart structure:
   * {
   *   id: {
   *     product,
   *     quantity
   *   }
   * }
   * Helps in O(1) updates for increment/decrement
   */

  /**
   * Increment item in cart
   * - If item exists → increase quantity
   * - Else → add with quantity = 1
   */
  const handleIncrement = () => {
    setCartProduct((prev) => {
      const id = product.id;

      return {
        ...prev,
        [id]: {
          product,
          quantity: prev[id] ? prev[id].quantity + 1 : 1,
        },
      };
    });

    // Update local + global counters
    setCount((c) => c + 1);
    setCartCount((c) => c + 1);
  };

  /**
   * Decrement item in cart
   * - If quantity = 1 → remove item
   * - Else → decrease quantity
   *
   *  Always keep state updates immutable
   */
  const handleDecrement = () => {
    setCartProduct((prev) => {
      const id = product.id;

      // If item doesn't exist → do nothing
      if (!prev[id]) return prev;

      // If only 1 item → remove from cart
      if (prev[id].quantity === 1) {
        const newCart = { ...prev };
        delete newCart[id];
        return newCart;
      }

      // Otherwise → decrease quantity
      return {
        ...prev,
        [id]: {
          ...prev[id],
          quantity: prev[id].quantity - 1,
        },
      };
    });

    setCount((c) => c - 1);
    setCartCount((c) => c - 1);
  };

  return (
    <CardContainer>
      <Title>{product.title}</Title>
      <Image src={product.thumbnail} alt={product.title} />
      <Description>{product.description}</Description>
      <Price>₹{product.price}</Price>
      <Discount>Discount: {product.discountPercentage}%</Discount>

      <ButtonGroup>
        {source === 2 ? (
          <>
            {/* Controls for product listing page */}
            <Button onClick={handleDecrement}>-</Button>
            <Count>{count}</Count>
            <Button onClick={handleIncrement}>+</Button>
          </>
        ) : (
          <>
            {/* 
              Optional chaining (?.) prevents crash 
              if product doesn't exist in cart 
            */}
            <Count>{cartProduct[product.id]?.quantity || 0}</Count>
            <Button onClick={handleDecrement}>Remove from Cart</Button>
          </>
        )}
      </ButtonGroup>
    </CardContainer>
  );
}
