import React from 'react'
import Card from '../components/Card'
import { useContext } from 'react'
import { ApiContext } from '../contexts/ApiProvider'

const Libros = () => {
  const { books } = useContext(ApiContext)
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 m-5">
        <input type="text" placeholder="Buscar nombre, categoria, autor" className="bg-gray-200 text-black rounded-lg px-4 py-2 w-full" />
        <h1 className="text-4xl font-bold text-center text-black">Todos los libros</h1>
        <div className="flex flex-wrap justify-between gap-5">
          {
            books.map((book) => (
              <Card 
                key={book.id} 
                book={book} 
              />
            ))
          }
        </div>
      </div>
    </>
  )
}
export default Libros