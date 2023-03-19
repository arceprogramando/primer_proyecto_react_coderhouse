import ItemDetail from "./ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [vino, setVino] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const db = getFirestore();
    const vinosCollection = collection(db, "vinos");
    getDocs(vinosCollection)
      .then((querySnapshot) => {
        const vinos = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(vinos);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error al llamar a la API", error);
        setError("Ocurrió un error, intentelo mas tarde.");
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const vinoEncontrado = data.find((vino) => vino.id === id);
      setVino(vinoEncontrado);
    }
  }, [data, id]);

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