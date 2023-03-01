import ItemDetail from "./ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import Data from "../../../public/data.json";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [vinos, setVinos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(Data);
        const data = await response.json();
        setVinos(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const vinoFilter = vinos.filter((vino) => vino.id == id);

  return (
    <>
      <ItemDetail vinos={vinoFilter} />
    </>
  );
};

export default ItemDetailContainer;
