"use client";
import React, { useState } from "react";
import Carde from "./Carde";
import data from "../../public/data_articles.json";
import Image from "next/image";

const Events = () => {
    const [search, setSearch] = useState("");
    const [showpop, setShowpop] = useState(false);
    const [blog, setBlog] = useState(null);

    return (
        <div className="min-h-screen text-slate-950 flex flex-col items-center w-full bg-[#e8f1f5] bg-[url('https://www.transparenttextures.com/patterns/absurdity.png')] py-10">

            {/* Search Bar */}
            <div className="mt-[70px] w-full flex justify-center mb-6">
                <input
                    placeholder="Search Articles..."
                    className="py-3 px-4 rounded-md border border-gray-300 outline-none lg:w-[40vw] w-[60vw] shadow-sm focus:ring-2 focus:ring-blue-500 transition-all"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Article Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
                {data
                    .filter((article) =>
                        article.heading.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((article, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                        >
                            <Carde blog={article} setshowpop={setShowpop} setblog={setBlog} />
                        </div>
                    ))}
            </div>


            {/* Modal Pop-up */}
            {showpop && blog && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-300"
                    onClick={() => setShowpop(false)}
                >
                    <div
                        className="bg-white w-[90%] md:w-[50%] max-h-[80vh] overflow-y-auto rounded-lg shadow-lg p-6 relative animate-fade-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-3 right-5 text-gray-600 hover:text-black text-2xl"
                            onClick={() => setShowpop(false)}
                        >
                            ✕
                        </button>

                        {/* Blog Content */}
                        <Image src="/home/image2.jpg" alt="Blog Image" height={200} width={400} className="w-full h-auto rounded-lg mb-4" />
                        <h2 className="text-2xl font-bold mb-2 text-gray-900">{blog.heading}</h2>
                        <p className="text-sm text-gray-500 mb-4">{blog.date} - {blog.author}</p>
                        <p className="text-md text-gray-800 leading-relaxed">{blog.content}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Events;
