"use client";
import React, { useState } from "react";
import Image from "next/image";

function Carde({ blog, setshowpop, setblog, showpop }) {
  const [hover, setHover] = useState(false);

  function handleHoverEnter() {
    setHover(true);
  }

  function handleHoverLeave() {
    setHover(false);
  }

  function blogset() {
    console.log("Blog clicked:", blog);
    setblog(blog);  // Set the selected blog post
    setshowpop(true);  // Show the pop-up
  }

  return (
      <div>
        <div
            className="cursor-pointer flex flex-col gap-3 w-[351px] hover:drop-shadow-sm hover:scale-105 hover:shadow-lg transition-all hover:rounded-md"
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
        >
          <div className="flex justify-center items-center min-h-[50px] bg-[#D9D9D9] rounded-b-none rounded-t-md">
            <Image
                src="/home/image2.jpg"
                alt="article image"
                height={150}
                width={400}
                className="h-[200px] w-[300px]"
            />
          </div>
          <div className="font-['Murecho'] text-[22px] mx-1">
            <p className="text-sm text-gray-500">{blog.date}</p>
            <p className="font-bold cursor-pointer" onClick={blogset}>
              {blog.heading}
            </p>
            <p className="text-end text-sm text-gray-500">{blog.author}</p>
          </div>
        </div>

        {showpop && blog && (
            <div
                className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md transition-all duration-300"
                onClick={() => setshowpop(false)}
            >
              <div
                  className="bg-white p-6 w-[40%] max-h-[80vh] overflow-y-auto rounded-xl shadow-2xl transition-all duration-300 transform scale-100 relative"
                  onClick={(e) => e.stopPropagation()}
              >
                <button
                    className="absolute top-4 right-6 text-gray-600 hover:text-black text-xl"
                    onClick={() => setshowpop(false)}
                >
                  ✕
                </button>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">{blog.heading}</h2>
                <p className="text-sm text-gray-500 mb-2">
                  {blog.date} - {blog.author}
                </p>
                <Image
                    src="/home/image2.jpg"
                    alt="article image"
                    height={200}
                    width={400}
                    className="w-full h-auto rounded-lg mb-4"
                />
                <p className="text-md text-gray-800 leading-relaxed">{blog.content}</p>
              </div>
            </div>
        )}
      </div>
  );
}

export default Carde;
