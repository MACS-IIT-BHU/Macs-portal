import Image from 'next/image'
import React from 'react'
import MACSlogo from "@/public/home/macsbigwhitelogo.png"


const Hero = () => {
    return (
        <div className=" flex flex-col md:flex md:flex-row items-center bg-gradient-to-r to-cyan-300 from-cyan-600 text-white pb-[50px] mt-[60px] md:mt-[70px]   ">
            <div className="flex-1 ml-[5vw]  mr-[5vw] ">
                <Image  src={MACSlogo} alt="abc" />
            </div>
            <div className="flex-1 mr-[5vw] ml-[5vw] text-justify">
                <h1 className="mt-4 text-xl md:text-2xl font-bold leading-relaxed text-gray-100">
                    The Mathematics and Computing Society (MACS) is a non-profit organization,
                    entirely driven by the enthusiastic students of The Department of Mathematical
                    Sciences at the Indian Institute of Technology (BHU), Varanasi. Our society is
                    a dynamic platform for students passionate about mathematics, computer science, and
                    related fields to come together, explore their interests, and enrich their knowledge
                    and skills.
                </h1>

            </div>


        </div>
    )
}

export default Hero