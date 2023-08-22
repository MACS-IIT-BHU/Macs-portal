"use client";
import Link from 'next/link';
import smalllogo from "@/public/home/logo.svg";
import Image from "next/image"
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import { Bitter, Monomaniac_One, Montserrat, Nanum_Brush_Script } from 'next/font/google';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'
import { Murecho } from 'next/font/google'
// import { Murecho } from 'next/font/google'

const murecho = Murecho({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })
export default function Home() {
    const [navbar, setNavbar] = useState(false);
    const path = usePathname();

    return (
        <div>
            <nav className={`w-full navbar-hero md:pb-2 bg-gradient-to-r to-cyan-300 from-cyan-600 fixed z-20 ${murecho.className}`}>
                <div className={`relative mx-4  px-4 md:items-center md:flex md:justify-between ${navbar ? '' : 'h-16'}`}>
                    <div className='md:hidden justify-self-start grow'>
                        <div className="flex items-center justify-between pt-2 md:py-5 md:block">
                            <div>
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <RxCross1 size={25} color="white" />
                                    ) : (
                                        <RxHamburgerMenu size={25} color="white" />
                                    )}
                                </button>
                            </div>

                            <div className='md:invisible sm:visible '>
                                <div className='flex items-center justify-center gap-2  px-2 '>
                                    <div className='cursor-pointer  px-5 py-2  rounded-3xl bg-[#146c94] b_shadow translate-x-5'>Login</div>
                                    <div className='bg-white text-black py-2 px-5 b_shadow rounded-r-3xl text-right'>Signup</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='justify-self-start'>
                        <div className={`pb-3 md:block md:pb-0 md:mt-0 md:px-0 ${navbar ? 'block' : 'hidden'
                            }`}>
                            <ul className={`flex flex-col p-4 md:pb-2 md:pt-0 mt-4 border rounded-lg md:flex-row md:space-x-4 md:mt-0 md:border-0 md:space-y-0 space-y-4 ${montserrat.className}`}>
                                <li className={`px-2 py-3 hover:bg-white rounded-b-lg ${path == '/' ? 'bg-white' : ''}`}>
                                    <Link href="/" className='font-medium text-black/75 hover:text-black/100 my-8'>
                                        Home
                                    </Link>
                                </li>
                                <li className={`px-2 py-3 hover:bg-white rounded-b-lg ${path == '/events' ? 'bg-white' : ''}`}>
                                    <Link href="/events" className='font-medium  text-black/75 hover:text-black/100 my-8'>
                                        Events
                                    </Link>
                                </li>
                                <li className={`px-2 py-3 hover:bg-white rounded-b-lg ${path == '/articles' ? 'bg-white' : ''}`}>
                                    <Link href="/announcements" className='font-medium  text-black/75 hover:text-black/100 my-8'>
                                        Articles
                                    </Link>
                                </li>
                                <li className={`px-2 py-3 hover:bg-white rounded-b-lg ${path == '/tgallery' ? 'bg-white' : ''}`}  >
                                    <Link href="/teams" className='font-medium  text-black/75 hover:text-black/100 my-8'>
                                        Gallery
                                    </Link>
                                </li>
                                <li className={`px-2 py-3 hover:bg-white rounded-b-lg ${path == '/team' ? 'bg-white' : ''}`}  >
                                    <Link href="/teams" className='font-medium  text-black/75 hover:text-black/100 my-8'>
                                        Team
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="absolute   sm:top-0 top-0 left-[50%] -translate-x-[50%] translate-y-[5%]">
                        <center>
                            <Image src={smalllogo} width={180} alt="abc" />
                        </center>
                    </div>
                    {/* <div className="invisible md:visible grow">
                        <div className='bg-white border rounded-3xl shadow-xl shadow-gray-600 align-right'>
                            <button className='px-3 py-2 bg-[#146C94] text-white shrink-0 rounded-3xl font-medium'>Login</button>
                            <button className='px-3 py-2 bg-white text-[#000] shrink-0 rounded-r-3xl font-medium'>Signup</button>
                        </div>
                    </div> */}
                    <div className='invisible md:visible '>
                        <div className='flex items-center justify-center gap-2  px-2 '>
                            <div className='cursor-pointer px-5 py-2  rounded-3xl bg-[#146c94] translate-x-5 b_shadow'>Login</div>
                            <div className='bg-white text-black py-2 px-5 rounded-r-3xl text-right b_shadow'>Signup</div>
                        </div>
                    </div>
                </div>
                
            </nav>
        </div >
    );
}