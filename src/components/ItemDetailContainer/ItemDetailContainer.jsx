import ItemDetail from "./ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [vinos, setVinos] = useState([]);
  const [vino, setVino] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setVinos(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError("An error occurred while fetching data. Please try again later.");
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (vinos.length > 0) {
      const vinoEncontrado = vinos.find((vino) => vino.id === parseInt(id));
      setVino(vinoEncontrado);
    }
  }, [vinos, id]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : vino ? (
        <ItemDetail vino={vino} />
      ) : (
        <p>No se encontró el producto con id {id}.</p>
      )}
    </>
  );
};

export default ItemDetailContainer;