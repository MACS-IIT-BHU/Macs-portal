"use client";
import React from 'react';
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import macsimage from "@/public/home/image2.jpg"
import { Bitter, Monomaniac_One, Montserrat, Nanum_Brush_Script } from 'next/font/google';
import Link from 'next/link';
import Navbar from '@/components/Navbar'

import Card from './Card';
const montserrat = Montserrat({ subsets: ['latin'] })

function page() {
    return (
       <>
       <div className={`w-[100vw] h-[200px] bg-gradient-to-r to-cyan-300 from-cyan-600 text-white text-center text-6xl flex justify-center items-center font-bold drop-shadow-5xl pt-[100px] ${montserrat.className}`}>
      Photo Gallery
    </div>
    <div className='flex justify-center my-[50px] '>
      
      <span className='w-[120px] h-[50px] bg-[#146C94] shadow-lg text-white flex items-center justify-center'>Sort By :</span>
      <span className='w-[120px] h-[50px] text-black shadow-lg  flex items-center justify-center'>Date Added &nbsp;⇅</span>
      
      
    </div>
    <div>
      <div className='flex flex-wrap justify-center gap-16 mb-[100px] '>
        <Link href="/imgslider"><Card src={macsimage} alt='img'/></Link>
        <Link href="/imgslider"><Card src={macsimage} alt='img'/></Link>
        <Link href="/imgslider"><Card src={macsimage} alt='img'/></Link>
        <Link href="/imgslider"><Card src={macsimage} alt='img'/></Link>
        <Link href="/imgslider"><Card src={macsimage} alt='img'/></Link>
        <Link href="/imgslider"><Card src={macsimage} alt='img'/></Link>
        <Link href="/imgslider"><Card src={macsimage} alt='img'/></Link>
        <Link href="/imgslider"><Card src={macsimage} alt='img'/></Link>

      </div>
    </div>
    
       </>
    )
}

export default page