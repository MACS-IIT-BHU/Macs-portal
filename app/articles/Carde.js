/* eslint-disable @next/next/no-img-element */
// import './page.js'
// import Image from 'next/image'
// import macsimage from "@/public/home/image2.jpg"
import React,{useState} from "react";
import i2 from "../../public/home/image2.jpg"
function Carde(props) {
    const [hover, setHover] = useState(false);

    return (
        <div className={`cursor-pointer flex flex-col gap-3 w-[351px] hover:drop-shadow-sm hover:scale-105 hover:shadow-lg transition-all hover:rounded-md`} onClick={()=> props.whenClicked([props.author, props.article])}>
            <div className='flex justify-center items-center h-[191px] bg-[#D9D9D9] rounded-b-none rounded-t-md'></div>
            <div className="font-['Murecho'] text-[22px] mx-1">
            <p className='text-sm text-gray-500'>23.4.2022</p>
            <p className="font-bold ">whatever is the headline and in approx two lines</p>
            <p className='font-medium'>{props.article.slice(0,100)+"..."}</p>
            <p className='text-end text-sm text-gray-500'>{props.author}</p>
            </div>
        </div>
    )
}
export default Carde;