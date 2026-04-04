import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card.jsx";
import { useEffect } from "react";
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 0 70px;
`;

const Title = styled.h1`
  color: White;
  margin: 2.5rem;
`;
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

export default function Cart() {
  const { cartProduct, setCartProduct, cartTotal, setCartTotal } =
    useOutletContext();

  useEffect(() => {
    const total = cartProduct.reduce((sum, item) => sum + item.price, 0);
    setCartTotal(total);
  }, [cartProduct]);

  return (
    <>
      {cartTotal === 0 ? (
        <>
          <Title>Your Cart is Empty</Title>
        </>
      ) : (
        <>
          <Title>Your Cart :</Title>
          <Container>
            {cartProduct.map((product, id) => {
              return (
                <Card
                  product={product}
                  key={id}
                  source={1}
                  setCartProduct={setCartProduct}
                  setCartTotal={setCartTotal}
                />
              );
            })}
          </Container>

          <CartTotal>Your Total: {cartTotal}</CartTotal>
        </>
      )}
    </>
  );
}
