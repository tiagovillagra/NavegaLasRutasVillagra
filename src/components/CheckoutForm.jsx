import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const CheckoutForm = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState(null);

  const handleInputChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer,
      items: cart,
      total,
      date: new Date(),
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((docRef) => {
      setOrderId(docRef.id);
      clearCart();
    });
  };

  if (orderId) {
    return <h2>¡Gracias por tu compra! Tu número de orden es: {orderId}</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Finalizar Compra</h2>
      <input type="text" name="name" placeholder="Nombre" onChange={handleInputChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
      <input type="text" name="phone" placeholder="Teléfono" onChange={handleInputChange} required />
      <button type="submit">Confirmar Compra</button>
    </form>
  );
};

export default CheckoutForm;
