import style from './style.module.css'

const CartItem = ({ tittle, price, quantity, subtotal, remove, image }) => {
    return (
        <div className={style['card']}>
            <div className={style['btn-x']}>
                <button onClick={remove}>X</button>
            </div>
            <div>
                <img className={style['img']} src={image} alt={tittle} />
            </div>
            <div>
                <h2>{tittle}</h2>
                <p>Precio: ${price}</p>
                <p>Cantidad: {quantity}</p>
                <p>Subtotal: ${subtotal}</p>
            </div>
        </div>
    )
}

export default CartItem