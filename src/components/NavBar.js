import { Link } from "react-router-dom";
const NavBar = () => (
  <nav>
    <Link to="/">Inicio</Link> | <Link to="/category/remeras">Remeras</Link> | <Link to="/category/jeans">Jeans</Link> | <Link to="/category/buzos">Buzos</Link>
  </nav>
);
export default NavBar;
