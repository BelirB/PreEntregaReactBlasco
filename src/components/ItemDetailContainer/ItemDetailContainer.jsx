
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import style from './style.module.css'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/client'
import Loader from '../../components/Loader/Loader'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)

        const prodRef = doc(db, 'products', id)

        getDoc(prodRef)
            .then(resp => {
                const data = resp.data()
                const productAdapted = { id: resp.id, ...data }
                console.log(productAdapted)
                setDetalle(productAdapted)
            })
            .catch(e => {
                console.error(e)
            })
            .finally(() => {
                setLoading(false)
            })
        console.log(detalle)
        
    }, [id])
    return (
        <>
            <Loader loading={loading} />
            <div className={style['contenedor']}>
                <ItemDetail detalle={detalle} />
            </div>
        </>
    )
}

export default ItemDetailContainer