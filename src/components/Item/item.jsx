import { Link } from 'react-router-dom'
import style from './style.module.css'

const Item = ({producto}) => {
    const {id, image, tittle, price} = producto
    

    return (

        <div className={style['card']}>
            <Link to={`/item/${id}`}><img src={image} alt={tittle} /></Link>
            <h2>{tittle}</h2>
            <h3>${price}</h3>
            <Link className={style['card-btn']} to={`/item/${id}`}>Ver más</Link>
        </div>
    )
}

export default Item