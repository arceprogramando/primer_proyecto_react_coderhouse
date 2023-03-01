import "./itemlist.css";
import Item from "./Item/Item";
const ItemList = ({ productos }) => {
  return (
    <>
      <div className="vinos">
        {productos.map((producto) => {
          return <Item producto={producto} key={producto.id} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
