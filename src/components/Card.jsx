import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../contexts/CartProvider'


const Card = ({ book }) => {
    const {addToCart} = useContext(CartContext)
    const navigate = useNavigate()
    return (
        <>
                <div className="bg-navfot-color rounded-lg border-shadow-black shadow-sm w-[30vh] text-center flex flex-col justify-between hover:cursor-pointer">
                    <Link to={`/libros/${book.id}`}>
                        <img className="p-2 w-[20vh] h-[25vh] rounded-lg m-auto" src={book.img} alt="" />
                    </Link>
                        <div className="p-5">
                            <Link to={`/libros/${book.id}`}>
                                <h5 className="mb-2 font-bold text-black">{book.name}</h5>
                                <p className="mb-3 font-normal text-black">$<span className="font-bold">{book.price}</span></p>
                            </Link>
                        <button className="bg-purple-600 text-white rounded-lg px-4 py-2 font-bold hover:bg-purple-500 hover:cursor-pointer" onClick={() => addToCart(book)}>
                            Agregar
                        </button>
                        {/*<i className="fa-solid fa-heart text-white mt-2 text-2xl hover:cursor-pointer hover:text-3xl"></i>*/}
                    </div>
                </div>
        </>
    )
}

export default Card