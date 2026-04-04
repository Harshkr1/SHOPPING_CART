import { useOutletContext } from "react-router-dom";
import Card from "./Card.jsx";
import styled from "styled-components";

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
export default function Shop() {
  const { products, setCartProduct,setCartCount } = useOutletContext();
  console.log(products);

  return (
    <>
      <Title>Our Products:</Title>
      <Container>
        {products.map((product, id) => {
          return (
            <Card
              product={product}
              key={id}
              setCartProduct={setCartProduct}
              source={2}
              setCartCount={setCartCount}
            />
          );
        })}
      </Container>
    </>
  );
}
