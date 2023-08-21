"use client";
import Link from 'next/link';
import smalllogo from "@/public/home/logo.png";
import Image from "next/image"
import { useState } from 'react';


export default function Home() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <nav className="w-full navbar-hero py-4">
                <div className="justify-between mx-4 px-4 md:items-center md:flex">
                    <div className='md:hidden'>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <div>
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>

                            <div className='sm:visible md:invisible'>
                                <button className='px-3 py-2 bg-[#ffc300] shadow-lg text-[#08031b] shrink-0 rounded-xl font-medium'>Login/Signup</button>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className={`pb-3 mt-8 md:block md:pb-0 md:mt-0 md:px-0 ${navbar ? 'block' : 'hidden'
                            }`}>
                            <ul className="font-medium flex flex-col p-4 md:p-2 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:space-y-0 space-y-4">
                                <li>
                                    <Link href="/" className='font-medium hover:text-[#ffc300] my-8'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/events" className='font-medium hover:text-[#ffc300]'>
                                        Events
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/announcements" className='font-medium hover:text-[#ffc300] my-8'>
                                        Articles
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/teams" className='font-medium hover:text-[#ffc300] my-8'>
                                        Team
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <center>
                        <div className="invisible md:visible">
                            <Image src={smalllogo} width={120} alt="abc" />
                        </div>
                    </center>
                    <div className="invisible md:visible">
                        <button className='px-3 py-2 bg-[#ffc300] shadow-lg text-[#08031b] shrink-0  rounded-xl font-medium'>Login/Signup</button>
                    </div>
                </div>
            </nav >
        </div >
    );
}