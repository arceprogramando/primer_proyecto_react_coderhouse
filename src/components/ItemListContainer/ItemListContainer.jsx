import { useEffect, useState } from "react";
import "./itemlistcontainer.css";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = () => {
  const [vinos, setVinos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Esperando respuesta");
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setVinos(data);
          setIsLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
        setError("Ha ocurrido un error. Por favor, inténtelo más tarde.");
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ItemList productos={vinos} />
      )}
    </>
  );
};

export default ItemListContainer;
