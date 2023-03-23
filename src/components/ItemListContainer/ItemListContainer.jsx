import { useEffect, useState } from "react";
import "./itemlistcontainer.css";
import ItemList from "./ItemList/ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [vinos, setVinos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const vinosCollection = collection(db, "vinos");
    let q = vinosCollection;
    if (category) {
      q = query(vinosCollection, where("category", "==", category));
    }

    getDocs(q)
      .then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("No results");
        }
        const vinos = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))

        setVinos(vinos)

        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
        setError("Ha ocurrido un error.Por favor, intentelo mas tarde.");
        setIsLoading(false);
      })
  }, [category])

  return (
    <>
      {isLoading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <main className="main">
          {category ? (
            vinos ? (
              <ItemList vinos={vinos} />
            ) : (
              <p>Cargando...</p>
            )
          ) : (
            vinos ? (
              <ItemList vinos={vinos} />
            ) : (
              <p>Cargando...</p>
            )
          )}
        </main>
      )}
    </>
  );
};

export default ItemListContainer;