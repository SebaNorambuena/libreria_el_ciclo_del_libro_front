import axios from 'axios'
import { createContext, useState } from 'react'

export const SellContext = createContext()

const SellProvider = ({children}) => {
    const sellBook = async (name, author, category, img, price, description, vendedor) => {
        try {
            const response = await axios.post(import.meta.env.VITE_API_URL +'/api/v1/sell_books',
                {
                    name,
                    author,
                    category,
                    img,
                    price,
                    description,
                    vendedor
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
                alert('Libro publicado correctamente')
            }
        }
        catch (error) {
            console.error(error.response?.data || error.message)
        }
    }
    return (
        <SellContext.Provider value={{sellBook}}>
            {children}
        </SellContext.Provider>
    )
}

export default SellProvider