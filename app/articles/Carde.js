/* eslint-disable @next/next/no-img-element */
// import './page.js'
// import Image from 'next/image'
// import macsimage from "@/public/home/image2.jpg"
import React,{useState} from "react";
import i2 from "../../public/home/image2.jpg"
function Carde(props) {
    const [hover, setHover] = useState(false);
    function handleHoverEnter() {
        setHover(true);
    }
    function handleHoverLeave() {
        setHover(false);
    }
    return (
        <div className={`flex flex-col gap-3 w-[351px] hover:drop-shadow-lg hover:scale-105 transition-all `} onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
            <div className='flex justify-center items-center h-[191px] bg-[#D9D9D9] rounded-md'></div>
            <div className="font-['Murecho'] text-[22px] ">
            <p className='text-sm text-gray-500'>23.4.2022</p>
            <p className="font-bold ">whatever is the headline and in approx two lines</p>
            <p className='font-medium'>{props.article}</p>
            <p className='text-end text-sm text-gray-500'>{props.author}</p>
            </div>
        </div>
    )
}
export default Carde;