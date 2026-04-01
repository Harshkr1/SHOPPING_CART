import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
  color: #94a3b8;
  margin-bottom: 25px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  background-color: #f1f5f9;
  color: #111;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.25s ease;

  &:hover {
    background-color: #111;
    color: white;
    transform: scale(1.05);
  }
`;

export default function Home() {
  return (
    <Container>
      <Title>Welcome to the Online Store</Title>
      <Subtitle>
        Discover amazing products at unbeatable prices. Shop smart, live better.
      </Subtitle>

      <ButtonGroup>
        <Button>
          <Link to="/shop">Start Shopping</Link>
        </Button>
        <Button>
          <Link to="/cart">View Cart</Link>
        </Button>
      </ButtonGroup>
    </Container>
  );
}
