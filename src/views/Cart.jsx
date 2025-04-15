import React from 'react'
import CardCart from '../components/CardCart'
import { Link, NavLink } from "react-router-dom"

const Cart = () => {

    return (
        <>
            <h1 className="text-4xl font-bold text-center text-black m-5">Tu carrito</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-3 text-black w-[90%] mx-auto">
                <CardCart />
                <div className="flex flex-col gap-5 justify-center items-center">
                    <p className="text-3xl">Total</p>
                    <p className="text-3xl font-bold">$10.000</p>
                    <button className="bg-purple-900 text-white rounded-lg px-4 py-2 font-bold hover:bg-purple-800 hover:cursor-pointer" type="submit">
                        Finalizar compra
                    </button>
                </div>
            </div>
        </>
    )
}

export default Cart