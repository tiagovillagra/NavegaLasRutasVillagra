import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchProductById from "../utils/fetchProducts";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchProductById(itemId).then(setItem);
  }, [itemId]);

  if (!item) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};
export default ItemDetailContainer;