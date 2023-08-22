"use client";
import Image from "next/image";
import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useState } from "react";

function Member({ name, position, image }) {
  const [social, SetSocial] = useState(false);

  return (
    <div
      className={`relative flex w-[500px] items-center gap-5 justify-around px-10 py-5 md:px-10 md:py-8  shadow-md rounded-md member_background  md:bg-white md:hover:bg-gradient-to-r  md:hover:from-[#009DD6] md:hover:to-[#00CBD6] `}
      onMouseEnter={() => {
        SetSocial(true);
      }}
      onMouseLeave={() => {
        SetSocial(false);
      }}
    >
      <div
        className={`absolute  px-2 py-2 bg-blue-900/30 rounded-b-lg top-0 left-[50%] visible ${
          !social ? "md:invisible" : ""
        }`}
      >
        <div className="w-full h-full flex gap-4">
          <AiOutlineFacebook size={30} />
          <AiOutlineTwitter size={30} />
          <AiOutlineGithub size={30} />
          <AiOutlineLinkedin size={30} />
        </div>
      </div>
      <div className="flex relative  items-center p-2 w-[152x] h-[152px] b_shadow py-5 gap-10 rounded-tl-[50px] rounded-tr-[80px] rounded-br-[50px] rounded-bl-[80px] bg-white">
        <div
          className=" h-[139px] w-[139px]   rounded-tl-[43px] rounded-tr-[75px] rounded-br-[43px] rounded-bl-[75px] shadow-md  overflow-hidden grid place-items-center 
          before:w-[139px] before:h-[139px] 
          before:z-10 before:absolute before:content-['']  
          before:rounded-tl-[43px] before:rounded-br-[43px] before:rounded-bl-[75px] before:rounded-tr-[75px] 
          before:bg-blend-overlay before:bg-[#146C94]/40"
        >
          <Image
            src={image}
            alt="not found"
            className="h-[200px] w-[200px] -translate-y-5"
          />
        </div>
      </div>
      <div className="flex flex-col text-xl ">
        <span className="text-[24px] md:text-2xl text-center">{name}</span>
        <span className="text-md md:text-xl text-center text-gray-500">{position}</span>
      </div>
    </div>
  );
}

export default Member;
