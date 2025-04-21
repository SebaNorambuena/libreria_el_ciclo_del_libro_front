import React from 'react'
import { CartContext } from '../contexts/CartProvider'
import { UserContext } from '../contexts/UserProvider'
import { useContext } from 'react'

const Cart = () => {
    const { cart, removeFromCart, total } = useContext(CartContext)
    const { user } = useContext(UserContext)
    return (
        <>
            <h1 className="text-4xl font-bold text-center text-black m-5">Tu carrito</h1>
            <div className="p-3 text-black flex flex-col items-center gap-5">
                { cart.length > 0 ?
                    cart.map((cart) => (
                        <div className="flex flex-wrap gap-4 p-5 bg-gray-200 rounded-lg justify-center w-[80vh]">
                            <img src={cart.img} alt="" className="w-[20vh] h-[25vh] rounded-lg" />
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col">
                                    <p className="font-bold">Nombre del libro</p>
                                    <p>{cart.name}</p>
                                </div>
                                <p className="text-2xl text-red-500 hover:text-red-700 hover:cursor-pointer"><i className="fa-solid fa-trash" onClick={()=>removeFromCart(cart)}></i></p>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold">Precio</p>
                                <p>$ {cart.price}</p>
                            </div>
                        </div>
                    )) :
                        <div className='flex flex-col gap-5 justify-center items-center h-[50vh]'>
                            <p className='text-center text-black text-2xl font-bold'>No hay articulos en el carrito</p>
                        </div>
                    }
                {cart.length > 0 ?
                <div className="flex flex-col gap-5 justify-center items-center">
                    <p className="text-3xl">Total</p>
                    <p className="text-3xl font-bold">$ {total}</p>
                    {user ?
                    <button className="bg-purple-600 text-white rounded-lg px-4 py-2 font-bold hover:bg-purple-500 hover:cursor-pointer" type="submit">
                        Finalizar compra
                    </button>:
                    <button className="bg-gray-600 text-white rounded-lg px-4 py-2 font-bold" type="submit" disabled>
                        Finalizar compra
                    </button>
                    }
                </div>:
                <></>
                }
            </div>
        </>
    )
}

export default Cart