import React from 'react'
import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const ApiContext = createContext()

const ApiProvider = ({children}) => {

    const [books, setBooks] = useState([])

    const url = import.meta.env.VITE_API_URL + "/api/v1/books"

    const getApi = async () => {
        try {
            const response = await axios.get(url)
            setBooks(response.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    useEffect(()=>{
    getApi()
    }, [])

    return (
        <ApiContext.Provider value={{books}}>
            {children} 
        </ApiContext.Provider>
    )
}

export default ApiProvider

