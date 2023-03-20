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
              <Link to={`/category/${"espumantes"}`}>
                <p className="navigation-item ">Espumantes</p>
              </Link>
            </li>
            <li>
              <Link to={`/category/${"destilados"}`}>
                <p className="navigation-item">Destilados</p>
              </Link>
            </li>
            <li>
              <Link to={`/category/${"especiales"}`}>
                <p className="navigation-item">Especiales</p>
              </Link>
            </li>
          </ul>
        </nav>
        <link to={"/cart"}>
          <CartWidget />
        </link>
      </header>
    </>
  );
};

export default NavBar;
