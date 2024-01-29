"use client";
import React , {useState} from 'react';
import Image from 'next/image'
import prev from "@/public/home/prev.png"
import next from "@/public/home/next.png"
import { images1 } from './data1.js';
import  ImgSlider from "./imgslider.js";
import { Bitter, Monomaniac_One, Montserrat, Nanum_Brush_Script } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] });

function Page() {

    //declaring states
    const [show,setShow] = useState(false);
    const [idxx,setidxx] = useState(0);
    const [imgidx,setimgidx] = useState(0);

    //previous button
    const setprevIndex = (e)=>{
        setShow(true);
        e.stopPropagation();
        let a=imgidx;
        if(a==0) setimgidx(images1[idxx].length -1);
        else setimgidx(a-1);
    }

    //next button
    const setnextIndex = (e)=>{
        setShow(true);
        e.stopPropagation();
        let b = imgidx;
        if(b==images1[idxx].length -1) setimgidx(0);
        else setimgidx(b+1);
    }
    return (
        <>
            {!show &&
                <>
                    <div className={`w-[100vw] h-[250px] bg-gradient-to-r to-cyan-300 from-cyan-600 text-white text-center text-6xl flex justify-center items-center font-bold drop-shadow-5xl pt-[80px] pb- ${montserrat.className} `}>
                        Photo Gallery
                    </div>
                    <div className="flex justify-center py-[50px] bg-[#e8f1f5] bg-[url('https://www.transparenttextures.com/patterns/absurdity.png')] ">

                        <span className='w-[120px] h-[50px] bg-[#146C94] shadow-lg text-white flex items-center justify-center'>Sort By :</span>
                        <span className='w-[120px] h-[50px] text-black shadow-lg  flex items-center justify-center'>Date Added &nbsp;⇅</span>

                    </div>
                    <div className="flex items-center justify-center w-[100vw] pb-[100px] pt-[50px] bg-[#e8f1f5] bg-[url('https://www.transparenttextures.com/patterns/absurdity.png')] ">
                        <div className="flex flex-wrap gap-20 justify-center">
                            {images1.map((image , index)=>{
                                return(
                                    <ImgSlider image = {image} index = {index} key = {index} setShow = {setShow} setidxx = {setidxx} setimgidx = {setimgidx}/>
                                )
                            })}
                        </div>
                    </div>
                </>
            }
            {show &&

                <div onClick = {()=>{setShow(false)}}  className="flex items-center justify-center w-[100vw] h-[100vh] bg-[url('https://www.transparenttextures.com/patterns/absurdity.png')] bg-[#e8f1f5]">
                    <Image src={prev} onClick ={(e)=>{setprevIndex(e)}} alt="abc" className= "w-[4vh] h-[4vh] lg:w-[3vw] lg:h-[3vw] mt-[50px]" ></Image>
                    <Image src = {images1[idxx][imgidx].src} alt = "abc" onClick={(e)=>{setShow(true);e.stopPropagation()}} className="w-[80vw] h-[30vh] sm:h-[40vh] md:h-[50vh] xl:h-[80vh] mt-[50px] border-[10px] rounded-xl border-solid border-[#ffffff]"></Image>
                    <Image src={next} onClick = {(e)=>{setnextIndex(e)}} alt = "abc" className= "w-[4vh] h-[4vh] lg:w-[3vw] lg:h-[3vw] mt-[50px] " ></Image>
                    <span className="absolute top-[94vh] left-auto right-auto bg-[#146C94] text-white px-[3vw] lg:px-[2vw] py-[1vh] shadow-xl text-[1.5vh] lg:text-[1vw] cursor-pointer">Go back</span>
                </div>
            }
        </>
    )
}

export default Page