import { notification } from 'antd'
import React, { useState } from 'react'

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (item) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(i => i.id === item.id)

            if (existingItem) {
                // If the item already exists in the cart, increase its quantity by 1
                return prevItems.map(i =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                )
            } else {
                // If the item doesn't exist in the cart, add it with a quantity of 1
                return [...prevItems, { ...item, quantity: 1 }]
            }
        })
        notification.success({
            message: "Add to card success",
            // description: 'You have successfully logged in'
        })
    }
    const removeFromCart = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId))
    }

    const updateQuantity = (itemId, quantity) => {
        setCartItems(prevItems => prevItems.map(item =>
            item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        ))
    }

    const updateSize = (itemId, size) => {
        setCartItems(prevItems => prevItems.map(item =>
            item.id === itemId ? { ...item, size: size } : item
        ))
    }
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, updateSize }}>
            {children}
        </CartContext.Provider>
    )
}
export const CartContext = React.createContext()