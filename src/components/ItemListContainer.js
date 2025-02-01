import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchProducts from "../utils/fetchProducts";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchProducts().then(setItems);
  }, []);

  return (
    <div>
      <h2>Catálogo</h2>
      {items.map((item) => (
        <div key={item.id}>
          <Link to={`/item/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};
export default ItemListContainer;