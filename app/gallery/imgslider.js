"use client"
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import prev from "@/public/home/prev.png"
import next from "@/public/home/next.png"
const ImgSlider = ({image,index , setShow , setidxx,setimgidx}) => {
    const [idx,setidx] = useState(0);
    const setpreImage = (e)=>{
        e.stopPropagation();
        let a = idx;
        if(a==0)setidx(image.length-1);
        else setidx(a-1);
    }
    const setnextImage = (e)=>{
        e.stopPropagation();
        let b = idx;
        if(b==image.length-1)setidx(0);
        else setidx(b+1);
    }
    const show = (e)=>{
        e.stopPropagation();
        setShow(true);
        setidxx(index);
        setimgidx(idx);
    }
    return (
        <div className='flex items-center'>
            <Image src={prev}  onClick = {setpreImage} width= {30}  height={30} alt = "abc"></Image>
            <div>
                <div className= "bg-white shadow-xl rounded-lg transform transition duration-450 hover:scale-110">
                    <Image src = {image[idx].src} alt = "abc" onClick = {show} className="w-[300px] h-[220px] pl-[7px] pr-[7px] pt-[7px] cursor-pointer"></Image>
                    <h4 className=' text-black pt-[20px] pb-[20px] pl-[7px]' >{image[idx].title}</h4>
                </div>
                <h4 className= "pt-[10px] pl-[10px] text-gray-600">{image[idx].date}</h4>
            </div>
            <Image src={next} onClick = {setnextImage} width={30}  height={30}  alt = "abc"></Image>
        </div>
    );
};

export default ImgSlider;
