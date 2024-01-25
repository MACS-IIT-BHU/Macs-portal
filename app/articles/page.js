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
            <div className={`top-slider h-[300px] w-[98%] md:w-[90%] md:h-[600px] flex items-center relative`} onMouseEnter={()=>setShowText(true)} onMouseLeave={()=>setShowText(false)}>
                <div className={`absolute text-left h-full w-full ${showText?'text-white custom-gradient':'text-transparent'} flex flex-col justify-center`} style={{transition:'linear 1s'}} >
                    <h2 className='text-lg font-bold px-3 w-1/2 md:text-6xl md:pt-4'>Some title or Whatever</h2>
                    <p className='text-xs font-light px-3 md:text-lg md:pt-4 w-1/2'>{article_holder[0].author}</p>
                    <p className='md:text-2xl px-3 md:font-light md:pt-4 w-4/12 overflow-hidden mb-2 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae tempus magna, id aliquam ligula. Sed ac sollicitudin mauris. Praesent vulputate accumsan nulla. Cras fermentum ornare tellus, sit amet accumsan leo posuere sed. Suspendisse ut felis at ante viverra eleifend.</p>
                </div>
                <img src="/home/image2.jpg" className='h-full w-full object-cover custom-gradient'/>

                {/* <img src={Image} className='h-full w-full object-cover'></img> */}
                {/* <Image src='/image2.jpg' width={} height={300}/> */}
            </div>
            {/* <div className="w-[100vw] h-[600px] bg-gradient-to-r to-cyan-300 from-cyan-600  text-6xl flex flex-wrap justify-center py-12 mt-6">
                <div className=''>

                    <div className='w-[60vw] m:w-[50vw] lg:w-[40vw]  h-[285px] bg-[#D9D9D9] rounded-xl'></div>
                    <br></br>
                    {article_holder2.map((article, pos) => (

                        <div className="w-[60vw] m:w-[50vw] lg:w-[40vw] h-[179px] font-['Murecho'] font-bold text-white text-[22px]" key = {pos}>{article.content.substr(0, 200) + "... "}</div>
                    ))
                    }
                </div>
                <div className='invisible lg:visible w-[60vw] lg:w-[40vw] bg-white  ml-9 h-[500px] items-center  rounded-xl'>
                    {article_holder3.map((article, pos) => (
                        <div className="flex ml-5 mt-12 w-[38vw] h-[160px] pt-3 rounded-xl bg-white drop-shadow-2xl" key = {pos}>
                            <div className="font-['Murecho'] text-[22px] ml-2  w-[354px] h-[131px]">
                                <h1 className='mb-2 mt-2 font-bold'>{article.heading}</h1>
                                <p className='text-[20px]'>{article.content.substr(0, 110) + "..."}</p>
                            </div>
                            <div className="bg-[#D9D9D9] w-[144px] h-[121px] rounded-xl mr-2"></div>
                        </div>
                    ))
                    }
                </div>
            </div> */}
            {/* <br></br> */}
            {/* <div className="font-['Murecho'] text-[22px] font-bold px-24">Sort By &#11167;</div> */}
            {/* <br></br><br></br> */}
            <div className="flex flex-wrap justify-center gap-16 mb-[100px] py-10">
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