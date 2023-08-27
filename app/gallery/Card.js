/* eslint-disable @next/next/no-img-element */
import './page.js'
import Image from 'next/image'
function Card(props){
    return(
        <div>
          <div className='flex justify-center items-center h-[200px] w-[300px] bg-white shadow-xl rounded-lg'>
          <Image className='h-[90%] w-[100%]' src={props.src} alt={props.alt}/>
          </div>
        
        <h4 className=' text-black pt-[20px]' >Graduating Batch Of 2020</h4>
        <p className=' text-gray-500'>12 May 2023</p>
        </div>
    )
}
export default Card;