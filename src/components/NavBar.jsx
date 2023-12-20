import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const categories = ["espumantes", "destilados", "especiales"];

  return (
    <>
      <p className="bg-black p-2 text-white text-center">
        Venta por Caja Exclusivamente
      </p>
      <header className="mb-8">
        <Link to="/">
          <h1 className="text-center p-2">Mercado Vinos</h1>
        </Link>
        <nav>
          <ul className="flex justify-center items-center gap-4 ">
            <li>
              <Link to="/catalogue">
                <p>Vinos</p>
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <Link to={`/category/${category}`}>
                  <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
                </Link>
              </li>
            ))}
          <Link to="/cart">
            <CartWidget />
          </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
