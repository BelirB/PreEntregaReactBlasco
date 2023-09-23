
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount.'
import style from './style.module.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'

const ItemDetail = ({ detalle }) => {
    const {tittle, description, image, id, price, stock} = detalle
    console.log(detalle)
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, tittle, price, image
        }

        addItem(item, quantity)
    }

    return (
        <div className={style['card']}>
            <img src={image} alt={tittle} />
            <h2>{tittle}</h2>
            <p>{description}</p>
            <div className={style['contador']}>
                {
                    quantityAdded > 0 ? (
                        <div className={style['finalizar-compra']}>
                            <Link className={style['card-btn']} to='/'>Continuar comprando</Link>
                            <Link className={style['card-btn']} to='/cart'>Finalizar compra</Link>
                        </div>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )

                }
            </div>
        </div>
    )
}

export default ItemDetail


