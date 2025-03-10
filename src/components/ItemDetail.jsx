import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="catalogo-container">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: "200px" }} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <input 
        type="number" 
        value={quantity} 
        onChange={(e) => setQuantity(parseInt(e.target.value))} 
        min="1" 
        max={product.stock} 
        style={{ width: "50px" }}
      />
      <button onClick={handleAddToCart} style={{ marginLeft: "10px", padding: "8px 12px", background: "green", color: "white", border: "none", cursor: "pointer" }}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetail;
