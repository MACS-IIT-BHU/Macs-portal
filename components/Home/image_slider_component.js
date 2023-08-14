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
import  { useState,useEffect } from 'react';

let image_url_container=[img1,img2,img3]
function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? image_url_container.length - 1 : prevIndex - 1
      );
    };
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === image_url_container.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    useEffect(() => {
      const interval = setInterval(goToNext, 3000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className={classes.image_holder}>
        <Image
          src={image_url_container[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={classes.slider_container}
        />
        <div className={classes.slider_controls}>
          <div><button onClick={goToPrevious} className={`${classes.slider_btns} ${classes.btn1}`}>
          &lt;
          </button></div>
         <div> <button onClick={goToNext} className={`${classes.slider_btns} ${classes.btn2}`}>
         &gt;
          </button></div>
        </div>
      </div>
    );
  }
export {ImageSlider};