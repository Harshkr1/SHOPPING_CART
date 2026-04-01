import styled from "styled-components";

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
  color:black;
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
  gap: 5px;
`;
export default function Card({ product }) {
  return (
    <CardContainer>
      <Title>{product.title}</Title>
      <Image src={product.thumbnail} alt={product.title} />
      <Description>{product.description}</Description>
      <Price>₹{product.price}</Price>
      <Discount>Discount: {product.discountPercentage}%</Discount>
      <ButtonGroup>
        <Button>Add to Cart</Button>
        <Button>Order</Button>
      </ButtonGroup>
    </CardContainer>
  );
}
