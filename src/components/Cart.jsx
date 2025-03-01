import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, total } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>🛒 Carrito vacío</h2>
        <p>¡Agregá productos a tu carrito!</p>
        <Link to="/" style={{ textDecoration: "none", color: "blue", fontSize: "18px" }}>
          Ir a comprar
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛍️ Carrito de Compras</h2>
      {cart.map((item) => (
        <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
          <h4>{item.name}</h4>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio: ${item.price}</p>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={clearCart} style={{ marginRight: "10px", padding: "8px 12px", background: "red", color: "white", border: "none", cursor: "pointer" }}>
        Vaciar Carrito
      </button>
      <Link to="/checkout" style={{ padding: "8px 12px", background: "green", color: "white", textDecoration: "none", borderRadius: "5px" }}>
        Finalizar Compra
      </Link>
    </div>
  );
};

export default Cart;
