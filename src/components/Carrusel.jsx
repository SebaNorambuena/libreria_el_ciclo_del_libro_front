import React from 'react'
import { useState } from 'react'
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa"

const Carrusel = () => {
    const slides = [
        'https://i.ibb.co/LD1JF1Qf/carrusel1.png',
        'https://i.ibb.co/LD1JF1Qf/carrusel1.png',
        'https://i.ibb.co/LD1JF1Qf/carrusel1.png',  
    ]

    const [current, setCurrent] = useState(0)

    const previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1)
        else setCurrent(current - 1)
    }

    const nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0)
        else setCurrent(current + 1)
    }

    return (
        <>
            <div className='overflow-hidden relative'>
                <div 
                className={`flex transition ease-out duration-40`} 
                style={{ transform: `translateX(-${current * 100}%)`}}>
                    {slides.map((s) => {
                        return <img src={s}/>
                    })}
                </div>
                <div className='absolute top-0 w-full h-full flex justify-between items-center px-10 text-3xl'>
                    <button onClick={previousSlide} className="cursor-pointer hover:text-4xl">
                        <FaArrowCircleLeft/>
                    </button>
                    <button onClick={nextSlide} className="cursor-pointer hover:text-4xl">
                        <FaArrowCircleRight/>
                    </button>
                </div>
                <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                    {slides.map((s, i) => {
                        return <div 
                        onClick={() => setCurrent(i)}
                        key={"circle"+i}
                        className={`rounded-full w-3 h-3 cursor-pointer ${current === i ? 'bg-white' : 'bg-gray-500'}`}></div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Carrusel