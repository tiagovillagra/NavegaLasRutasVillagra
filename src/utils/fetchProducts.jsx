const products = [
    { id: 1, name: "Remera Oversize", category: "remeras", description: "Remera oversize con diseño exclusivo" },
    { id: 2, name: "Jeans Cargo", category: "jeans", description: "Jeans cargo cómodos y modernos" },
    { id: 3, name: "Buzo Oversize", category: "buzos", description: "Buzo con capucha y estilo urbano" },
  ];
  
  export const fetchProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products), 1000);
    });
  };
  
  export const fetchProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products.find((p) => p.id === parseInt(id))), 1000);
    });
  };
  