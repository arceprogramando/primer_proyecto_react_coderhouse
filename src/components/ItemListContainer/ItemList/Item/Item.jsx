import ItemCount from "./ItemCount/ItemCount";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <>
      <div className="card">
        <div className="img-card">
          <img src={producto.url}></img>
          <button>
            <Link to={`/item/${producto.id}`}>
              <img src="./information.svg" className="more-information"></img>
            </Link>
          </button>
        </div>
        <div className="prod-btn"></div>
        <p className="card-information-paragraph">
          Caja de {producto.unidades} Unidades
        </p>
        <h3 className="wine-name">{producto.nombre}</h3>
        <p className="wine-price">${producto.precio}</p>
        <p className="wine-unit">
          valor x unidad $ {Math.ceil(producto.precio / producto.unidades)}
        </p>
        <p>
          {producto.cuotas} cuotas sin interes de $
          {Math.ceil(producto.precio / producto.cuotas)}
        </p>
      </div>
      {/* <ItemCount /> */}
    </>
  );
};

export default Item;
