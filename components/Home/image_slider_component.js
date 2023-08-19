'use client'
import React from "react";
import classes from './imageSlider.module.css';

import a1 from "@/public/home/a.jpg"
// this section contains all the refs to images to be displayes in alums sections
import i1 from "@/public/home/image1.jpg"
import i2 from "@/public/home/image2.jpg"
import i3 from "@/public/home/image3.webp"
//  import i4 from "@/public/home/i"              /*please put the correct image format with name*/
//  import i5 from "@/public/home/"
// this section contains all the refs to images to be displayes in alums sections
import Image from 'next/image'


// let image_url_container=[i2,i2,i2,i2,i2]
function ImageSlider() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const image_url_container = [i2, i2, i2,i2,i2];

  const handleScroll = (e) => {
    const scrollPosition = e.target.scrollLeft;
    const imageWidth = e.target.offsetWidth;
    const newIndex = Math.round(scrollPosition /( ( imageWidth)-( imageWidth*0.1)));
    setActiveIndex(newIndex);
  };

  const renderDots = () => {
    return image_url_container.map((_, index) => (
      <span
        key={index}
        className={`${classes.dot} ${activeIndex === index ? classes.active : ''}`}
        onClick={() => setActiveIndex(index)}
      ></span>
    ));
  };

  const image_container = image_url_container.map((item, pos) => {
    return (
      <section className={classes.scroll_item} key={pos}>
        <Image src={item} className={classes.macs_images} alt="img" />
      </section>
    );
  });

  return (
    <div className={classes.slider_container}>
      <div
        className={classes.scroll_container}
        onScroll={handleScroll}
        // Add other necessary properties for scrolling
      >
        {image_container}
      </div>
      <div className={classes.pagination}>{renderDots()}</div>
    </div>
  );
}


export {ImageSlider};