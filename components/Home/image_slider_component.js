'use client'
import React from "react";
import classes from './imageSlider.module.css';

import a1 from "@/public/home/a.jpg"
// this section contains all the refs to images to be displayes in alums sections
import img1 from "@/public/home/image1.jpg"
import img2 from "@/public/home/image2.webp"
import img3 from "@/public/home/image3.webp"
// this section contains all the refs to images to be displayes in alums sections
import Image from 'next/image'


let image_url_container=[img1,img2,img3]
function ImageSlider() {
   let image_container=image_url_container.map((item,pos)=>{
    return(
      <section class={classes.scroll_item} ><Image
      src={item}
      className={classes.macs_images}
    /></section>
    )
   })
  
    return (
      <div className={classes.scroll_container}>
       {image_container}
      </div>
    );
  }
export {ImageSlider};