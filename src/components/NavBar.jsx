
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
    <header>
    <nav>
      <h1><Link to="/">Ayzus</Link></h1>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/category/remeras">Remeras</Link>
        <Link to="/category/buzos">Buzos</Link>
        <CartWidget /> {}
      </div>
    </nav>
    </header>
    </>
  );
};

export default NavBar;
