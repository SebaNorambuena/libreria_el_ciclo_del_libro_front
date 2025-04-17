import React from 'react'

const Carrusel = () => {
    return (
        <>
            <div className="flex w-[100%] h-[100vh] overflow-x-scroll">
                <img
                    className="flex-[0_0_100%] w-[100%] object-cover snap-center"
                    src="https://i.ibb.co/JjT3Rh7k/carrusel-1.png"
                />
                <img
                    className="flex-[0_0_100%] w-[100%] object-cover snap-center"
                    src="https://i.ibb.co/JjT3Rh7k/carrusel-1.png"
                />
                <img
                    className="flex-[0_0_100%] w-[100%] object-cover snap-center"
                    src="https://i.ibb.co/JjT3Rh7k/carrusel-1.png"
                />
            </div>
        </>
    )
}

export default Carrusel