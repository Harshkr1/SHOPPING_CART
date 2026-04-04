import styled from "styled-components";
import { Link } from "react-router-dom";

/* ===========================
   Styled Components
=========================== */

// Main container (centered layout)
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
`;

// Main heading
const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

// Subtitle / description
const Subtitle = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
  color: #94a3b8;
  margin-bottom: 25px;
`;

// Wrapper for buttons
const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

/**
 * Styled Link acting as a button
 * - Avoids nesting <Link> inside <button>
 * - Improves accessibility + cleaner DOM
 */
const StyledLink = styled(Link)`
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  background-color: #f1f5f9;
  color: #111;
  font-weight: 600;
  transition: all 0.25s ease;

  &:hover {
    background-color: #111;
    color: white;
    transform: scale(1.05);
  }
`;

/**
 * Home Component
 * -------------------------
 * Landing page of the app
 * Provides navigation to Shop & Cart
 */
export default function Home() {
  return (
    <Container>
      {/* App title */}
      <Title>Welcome to the Online Store</Title>

      {/* Tagline */}
      <Subtitle>
        Discover amazing products at unbeatable prices. Shop smart, live better.
      </Subtitle>

      {/* Navigation buttons */}
      <ButtonGroup>
        <StyledLink to="/shop">
          Start Shopping
        </StyledLink>

        <StyledLink to="/cart">
          View Cart
        </StyledLink>
      </ButtonGroup>
    </Container>
  );
}