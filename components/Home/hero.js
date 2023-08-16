import Image from 'next/image'
import React from 'react'
import MACSlogo from "@/public/home/MACS logo.png"


const Hero = () => {
    return (
        <div className="flex flex-col md:flex md:flex-row items-center bg-[#060019] text-white pb-[50px]   ">
            <div className="flex-1 ml-[5vw]  mr-[5vw] ">
                <Image src={MACSlogo} alt="abc" />
            </div>
            <div className="flex-1 mr-[5vw] ml-[5vw] text-justify">
                <h2 className="">
                    Mathematics and Computing Society (MACS) is a non-profit organization
                    run by the students of The Department of Mathematical Sciences.
                    <br />
                    <br />

                    We serve as a platform for students interested in mathematics, computer science, and related fields to come together, explore their interests, and enhance their knowledge and skills.
                    <br />
                    <br />

                    We organize various events, workshops, seminars, coding competitions, hackathons, and guest lectures to promote learning, foster a sense of community, and encourage participation in technical activities
                </h2>
            </div>
            

        </div>
    )
}

export default Hero