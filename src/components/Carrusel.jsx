import React from 'react'

const Carrusel = () => {
    return (
        <>
            <div className="flex w-[100%] h-[100vh] overflow-x-scroll">
                <img
                    className="flex-[0_0_100%] w-[100%] object-cover snap-center"
                    src="https://images.unsplash.com/photo-1580501170961-bb0dbf63a6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
                />
                <img
                    className="flex-[0_0_100%] w-[100%] object-cover snap-center"
                    src="https://images.unsplash.com/photo-1580501170888-80668882ca0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                />
                <img
                    className="flex-[0_0_100%] w-[100%] object-cover snap-center"
                    src="https://images.unsplash.com/photo-1572508589584-94d778209dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                />
            </div>
        </>
    )
}

export default Carrusel