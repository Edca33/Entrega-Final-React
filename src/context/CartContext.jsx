import { createContext, useState } from "react"

export const CartContext = createContext()


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])


    const addItem = (producto, cantidad) => {
        if (isInCart(producto.id)) {
            setCart(cart.map((item) => {
                if (producto.id === item.id) {
                    return { ...item, quantity: item.quantity + cantidad }
                } else {
                    return item
                }
            }))
        } else {
            setCart([...cart, { ...producto, quantity: cantidad }])
        }

    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }


    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }


    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc += item.quantity, 0)
    }


    const cartTotal = () => {
        return cart.reduce((acc, item) => (acc += item.price * item.quantity), 0)
    }

    const itemQuantity = (id) => {
        const itemInCart = cart.find((item) => item.id === id)
        if (itemInCart) {
            return itemInCart.quantity
        } else {
            return 0
        }
    }




    return (
        <CartContext.Provider value={{ cart, addItem, clear, cartQuantity, cartTotal, isInCart, itemQuantity, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}
