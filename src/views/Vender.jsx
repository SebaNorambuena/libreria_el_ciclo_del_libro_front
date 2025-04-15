import React from 'react'
import useInput from "../hooks/UseInput"
import { useContext } from 'react'
import { UserContext } from '../contexts/UserProvider'
import { SellContext } from '../contexts/SellProvider'

const Vender = () => {
    const {sellBook} = useContext(SellContext)
    const { user } = useContext(UserContext)
    const name = useInput("")
    const author = useInput("")
    const category = useInput("")
    const img = useInput("")
    const price = useInput(0)
    const description = useInput("")
    const vendedor = user?.username || "anónimo"

    const validarInput = (e) => {
        e.preventDefault()
        if (!name.value || !author.value || !category.value || !img.value || !price.value || !description.value) {
            alert("Debes llenar todos los campos")
        } else {
            sellBook(name.value, author.value, category.value, img.value, Number(price.value), description.value, vendedor)
            name.reset()
            author.reset()
            category.reset()
            img.reset()
            price.reset()
            description.reset()
        }
    }


    return (
        <>
            <div className="flex flex-col gap-5 w-[100%] p-3 justify-center items-center">
                <h1 className="text-6xl font-bold text-center text-black">Vende tu libro</h1>
                <form className="flex flex-col gap-5" action="" onSubmit={validarInput}>
                    <input className="bg-gray-200 text-black rounded-lg px-4 py-2" type="text" placeholder="Nombre del libro" {...name} />
                    <input className="bg-gray-200 text-black rounded-lg px-4 py-2" type="text" placeholder="Autor del libro" {...author} />
                    <input className="bg-gray-200 text-black rounded-lg px-4 py-2" type="text" placeholder="Categoria del libro" {...category} />
                    <input className="bg-gray-200 text-black rounded-lg px-4 py-2" type="text" placeholder="Imagen del libro" {...img} />
                    <input className="bg-gray-200 text-black rounded-lg px-4 py-2" type="number" placeholder="Precio del libro" {...price} />
                    <input className="bg-gray-200 text-black rounded-lg px-4 py-2" type="text" placeholder="Descripción del libro" {...description} />
                    <button className="bg-purple-900 text-white rounded-lg px-4 py-2 font-bold hover:bg-purple-800 hover:cursor-pointer" type="submit">
                        Publicar
                    </button>
                </form>
            </div>
        </>
    )
}

export default Vender