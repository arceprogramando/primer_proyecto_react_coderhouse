import Item from "./Item";

const ItemList = ({ vinos }) => {
  return (
    <>
        {vinos.map((vino) => {
          return <Item vino={vino} key={vino.id} />;
        })}
    </>
  );
};

export default ItemList;
