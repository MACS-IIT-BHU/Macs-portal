'use client';
import React, { Fragment } from 'react'

//import a from "@/public/home/a.jpg"
// import Readmore from "./readmore.js"//border-solid border-2 border-indigo-600

const arr = <button type="button" className="text-white bg-[#ffa500] focus:ring-2 font-black rounded-full px-2 text-center mr-0 mb-0">&gt;</button>
const Articles = () => {
    function read() {
        var abcd = document.getElementById("abc");
        abcd.className = "w-[80%]  h-[292px] bg-[#D9D9D9] shadow-xl show"
        var readm = document.getElementById("abcdef");
        readm.innerHTML = "Click here for Events"

    }

    return (
        <Fragment>
            <div className="flex py-24 px-[10vw] min-h-screen md:divide-x divide-gray-400 lg:divide-x xl:divide-x 2xl:divide-x flex-col xl:flex-row 2xl:flex-row lg:flex-row md:flex-row sm:flex-col content-center">
                <div className="lg:w-[30vw] md:w-[30vw] sm:w-[80%] flex flex-col pr-4 gap-8 mr-10 ">
                    <div className="flex flex-col gap-6 items-center">
                        <h3 className="font-medium text-3xl ">Articles</h3>
                        <p className="font-medium text-lg tracking-wide text-justify">
                            Dive into the fascinating world of mathematics with our comprehensive collection of articles, ranging from fundamental concepts to advanced theories, tailored to ignite your mathematical passion and deepen your understanding
                        </p>
                    </div>
                </div>

                <div className=" mt-10 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 lg:w-[50vw] md:w-[50vw] sm:w-[80%] flex flex-wrap pl-4 gap-x-6 gap-y-16 items-center justify-around ">
                    <div className="w-[80%]  h-[292px] bg-[#D9D9D9] shadow-xl ">
                        <div className='w-[100%]  h-[220px] bg-[#D9D9D9]'></div>
                        <div className=' flex flex-row w-[100%]  h-[72px] bg-[#ffffff]'>
                            <div className=' w-[50%] pt-[5%] pb-[5%]'> Title of Article</div>

                            <div className='text-right pt-[5%] pb-[5%] w-[50%] text-slate-400 text-sm'>13:48pm 12 August,2023</div>

                        </div>
                        <div className=' text-slate-400 text-sm pl-2 pt-2 pb-3'>Author</div>
                    </div>
                    <div className="w-[80%]  h-[292px] bg-[#D9D9D9] shadow-xl">
                        <div className='w-[100%]  h-[220px] bg-[#D9D9D9]'></div>
                        <div className=' flex flex-row w-[100%]  h-[72px] bg-[#ffffff]'>
                            <div className=' w-[50%] pt-[5%] pb-[5%]'> Title of Article</div>

                            <div className='text-right pt-[5%] pb-[5%] w-[50%] text-slate-400 text-sm'>13:48pm 12 August,2023</div>

                        </div>
                        <div className=' text-slate-400 text-sm pl-2 pt-2 pb-3'>Author</div>
                    </div>
                    <div className="w-[80%]  h-[292px] bg-[#D9D9D9] shadow-xl">
                        <div className='w-[100%]  h-[220px] bg-[#D9D9D9]'></div>
                        <div className=' flex flex-row w-[100%]  h-[72px] bg-[#ffffff]'>
                            <div className=' w-[50%] pt-[5%] pb-[5%]'> Title of Article</div>

                            <div className='text-right pt-[5%] pb-[5%] w-[50%] text-slate-400 text-sm'>13:48pm 12 August,2023</div>

                        </div>
                        <div className=' text-slate-400 text-sm pl-2 pt-2 pb-3'>Author</div>
                    </div>
                    <div className="w-[80%]  h-[292px] bg-[#D9D9D9] hidden shadow-xl show" id='abc'>
                        <div className='w-[100%]  h-[220px] bg-[#D9D9D9]'></div>
                        <div className=' flex flex-row w-[100%]  h-[72px] bg-[#ffffff]'>
                            <div className=' w-[50%] pt-[5%] pb-[5%]'> Title of Article</div>

                            <div className='text-right pt-[5%] pb-[5%] w-[50%] text-slate-400 text-sm'>13:48pm 12 August,2023</div>

                        </div>
                        <div className=' text-slate-400 text-sm pl-2 pt-2 pb-3'>Author</div>
                    </div>

                    <div className=" text-center bg-[rgb(255,255,255)] cursor-pointer rounded-lg " >

                        <div>
                            <button onClick={read} className='pt-2 pb-2  w-[150px] h-[auto]  ' id='abcdef'>Read More &nbsp;
                                <button type="button" className="text-white bg-[#ffa500] focus:ring-2 font-black rounded-full px-2 text-center mr-0 mb-0">&gt;</button>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </Fragment>
    )
}

export default Articles
