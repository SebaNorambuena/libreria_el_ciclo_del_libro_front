import React from 'react'
import { Link } from "react-router-dom"
import useInput from "../hooks/UseInput"
import { useContext, useState } from 'react'
import { UserContext } from "../contexts/UserProvider"

const Register = () => {
    const {registerUser} = useContext(UserContext)
    const [vpassword, setVpassword] = useState("")
    const [username, usernameControl] = useInput("")
    const [email, emailControl] = useInput("")
    const [password, passwordControl] = useInput("")
    
    const validarInput = (e) => {
        e.preventDefault()
        if (!username.value || !email.value || !password.value || !vpassword) {
            alert("Debes llenar todos los campos")
        } else if (password.value !== vpassword) {
            alert("Las contraseñas no coinciden")
        } else if (password.value.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres")
        } else {
            registerUser(e, username.value, email.value, password.value)
            usernameControl.clean()
            emailControl.clean()
            passwordControl.clean()
        }
    }

    return (
        <>
            <div className="flex flex-col gap-5 w-[100%] p-3 justify-center items-center">
                <h1 className="text-6xl font-bold text-center text-black">Registra tu usuario</h1>
                <form action="" className="flex flex-col gap-5" onSubmit={validarInput}>
                    <input className="bg-gray-200 text-black rounded-lg px-4 py-2" type="text" placeholder="Ingresa tu usuario" {...username} />
                    <input className="bg-gray-200 text-black rounded-lg px-4 py-2" type="text" placeholder="Ingresa tu email" {...email} />
                    <input className="bg-gray-200 text-black rounded-lg px-4 py-2" type="password" placeholder="Ingresa una contraseña" {...password} />
                    <input className="bg-gray-200 text-black rounded-lg px-4 py-2" type="password" placeholder="Repite la contraseña" onChange={(e) => setVpassword(e.target.value)}/>
                    <button className="bg-purple-600 text-white rounded-lg px-4 py-2 font-bold hover:bg-purple-500 hover:cursor-pointer" type="submit">
                        Registrar
                    </button>
                </form>
                <p className="text-center text-black">Ya tienes cuenta? <Link to="/login" className="text-purple-900">Inicia sesión</Link></p>
            </div>
        </>
    )
}

export default Register