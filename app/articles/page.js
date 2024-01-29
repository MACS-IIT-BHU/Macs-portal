'use client'
import React, { useState } from 'react'
import Carde from './Carde';
import data from '../../public/data_articles.json'
// import image2 from '@/public/home/image2.jpg';
// import Image from 'next/image'

const Events = () => {
    const article_holder = data.filter((item) => item.id > 0);
    const article_holder2 = data.filter((item) => item.id == 1);
    const article_holder3 = data.filter((item) => item.id <= 2);
    const [jsonData, setJsonData] = useState(data);
    const [showText, setShowText] = useState(false);
    return (
        <div className='min-h-screen text-slate-950 pt-4 relative top-20 flex flex-col justify-center items-center w-full'>
            <div className={`top-slider  sm:h-[300px] sm:w-[98%] md:w-[90%] md:h-[600px] flex items-center relative`} onMouseEnter={()=>setShowText(true)} onMouseLeave={()=>setShowText(false)}>
                <div className={`absolute text-left h-full w-full ${showText?'text-white custom-gradient':'text-transparent'} flex flex-col justify-center`} style={{transition:'normal 0.7s'}} >
                    <h2 className='text-lg font-bold px-3 w-1/2 md:text-6xl md:pt-4'>Some title or Whatever</h2>
                    <p className='text-xs font-light px-3 md:text-lg md:pt-4 w-1/2'>{article_holder[0].author}</p>
                    <p className='md:text-2xl px-3 md:font-light md:pt-4 w-4/12 overflow-hidden mb-2 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae tempus magna, id aliquam ligula. Sed ac sollicitudin mauris. Praesent vulputate accumsan nulla. Cras fermentum ornare tellus, sit amet accumsan leo posuere sed. Suspendisse ut felis at ante viverra eleifend.</p>
                </div>
                <img src="/home/image2.jpg" className='h-full w-full object-cover custom-gradient'/>
            </div>

            <div className='search-area flex justify-start items-center md:justify-start pt-6 w-[90%]'>
                <input placeholder='Search Articles' className='rounded-xl sm:px-3 sm:py-1 border-2 outline-none'></input>
                {/* <div className='border-2 rounded-r-xl bg-slate-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="33" viewBox="0 0 50 50">
                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                    </svg>
                </div> */}

            </div>            
            <div className="flex flex-wrap justify-center gap-16 mb-[100px] py-10 px-5 md:w-[90%]">
                {article_holder.map((article, pos) => (
                    <div key = {pos}>
                    <Carde author={article.author} article={article.content.substr(0,100) + "... " } />
                    </div>
                ))
                }
            </div>
        </div>
    )
}
export default Events