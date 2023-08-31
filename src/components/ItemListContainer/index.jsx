
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Item from "../Item/item"
import style from './style.module.css'


const ItemListContainer = () =>{
    const[productos, setProductos] = useState([])
    const {id} = useParams ()

    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch('/data/db.json')
            const prod = await res.json()

            const filtrarProducts = prod.filter(p => p.categoria === id)
            if(filtrarProducts.length > 0) return setProductos(filtrarProducts)
            setProductos(prod)
        }

        getProducts()
        
    }, [id])

    return(
        <div className={style["contenedor"]}>
          {productos?.map(prod => <Item producto={prod} key={prod.id}/>
            )}
        </div>
    )
}

export default ItemListContainer