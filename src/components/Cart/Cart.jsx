import style from './style.module.css'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, removeItem } = useContext(CartContext)
    console.log(cart)

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

    if (cart.length === 0) {
        return (
            <div className={style['contenedor']}>
                <h1>No hay items en el carrito</h1>
                <Link className={style['link']} to='/'>volver</Link>
            </div>
        )
    }

    return (
        <div className={style['contenedor']}>
            <div className={style['contenedor-card']}>
                {cart.map(item => (
                    <CartItem
                        key={item.id}
                        image={item.image}
                        tittle={item.tittle}
                        price={item.price}
                        quantity={item.quantity}
                        subtotal={item.price * item.quantity}
                        remove={() => removeItem(item.id)}
                    />
                ))}
                <button className={style['card-btn']} onClick={() => clearCart()}>Vaciar carrito</button>
            </div>
            <div className={style['contenedor-total']}>
                <h3>Total: ${total}</h3>
                <Link className={style['card-btn']} to='/order'>Finalizar compra</Link>
            </div>
        </div>
    )
}

export default Cart
