
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import fetchProducts from "../utils/fetchProducts";

// const ItemListContainer = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetchProducts().then(setItems);
//   }, []);

//   return (
//     <div>
//       <h2>Catálogo</h2>
//       {items.map((item) => (
//         <div key={item.id}>
//           <Link to={`/item/${item.id}`}>{item.name}</Link>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default ItemListContainer;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchProducts from "../utils/fetchProducts";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error al cargar los productos");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Catálogo</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
        {items.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px", textAlign: "center" }}>
            <Link to={`/item/${item.id}`} style={{ textDecoration: "none", color: "black" }}>
              <img src={item.image} alt={item.name} style={{ width: "100%", maxHeight: "150px", objectFit: "cover", borderRadius: "5px" }} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>Ver más</strong></p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;

