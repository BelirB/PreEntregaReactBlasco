import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        } else {
            setCart(prev => {
                const updatedCart = prev.map(product => {
                    if (product.id === item.id) {

                        return { ...product, quantity: product.quantity + quantity }
                    }
                    return product
                })
                return updatedCart
            })
        }
    }

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }


    return (
        <CartContext.Provider value={{ cart, totalItems, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}
