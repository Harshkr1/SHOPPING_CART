import styled from "styled-components";
import { Link } from "react-router-dom";

/* ===========================
   Styled Components
=========================== */

// Basic button styling used for navigation links
const Button = styled.button`
  background-color: white;
  color: black;
  padding: 10px;
  border-radius: 5px;
`;

/**
 * Navbar Component
 * -------------------------
 * Displays navigation links (Home, Shop)
 * and cart count on the right side
 */
export default function Navbar({ cartCount }) {
  return (
    <>
      {/* Main navbar container */}
      <div className="navBar">
        {/* Left section: Navigation links */}
        <div>
          {/* Link to Home page */}
          <Button>
            <Link to="home">Home</Link>
          </Button>

          {/* Link to Shop page */}
          <Button>
            <Link to="shop">Shop</Link>
          </Button>
        </div>

        {/* Right section: Cart with item count */}
        <Button>
          <Link to="cart">
            {/* Displays number of items in cart */}
            Cart : {cartCount}
          </Link>
        </Button>
      </div>
    </>
  );
}
