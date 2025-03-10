import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


const NavBar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#333", color: "white" }}>
      <h1>E-Commerce</h1>
      <div>
        <Link to="/" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/category/remeras" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Remeras</Link>
        <Link to="/category/buzos" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Buzos</Link>
        <Link to="/cart" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
