'use client'
import React, { useState } from 'react'
import Carde from './Carde';
import data from '../../public/data_articles.json'
const Events = () => {
    const article_holder = data.filter((item) => item.id > 0);
    const article_holder2 = data.filter((item) => item.id == 1);
    const article_holder3 = data.filter((item) => item.id <= 2);
    const [jsonData, setJsonData] = useState(data);
    return (
        <div className='min-h-screen text-slate-950'>
            <br></br><br></br>
            <div className="w-[100vw] h-[600px] bg-gradient-to-r to-cyan-300 from-cyan-600  text-6xl flex flex-wrap justify-center py-12">
                <div className='w-[45vw] mr-9'>

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
            </div>
            <br></br>
            <div className="font-['Murecho'] text-[22px] font-bold px-24">Sort By &#11167;</div>
            <br></br><br></br>
            <div className="flex flex-wrap justify-center gap-16 mb-[100px] ">
                {article_holder.map((article, pos) => (
                    <div key = {pos}>
                    <Carde author={article.author} article={article.content.substr(0, 250) + "... " } />
                    </div>
                ))
                }
            </div>
        </div>
    )
}
export default Events