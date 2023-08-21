import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import smalllogo from "@/public/home/macswhitelogo.png"

const Navbar = () => {
    return (
        <div className='w-screen bg-[#01B2D6] '>
            <div className='flex justify-between items-center px-16 w-full py-6'>
                <div className='flex gap-6 items-center justify-between'>
                    <Link href="/" className='font-medium hover:text-[#ffc300]'>
                        Home
                    </Link>
                    <Link href="/events" className='font-medium hover:text-[#ffc300]'>
                        Events
                    </Link>
                    <Link href="/announcements" className='font-medium hover:text-[#ffc300]'>
                        Announcements
                    </Link>
                    <Link href="/teams" className='font-medium hover:text-[#ffc300]'>
                        Teams
                    </Link>
                </div>
                <div>
                    <Image src={smalllogo} alt="abc" />
                </div>
                <div>
                    <button className='px-3 py-2 bg-[#146C94] shadow-lg text-[#fff] shrink-0  rounded-xl font-medium text-lg'>Login/Signup</button>
                </div>

            </div>

        </div>
    )
}

export default Navbar