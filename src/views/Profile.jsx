import React from 'react'
import Card from '../components/Card'
import { useContext } from 'react'
import { ApiContext } from '../contexts/ApiProvider'
import { UserContext } from '../contexts/UserProvider'

const Profile = () => {
    const { user } = useContext(UserContext)
    const { books } = useContext(ApiContext)
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 p-3 text-black w-[90%] mx-auto">

                {/* Perfil */}
                <div className="flex flex-col gap-5 col-span-1">
                    <h1 className="text-4xl font-bold text-center text-black mb-5">Tu perfil</h1>
                    <div className='flex gap-4 flex-col sm:flex-row items-center'>
                        <img
                            src="https://images.unsplash.com/photo-1580501170888-80668882ca0c?auto=format&fit=crop&w=2940&q=80"
                            alt=""
                            className="rounded-full w-24 h-24"
                        />
                        <div className='flex flex-col gap-5 items-center sm:items-start'>
                            <p className="text-2xl font-bold">{user.username}</p>
                            <button className='bg-purple-900 text-white rounded-lg px-4 py-2 font-bold hover:bg-purple-800'>
                            Cambiar imagen
                            </button>
                        </div>
                    </div>
                    <input type="text" className="bg-gray-200 text-black rounded-lg px-4 py-2" value={user.email} readOnly />
                    <form className="flex flex-col gap-5">
                        <p className="font-bold">Cambiar contraseña</p>
                        <input type="password" className="bg-gray-200 text-black rounded-lg px-4 py-2" placeholder="Contraseña nueva" />
                        <input type="password" className="bg-gray-200 text-black rounded-lg px-4 py-2" placeholder="Repetir contraseña" />
                        <button className="bg-purple-900 text-white rounded-lg px-4 py-2 font-bold hover:bg-purple-800" type="submit">
                            Cambiar contraseña
                        </button>
                    </form>
                </div>

                {/* favoritos */}
                <div className="flex flex-col gap-5 col-span-1 lg:col-span-3">
                    <h1 className="text-3xl font-bold text-center text-black">Tus libros en venta</h1>
                    <div className="flex flex-wrap gap-5 justify-center">
                        {books.map((book) => (
                            <Card key={book.id} book={book} />
                        ))}
                    </div>

                    <h1 className="text-3xl font-bold text-center text-black">Tus favoritos</h1>
                    <div className="flex flex-wrap gap-5 justify-center">
                        {books.map((book) => (
                            <Card key={book.id} book={book} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile