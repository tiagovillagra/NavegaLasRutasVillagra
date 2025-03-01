import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
