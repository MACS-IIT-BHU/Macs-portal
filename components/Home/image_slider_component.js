'use client'
import React,{useState,useEffect,useRef} from "react";
import classes from './imageSlider.module.css';
import Image from 'next/image'

// this section contains all the refs to images to be displayes in alums sections
import i1 from "@/public/home/lockart1.jpg"
import i2 from "@/public/home/numvsden3.jpg"
import i3 from "@/public/home/orient2.jpg"
import i4 from "@/public/home/sports1.jpg"
import i5 from "@/public/home/numvsden4.jpg"
// this section contains all the refs to images to be displayes in alums sections


//let image_url_container=[i2,i2,i2,i2,i2]
function ImageSlider() {
  let scrollContainerRef=useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const image_url_container = [i1, i2, i3,i4,i5];

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

  useEffect(() => {
    // Set up a timer to scroll automatically every 3 seconds (adjust as needed)
    const scrollInterval = setInterval(() => {
      // Assuming `scrollContainerRef` is a reference to the element you're scrolling
      const scrollContainer = scrollContainerRef.current;
      const imageWidth = scrollContainer.offsetWidth;

      // Calculate the new index for automatic scrolling
      const newIndex = (activeIndex + 1) % image_url_container.length; // Adjust numberOfImages accordingly

      // Update the active index and scroll to the next position
      setActiveIndex(newIndex);
      scrollContainer.scrollTo({
        left: newIndex * ( ( imageWidth)-( imageWidth*0.1)),
        behavior: 'smooth', // Use 'auto' for instant scroll
      });
    }, 3000); // Adjust the interval in milliseconds as needed

    return () => {
      // Clean up the interval when the component is unmounted
      clearInterval(scrollInterval);
    };
  }, [activeIndex]);

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
            ref={scrollContainerRef}
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