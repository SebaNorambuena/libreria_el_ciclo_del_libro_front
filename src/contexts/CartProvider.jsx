import { useEffect } from 'react'
import { createContext, useState, useContext } from 'react'
import { UserContext } from './UserProvider'

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const { user } = useContext(UserContext)
    const userId = user?.id

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

    const pagoTotal = async (userId) => {
        if (cart.length === 0) {
            alert("No hay productos en el carrito");
            return; // <- no continuar si no hay productos
        }
    
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(import.meta.env.VITE_API_URL + "/api/v1/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    userId: userId,
                    libro: cart,
                }),
            });
    
            if (!response.ok) {
                const errorData = await response.text(); // .json puede fallar si viene HTML
                console.error("Error al pagar:", errorData);
                alert("Ocurrió un error al pagar");
                return;
            }
    
            alert("Pago exitoso");
            setCart([]);
        } catch (error) {
            console.error("Error de red al pagar:", error);
            alert("Error de red al pagar");
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
        <CartContext.Provider value={{cart, pagoTotal, addToCart, removeFromCart, aumentar, disminuir, total, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider