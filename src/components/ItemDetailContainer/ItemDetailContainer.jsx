import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail"
import style from './style.module.css'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const getProduct = async () => {
            const res = await fetch('/data/db.json')
            const prod = await res.json()

            const findProduct = prod.find(p => p.id === parseInt(id))

            setDetalle(findProduct)
        }

        getProduct()

    }, [id])
    return (
        <div className={style["contenedor"]}>
            <ItemDetail detalle={detalle} />
        </div>
    )
}

export default ItemDetailContainer