import axios from 'axios'
import { createContext, useState } from 'react'

export const SellContext = createContext()

const SellProvider = ({children}) => {
    const urlSell = import.meta.env.VITE_API_URL +'/api/v1/sell_books'
    const sellBook = (name, author, category, img, price, description, stock, vendidos) => {
        fetch(urlSell,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    author,
                    category,
                    img,
                    price,
                    description,
                    stock,
                    vendidos
                })
            }
        )
        .then((data) => {
            if (!data.ok) {
                throw new Error('Invalid data')
            }
            alert('Libro publicado correctamente')
        })
        .catch((err) => {
            console.error(err)
            alert(err.message)
        })
    }
    return (
        <SellContext.Provider value={{sellBook}}>
            {children}
        </SellContext.Provider>
    )
}

export default SellProvider