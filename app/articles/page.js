"use client";
import React, { useEffect, useState } from "react";
import Carde from "./Carde";
import data from "../../public/data_articles.json";
import axios from "axios";
import Image from "next/image";
// import image2 from '@/public/home/image2.jpg';
// import Image from 'next/image'

const Events = () => {
  const article_holder = data.filter((item) => item.id > 0);
  const article_holder2 = data.filter((item) => item.id == 1);
  const article_holder3 = data.filter((item) => item.id <= 2);
  const [jsonData, setJsonData] = useState(data);
  const [showText, setShowText] = useState(false);
  const [search,setSearch] = useState('');
  const [showpop,setShowpop] = useState(false);
  const [allBlogs, setAllBlogs] = useState(null);
  const [blog,setblog] = useState(null);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get("/api/blog");
        console.log(res.data.blogs);
        setAllBlogs(res.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    getBlogs();
  }, []);

  return (
    <div className="min-h-screen text-slate-950 absolute flex flex-col rounded-3xl justify-center items-center w-full bg-[#e8f1f5] bg-[url('https://www.transparenttextures.com/patterns/absurdity.png')]" >
      <div
        className={`top-slider h-[300px] md:h-[600px] w-[100vw] flex justify-center relative mt-[100px]`}
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
      >
        <div
          className={`absolute text-left h-full w-[90%] ${
            showText ? "text-white custom-gradient" : "text-transparent"
          } flex flex-col justify-center`}
          style={{ transition: "normal 0.7s rounded-3xl" }}
        >
          <h2 className="text-lg font-bold px-3 w-1/2 md:text-6xl md:pt-4">
            Numerator vs Denominator
          </h2>
          <p className="text-xs font-light px-3 md:text-lg md:pt-4 w-1/2 text-gray-400">
            {article_holder[0].author}
          </p>
          <p className="md:text-xl px-3 md:font-light md:pt-4 w-4/12 overflow-hidden mb-2 mt-1 md:block hidden">
            We recently hosted Numerator vs Denominator, a thrilling mathematical showdown at our department.
            The event featured rounds of puzzles, integration challenges, team buzzer quizzes, and an ultimate showdown.
            With prizes worth INR 7k on the line, participants showcased their problem-solving skills and teamwork.
            The competition concluded with champions celebrating their victory, highlighting the vibrant mathematics
            community at IIT BHU and our commitment to fostering learning and competition.
          </p>
        </div>
        <img
          src="/home/numvsden3.jpg"
          className="h-full w-[90%] object-cover custom-gradient rounded-3xl"
        />
      </div>

      <div className="search-area mt-[70px] flex justify-center mb-[30px] rounded-2xl">
        <input
          placeholder="Search Articles"
          className=" py-[10px] px-[10px] rounded-sm outline-none lg:w-[40vw] w-[60vw]"
          onChange={(e)=>{
            setSearch(e.target.value);
          }}
        ></input>
        {/* <div className='border-2 rounded-r-xl bg-slate-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="33" viewBox="0 0 50 50">
                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                    </svg>
                </div> */}
      </div>

      <div className="flex flex-wrap justify-center gap-16 mb-[100px] py-10 px-5 md:w-[90%]" >
        {allBlogs &&
          allBlogs.map((blog, index) => {
            let title = blog?.title || " ";
            if (title.toLowerCase().search(search.toLowerCase()) != -1 ) {
              return (
                  <div key={index}>
                    <Carde blog={blog} setshowpop = {setShowpop} setblog = {setblog}/>
                  </div>
              )
            }
          })}
      </div>
      {showpop &&
          <div className="fixed top-0 w-[100vw] h-[100vh] flex justify-center items-center bg-gray-800" onClick={()=>{setShowpop(false)}}>
            <div className="h-[70%] w-[80%] bg-white overflow-y-scroll flex items-center flex-col py-[20px]" onClick={(e)=>{setShowpop(true);e.stopPropagation()}}>
              <Image src={blog.img} alt="image" height={150} width={400} ></Image>
              <div className="mt-[20px] text-2xl font-bold">{blog.title}</div>
              <div dangerouslySetInnerHTML={{__html: blog.blogContent}} className="text-md text-gray-800 mt-[20px] px-[20px]"></div>
            </div>
          </div>
      }
    </div>
  );
};
export default Events;