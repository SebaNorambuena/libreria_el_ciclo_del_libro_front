import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../contexts/CartProvider'


const Card = ({ book }) => {
    const {addToCart} = useContext(CartContext)
    const navigate = useNavigate()
    return (
        <>
            <div className="max-w-sm bg-navfot-color border border-pink-300 rounded-lg shadow-sm">
                <a href="#">
                    <img className="p-2 w-[50vh] h-[60vh] rounded-lg m-auto" src={book.img} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold text-black">{book.name}</h5>
                    </a>
                    <p className="mb-3 font-normal text-black">{book.description}</p>
                    <p className="mb-3 font-normal text-black">Valor: $<span className="text-1xl font-bold">{book.price}</span></p>
                    <div className="flex justify-between">
                        <button className="bg-purple-600 text-white rounded-lg px-4 py-2 font-bold hover:bg-purple-500 hover:cursor-pointer" onClick={() => addToCart(book)}>
                            Agregar al carrito
                        </button>
                        <i className="fa-solid fa-heart text-white mt-2 text-2xl hover:cursor-pointer hover:text-3xl"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card