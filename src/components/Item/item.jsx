import { Link } from "react-router-dom"
import style from './style.module.css'

const Item = ({ producto }) => {

    return (

        <div className={style["card"]}>
            <img src={producto.img} alt={producto.titulo} />
            <h2>{producto.titulo}</h2>
            <h3>${producto.precio}</h3>
            <Link className={style["card-btn"]} to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    )
}

export default Item