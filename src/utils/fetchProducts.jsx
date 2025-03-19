// const products = [
//   { id: 1, name: "Remera Oversize", category: "remeras", description: "Remera oversize con diseño exclusivo" },
//   { id: 2, name: "Jeans Cargo", category: "jeans", description: "Jeans cargo cómodos y modernos" },
//   { id: 3, name: "Buzo Oversize", category: "buzos", description: "Buzo con capucha y estilo urbano" },
// ];

// const fetchProducts = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(products), 1000);
//   });
// };

// export default fetchProducts; 

// export const fetchProductById = (id) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(products.find((p) => p.id === parseInt(id))), 1000);
//   });
// };
const products = [
  { 
    id: 1, 
    name: "Remera Oversize", 
    category: "remeras", 
    description: "Remera oversize con diseño exclusivo", 
    image: "/images/remera-oversize.jpg" // Ruta local o URL externa
  },
  { 
    id: 2, 
    name: "Jeans Cargo", 
    category: "jeans", 
    description: "Jeans cargo cómodos y modernos", 
    image: "/images/jeans-cargo.jpg" 
  },
  { 
    id: 3, 
    name: "Buzo Oversize", 
    category: "buzos", 
    description: "Buzo con capucha y estilo urbano", 
    image: "/images/buzo-oversize.jpg" 
  },
];

const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 1000);
  });
};

export const fetchProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === Number(id));
      product ? resolve(product) : reject(new Error(`Producto con ID ${id} no encontrado`));
    }, 1000);
  });
};

export default fetchProducts;
