import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.webp'

const Footer = () => {
    return (
        <>
            <footer className="bg-navfot-color text-black mx-auto p-1 w-full">
                <div className="flex flex-col justify-between items-center">
                    <Link to="/">
                        <div className="flex items-center">
                            <img src={logo} alt="logo" className="w-20 h-20" />
                            <span className="text-2xl font-bold">El ciclo del libro</span>
                        </div>
                    </Link>
                    <hr className="my-6 w-full" />
                    <p className="">Todos los derechos reservados © 2025</p>
                </div>
            </footer>
        </>
    )
}

export default Footer