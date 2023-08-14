'use client'
import React from 'react'
import classes from './imageSlider.module.css';
import {ImageSlider} from './image_slider_component';
const Alums = () => {
   return (
        <div className="min-h-screen navbar-hero w-full">
           <h4 className={classes.ouralums}>Our Alums</h4>
           <div className={classes.imageContainer}>
            <ImageSlider></ImageSlider>
           </div>
        </div>
    )
}

export default Alums