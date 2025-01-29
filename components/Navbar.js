"use client";
import Link from "next/link";
import smalllogo from "@/public/home/logo.svg";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
// import {
//   Bitter,
//   Monomaniac_One,
//   Montserrat,
//   Nanum_Brush_Script,
// } from "next/font/google";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
// import { Murecho } from "next/font/google";

import { useEffect } from "react";
import Cookies from "js-cookie";

// import { Murecho } from 'next/font/google'

// const murecho = Murecho({ subsets: ["latin"] });
// const montserrat = Montserrat({ subsets: ["latin"] });

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  const path = usePathname();
  const [token, setToken] = useState(null);

  const { data: session } = useSession();

  const [userData, setUserData] = useState();
  const [names,setname] = useState(null);

  useEffect(() => {
    if (session) {
      setUserData(session.user);
      var st = userData?.name || " ";
      var si = st.length;
      let k = si-1;
      for(let i =0 ; i < si ;i++)
      {if(st[i]=='5' && st[i+1] =='-')
       {k = i;break;}
      }
      var str = "";
      for(let i = 0; i < k;i++)
      {str+=st[i];}str+="     ";
      setname(str);
    }
  }, [session]);
  console.log(path);
  // useEffect(() => {
  //     const token = Cookies.get('token'); // Replace 'token' with the name of your authentication cookie

  //     if (token) {
  //       // The user is signed in
  //       console.log('User is signed in');
  //       setToken(token);
  //       // You can perform other actions here, like redirecting to a dashboard or showing a "Sign Out" button.
  //     } else {
  //       // The user is not signed in
  //       console.log('User is not signed in');
  //       // You can show the login and signup links.
  //     }
  //   }, []);

  return (
    <>
      <nav
        className={`w-full navbar-hero md:pb-2 bg-gradient-to-r to-cyan-300 from-cyan-600 fixed z-20 `}
      >
        <div
          className={`relative mx-4  px-4 md:flex md:justify-between item-center py-3 ${
            navbar ? "" : "h-16"
          }`}
        >
          {/*Starting div for navbar navigators in mobile view */}
          <div className="md:hidden justify-self-start grow">
            <div className="flex w-[90vw] items-center justify-between  md:py-5 md:block">
              <div>
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <RxCross1 size={25} color="white" />
                  ) : (
                    <RxHamburgerMenu size={25} color="white" />
                  )}
                </button>
              </div>

              <div className="md:invisible sm:visible ">
                {userData ? (
                  <Link className={"text-black"} href="/profile">Welcome, {name} </Link>
                ) : (
                  <div className="flex items-center justify-end  gap-2 px-2 ">
                    {/* <Link
                    href="/login"
                    className="cursor-pointer  px-5 py-2  rounded-3xl bg-[#146c94] b_shadow translate-x-5"
                  >
                    Login
                  </Link>
                  <Link
                    href="/login"
                    className="bg-white text-black py-2 px-5 b_shadow rounded-r-3xl text-right"
                  >
                    Signup
                  </Link> */}
                    <Link
                      className="text-white font-semibold bg-[#146C94] py-1 px-4 border-2 border-cyan-800 rounded-3xl"
                      href="/login"
                    >
                      Join Us
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/*Ending div for navbar navigators in mobile view */}
          {/*First div */}
          <div className=" md:min-w-[40vw]">
            <div
              className={`pb-3 md:block  md:pb-0 md:mt-0 md:px-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul
                className={`flex flex-col p-4 md:pb-2 md:pt-0 mt-4  rounded-lg md:flex-row md:space-x-4 md:mt-0 md:border-0 md:space-y-0 space-y-4 `}
              >
                <li
                  className={`px-2 py-3 hover:bg-white  rounded-lg ${
                    path == "/" ? "bg-white " : ""
                  }`}
                  onClick={() => setNavbar(false)}
                >
                  <Link
                    href="/"
                    className=" text-black font-bold hover:text-cyan-900 my-8"
                  >
                    Home
                  </Link>
                </li>

                <Link
                  href="/announcements"
                  className="text-black font-bold hover:text-cyan-900 my-8"
                >
                  <li
                    className={`px-2 py-3 hover:bg-white rounded-lg ${
                      path == "/announcements" ? "bg-white" : ""
                    }`}
                    onClick={() => setNavbar(false)}
                  >
                    Events
                  </li>
                </Link>
                <Link
                  href="/articles"
                  className="text-black font-bold hover:text-cyan-900 my-8"
                >
                  <li
                    className={`px-2 py-3 hover:bg-white rounded-lg ${
                      path == "/articles" ? "bg-white" : ""
                    }`}
                    onClick={() => setNavbar(false)}
                  >
                    Articles
                  </li>
                </Link>

                <Link
                  href="/gallery"
                  className="text-black font-bold hover:text-cyan-900 my-8"
                >
                  <li
                    className={`px-2 py-3 hover:bg-white rounded-lg ${
                      path == "/gallery" ? "bg-white" : ""
                    }`}
                    onClick={() => setNavbar(false)}
                  >
                    Gallery
                  </li>
                </Link>

                <Link
                  href="/teams"
                  className="text-black font-bold hover:text-cyan-900 my-8"
                >
                  <li
                    className={`px-2 py-3 hover:bg-white rounded-lg ${
                      path == "/teams" ? "bg-white" : ""
                    }`}
                    onClick={() => setNavbar(false)}
                  >
                    Team
                  </li>
                </Link>
                <Link
                  href="/students"
                  className="text-black font-bold hover:text-cyan-900 my-8"
                >
                  <li
                    className={`px-2 py-3 hover:bg-white rounded-lg ${
                      path == "/students" ? "bg-white" : ""
                    }`}
                    onClick={() => setNavbar(false)}
                  >
                    Students
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          {/*2nd number div for image container */}
          
          {/*Last div for user Details or signin options */}
          <div className="invisible md:visible ">
            {userData ? (
              <>
            
                <Link href="/">Welcome, {names}  </Link>
                <button
                  onClick={() => signOut()}
                  className="px-3 py-2 rounded border"
                >
                  
                  signOut
                </button>
              </>
            ) : (
              <div className="flex items-center justify-end gap-2  px-2  md:w-[40vw]">
                {/* <Link
                href="/login"
                className="cursor-pointer  px-5 py-2  rounded-3xl bg-[#146c94] b_shadow translate-x-5"
              >
                Login
              </Link>
              <Link
                href="/login"
                className="bg-white text-black py-2 px-5 b_shadow rounded-r-3xl text-right"
              >
                Signup
              </Link> */}
                <Link
                  className="text-white font-semibold bg-[#146C94] py-2 px-5 border-2 border-cyan-800 rounded-3xl"
                  href="/login"
                >
                  Join Us
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
