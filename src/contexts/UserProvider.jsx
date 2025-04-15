import React from 'react'
import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const registerUser = async (e, username, email, password) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                'http://localhost:3000/api/v1/auth/register',
                {
                    username,
                    email,
                    password
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
    
            const data = response.data
            if (data?.error) {
                alert(data.error)
              } else {
                alert('Usuario registrado correctamente')
                navigate('/login')
            }
            //localStorage.setItem("token", data.token)
            //setUser(data)
        } catch (error) {
            console.error(error.response?.data || error.message)
        }
    }

    const loginUser = async (e, username, password) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                'http://localhost:3000/api/v1/auth/login',
                {
                    username,
                    password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
    
            const { token } = response.data
            alert('Sesión iniciada correctamente')
            localStorage.setItem("token", token)
            setUser({ username })
        } catch (error) {
            console.error(error.response?.data || error.message)
            alert(error.response?.data?.message || 'Error al iniciar sesión')
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) return;
    
        fetch('http://localhost:3000/api/v1/auth/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Token inválido o expirado')
            }
            return res.json()
        })
        .then((data) => {
            setUser(data[0])
        })
        .catch((err) => {
            console.error(err)
            localStorage.removeItem('token')
            setUser(null)
        })
    }, [])
    

    const logoutUser = () => {
        localStorage.removeItem('token')
        setUser(null)
    }

    return (
        <UserContext.Provider value={{ user, setUser, username, setUsername, email, setEmail, password, setPassword, registerUser, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider 

