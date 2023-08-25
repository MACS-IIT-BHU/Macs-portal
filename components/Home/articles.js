'use client';
import { getDisplayName } from 'next/dist/shared/lib/utils';
import React, { Fragment } from 'react'
import data from '../../public/data_articles.json'
import { useState } from 'react';

//import a from "@/public/home/a.jpg"
// import Readmore from "./readmore.js"//border-solid border-2 border-indigo-600

const Articles = () => {
    const article_holder=data.filter((item)=>item.id<4);
    // function read() {

    //     console.log("events");
    // }
    const [jsonData, setJsonData] = useState(data);

    return (
        < Fragment >
        <div className="font-['Montserrat'] flex py-24 px-[10vw] min-h-screen md:divide-x divide-gray-400 lg:divide-x xl:divide-x 2xl:divide-x flex-col xl:flex-row 2xl:flex-row lg:flex-row md:flex-row sm:flex-col content-center">
            <div className="lg:w-[30vw] md:w-[30vw] sm:w-[80%] flex flex-col pr-4 gap-8 mr-10 ">
                <div className="flex flex-col gap-6 items-center">
                    <h3 className="text-[#146C94] font-medium text-3xl ">Articles</h3>
                    <p className="font-medium text-lg tracking-wide text-justify">
                        Dive into the fascinating world of mathematics with our comprehensive collection of articles, ranging from fundamental concepts to advanced theories, tailored to ignite your mathematical passion and deepen your understanding
                    </p>
                </div>
            </div>

            <div className=" mt-10 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 lg:w-[50vw] md:w-[50vw] sm:w-[80%] flex flex-wrap pl-4 gap-x-6 gap-y-16 items-center justify-around ">
                {article_holder.map((article,pos) =>(
                        <div className="w-[80%]  h-[214px] bg-[#D9D9D9] shadow-xl " key={pos}>
                        <div className='w-[100%] pt-[3%] px-[3%] h-[154px] bg-[#F1F1F1]'>
                            {  article.content.substr(0,231) + "... " }<a className='text-[#146C94] hover:underline hover:text-blue-600' href="/articles" >Read More</a></div>
                        
                        <div className=' flex flex-row w-[100%]  h-[60px] bg-[#ffffff]'>
                            <div className='text-[#146C94] w-[70%] pt-[3%] pl-[3%] pb-[3%]'>{article.heading}</div>
    
                            <div className='text-[#146C94] text-right pt-[6%] pb-[3%] pr-4 w-[30%] text-sm'>{article.date}</div>
    
                        </div>
                        <div className=' text-[#525FE1] text-sm pl-2 pt-2 pb-3'>{article.author}</div>
                    </div>
                ))
                }

                <div className=" text-center bg-[rgb(255,255,255)] cursor-pointer rounded-lg " >

                    <div>
                       <a href="/articles"> <button className='text-[#146C94] hover:underline pt-2 pb-2  w-[200px] h-[auto]  ' id='abcdef'>Click here for Articles &nbsp;</button>
                        <button type="button" className="text-white bg-[#146C94] focus:ring-2 font-black rounded-full px-2 text-center mr-0 mb-0">&gt;</button></a>
                    </div>
                </div>
            </div>

        </div>
        </Fragment >
    )
}

export default Articles
