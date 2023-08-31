import ItemCount from '../ItemCount/ItemCount.'
import style from './style.module.css'

const ItemDetail = ({ detalle }) => {
    return (
        <div className={style["card"]}>
            <img src={detalle.img} alt={detalle.titulo} />
            <h2>{detalle.titulo}</h2>
            <p>{detalle.detalle}</p>
            <div className={style["quantity"]}>
                <div>
                    <ItemCount />
                </div>
                <button className={style['btn-agregar']}>Agregar</button>
            </div>
        </div>
    )
}

export default ItemDetail


