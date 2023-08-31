
import style from './style.module.css'

const CartWidget = () => {
    return (
        <div className={style["carrito"]}>
            <img style={{width:"35px" }} src="https://i.postimg.cc/25DFw8Jb/carrito.png" alt="cart" />
            <p>3</p>
        </div>
    )
}

export default CartWidget