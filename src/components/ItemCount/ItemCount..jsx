import { useState } from 'react'
import style from './style.module.css'
const ItemCount = () => {
    const [contar, setContar] = useState(1)

    const agregarUnidad = () => {
        setContar(contar + 1)
    }

    const restarUnidad = () => {
        (contar > 1) && setContar(contar - 1)
    }

    return (
        <>
            <button onClick={restarUnidad} className={style["subtract-btn"]}>-</button>
            <span className={style["quantity-text"]}>{contar}</span>
            <button onClick={agregarUnidad} className={style["add-btn"]}>+</button>
        </>
    )
}

export default ItemCount