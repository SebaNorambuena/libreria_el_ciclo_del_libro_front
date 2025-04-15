import React from 'react'

const CardCart = () => {
    return (
        <>
            <div className="flex flex-wrap gap-5 col-span-3 justify-around bg-gray-200 rounded-lg p-5 mb-5">
                    <img src="https://images.unsplash.com/photo-1580501170888-80668882ca0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="" className="w-60 h-60" />
                    <div className="flex flex-col gap-5 justify-between">
                        <div className="flex flex-col gap-5">
                            <p className="text-2xl font-bold">Nombre del libro</p>
                            <p className="text-2xl">Libro de la vida</p>
                        </div>
                        <p className="text-2xl text-red-500 hover:text-red-700 hover:cursor-pointer"><i className="fa-solid fa-trash"></i></p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="text-2xl font-bold">Precio</p>
                        <p className="text-2xl">$10.000</p>
                    </div>
            </div>
        </>
    )
}

export default CardCart