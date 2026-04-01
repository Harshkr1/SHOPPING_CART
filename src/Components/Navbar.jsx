import styled from "styled-components";
import { Link } from "react-router-dom";
const Button = styled.button`
  background-color: white;
  color: black;
  padding: 10px;
  border-radius: 5px;
`;

export default function Navbar({cartCount}) {
  return (
    <>
      <div className="navBar">
        <div>
          <Button><Link to="home">Home</Link></Button>
          <Button><Link to="shop">Shop</Link></Button>
        </div>
        <Button><Link to="cart">Cart : {cartCount}</Link></Button>
      </div>
    </>
  );
}
