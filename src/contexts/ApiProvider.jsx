import { useState, useEffect, createContext } from 'react'

export const ApiContext = createContext()

const ApiProvider = ({children}) => {

    const [books, setBooks] = useState([])

    const url = import.meta.env.VITE_API_URL + "/api/v1/books"

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())    
        .then(data => setBooks(data))
    }, [])

    return (
        <ApiContext.Provider value={{books}}>
            {children} 
        </ApiContext.Provider>
    )
}

export default ApiProvider

