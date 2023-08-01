import Image from 'next/image'
import React from 'react'
import a from "@/public/home/a.jpg"


const Articles = () => {
    return (
        <div className="flex py-24 px-[10vw] min-h-screen">
            <div className="w-[30vw] flex flex-col gap-8">
                <div className="flex flex-col gap-4 items-center">
                    <h3>Articles</h3>
                    <p className="">
                        Dive into the fascinating world of mathematics with our comprehensive collection of articles, ranging from fundamental concepts to advanced theories, tailored to ignite your mathematical passion and deepen your understanding
                    </p>
                </div>

                <div className="flex flex-col items-start">
                    <div>Sort By:</div>
                    <div className="flex flex-col gap-3">
                        <span>Date</span>
                        <span>Most Viewed</span>
                        <span>abc</span>
                    </div>
                </div>

            </div>
            <div className="w-[50vw] flex flex-wrap gap-x-6 gap-y-8 items-center justify-around">
                <div className="min-w-[300px] max-w-[400px] h-[400px] bg-[#D9D9D9] shadow-xl"></div>
                <div className="min-w-[300px] max-w-[4000px] h-[400px] bg-[#D9D9D9] shadow-xl"></div>
                <div className="min-w-[300px] max-w-[400px] h-[400px] bg-[#D9D9D9] shadow-xl"></div>
                <div className="min-w-[300px] max-w-[4000px] h-[400px] bg-[#D9D9D9] shadow-xl"></div>
            </div>
        </div>
    )
}

export default Articles