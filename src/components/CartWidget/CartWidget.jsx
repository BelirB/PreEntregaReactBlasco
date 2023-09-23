
import style from './style.module.css'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalItems } = useContext(CartContext)

    return (
        <Link className={style['carrito-img']} to='./cart'>
            <div className={style["carrito"]}>
            <img style={{width:"35px" }} src="https://i.postimg.cc/25DFw8Jb/carrito.png" alt="cart" />
            <p>{totalItems}</p>
            </div>
        </Link>
    )
}

export default CartWidget