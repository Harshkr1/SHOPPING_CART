import styled from "styled-components";
import { useState } from "react";
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

const Title = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: black;
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 10px;
`;

const Price = styled.span`
  font-weight: bold;
  color: #2c7a7b;
  display: block;
`;

const Discount = styled.span`
  font-size: 0.85rem;
  color: #e53e3e;
`;
const Count = styled.span`
  font-size: 0.85rem;
  color: #000000;
  font-weight: 700;
`;
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

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export default function Card({
  product,
  setCartProduct,
  source,
  setCartCount,
}) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCartProduct((prev) => [...prev, product]);
    setCount((c) => c + 1);
    setCartCount((c) => c + 1);
  };

  const handleDecrement = () => {
    setCartProduct((prev) => {
      const index = prev.findIndex((item) => item.id === product.id);
      if (index === -1) return prev;

      const newCart = [...prev];
      newCart.splice(index, 1);
      return newCart;
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
        <ButtonGroup>
          {source === 2 ? (
            <>
              <Button onClick={handleDecrement}>-</Button>
              <Count>{count}</Count>
              <Button onClick={handleIncrement}>+</Button>
            </>
          ) : (
            <Button onClick={handleDecrement}>Remove from Cart</Button>
          )}
        </ButtonGroup>
      </ButtonGroup>
    </CardContainer>
  );
}
