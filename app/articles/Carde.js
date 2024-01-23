/* eslint-disable @next/next/no-img-element */
import './page.js'
import Image from 'next/image'
function Carde(props) {
    return (
        <div className='mb-12 bg-blue-500/60 flex flex-col gap-3 rounded-xl drop-shadow-2xl'>
            <div className='flex justify-center items-center h-[191px] w-[351px] bg-[#D9D9D9] rounded-xl'></div>
            <div className="w-[301px] h-[394px] px-3 font-['Murecho'] text-[22px] ">
            <p className="font-bold ">{props.author}</p><br></br>
            <p className='font-medium'>{props.article}</p>
            </div>
        </div>
    )
}
export default Carde;