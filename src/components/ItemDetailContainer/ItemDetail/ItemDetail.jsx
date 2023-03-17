import { useState } from 'react';
import '../../ItemListContainer/ItemList/Item/item.css'
import './itemdetail.css';
const ItemDetail = ({ vino }) => {
  const [count, setCount] = useState(0)
  const [menuAbierto, setMenuAbierto] = useState(false)
  const sumar = () => {
    setCount(count + 1)
  }

  const restar = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const rotarflecha = menuAbierto ? 'rotar-flecha' : 'no-rotar';
  return (
    <>
      <main className='main'>

        <div className='container'>
          <div className='detail-cards-information'>
            <div className='card card-detail'>
              <div className='img-card'>
                <img src={vino.url} alt={vino.nombre} />
              </div>
              <p className="card-information-paragraph">
                Caja de {vino.unidades} Unidades
              </p>
              <h3 className="wine-name">{vino.nombre}</h3>
              <p className="wine-price">${vino.precio}</p>

              <p>
                {vino.cuotas} cuotas sin interes de $
                {Math.ceil(vino.precio / vino.cuotas)}
              </p>
            </div>
            <div className='information'>
              <h2 className='name-detail'>{vino.nombre}</h2>
              <p className="wine-price-detail">${vino.precio}</p>
              <p className="wine-unit-detail">
                valor x unidad $ {Math.ceil(vino.precio / vino.unidades)}
              </p>
              <div className='contador'>
                <button onClick={restar} className='button'>-</button>
                <div className='count'>
                  {count}
                </div>
                <button onClick={sumar} className='button'>+</button>
              </div>
              <div className='description'>
                <button onClick={() => setMenuAbierto(!menuAbierto)} className="menu">
                  Detalle
                  <span className={`flecha ${rotarflecha}`}>
                    <img src="/flecha.svg" alt="" />
                  </span>
                </button>
                {menuAbierto && <p>{vino.descripcion}</p>}
              </div>
            </div>

          </div>
        </div>
      </main>
    </>

  );
};

export default ItemDetail;