import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import smalllogo from "@/public/home/smalllogo.png"

export default function Home() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div className='w-screen navbar-hero'>
            <div className='flex justify-between items-center px-16 w-full py-2'>
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
                        Ann
                    </Link>
                </div>
                <div>
                    <Image src={smalllogo} alt="abc" />
                </div>
                <div>
                    <button className='px-3 py-2 bg-[#ffc300] shadow-lg text-[#08031b] shrink-0  rounded-xl font-medium text-lg'>Login/Signup</button>
                </div>
            </div>
        </div >
    );
}