import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../contexts/UserProvider"
import useInput from "../hooks/UseInput"

const Login = ()=>{
    const {loginUser} = useContext(UserContext)
    const [username, usernameControl] = useInput("")
    const [password, passwordControl] = useInput("")
    console.log(username,password)

    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser(e, username.value, password.value)
        usernameControl.clean()
        passwordControl.clean()
    }
    
    return(
        <>
            <div className="flex flex-col gap-5 w-[100%] p-3 justify-center items-center h-[70vh]">
                <h1 className="text-6xl font-bold text-center text-black">Inicia sesión</h1>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <input className="bg-gray-200 text-black rounded-lg px-4 py-2" type="text" placeholder="Ingresa tu usuario" {...username} />
                    <input className="bg-gray-200 text-black rounded-lg px-4 py-2" type="password" placeholder="Ingresa tu contraseña" {...password} />
                    <button className="bg-purple-600 text-white rounded-lg px-4 py-2 font-bold hover:bg-purple-500 hover:cursor-pointer" type="submit">
                        Iniciar sesion
                    </button>
                </form>
                <p className="text-center text-black">No tienes cuenta? <Link to="/register" className="text-purple-900">Registrate</Link></p>
            </div>
        </>
    )
}

export default Login