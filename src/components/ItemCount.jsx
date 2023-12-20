import { useState } from 'react';

const ItemCount = () => {
    const [contador, setContador] = useState(0)

    const sumar = () => {

        setContador(
            contador + 1
        )
    }

    const restar = () => {

        if (contador === 0) {
            return console.log("El numero no puede ser negativo");
        } else {
            setContador(
                contador - 1
            )

        }

    }

    return (
        <>
            <button onClick={restar}>Restar</button>
            <span>{contador}</span>
            <button onClick={sumar}>Sumar</button>

        </>
    )
}

export default ItemCount