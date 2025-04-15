import { response } from 'express'
import { useEffect } from 'react'
import { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    // agregar a cart
    const addToCart = (product) => {
        console.log(product)
        const item = cart.find(p => p.id === product.id)
        if (item) {
            setCart(cart.map(p => p.id === product.id ? {...p, count: p.count + 1} : p))
        } else {
            setCart([...cart, {...product, count: 1}])
        }
    }

    // remover de cart
    const removeFromCart = (product) => {
        console.log(product)
        setCart(cart.filter(p => p.id !== product.id))
    }

    // aumentar cantidad
    const aumentar = (product) => {
        setCart(cart.map(p => p.id === product.id ? {...p, count: p.count + 1} : p))
    }
    
    // disminuir cantidad
    const disminuir = (product) => {
        if (product.count === 1) {
            removeFromCart(product)
        } else {
            setCart(cart.map(p => p.id === product.id ? {...p, count: p.count - 1} : p))
        }
    }

    const pagoTotal = async() => {
        if (cart.length === 0) {
            alert("No hay productos en el carrito")
        }
        try {
            const token = localStorage.getItem("token")
            const response = await fetch("http://localhost:3000/api/v1/checkouts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    cart: cart,
                }),
            });
            if (!response.ok) {
                const errorData = await response.json()
                console.error("Error al pagar: ", errorData)
                alert("Ocurrio un error al pagar")
                return
            }
            alert("Pago exitoso")
            setCart([])
        }
        catch (error) {
            console.error("Error de red al pagar: ", error)
            alert("Ocurrio un problema al procesar el pago")
        } 
    }
    

    useEffect  (() => {
        const savedcart = localStorage.getItem("cart")
        if (savedcart) {
            setCart(JSON.parse(savedcart))
        }
    }, [])

    useEffect  (() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const total = cart.reduce((total, product) => total + product.price * product.count, 0)  

    return (
        <CartContext.Provider value={{cart, pagoTotal, addToCart, removeFromCart, aumentar, disminuir, total}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider