import { useParams } from "react-router-dom";
import ItemCount from "../../ItemListContainer/ItemList/Item/ItemCount/ItemCount";
import { useEffect, useState, UseState } from "react";

const ItemDetail = ({ vinoFilter }) => {
  const { id } = useParams();
  const [vinos, setVinos] = useState([]);

  return (
    <>
      <h1>Aun no supe como implementar el item de el itemDetail</h1>
    </>
  );
};

export default ItemDetail;
