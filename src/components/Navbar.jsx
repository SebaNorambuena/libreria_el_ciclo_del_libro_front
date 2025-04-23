import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.webp'
import { UserContext } from '../contexts/UserProvider'
import { CartContext } from '../contexts/CartProvider'

const Navbar = () => {
  const { total, cart } = useContext(CartContext)
  const { user, logoutUser } = useContext(UserContext)
  const [menuOpen, setMenuOpen] = useState(false)

  const isActiveClass = ({ isActive }) => (isActive ? 'text-white' : 'text-black')

  return (
    <nav className="bg-navfot-color text-black mx-auto">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-20 h-20" />
            <span className="text-2xl font-bold">El ciclo del libro</span>
          </div>
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className={`${menuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto`} id="navbar-default">
          <div className="flex flex-col md:flex-row gap-5">
            <NavLink to="/libros" className={isActiveClass}><p className="hover:text-white">Todos los libros</p></NavLink>
            {Array.isArray(user) && user.map((u) => {
              if (u.isadmin) {
                console.log(u.isadmin)
              return (
                <div key={u.id}>
                  <NavLink to="/vender" className={isActiveClass}><p className="hover:text-white">Publicar Libro</p></NavLink>
                </div>
              )}
            })}
            {user ? (
              <NavLink to="/profile" className={isActiveClass}>
                <div className="flex items-center gap-1 hover:text-white">
                  <img src="https://i.ibb.co/BkhdVVf/images.webp" alt="" className="w-5 h-5 rounded-full" />
                  <p>Hola <span className="font-bold">{user.username}</span></p>
                </div>
              </NavLink>
            ) : (
              <NavLink to="/register" className={isActiveClass}><p className="hover:text-white">Registrate</p></NavLink>
            )}
            {user ? (
              <NavLink to="/" className={isActiveClass} onClick={logoutUser}>
                <p className="hover:text-white">Cerrar sesión</p>
              </NavLink>
            ) : (
              <NavLink to="/login" className={isActiveClass}>
                <p className="bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-500 w-[110px] h-[25px] text-center">Inicia sesión</p>
              </NavLink>
            )}
            <NavLink to="/cart" className={isActiveClass}>
              <p className="hover:text-white"><i className="fa-solid fa-cart-shopping"></i> $ {total}</p>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
