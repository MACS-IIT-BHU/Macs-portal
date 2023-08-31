'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/bundle';
import 'swiper/css/pagination'
import macsimage from "@/public/home/image2.jpg"
import React from 'react';

function page(){
    
    return(
        <> 
     <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      
    >
     
<div className='absolute top-20 left-10 border-2 w-[30px] text-center z-50 border-black rounded-lg cursor-pointer' onClick={()=>history.go(-1)} >←</div>
<SwiperSlide className='mt-[13vh] ml-[10vw] h-[80vh] w-[100vw] flex items-center' onClick={()=>history.back()}  ><div className='w-[100%] h-[80vh] flex items-center '><Image className='w-[80%] h-[40%] md:h-[80vh] rounded-lg border-2 mb-[20px]  border-black' src={macsimage} alt='image'  /></div></SwiperSlide>
<SwiperSlide className='mt-[13vh] h-[80vh] w-[100vw] flex items-center' ><div className='w-[100%] h-[80vh] flex items-center '><Image className='w-[80%]  h-[40%] md:h-[80vh] rounded-lg border-2 mb-[20px]  border-black' src={macsimage} alt='image' /></div></SwiperSlide>
<SwiperSlide className='mt-[13vh] h-[80vh] w-[100vw] flex items-center' ><div className='w-[100%] h-[80vh] flex items-center '><Image className='w-[80%]  h-[40%] md:h-[80vh] rounded-lg border-2 mb-[20px]  border-black' src={macsimage} alt='image' /></div></SwiperSlide>
<SwiperSlide className='mt-[13vh] h-[80vh] w-[100vw] flex items-center' ><div className='w-[100%] h-[80vh] flex items-center '><Image className='w-[80%]  h-[40%] md:h-[80vh] rounded-lg border-2 mb-[20px]  border-black' src={macsimage} alt='image' /></div></SwiperSlide>
<SwiperSlide className='mt-[13vh] h-[80vh] w-[100vw] flex items-center' ><div className='w-[100%] h-[80vh] flex items-center '><Image className='w-[80%]  h-[40%] md:h-[80vh] rounded-lg border-2 mb-[20px]  border-black' src={macsimage} alt='image' /></div></SwiperSlide>
<SwiperSlide className='mt-[13vh] h-[80vh] w-[100vw] flex items-center' ><div className='w-[100%] h-[80vh] flex items-center '><Image className='w-[80%]  h-[40%] md:h-[80vh] rounded-lg border-2 mb-[20px]  border-black' src={macsimage} alt='image' /></div></SwiperSlide>
<SwiperSlide className='mt-[13vh] h-[80vh] w-[100vw] flex items-center' ><div className='w-[100%] h-[80vh] flex items-center '><Image className='w-[80%]  h-[40%] md:h-[80vh] rounded-lg border-2 mb-[20px]  border-black' src={macsimage} alt='image' /></div></SwiperSlide>

</Swiper>


        </>
    )
}
export default page