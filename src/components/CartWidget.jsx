import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
      🛒 ({totalItems})
    </Link>
  );
};

export default CartWidget;
