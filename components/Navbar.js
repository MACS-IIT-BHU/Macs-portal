@@ -4,7 +4,8 @@ import React, { Fragment } from 'react'
import data from '../../public/data_articles.json'
import { useState } from 'react';
import { salsa } from '@/helpers/font';

import Link from 'next/link';
import { FaArrowCircleRight } from "react-icons/fa";
//import a from "@/public/home/a.jpg"
// import Readmore from "./readmore.js"//border-solid border-2 border-indigo-600

@@ -43,10 +44,10 @@ const Articles = () => {

                    <div className=" text-center bg-[rgb(255,255,255)] cursor-pointer rounded-lg " >

                        <div>
                            <a href="/articles"> <button className='text-[#146C94] hover:underline pt-2 pb-2  w-[200px] h-[auto]  ' id='abcdef'>Click here for Articles &nbsp;</button>
                                <button type="button" className="text-white bg-[#146C94] focus:ring-2 font-black rounded-full px-2 text-center mr-0 mb-0">&gt;</button></a>
                        </div>
                    <div className=" text-center md:min-w-[3vw] min-w-[45vw] p-1 px-2 font-semibold bg-[rgb(255,255,255)] cursor-pointer rounded-lg " >
                        <Link className='text-cyan-600 flex justify-evenly items-center' href={`/articles`} >Click here for Articles <FaArrowCircleRight className='text-cyan-600 md:ml-3 scale-190 rounded-full '/></Link>

                    </div>
                    </div>
                </div>

  31 changes: 29 additions & 2 deletions31  
components/Home/image_slider_component.js
Viewed
@@ -1,5 +1,5 @@
'use client'
import React from "react";
import React,{useState,useEffect,useRef} from "react";
import classes from './imageSlider.module.css';
import Image from 'next/image'

@@ -10,8 +10,9 @@ import i2 from "@/public/home/image2.jpg"
// this section contains all the refs to images to be displayes in alums sections


// let image_url_container=[i2,i2,i2,i2,i2]
//let image_url_container=[i2,i2,i2,i2,i2]
function ImageSlider() {
  let scrollContainerRef=useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const image_url_container = [i2, i2, i2,i2,i2];
@@ -33,6 +34,30 @@ function ImageSlider() {
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
@@ -41,9 +66,11 @@ function ImageSlider() {
    );
  });


  return (
    <div className={classes.slider_container}>
      <div
      ref={scrollContainerRef} 
        className={classes.scroll_container}
        onScroll={handleScroll}
        // Add other necessary properties for scrolling
  49 changes: 28 additions & 21 deletions49  
components/Navbar.js
Viewed
@@ -54,16 +54,17 @@ export default function Home() {
  //   }, []);

  return (
    <div>
    <>
      <nav
        className={`w-full navbar-hero md:pb-2 bg-gradient-to-r to-cyan-300 from-cyan-600 fixed z-20 ${murecho.className}`}
      >
        <div
          className={`relative mx-4  px-4 md:flex md:justify-between ${navbar ? "" : "h-16"
          className={`relative mx-4  px-4 md:flex md:justify-between item-center py-3 ${navbar ? "" : "h-16"
            }`}
        >
            {/*Starting div for navbar navigators in mobile view */}
          <div className="md:hidden justify-self-start grow">
            <div className="flex items-center justify-between pt-2 md:py-5 md:block">
            <div className="flex w-[90vw] items-center justify-between  md:py-5 md:block">
              <div>
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
@@ -77,12 +78,12 @@ export default function Home() {
                </button>
              </div>

              <div className="md:invisible sm:visible py-5">
              <div className="md:invisible sm:visible ">
                {userData ? (
                  <Link href="/profile">Welcome, {userData.name} </Link>
                ) : (
                  <div className="flex items-center justify-center gap-2 px-2">
                    <Link
                  <div className="flex items-center justify-end  gap-2 px-2 ">
                    {/* <Link
                      href="/login"
                      className="cursor-pointer  px-5 py-2  rounded-3xl bg-[#146c94] b_shadow translate-x-5"
                    >
@@ -93,22 +94,26 @@ export default function Home() {
                      className="bg-white text-black py-2 px-5 b_shadow rounded-r-3xl text-right"
                    >
                      Signup
                    </Link>
                    </Link> */}
                    <Link className="text-white font-semibold bg-[#146C94] py-1 px-4 border-2 border-cyan-800 rounded-3xl" href="/">Join Us</Link>

                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="justify-self-start">
          {/*Ending div for navbar navigators in mobile view */}
          {/*First div */}
          <div className=" md:min-w-[40vw]">
            <div
              className={`pb-3 md:block md:pb-0 md:mt-0 md:px-0 ${navbar ? "block" : "hidden"
              className={`pb-3 md:block  md:pb-0 md:mt-0 md:px-0 ${navbar ? "block" : "hidden"
                }`}
            >
              <ul
                className={`flex flex-col p-4 md:pb-2 md:pt-0 mt-4  rounded-lg md:flex-row md:space-x-4 md:mt-0 md:border-0 md:space-y-0 space-y-4 ${montserrat.className}`}
              >
                <li
                  className={`px-2 py-3 hover:bg-white rounded-b-lg ${path == "/" ? "bg-white" : ""
                  className={`px-2 py-3 hover:bg-white  rounded-lg ${path == "/" ? "bg-white " : ""
                    }`}
                  onClick={() => setNavbar(false)}
                >
@@ -125,7 +130,7 @@ export default function Home() {
                  className="font-medium  text-black/75 hover:text-black/100 my-8"
                >
                  <li
                    className={`px-2 py-3 hover:bg-white rounded-b-lg ${path == "/announcements" ? "bg-white" : ""
                    className={`px-2 py-3 hover:bg-white rounded-lg ${path == "/announcements" ? "bg-white" : ""
                      }`}
                    onClick={() => setNavbar(false)}

@@ -139,7 +144,7 @@ export default function Home() {
                  className="font-medium  text-black/75 hover:text-black/100 my-8"
                >
                  <li
                    className={`px-2 py-3 hover:bg-white rounded-b-lg ${path == "/articles" ? "bg-white" : ""
                    className={`px-2 py-3 hover:bg-white rounded-lg ${path == "/articles" ? "bg-white" : ""
                      }`}
                    onClick={() => setNavbar(false)}

@@ -153,7 +158,7 @@ export default function Home() {
                  className="font-medium  text-black/75 hover:text-black/100 my-8"
                >
                  <li
                    className={`px-2 py-3 hover:bg-white rounded-b-lg ${path == "/gallery" ? "bg-white" : ""
                    className={`px-2 py-3 hover:bg-white rounded-lg ${path == "/gallery" ? "bg-white" : ""
                      }`}
                    onClick={() => setNavbar(false)}

@@ -169,7 +174,7 @@ export default function Home() {
                >

                  <li
                    className={`px-2 py-3 hover:bg-white rounded-b-lg ${path == "/teams" ? "bg-white" : ""
                    className={`px-2 py-3 hover:bg-white rounded-lg ${path == "/teams" ? "bg-white" : ""
                      }`}
                    onClick={() => setNavbar(false)}

@@ -183,7 +188,7 @@ export default function Home() {
                >

                  <li
                    className={`px-2 py-3 hover:bg-white rounded-b-lg ${path == "/students" ? "bg-white" : ""
                    className={`px-2 py-3 hover:bg-white rounded-lg ${path == "/students" ? "bg-white" : ""
                      }`}
                    onClick={() => setNavbar(false)}

@@ -195,12 +200,13 @@ export default function Home() {
              </ul>
            </div>
          </div>
          <div className="absolute   invisible md:visible top-0 left-[50%] -translate-x-[50%] translate-y-[5%]">
          {/*2nd number div for image container */}
          <div className={`md:w-[20vw] md:hidden xl:block ${navbar || window.innerWidth>500?"visible":"invisible"}`}>
            <center>
              <Image src={smalllogo} width={180} alt="abc" />
            </center>
          </div>

          {/*Last div for user Details or signin options */}
          <div className="invisible md:visible ">
            {userData ? (
              <>
@@ -213,8 +219,8 @@ export default function Home() {
                </button>
              </>
            ) : (
              <div className="flex items-center justify-center gap-2  px-2 ">
                <Link
              <div className="flex items-center justify-end gap-2  px-2  md:w-[40vw]">
                {/* <Link
                  href="/login"
                  className="cursor-pointer  px-5 py-2  rounded-3xl bg-[#146c94] b_shadow translate-x-5"
                >
@@ -225,12 +231,13 @@ export default function Home() {
                  className="bg-white text-black py-2 px-5 b_shadow rounded-r-3xl text-right"
                >
                  Signup
                </Link>
                </Link> */}
                <Link className="text-white font-semibold bg-[#146C94] py-2 px-5 border-2 border-cyan-800 rounded-3xl" href="/">Join Us</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}