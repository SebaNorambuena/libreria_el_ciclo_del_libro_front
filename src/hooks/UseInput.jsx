import { useState } from "react"


const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const clean = () => {
        setValue(initialValue)
    }

    const inputProps = { value, onChange: handleChange }

    return [inputProps, { clean }]
}


export default useInput