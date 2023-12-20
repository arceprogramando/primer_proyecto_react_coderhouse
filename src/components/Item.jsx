import React from "react";
import { Link } from "react-router-dom";

const Item = ({ vino }) => {
  return (
    <div className=" w-80 flex flex-col items-center  border-2">
      <img src={vino.url} alt={vino.nombre} className="w-40" />
      <button>
        <Link to={`/item/${vino.id}`}>
          <img src="/information.svg" alt="Información" />
        </Link>
      </button>

      <p>Caja de {vino.unidades} Unidades</p>
      <h3>{vino.nombre}</h3>
      <p>${vino.precio}</p>
      <p>Valor por unidad: ${Math.ceil(vino.precio / vino.unidades)}</p>
      <p>
        {vino.cuotas} cuotas sin interés de $
        {Math.ceil(vino.precio / vino.cuotas)}
      </p>
    </div>
  );
};

export default Item;
