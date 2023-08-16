'use client'
import React from 'react'
import classes from './imageSlider.module.css';
import img1 from "@/public/home/image1.jpg"
import Image from 'next/image'
import {ImageSlider} from './image_slider_component';
const Alums = () => {
   return (
        <div className={classes.imagerScroller}>
           <h1 className={classes.ouralums}></h1>
           {/* <ImageSlider></ImageSlider> */}
          <ImageSlider></ImageSlider>
        </div>
    )
}

export default Alums