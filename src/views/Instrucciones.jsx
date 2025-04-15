import React from 'react'
import { Link, NavLink } from "react-router-dom"

{/* Decidi que no lo usaré porque no me gusta la idea de tener un link a la página de instrucciones */}

const Instrucciones = () => {

    return (
        <>
            <div className="flex flex-col gap-8 p-3 justify-center items-center text-black">
                <h1 className="text-6xl font-bold text-center text-black">¿Como funciona?</h1>
                <div className="flex flex-col gap-8">
                    <h2 className="text-2xl font-bold">¿Qué necesito para comprar un libro?</h2>
                    <div className="flex flex-col gap-5 ml-5">
                        <p>Primero debes registrarte para poder comprar y vender libros</p>
                        <p>Una vez registrado, podrás comprar libros</p>
                    </div>

                    <h2 className="text-2xl font-bold">¿Como vender un libro?</h2>
                    <div className="flex flex-col gap-5 ml-5">
                        <p>Primero debes registrarte para poder comprar y vender libros</p>
                        <p>Una vez registrado, dirigirte a la sección de <Link to="/vender" className="text-blue-500 hover:text-blue-700"> vende tu libro</Link> y completa el formulario</p>
                        <p>Rellena los campos del formulario</p>
                        <p>Si tu libro se vende, recibirás un correo y se realizara el pago correspondiente</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Instrucciones