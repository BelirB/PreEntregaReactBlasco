
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Cart from '../Cart/Cart'
import Order from '../Order/Order'

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/categoria/:id' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/order' element={<Order />} />
                <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router