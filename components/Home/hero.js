import Image from 'next/image'
import React from 'react'
import a from "@/public/home/a.jpg"


const Hero = () => {
    return (
        <div className="flex items-center py-12 pt-20 navbar-hero px-[10vw]">
            <div className="flex-1">
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
            <div className="flex-1">
                <Image src={a} alt="abc" />
            </div>

        </div>
    )
}

export default Hero