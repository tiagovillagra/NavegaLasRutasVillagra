
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h1>Ayzus</h1>
      <div>
        <Link to="/">inicio</Link>
        <Link to="/category/remeras">Remeras</Link>
        <Link to="/category/buzos">Buzos</Link>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
