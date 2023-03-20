import { useEffect, useState } from "react";
import "./itemlistcontainer.css";
import ItemList from "./ItemList/ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [vinos, setVinos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const vinosCollection = collection(db, "vinos");
    getDocs(vinosCollection)
      .then((querySnapshot) => {
        let vinos = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setVinos(vinos);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
        setError("Ha ocurrido un error. Por favor, inténtelo más tarde.");
        setIsLoading(false);
      });
  }, []);

  const filtroCategorias = category ? vinos.filter((vino) => vino.category === category) : vinos;

  return (
    <>
      {isLoading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <main className="main">
          {category ? (
            <ItemList vinos={filtroCategorias} />
          ) : (
            <ItemList vinos={vinos} />
          )}
        </main>
      )}
    </>
  );
};

export default ItemListContainer;