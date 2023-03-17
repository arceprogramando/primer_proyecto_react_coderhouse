import '../../ItemListContainer/ItemList/Item/item.css'
import './itemdetail.css';
const ItemDetail = ({ vino }) => {
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
              <p className="wine-unit">
                valor x unidad $ {Math.ceil(vino.precio / vino.unidades)}
              </p>
              <p>
                {vino.cuotas} cuotas sin interes de $
                {Math.ceil(vino.precio / vino.cuotas)}
              </p>
            </div>
            <div className='information'>
              hola
            </div>
          </div>
        </div>
      </main>
    </>

  );
};

export default ItemDetail;