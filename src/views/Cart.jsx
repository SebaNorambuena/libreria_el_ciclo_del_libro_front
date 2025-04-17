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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-3 text-black w-[90%] mx-auto h-[50vh]">
                { cart.length > 0 ?
                    cart.map((cart) => (
                        <div className="flex flex-wrap gap-5 col-span-3 justify-around bg-gray-200 rounded-lg p-5 mb-5">
                            <img src="https://images.unsplash.com/photo-1580501170888-80668882ca0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="" className="w-60 h-60" />
                            <div className="flex flex-col gap-5 justify-between">
                                <div className="flex flex-col gap-5">
                                    <p className="text-2xl font-bold">Nombre del libro</p>
                                    <p className="text-2xl">{cart.name}</p>
                                </div>
                                <p className="text-2xl text-red-500 hover:text-red-700 hover:cursor-pointer"><i className="fa-solid fa-trash" onClick={()=>removeFromCart(cart)}></i></p>
                            </div>
                            <div className="flex flex-col gap-5">
                                <p className="text-2xl font-bold">Precio</p>
                                <p className="text-2xl">$ {cart.price}</p>
                            </div>
                        </div>
                    )) :
                <div className='flex flex-col gap-5 justify-center items-center'>
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