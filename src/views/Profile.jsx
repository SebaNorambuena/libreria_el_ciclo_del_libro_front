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
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 p-3 text-black w-[90%] mx-auto h-[65vh]">

                {/* Perfil */}
                <div className="flex flex-col gap-5 col-span-1">
                    <h1 className="text-4xl font-bold text-center text-black mb-5">Tu perfil</h1>
                    <div className='flex gap-4 flex-col sm:flex-row items-center'>
                        <img
                            src="https://i.ibb.co/BkhdVVf/images.webp"
                            alt=""
                            className="rounded-full w-24 h-24"
                        />
                        <div className='flex flex-col gap-5 items-center sm:items-start'>
                            <p className="text-2xl font-bold">{user.username}</p>
                            <button disabled className='bg-gray-500 text-white rounded-lg px-4 py-2 font-bold hover:bg-gray-500'>
                                Editar perfil
                            </button>
                        </div>
                    </div>
                </div>

                {/* Historial de compras */}
                <div className="flex flex-col gap-5 col-span-1 lg:col-span-3">
                    <h1 className="text-3xl font-bold text-center text-black">Tus Compras</h1>
                    <div className="flex flex-wrap gap-5 justify-center">
                        <p>No tienes compras aun</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile