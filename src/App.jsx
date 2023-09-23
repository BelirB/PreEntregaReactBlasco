
import './App.css'
import Router from './components/Router/Router'
import { CartProvider } from './context/cartContext'


const App = () => {

  return (
    <CartProvider>
      <Router />
    </CartProvider>
  )
}

export default App

