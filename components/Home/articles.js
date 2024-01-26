'use client';
import { getDisplayName } from 'next/dist/shared/lib/utils';
import React, { Fragment } from 'react'
import data from '../../public/data_articles.json'
import { useState } from 'react';
import { salsa } from '@/helpers/font';
import Link from 'next/link';
import { FaArrowCircleRight } from "react-icons/fa";
//import a from "@/public/home/a.jpg"
// import Readmore from "./readmore.js"//border-solid border-2 border-indigo-600

const Articles = () => {
    const article_holder = data.filter((item) => item.id < 4);
    const [jsonData, setJsonData] = useState(data);

    return (
        < Fragment >
            <div className={`${salsa.className} font-['Montserrat'] flex py-24 px-[10vw] min-h-screen md:divide-x divide-gray-400 lg:divide-x xl:divide-x 2xl:divide-x flex-col xl:flex-row 2xl:flex-row lg:flex-row md:flex-row sm:flex-col content-center`}>
                <div className="lg:w-[30vw] md:w-[30vw] sm:w-[80%] flex flex-col pr-4 gap-8 mr-10 ">
                    <div className="flex flex-col gap-6 items-center">
                        <h3 className="text-[#146C94] font-medium text-3xl ">Articles</h3>
                        <p className="font-medium text-lg tracking-wide text-justify">
                            Dive into the fascinating world of mathematics with our comprehensive collection of articles, ranging from fundamental concepts to advanced theories, tailored to ignite your mathematical passion and deepen your understanding
                        </p>
                    </div>
                </div>

                <div className=" mt-10 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 lg:w-[50vw] md:w-[50vw] sm:w-[80%] flex flex-wrap pl-4 gap-x-6 gap-y-16 items-center justify-around ">
                    {article_holder.map((article, pos) => (
                        <div className="p-4 bg-slate-700 rounded-md" key={pos}>
                            <div className=' flex flex-col gap-3 p-4'>
                                <div className='text-[#146C94] text-2xl'>{article.heading}</div>
                                <div className='text-[#146C94] text-sm'>{article.date}</div>
                            </div>
                            <div className='text-white p-4'>
                                {article.content.substr(0, 150) + "... "}<a className='text-[#146C94] hover:underline hover:text-blue-600' href="/articles" >Read More</a>
                            </div>

                            <div className=' text-white text-xl p-4'>{article.author}
                            </div>
                        </div>
                    ))
                    }

                    <div className=" text-center md:min-w-[3vw] min-w-[45vw] p-1 px-2 font-semibold bg-[rgb(255,255,255)] cursor-pointer rounded-lg " >
                        <Link className='text-cyan-600 flex justify-evenly items-center' href={`/articles`} >Click here for Articles <FaArrowCircleRight className='text-cyan-600 md:ml-3 scale-190 rounded-full '/></Link>
{/* 
                        <div>
                            <a href="/articles"> <button className='text-[#146C94] hover:underline pt-2 pb-2  w-[200px] h-[auto]  ' id='abcdef'>Click here for Articles &nbsp;</button>
                                <button type="button" className="text-white bg-[#146C94] focus:ring-2 font-black rounded-full px-2 text-center mr-0 mb-0">&gt;</button></a>
                        </div> */}
                    </div>
                </div>

            </div>
        </Fragment >
    )
}

export default Articles
