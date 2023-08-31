import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import NavBar from '../components/NavBar/index';
import ItemListContainer from '../components/ItemListContainer/index';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/categoria/:id' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router