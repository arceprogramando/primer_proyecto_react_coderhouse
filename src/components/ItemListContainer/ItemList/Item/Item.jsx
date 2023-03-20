import ItemCount from "./ItemCount/ItemCount";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ vino }) => {
  console.log(vino)
  return (
    <>
      <div className="card">
        <div className="img-card">
          <img src={vino.url}></img>
          <button>
            <Link to={`/item/${vino.id}`}>
              <img src="/information.svg" className="more-information"></img>
            </Link>
          </button>
        </div>

        <p className="card-information-paragraph">
          Caja de {vino.unidades} Unidades
        </p>
        <h3 className="wine-name">{vino.nombre}</h3>
        <p className="wine-price">${vino.precio}</p>
        <p className="wine-unit">
          valor x unidad $ {Math.ceil(vino.precio / vino.unidades)}
        </p>
        <p>
          {vino.cuotas} cuotas sin interes de $
          {Math.ceil(vino.precio / vino.cuotas)}
        </p>
      </div>
      {/* <ItemCount /> */}
    </>
  );
};

export default Item;
