import React from 'react'
import { Link, NavLink } from "react-router-dom"
import Carrusel from '../components/Carrusel'
import Card from '../components/Card'
import { useContext } from 'react'
import { ApiContext } from '../contexts/ApiProvider'

const Home = () => {
  const { books } = useContext(ApiContext)
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 m-5">
        <Carrusel />
        <h1 className="text-4xl font-bold text-center text-black">
          <i className="fa-solid fa-star text-yellow-500"></i>
          Productos destacados
          <i className="fa-solid fa-star text-yellow-500"></i>
        </h1>
        <div className="flex flex-wrap justify-evenly gap-5 m-5">
          {
            books.map((book) => (
              <Card 
                key={book.id} 
                book={book} 
              />
            ))
          }
        </div>
        <Link to="/libros">
          <button className="bg-purple-600 text-white rounded-lg px-4 py-2 font-bold hover:bg-purple-500 hover:cursor-pointer">
            Ver mas
          </button>
        </Link>
      </div>
    </>
  )
}
export default Home