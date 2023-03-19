import "./itemlist.css";
import Item from "./Item/Item";
const ItemList = ({ vinos }) => {

  return (
    <>
      <div className="vinos">
        {vinos.map((vino) => {
          return <Item vino={vino} key={vino.id} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
