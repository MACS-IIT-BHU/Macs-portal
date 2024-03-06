/* eslint-disable @next/next/no-img-element */
// import './page.js'
// import Image from 'next/image'
// import macsimage from "@/public/home/image2.jpg"
import React, { useState } from "react";
import i2 from "../../public/home/image2.jpg";
import Image from "next/image";
import Link from "next/link";
function Carde({ blog }) {
  const [hover, setHover] = useState(false);
  function handleHoverEnter() {
    setHover(true);
  }
  function handleHoverLeave() {
    setHover(false);
  }
  return (
    <Link
      href={`/articles/${blog._id}`}
      className={`cursor-pointer flex flex-col gap-3 w-[351px] hover:drop-shadow-sm hover:scale-105 hover:shadow-lg transition-all hover:rounded-md`}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <div className="flex justify-center items-center min-h-[191px] bg-[#D9D9D9] rounded-b-none rounded-t-md">
        <Image src={blog.img} alt="image" height={150} width={400}></Image>
      </div>
      <div className="font-['Murecho'] text-[22px] mx-1">
        <p className="text-sm text-gray-500">23.4.2022</p>
        <p className="font-bold ">{blog.title}</p>
        <p className="font-medium">{blog.article}</p>
        <p className="text-end text-sm text-gray-500">{blog.author}</p>
      </div>
    </Link>
  );
}
export default Carde;
