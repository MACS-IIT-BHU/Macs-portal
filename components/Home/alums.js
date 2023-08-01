import React from 'react'
import a from "@/public/home/a.jpg"
import Image from 'next/image'




const Alums = () => {
    return (
        <div className="flex py-24 px-[10vw] min-h-screen navbar-hero w-full">
            <div className="flex flex-col items-center gap-4">
                <h4>Our Alums</h4>
                <Image src={a} alt="abc" />

            </div>
        </div>
    )
}

export default Alums