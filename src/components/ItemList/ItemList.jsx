import Item from '../Item/item'

const ItemList = ({ productos }) => {
    return (
        <>
            {productos.map(prod => <Item key={prod.id} producto={prod} />)}
        </>
    )
}

export default ItemList