import { Link } from "react-router-dom";
import CartWidget from "./CardWidget/CartWidget";
import "./navbar.css";

const NavBar = () => {
  return (
    <>
      <div className="banner">
        <p>Venta por Caja Exclusivamente</p>
      </div>
      <header className="navbar container">
        <div className="logo">
          <Link to="/">
            <h1 className="company-name">Arce Ecommerce</h1>
          </Link>
        </div>
        <nav>
          <ul className="navigation">
            <li>
              <Link to={"/catalogue"}>
                <p className="navigation-item navigation-item-total">Vinos</p>
              </Link>
            </li>
            <li>
              <a href="#" className="navigation-item">
                Espumantes
              </a>
            </li>
            <li>
              <a href="#" className="navigation-item">
                Destilados
              </a>
            </li>
            <li>
              <a href="#" className="navigation-item">
                Especiales
              </a>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </header>
    </>
  );
};

export default NavBar;
