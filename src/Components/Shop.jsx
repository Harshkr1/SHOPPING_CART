import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useOutletContext();
  console.log(products);

  return (
    <>
      <h1>Hi I'm Shop</h1>
    </>
  );
}
