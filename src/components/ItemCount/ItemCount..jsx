
import { useState } from 'react'
import style from './style.module.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const agregarUnidad = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const restarUnidad = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className={style['contenedor']}>
            <div>
                <button onClick={restarUnidad} className={style['subtract-btn']}>-</button>
                <span className={style['quantity-text']}>{quantity}</span>
                <button onClick={agregarUnidad} className={style['add-btn']}>+</button>
            </div>
            <div>
                <button className={style['btn-agregar']} onClick={() => onAdd(quantity)} disabled={!stock}>Agregar</button>
            </div>
        </div>
    )
}

export default ItemCount