import { useState, useContext } from 'react'
import Home from './views/Home'
import Navbar from './components/Navbar'
import Login from './views/Login'
import Register from './views/Register'
import Footer from './components/Footer'
import Libros from './views/Libros'
import Vender from './views/Vender'
import Profile from './views/Profile'
import Cart from './views/Cart'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from './contexts/UserProvider'
import ApiProvider from './contexts/ApiProvider'
import SellProvider from './contexts/SellProvider'
import CartProvider from './contexts/CartProvider'

const App = () => {
  const {user} = useContext(UserContext)

  return (
    <>
      <ApiProvider>
        <CartProvider>
          <SellProvider>
            <Navbar />
            <Routes >
              <Route path="/" element={<Home />} />
              <Route path="/login" element={user ? <Home /> : <Login />} />
              <Route path="/register" element={user ? <Home /> : <Register />} />
              <Route path="/libros" element={<Libros />} />
              <Route path="/vender" element={user ? <Vender /> : <Login />} />
              <Route path="/profile" element={user ? <Profile /> : <Login />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
          </SellProvider>
        </CartProvider>
      </ApiProvider>
    </>
  )
}

export default App
