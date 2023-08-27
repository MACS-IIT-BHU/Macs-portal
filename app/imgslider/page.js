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
     

<SwiperSlide className='w-[100vw] h-[90vh]  mt-[13vh] ml-[10vw]  flex items-center justify-center'><Image className='w-[80%] h-[80vh]' src={macsimage} alt='image'/></SwiperSlide>
<SwiperSlide className='w-[100vw] h-[90vh]  mt-[13vh] flex items-center justify-center'><Image className='w-[80%] h-[80vh]' src={macsimage} alt='image'/></SwiperSlide>
<SwiperSlide className='w-[100vw] h-[90vh]  mt-[13vh] flex items-center justify-center'><Image className='w-[80%] h-[80vh]' src={macsimage} alt='image'/></SwiperSlide>
<SwiperSlide className='w-[100vw] h-[90vh]  mt-[13vh] flex items-center justify-center'><Image className='w-[80%] h-[80vh]' src={macsimage} alt='image'/></SwiperSlide>
<SwiperSlide className='w-[100vw] h-[90vh]  mt-[13vh] flex items-center justify-center'><Image className='w-[80%] h-[80vh]' src={macsimage} alt='image'/></SwiperSlide>
<SwiperSlide className='w-[100vw] h-[90vh]  mt-[13vh] flex items-center justify-center'><Image className='w-[80%] h-[80vh]' src={macsimage} alt='image'/></SwiperSlide>
<SwiperSlide className='w-[100vw] h-[90vh]  mt-[13vh] flex items-center justify-center'><Image className='w-[80%] h-[80vh]' src={macsimage} alt='image'/></SwiperSlide>
 
      ...
    </Swiper>


        </>
    )
}
export default page