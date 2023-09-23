
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from './style.module.css'
import Loader from '../Loader/Loader'
import { db } from '../../firebase/client'
import { getDocs, collection, query, where } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)

        const productsRef = id
            ? query(collection(db, 'products'), where('categoryid', '==', id))
            : collection(db, 'products')

        getDocs(productsRef)
            .then(resp => {
                const productsAdapted = resp.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProductos(productsAdapted)
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => {
                setLoading(false)
            })


    }, [id])

    return (
        <>
            <Loader loading={loading} />
            <div className={style['contenedor']}>
                <ItemList productos={productos} />
            </div>
        </>
    )
}

export default ItemListContainer