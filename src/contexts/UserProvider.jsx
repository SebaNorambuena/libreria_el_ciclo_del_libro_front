import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    const urlMe = import.meta.env.VITE_API_URL + '/api/v1/auth/me'
    const urlRegister = import.meta.env.VITE_API_URL + '/api/v1/auth/register'
    const urlLogin = import.meta.env.VITE_API_URL + '/api/v1/auth/login'

    const registerUser = (e, username, email, password) => {
        e.preventDefault()
        fetch(urlRegister,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            }
        )
        .then((data) => {
            if (!data.ok) {
                throw new Error('Invalid data')
            }
            alert('Usuario registrado correctamente')
            navigate('/login')
        })
        .catch((err) => {
            console.error(err)
            alert(err.message)
        })
        
    }

    const loginUser = (e, username, password) => {
        e.preventDefault()
        fetch(urlLogin,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            }
        )
        .then((res) => {
            if (!res.ok) {
                throw new Error('Invalid data')
            }
            return res.json()
        })
        .then((data) => {
            if (!data.token) {
                throw new Error('Invalid token')
            }
            alert('Sesión iniciada correctamente')
            localStorage.setItem("token", data.token)
            setUser({ username: data.username })
            navigate('/')
        })
        .catch((err) => {
            console.error(err)
            alert(err.message)
        })
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) return;
    
        fetch(urlMe, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Invalid token')
            }
            return res.json()
        })
        .then((data) => {
            setUser(data)
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
        <UserContext.Provider value={{ user, setUser, registerUser, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider 

